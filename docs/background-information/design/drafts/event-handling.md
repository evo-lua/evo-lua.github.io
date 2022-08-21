# RFC: Event Handling

This document details the design goals behind evo's event registry.

## Motivation

Asynchronous as well as synchronous events should be handled in a standardized and recognizable fashion.

## Design Decisions

### Event Registry vs. Event Emitters

Events can be handled with a global event registry ("event bus" pattern), or locally ("event emitter" pattern).

Implications of using a global event registry:

* A global API namespace must be provided (neutral)
* Every event emitter needs to hook into the registry (mild inconvenience)
* All events that fire can be observed and handled from anywhere (maximum flexibility)
* Can easily log events or otherwise track them, without missing any

Implications of sticking to local event emitters instead:

* Each event emitter must handle its own events (neutral)
* Events are not observable to unrelated code (less flexible)
* Shared functionality needs to be outsourced to a mixin, or inherited (added complexity)

A global event registry seems like it would be more flexible, simpler to implement, and easier to understand.

### Event Names

Events are always written in capital letters, like ``APPLICATION_SHUTDOWN`` (WOW API style). The Node.js style of lower-case single-word event names (e.g.,  ``shutdown``) seems less flexible and readable in comparison.

### Event Listeners

All event handlers should have a standard name and signature, and adhere to the following conventions.

#### The OnEvent Catchall Handler

The primary event handler is always ``OnEvent(eventID, payload)`` , where ``payload`` is a table that contains the named keys and values of all passed arguments. This ``payload`` table should *not* be an array, as that would defeat the point of making it easier to change the signature without having to update existing code that's unaffected by the changes.

This handler serves as a catchall, forwarding events to more specialized handlers (ideally, it needn't be overridden).

#### Standard Event Handlers

For each event, the name of its default handler is identical to the event ID written in PascalCase, with underscores removed and the event handler prefix ``On`` preprended. Example: The ``APPLICATION_SHUTDOWN`` event is forwarded to  ``MyObject:OnApplicationShutdown()`` by the catchall handler ``MyObject:OnEvent()``, with all arguments intact.

These handlers can be overridden if needed, but since they implement functionality doing so isn't generally advisable.

#### Placeholder Event Handlers

Events that have no implementation in the runtime, but might be of interest to consumers of the API, trigger empty placeholder event handlers. These are effectively no-ops that are intended to be overridden as needed. They always map 1:1 to the event name itself, in all capital letters and without the ``On`` prefix used by standard event listeners.

Example: ``TcpClient.TCP_SESSION_ENDED``  is called whenever ``TCP_SESSION_ENDED`` fires, but it does nothing by default

#### Optional Payloads

Creating new ``payload`` tables doesn't seem to add any overhead, [according to some very basic benchmarking](https://gist.github.com/Duckwhale/5685a0abe2930d563b4bc931a543b536).

Since accessing the ``payload`` table *does* have a measurable performance impact, and many event handlers will only care about the ``eventID`` itself, it doesn't make sense to only pass an ``payload`` table with a ``payload.eventID`` field that would have to be read every time. When no arguments passed, there's also no table creation (possible GC churn).

### Code Sharing

With a standardized approach to event handling, the core functionality can be outsourced to a [mixin](https://en.wikipedia.org/wiki/Mixin). This is preferable to direct inheritance as it removes the need for metatable lookups. These can be costly and aren't always well-optimized by the runtime. It also improves transparency because all methods are copied to the target, though this comes at the cost of some redundancy and leads to slightly higher memory usage per object. As Lua(JIT) generally has a low memory footprint, the trade-off is probably worth it, though some benchmarking would have to be done first.

[Initial benchmarking](https://gist.github.com/Duckwhale/d3116b5c92f44c82b48ad3f2955b277b) suggests there may not be any difference in performance, at least in simple cases that can easily be optimized. However, having every object inherit from a single ancestor will lead to bloated hierarchies (see NodeJS) and doesn't play well with objects that already use metatables for other purposes, or are inherited from another object. For that reason, the initial version should simply use a mixin; this can always be re-evaluated later if the need arises.

## Historical Context

### Capitalized Event Names

Event emitters in NodeJS are generally less readable than they could be (like most JavaScript code...). Therefore, a more flexible naming scheme that supports adding information without sacrificing readability should be adopted. Since event names are effectively constants (enum values), capitalizing them only seems consistent with established C/Lua programming practice.

### Variable Number of Arguments

In the original WOW API, event handlers would pass multiple values via varargs, like ``OnEvent(eventID, ...)``. This has proven to cause issues when signatures inevitably have to change, which is why arguments should be passed as an ``payload`` table. Entries should be indexed with the argument name, so that accessing missing fields raise a script error, and no changes need to be made to legacy code when new ones are added or unused properties are removed.

### Network Messages and Events

Messages received from a remote peer can trigger events directly, and messages to be sent can trivially be constructed from events. This is (presumably) what happens in the World of Warcraft client, which indicates that the model fits well with a networked application such as a server based on libuv. Hence both NodeJS and WOW API are referenced here, with the goal of finding a design that hopefully improves on their weaknesses. A similar thing happens in JavaScript.

## Technical Constraints

Because libuv provides the underlying event loop and it works with callbacks for asynchronous events, any implementation built on top of it can at best mask this fact. Event handlers then are merely callback functions in disguise, providing a slightly higher-level interface that can more easily be adapted to the problem domain.

The performance of handling large numbers of events will always be dictated by the overhead of Lua-C interactions (libuv callbacks), and by how well the underlying LuaJIT runtime manages to optimize a particular use case. There's no way around this short of writing C code directly, which is undesirable. This overhead is likely insignificant in many cases.

## Alternatives

None, except using libuv callbacks exclusively. This results in somewhat unidiomatic Lua code, akin to JS. Not ideal.

## References

* [Events in Node.js](https://nodejs.org/api/events.html) (uses local event emitters)
* [Events in the World of Warcraft client](https://wowpedia.fandom.com/wiki/Events) (uses a global event registry bound to local objects)
* The [libuv event loop](http://docs.libuv.org/en/v1.x/design.html) will be the cause of callback-induced events
