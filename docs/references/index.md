---
sidebar_position: 4
url: /api-reference/
---

# API Reference

Various third-party libraries that have been integrated into the runtime.

## Language Primitives

### Lua Standard Libraries

All of the Lua 5.1 functionality is available in the global Lua environment. See the [Lua 5.1 Reference Manual](https://www.lua.org/manual/5.1/manual.html) for details.

### LuaJIT Libraries and Extensions

``evo`` includes all of the [LuaJIT](https://luajit.org) extensions and Lua 5.2 features that are enabled by default, and none of the others.

## Third-Party APIs

All of these libraries are merely preloaded, but not exported to the global environment. Use ``require`` to import them.

### Luvi

Since ``evo`` is built on top of ``evo-luvi``, a modified version of the [Luvi](https://github.com/luvit/luvi) runtime, it includes all of its C and Lua APIs.

Preloaded package: ``luvi`` (access via ``require("luvi")``)

### Asynchronous I/O (LibUV)

Cross-platform primitives for networking, threading, file system access, and many other tasks are provided by [libuv](https://docs.libuv.org).

Preloaded package: ``uv`` (access via ``require("uv")``)

### Compression (miniz/zlib)

Compression functionality equivalent to the popular [zlib](https://zlib.net/) library is included in the form of [miniz](https://github.com/richgel999/miniz).

Luvi can also be built with zlib support instead of including miniz, but this isn't the default configuration.

Preloaded package: ``miniz`` or ``zlib`` (access via ``require("miniz")`` or ``require("zlib")``)

### OpenSSL

Cryptography primitives are exposed through [bindings](https://zhaozg.github.io/lua-openssl) to the popular [openssl](https://github.com/openssl/openssl) library. Use at your own peril!

Preloaded package: ``ssl`` (access via ``require("ssl")``)

### Windows Services

The Windows-only [System Service Functions](https://docs.microsoft.com/en-us/windows/win32/services/service-functions) API is exposed via two separate packages.

Preloaded package: ``winsvc``  and ``winsvcaux`` (access via ``require("winsvc")`` and ``require("winsvcaux")``)

### Parsing Expression Grammars (LPEG)

Pattern-matching functionality is supplied by the [LPEG](http://www.inf.puc-rio.br/~roberto/lpeg/) library.

Preloaded package: ``lpeg`` (access via ``require("lpeg")``)

### Perl-Compatible Regular Expressions (PCRE)

Regular expressions following the standard Perl syntax are contained in the [lrexlib](https://github.com/rrthomas/lrexlib) package.

Preloaded package: ``rex`` (access via ``require("rex")``)

## Evo.lua APIs

### Namespaces

The ``evo`` runtime enriches the standard Lua(JIT) environment with additional functionality, collected in global tables.

All of them follow the naming scheme established by Blizzard's World of Warcraft API: ``C_NamespaceIdentifier``

Even if they aren't necessarily implemented as C functions in ``evo``, this unique prefix clearly differentiates them from lower-level APIs provided by third-party libraries, as well as regular language primitives. If you need more fine-grained control, use lower-level builtins that work at the appropriate level of abstraction for the problem you're trying to solve.

### Events

Many of the API builtins will provide default event handlers. You can recognize them by their name and signature.

The naming scheme for event handlers follows the following pattern:

* ``SomeModule:OnEvent(eventID, eventInfo)`` is the default event handler that triggers before any others
* ``SomeModule:EVENT_NAME(eventID, eventInfo)`` is a handler that listens for the ``EVENT_NAME`` event

Many of these handlers are virtual no-ops that you can implement as needed, but some may perform default actions.

### Shared Constants

API builtins and namespaces may export fixed constants, usually reserved for enum values.

They will always be written in typical C-like constant notation: ``MyModule.SOME_CONSTANT_VALUE``
