---
sidebar_position: 2
url: /api-reference/preloaded-packages/
---

# Preloaded Packages

Many lower-level libraries aren't exported to the global environment. Use ``require`` to import them.

## Luvi

Since ``evo`` is built on top of ``evo-luvi``, a modified version of the [Luvi](https://github.com/luvit/luvi) runtime, it includes all of its C and Lua APIs.

Preloaded package: ``luvi`` (access via ``require("luvi")``)

## Asynchronous I/O (LibUV)

Cross-platform primitives for networking, threading, file system access, and many other tasks are provided by [libuv](https://docs.libuv.org).

Preloaded package: ``uv`` (access via ``require("uv")``)

## Compression (miniz/zlib)

Compression functionality equivalent to the popular [zlib](https://zlib.net/) library is included in the form of [miniz](https://github.com/richgel999/miniz).

Luvi can also be built with zlib support instead of including miniz, but this isn't the default configuration.

Preloaded package: ``miniz`` or ``zlib`` (access via ``require("miniz")`` or ``require("zlib")``)

## OpenSSL

Cryptography primitives are exposed through [bindings](https://zhaozg.github.io/lua-openssl) to the popular [openssl](https://github.com/openssl/openssl) library. Use at your own peril!

Preloaded package: ``ssl`` (access via ``require("ssl")``)

## Windows Services

The Windows-only [System Service Functions](https://docs.microsoft.com/en-us/windows/win32/services/service-functions) API is exposed via two separate packages.

Preloaded package: ``winsvc``  and ``winsvcaux`` (access via ``require("winsvc")`` and ``require("winsvcaux")``)

## Parsing Expression Grammars (LPEG)

Pattern-matching functionality is supplied by the [LPEG](http://www.inf.puc-rio.br/~roberto/lpeg/) library.

Preloaded package: ``lpeg`` (access via ``require("lpeg")``)

## Perl-Compatible Regular Expressions (PCRE)

Regular expressions following the standard Perl syntax are contained in the [lrexlib](https://github.com/rrthomas/lrexlib) package.

Preloaded package: ``rex`` (access via ``require("rex")``)
