---
sidebar_position: 20
---

# Globals

Convenient shorthands for some frequently-used functionality

## Availability

All functions are made available in the global environment and can be accessed directly:

```lua
printf("Hello %s", "world") -- Implied global lookup: _G.printf
```

## Constants

### EVO_VERSION

The build version embedded into the native C++ runtime at compile time, given as a [semantic version](https://semver.org/) string in [git describe](https://git-scm.com/docs/git-describe) format.

## Functions

### describe

Alias for [bdd.describe(...)](/docs/references/api/bdd#describe).

### dump

Alias for [debug.dump(...)](/docs/references/api/extensions#debugdump).

### format

Alias for [string.format(...)](https://www.lua.org/manual/5.1/manual.html#pdf-string.format).

### it

Alias for [bdd.it(...)](/docs/references/api/bdd#it).

### printf

Alias for `print(string.format(...))`.

## Tables

### buffer

Alias for `string.buffer` (LuaJIT builtin).

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
