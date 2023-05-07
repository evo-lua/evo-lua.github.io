---
sidebar_position: 300
---

# Overview: Core Concepts

Discover the fundamental concepts that differentiate Evo from Lua(JIT)

## Prerequisites

This introduction assumes you've read through both the [Lua](https://www.lua.org/pil/) and [LuaJIT](https://luajit.org) docs and are somewhat familiar with Lua programming.

## Topics Covered

We'll take a brief look at the most important "new" concepts that you'll need to be aware of when working with Evo:

- Asynchronous I/O and the event loop
- Events and callback handlers
- Multithreading vs. asynchronicity
- Coroutines vs. asynchronicity

If you're already familiar with the above, (e.g., from working with NodeJS, Luvit, or other asynchronous runtimes), feel free to skip this.

## Asynchronous I/O and the Event Loop

Evo is designed for asynchronous programming, which allows you to perform multiple tasks concurrently without blocking the main execution thread. This is achieved using an event loop, which schedules and manages I/O operations and other tasks, running them when they're ready to execute. This approach is identical to that used by other runtimes, and it uses the exact same mechanism as [NodeJS](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking) - in fact, it uses the [exact same underlying library](https://libuv.org/) to implement this functionality via [Lua bindings](https://github.com/luvit/luv) to its API.

In contrast to synchronous or blocking code, where the execution waits for a task to complete before moving to the next one, asynchronous code can continue executing other tasks while waiting for the completion of a long-running operation. The flipside of this is that it can be more difficult to write, understand, and debug as it frequently involves callbacks, events, or a similar mechanism.

This overall design completely changes how Lua programs are executed in the background, at least those that use the asynchronous features included with the runtime. The standard [Lua](https://github.com/luvit/luv) libraries are synchronous and you can decide for yourself when, where, and to what extent you rely on non-blocking code. Blocking generally inhibits scalability as no other work can complete, but it's still available.

It should be noted that only some workloads benefit from being made asynchronous:

- I/O-bound tasks such as file system access or networking are almost always[^1] better done asynchronously
- CPI-bound tasks such as heavy computation work or decompression are almost always [^2] better done synchronously

[^1] _Almost, because there is overhead for off-loading the work, and it only makes sense when you don't need the result to proceed_

[^2] _Almost, because they often require the same CPU time (just on a different thread) and the number of background workers is limited_

## Events and Callbacks

At the lowest level, there's always some sort of callback (or interrupt) mechanism to notify applications of completion events. A "callback" is really just a function that will be called when the given event occurs, such as "your file has been read" or "the client sent some data". They're ubiquitous in languages like JavaScript that are designed to run in an asynchronous environment, but not usually seen in standard Lua. However, in Evo they are also used and there is no "good" way around them (but more on that later).

To improve the usability of the resulting asynchronous code, Evo uses "events" directly to abstract callbacks where possible. So instead of passing around callback functions everywhere, you instead write event handlers that the runtime calls with specified parameters, allowing your program to handle the asynchronous task as needed. Whenever you see something like this, that's an event handler:

```lua
local server = HttpServer()

function server:HTTP_REQUEST_FINISHED(event, payload)
	-- Event handling code goes here
end
```

The conventions used are deliberately kept simple:

- Each API namespace or module contains a list of events, as specified in the [API docs](/docs/category/api/)
- Events are written in capital letters, and every event handler has the same name as the event it handles
- In order to implement an event handler, you just set a function with the given event's name
- There are default event handlers (which usually do nothing, except print some debug information)
- Each event handler receives a `string` containing the event name, and a payload `table` as its arguments

The exact contents of the payload table depend on the event used. Native (C++) events are internally translated to this format.

## Multithreading and the Event Loop

There is just one thread of execution in this asynchronous model. You can spawn other threads, and the event loop does internally use a pool of worker threads to complete the scheduled tasks more efficiently, but the basic model of programming is explicitly single-threaded: You do your work in the main Lua thread, and this thread sleeps when there's no async work to be done.

It only wakes up and notifies your program once an event has been triggered. Then, your program resumes: Tthe event loop notifies it via callbacks to handle all the events, before passing control back to the runtime (which checks for new events and goes back to sleep).

If this seems a bit complicated, give it some time to sink it. As you work with asynchronous code more it'll become clearer.

The key takeway here is that running multiple threads in parallel is a completely different model of execution, with different trade-offs.

## Coroutines and the Event Loop

Lua features a concept called [coroutines](https://www.lua.org/pil/9.1.html), which are lightweight "threads" that can be halted (and resumed) at will.

They are indeed different from both threads and asynchronous work, but they can be used in Evo, to great effect. It's therefore important to understand how they interact with the event loop. Unlike threads, coroutines don't execute in parallel, but instead they behave more closely like asynchronous code that is "woken up" by the event loop, then goes back to sleep until more work is available.

You can, in fact, implement asynchronous code in a coroutine and send it to sleep (by [yielding](https://www.lua.org/manual/5.1/manual.html#pdf-coroutine.yield)) until the async work has completed. Once new work is ready, the event loop can [resume](https://www.lua.org/manual/5.1/manual.html#pdf-coroutine.resume) your program. This somewhat alleviates the need for callbacks and events.

In a future version of Evo, this approach may be more prominent, but for the time being you'll have to experiment with it for yourself.

The most important thing to know is that coroutines still execute on the main thread, they just swap the currently-active function.
