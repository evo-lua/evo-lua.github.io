# webgpu

LuaJIT bindings for the embedded [wgpu-native](https://github.com/gfx-rs/wgpu-native) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local webgpu = require("webgpu")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment.

## Native Bindings

The API is based on the [shared WebGPU headers](https://github.com/webgpu-native/webgpu-headers/blob/main/webgpu.h), with all function names converted to `snake_case`. A full list can be found [here](https://github.com/evo-lua/evo-runtime/blob/main/Runtime/Bindings/webgpu_ffi.hpp), and external documentation for the Rust-based implementation is located [here](https://docs.rs/wgpu/latest/wgpu/index.html). The Lua bindings map to the WebGPU C/FFI headers 1:1.

All C functions can be accessed via `webgpu.bindings` and must be called with the appropriate `cdata` values.

### wgpu_version

Returns the embedded wgpu-native library version.

```cpp
const char* (*wgpu_version)(void);
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.6  | Initial release |
