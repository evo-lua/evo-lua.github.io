---
sidebar_position: 20
---

# Globals

Convenient shorthands for some frequently-used functionality

## Availability

All functions are made available in the global environment and can be accessed directly:

```lua
printf("Hello %s", world) -- Implied global lookup: _G.printf
```

## Functions

### describe

Alias for [bdd.describe(...)](/docs/references/api/bdd#describe).

### dump

Alias for [debug.dump(...)](/docs/references/api/extensions#debugdump).

### format

Alias for `string.format(...)`.

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
