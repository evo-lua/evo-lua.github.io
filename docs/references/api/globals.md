---
sidebar_position: 0
---

# Globals

Convenient shorthands for some frequently-used functionality

## Status

<Experimental/>

## Availability

All functions are made available in the global environment and can be accessed directly:

```lua
printf("Hello %s", "world") -- Implied global lookup: _G.printf
```

## Constants

### EVO_VERSION

The build version embedded into the native C++ runtime at compile time, given as a [semantic version](https://semver.org/) string in [git describe](https://git-scm.com/docs/git-describe) format.

### STATIC_FFI_EXPORTS

A table containing the low-level APIs bound to the Lua environment via LuaJIT's [foreign function interface](http://luajit.org/ext_ffi.html). For details, see [this page](/docs/background-information/luajit/static-ffi-bindings).

You probably don't need to access these manually unless you want to know which libraries are embedded using this method:

```lua title=dump-ffi-exports.lua
dump(STATIC_FFI_EXPORTS)

-- Result:
{
        webview = <userdata 1>
}
```

Keep in mind that FFI libraries are generally memory-unsafe, so prefer using the high-level interfaces provided if possible.

## Functions

### describe

Alias for [bdd.describe(...)](/docs/references/api/libraries/bdd#describe).

### dump

Alias for [debug.dump(...)](/docs/references/api/extensions#debugdump).

### extend

Sets up the metatable of `child` so that it acts as an instance of `parent` (in terms of [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)).

<Function>
<Parameters>
<Parameter name="parent" type="table"/>
<Parameter name="child" type="table"/>
</Parameters>
</Function>

### format

Alias for [string.format(...)](https://www.lua.org/manual/5.1/manual.html#pdf-string.format).

### it

Alias for [bdd.it(...)](/docs/references/api/libraries/bdd#it).

### printf

Alias for `print(string.format(...))`.

## Tables

### buffer

Alias for `string.buffer` (LuaJIT builtin).

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
