# stduuid

LuaJIT bindings for the embedded [stduuid](https://github.com/mariusbancila/stduuid) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local stduuid = require("stduuid")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment

### version

Returns the embedded stduuid library version as a Lua string.

## Native Bindings

All C functions listed here can be accessed via `stduuid.bindings` and must be called with the appropriate `cdata` values.

### uuid_create_v4

Generates a UUID using the default (basic) random number generator. May produce inferior randomness ([see details here](https://github.com/mariusbancila/stduuid#random-uuids)).

```cpp
bool uuid_create_v4(uuid_rfc_string_t* result);
```

### uuid_create_mt19937

Generates a UUID using the [mt19937](https://cplusplus.com/reference/random/mt19937/) random number generator. Produces high-quality randomness via [Mersenne Twister Engine](https://cplusplus.com/reference/random/mersenne_twister_engine/).

```cpp
bool uuid_create_mt19937(uuid_rfc_string_t* result)
```

### uuid_create_v5

Generates a [name-based](<https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_(namespace_name-based)>) UUID using SHA-1 hashing to deterministically produce an identifier based on a given [namespace-name-pair](https://stackoverflow.com/questions/10867405/generating-v5-uuid-what-is-name-and-namespace).

```cpp
bool uuid_create_v5(const char* namespace_uuid_str, const char* name, uuid_rfc_string_t* result);
```

### uuid_create_system

Generates a UUID using a nonstandard, platform-specific random number generator. It currently uses the following APIs internally:

- Windows: [CoCreateGuid](https://learn.microsoft.com/en-us/windows/win32/api/combaseapi/nf-combaseapi-cocreateguid)
- Linux: [uuid_generate](https://man7.org/linux/man-pages/man3/uuid_generate.3.html)
- Mac OS: [CFUUIDCreate](https://developer.apple.com/documentation/corefoundation/1542906-cfuuidcreate?language=objc)

```cpp
bool uuid_create_system(uuid_rfc_string_t* result)
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
