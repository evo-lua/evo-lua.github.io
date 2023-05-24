# json

Lua bindings for the embedded [rapidjson](https://github.com/Tencent/rapidjson) library

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local json = require("json")
```

## Functions

All of the [lua-rapidjson](https://github.com/xpol/lua-rapidjson/blob/master/API.md) APIs are available in this module. Additional functions have been added in Evo, which are listed below.

### version

Returns the embedded rapidjson library version as a Lua string. The lua-rapidjson (bindings) version can be queried via `_VERSION`.

<Function>
<Returns>
<Return name="rapidjsonLibraryVersion" type="string"/>
</Returns>
</Function>

### parse

Parses the given input as a JSON string and returns a Lua table containing the equivalent data. Alias for `json.decode(...)`.

<Function>
<Parameters>
<Parameter name="jsonString" type="string"/>
</Parameters>
<Returns>
<Return name="luaTable" type="table"/>
</Returns>
</Function>

### stringify

Converts the given input table to a JSON string containing the equivalent data. Alias for `json.encode(...)`.

<Function>
<Parameters>
<Parameter name="luaTable" type="table"/>
</Parameters>
<Returns>
<Return name="jsonString" type="string"/>
</Returns>
</Function>

### pretty

Identical to `json.encode(...)`, but accepts both strings and tables. Returns a human-readable JSON string with indentation and key sorting enabled. Indentation uses four spaces (lua-rapidjson default). You probably don't want to use this for performance-critical code.

<Function>
<Parameters>
<Parameter name="jsonStringOrTable"/>
</Parameters>
<Returns>
<Return name="prettifiedJSON" type="string"/>
</Returns>
</Function>

### prettier

Identical to `json.pretty`, but uses tabs for indentation (instead of four spaces). This saves some space, but is still unsuitable for performance-critical code paths due to the overhead of sorting and possibly redundantly re-encoding the provided string value.

<Function>
<Parameters>
<Parameter name="jsonStringOrTable"/>
</Parameters>
<Returns>
<Return name="prettifiedJSON" type="string"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.3  | Initial release |
