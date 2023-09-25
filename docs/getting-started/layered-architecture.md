---
sidebar_position: 400
---

# Exploring the Evo.lua API

A quick intro to the Lua libraries and FFI bindings

## Nonstandard Libraries

When using a standard Lua (or LuaJIT) interpreter, the selection of modules that can be used is somewhat limited. This is one of the major issues Evo seeks to solve, by shipping with a much larger number of third-party libraries as well as additional builtin modules. All of these are available to any script run by the interpreter's CLI, so you might want to know what kind of apps you can build with them.

While browsing the [API documentation](/docs/category/api) should give you a general idea, read the following sections if you want to learn about a few of the most important libraries and why some of them might look like they're doing the same things slightly differently. You'll see there's a very good reason for that, but in order to truly understand why we must take a brief look at how Evo actually works behind the scenes.

## Layered Architecture

The most important thing to remember is this: **Evo consists of multiple API layers, which add conveniences on top of each other**.

- At the lowest level, a C++ program is running the Lua interpreter and controls the application lifecycle
- At the highest level, you invoke the command line to run your code, which calls into the lower layers
- In between, there are multiple levels (a bit like an onion - though hopefully they won't make you cry)
- Evo effectively translates low-level calls to high-level calls, and vice versa, when running any script
- You yourself get to choose at which layer of the "onion" you want to write your program code

Generally speaking, the more control you need over what your program is doing (including performance-critical operations like memory allocations and buffer copies), the lower the level at which you will be writing your code. With great power comes great responsibility, however, which is why beginners may want to start at the highest levels first. Evo's APIs are designed such that you can easily move between the highest and the lowest layer as needed, to hopefully find the level of abstraction that works best for your project.

## Phenomenal Cosmic Powers

Your app gets to make a trade-off between convenience and power by selecting which APIs to call into. You can of course mix and match these calls however you see fit, though there's not often a reason to work at the lower levels when you're just starting out.

Like with any trade-off, making the right decision involves knowing the benefits and drawbacks. And here they are:

- At the highest level, you can easily perform standard tasks (like building a self-contained executable) using just the command line
- Beneath that are the namespaced APIs and nonstandard Lua libraries, which are optimized for convenience and common use cases
- For less frequent use cases or doing things in a slightly unusual way, you may need to use the embedded Lua C-API bindings
- The lowest layers available from Lua may or may not require manual memory management and careful parameter checking
- Here, you'll definitely want some experience with the [Foreign Function Interface](https://luajit.org/ext_ffi_tutorial.html) and [C structs](<https://en.wikipedia.org/wiki/Struct_(C_programming_language)>), or [unhappiness will surely find you](https://en.wikipedia.org/wiki/Segmentation_fault)

Beneath that, your app won't usually go directly as it would involve modifying the runtime's code itself ([it's certainly possible, though](/docs/how-to-guides/building-from-source)).

If that seems a bit abstract, it may make more sense after the following sections. But first, here's a diagram of those layers:

![layered-architecture.png](layered-architecture.png)

You can roughly equate the two axes to "Raw power" and "Level of abstraction". Let's now consider a few examples to make this clearer.

## Examples

### File System Access

Since accessing files on disk is one of the few things even the Lua standard library supports, there are many ways to do it:

- The simplest way is to use the high-level [C_FileSystem](/docs/references/api/namespaces/filesystem) APIs for a "one and done" approach, which is generally not the most efficient
- You can also try the standard Lua [io library](https://www.lua.org/manual/5.1/manual.html#5.7), which is simple but doesn't support [non-blocking I/O](/docs/getting-started/core-concepts#asynchronous-execution-model) (so its use is discouraged in Evo)
- For asynchronous I/O you currently need to fall back to the [libuv](/docs/references/api/bindings/uv) Lua bindings, though they're safe as they don't rely on the FFI
- If you instead wanted to avoid all buffer copies and work with `cdata` types directly, you'd need to head into the C++ layer

Note that in this case, there isn't actually a way to use the FFI and improve performance by avoiding Lua string copies (...yet).
Technically, you can use the FFI with platform-specific APIs, but that's not portable. However, better runtime support for file system I/O is planned.

### Network Programming

Distributed systems is an area that's usually performance-sensitive, so that it's warranted to consider the lower-level APIs:

- The builtin `HttpServer` and `WebSocket` modules are relatively easy to use, but they do incur some unavoidable overhead
- For more fine-grained control, there's two options; the first is using the Lua bindings to libuv and building on top of TCP or UDP
- However, this is certainly not the fastest approach (and doesn't provide support for HTTP or WS out of the box) - but [uws](/docs/references/api/bindings/uws) does!
- In this case you'd be responsible for handling events, which can be tricky due to technical constraints, _and_ memory management

Again there is the option to use the FFI, but only with non-portable APIs - which could be made easier with runtime support.

### WebViews

Opening a WebView is one of the more interesting tasks from a technical perspective. There are a few ways to do it in Evo:

- The high-level [C_WebView](/docs/references/api/namespaces/webview) namespace makes it very easy to just open a browser window, change the URL, or run JavaScript in it
- However, it doesn't expose all of the underlying [webview FFI](/docs/references/api/bindings/webview) bindings, which can give more control over the JavaScript execution
- In fact, there are some advanced use cases (such as managing multiple windows) that require a combination of [glfw](/docs/references/api/bindings/glfw) and webview
- If you now wanted to control policies or custom URL schemes, you'd have to go into the C++ layer as that isn't exposed to Lua

It's still possible to, say, display a WebView in your own native window, but since it's an uncommon use case this requires more effort.

## Summary

You've seen how the Lua APIs in Evo are layered such that your app can call into it at different levels of abstraction. Hopefully, you now know why parts of the API are tagged with the "FFI" label in the documentation (they're low-level and can cause program instability if misused). And after having seen a few examples, you can probably find your way around the API reference to decide which libraries you want to call into, when you should consider making use of the FFI bindings yourself, and what responsibilities that places on your app.
