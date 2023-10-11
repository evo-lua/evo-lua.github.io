# iconv

LuaJIT bindings for the embedded [iconv](https://www.gnu.org/software/libiconv/) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local iconv = require("iconv")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### convert

Converts the given `input` from one encoding to another. Make sure to pass valid encodings, since error handling is fairly minimal.

<Function since="v0.0.11">
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="inputEncoding" type="string"/>
<Parameter name="outputEncoding" type="string"/>
</Parameters>
<Returns>
<Return name="encodedOutput" type="string"/>
<Return name="numBytesWritten" type="number"/>
</Returns>
</Function>

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment

<!-- ### version

Currently missing (oversight); should be fixed ASAP.

Returns the embedded iconv library version as a Lua string. -->

## Native Bindings

All C functions listed here can be accessed via `iconv.bindings` and must be called with the appropriate `cdata` values.

### iconv_convert

Converts the given `input` from one encoding to another. Make sure to pass valid encodings, since error handling is fairly minimal.

```cpp
size_t iconv_convert(char* input, const char* input_encoding,
	const char* output_encoding, char* output, size_t output_size)
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.11 | Initial release |
