---
sidebar_position: 300
---

# Overview: Core Concepts

Discover the fundamental concepts that differentiate Evo from Lua(JIT)

## Prerequisites

This introduction assumes you've read through both the [Lua](https://www.lua.org/pil/) and [LuaJIT](https://luajit.org) docs and are somewhat familiar with Lua's [core features](<https://en.wikipedia.org/wiki/Lua_(programming_language)#Features>).

## Topics Covered

First, we'll start with a general overview of how Evo extends the most commonly-used Lua runtimes:

- Differences between the official ("PUC") Lua interpreter and LuaJIT
- Differences between the various Lua versions
- Interaction between Lua and native (C/C++) libraries
- What Evo's standard libraries bring to the table

We'll then take a brief look at the most important "new" concept that you'll need to be aware of when using Evo - the event loop:

- Asynchronous I/O and the event loop
- Events and callback handlers
- Multithreading/coroutines and the event loop

If you're already familiar with the above, (e.g., from working with NodeJS, Luvit, or other asynchronous runtimes), feel free to skip this.

## Lua Runtime Features

First, let's delve into what using Evo as your runtime for Lua scripts means in practice, compared to other options.

### PUC Lua and the LuaJIT Compiler

Lua (the programming language) was created by a team at [PUC](https://en.wikipedia.org/wiki/Pontifical_Catholic_University_of_Rio_de_Janeiro), who also developed and maintain the "standard" `lua` interpreter. While this is a relatively fast interpreter, as far as interpreted languages go, there is a secondary (independent) re-implementation called [LuaJIT](https://luajit.org/luajit.html) that focuses on performance and includes a [Just-In-Time-Compiler](https://en.wikipedia.org/wiki/Just-in-time_compilation), a [low-level interface to interact with C libraries](https://luajit.org/ext_ffi.html), and more.

Language-wise, both variants are largely compatible (for caveats, see the next paragraph). But there are some key differences:

- LuaJIT can run in both optimized ("jitted") mode as well as in a much slower "interpreter" mode
- Interfacing with C libraries is much easier (and faster) when using LuaJIT's foreign function interface

You don't really have to worry about these features if you don't have much experience with Lua, but remember that they exist.

### Lua Versions and Interoperability

There are multiple versions of the Lua programming language; the most widely-used ones are probably 5.1 and 5.4.

The Lua team continues developing the language and occasionally releases new versions. However, LuaJIT is based on Lua 5.1. It offers only a selection of 5.2 features, and none that were introduced in later versions. Since Evo embeds LuaJIT, it too uses Lua 5.1 (and parts of 5.2). Due to the minimalism of Lua this isn't usually a problem, but it's worth keeping in mind as there are certain incompatibilities.

When in doubt, stick to the [reference manual](https://www.lua.org/manual/5.1/manual.html) for Lua 5.1. As for LuaJIT, see the list of supported 5.2 features and other extensions [here](https://luajit.org/extensions.html).

### Foreign Function Interface

Because Lua is designed to be lightweight and easy to embed, it doesn't have a large standard library. As a developer, you're generally expected to "bring your own standard libraries" if needed. This (usually) means that you'd be using native C or C++ libraries and call functions inside them from Lua, using its [C API](https://www.lua.org/pil/24.html) and custom "bindings" - that is, glue code to interface between Lua and C.

This process is frequently a lot of work and difficult to get right for beginners (who aren't C programmers). It's also not without overhead. Thankfully, LuaJIT's [Foreign Function Interface (FFI)](https://luajit.org/ext_ffi.html) solves both of these problems, though knowledge in C and low-level concepts is still required. Alongside the much-improved performance, this is one of the reasons Evo uses LuaJIT (and not PUC-Lua).

### Extended Standard Library

The last piece of the puzzle is still missing: It's the aforementioned (lack of) standard libraries. While a reasonable design decision on paper, the lack of easy-to-use libraries for common programming tasks can make it tricky to write applications that do what they need to in Lua. Most of the time, this problem is solved by whoever is making the application implementing their own Lua/C environment.

Widely-known examples following this methodology are Blizzard's [World of Warcraft API](https://wowpedia.fandom.com/wiki/World_of_Warcraft_API), ROBLOX, and [neovim](https://neovim.io/doc/user/api.html). Evo similarly comes with a set of general-purpose libraries, written in C++ and Lua. It handles all the complexity of integrating third-party C/C++ code and exposing it to scripts, while providing easy-to-use high-level interfaces alongside the more low-level APIs for advanced "super users".

The above means that, when writing Lua applications using Evo as your runtime, you can use all of the following:

- Lua 5.1 standard library (`string`, `table`, `debug`, `coroutine`, etc.)
- LuaJIT extensions (``ffi`, `string.buffer`, `jit`)
- Any of the Lua libraries that are embedded in the `evo` runtime
- Any of the C++ library bindings that are embedded in the `evo` runtime
- Any C library you bring and load yourself (e.g, as a precompiled DLL or .so file)

Of course not all possible libraries are included, so you might still have to write your own. But getting started will likely be much faster.

## Asynchronous Execution Model

Let's now explore the biggest conceptual difference between Evo and a standalone Lua(JIT) interpreter.

### Enter the Event Loop

:::info

If you want a simple introduction to asynchronicity, give [this MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) a try. It's for JavaScript, but the concepts are the same.

:::

Evo is designed for [asynchronous programming](<https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)>), which allows you to perform multiple tasks concurrently without blocking the main execution thread. This is achieved using an event loop, which schedules and manages I/O operations and other tasks, running them when they're ready to execute. This approach is identical to that used by other runtimes, and it uses the exact same mechanism as [NodeJS](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking) - in fact, it uses the [exact same underlying library](https://libuv.org/) to implement this functionality via [Lua bindings](https://github.com/luvit/luv) to its API.

In contrast to synchronous or blocking code, where the execution waits for a task to complete before moving to the next one, asynchronous code can continue executing other tasks while waiting for the completion of a long-running operation. The flipside of this is that it can be more difficult to write, understand, and debug as it frequently involves callbacks, events, or a similar mechanism.

This overall design completely changes how Lua programs are executed in the background, at least those that use the asynchronous features included with the runtime. The standard [Lua](https://github.com/luvit/luv) libraries are synchronous and you can decide for yourself when, where, and to what extent you rely on non-blocking code. Blocking generally inhibits scalability as no other work can complete, but it's still available.

By default, most code will still be blocking. That's no cause for concern, as only long-running tasks benefit from offloading.

### Events and Callbacks

At the lowest level, there's always some sort of callback (or interrupt) mechanism to notify applications of completion events. A "callback" is really just a function that will be called when the given event occurs, such as "your file has been read" or "the client sent some data". They're ubiquitous in languages like JavaScript that are designed to run in an asynchronous environment, but not usually seen in standard Lua. However, in Evo they are also used and there is no "good" way around them (but more on that later).

To improve the usability of the resulting asynchronous code, Evo uses "events" directly to abstract callbacks where possible. So instead of passing around callback functions everywhere, there can be event handlers that the runtime calls with specified parameters, allowing your program to handle the asynchronous task as needed. Whenever you see something like this, that's an event handler:

```lua
local server = HttpServer()

function server:HTTP_REQUEST_FINISHED(event, payload)
	-- Event handling code goes here
end
```

Here's what you need to know about event handlers in Evo:

- The [API documentation](/docs/category/api/) always contains a list of events where they are relevant, so make sure to check there first
- Events are written in `ALL_CAPITAL_LETTERS`, and each corresponding event handler function should use the same name
- There are default event handlers which usually do nothing, except print some debug information (to notify you of their presence)
- In order to implement an event handler, you just set a function with the given event's name and override the default handler
- Each event handler receives a `string` containing the event name, and a payload `table` as its arguments when it is called

The exact contents of the payload table depend on the event used. Native (C++) events are internally translated to this format.

### Threads and Coroutines

While events do help in many simple cases, they aren't going to make complex sequences of asynchronous code more readable.

In order to deal with programs that require this, there are two options. You could spawn separate [threads](<https://en.wikipedia.org/wiki/Thread_(computing)>) and have them execute in parallel, then eventually process the final result in the main program. Alternatively, you can switch between the different asynchronous portions as needed until all of them have completed. To achieve this in Evo, you can use [libuv threads](https://github.com/luvit/luv/blob/master/docs.md#threading-and-synchronization-utilities) and [Lua coroutines](https://www.lua.org/pil/9.4.html), respectively.

But beware - the asynchronous nature of the event loop can cause some unforeseen interactions when using threads and coroutines:

- The runtime is strictly single-threaded, so there's no way to share the Lua environment with other threads
- Asynchronous tasks might be prevented from completing if you spawn more threads than are available in the libuv [thread pool](http://docs.libuv.org/en/v1.x/threadpool.html)
- You can [yield](https://www.lua.org/manual/5.1/manual.html#pdf-coroutine.yield) from a coroutine inside the main thread, but you can't yield from the main thread itself to return to the event loop

For most simple Lua programs none of that will make a difference. Just keep in mind that special care is needed in complex scenarios.
