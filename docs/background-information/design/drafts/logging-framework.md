# RFC: Standardized Logging Framework

## Motivation

There's only one (moderately) active logging framework for Lua, which uses standard Lua I/O (not async via libuv).

## Requirements

The framework MUST accomplish the following:

* Allow for synchronous and asynchronous logging using libuv's I/O facilities
* Support multiple logging outputs at the same time (e.g., console and file on disk)
* Support multiple channels, following a standard syslog severity-based approach

It SHOULD aim to do the following:

* Follow an estbalished style of logging APIs, like log4j
* Be as performant as possible (I/O bound), with low impact on the event loop itself

## Alternatives

* Make [LuaLogging](https://github.com/lunarmodules/lualogging) work with libuv's event loop (viability TBD)
* Adapt one of the abandoned frameworks for luvit, like [luvit-logger](https://github.com/gsick/luvit-logger) or [luvit-logging](https://github.com/zhaozg/luvit-logging) (not worth it?)
