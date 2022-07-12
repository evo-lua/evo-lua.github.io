---
sidebar_position: 4
url: /api-reference/
---

# API Reference

This section describes all of the functions and libraries that can be used in ``evo``-based applications.

## Overview

* All Lua 5.1 standard libraries are available (see the [Lua 5.1 Reference Manual](https://www.lua.org/manual/5.1/manual.html) for details)
* The default [LuaJIT](https://luajit.org) extensions and Lua 5.2 features are enabled
* A few (non-standard) functions are added to some of the standard libraries
* Several low-level C libraries are preloaded and can be used directly if so desired
* High-level Lua APIs building on top of them are made available in custom namespaces

## Naming Conventions

### Namespaces

The ``evo`` runtime enriches the standard Lua(JIT) environment with additional functionality, collected in global tables.

All of them follow the naming scheme established by Blizzard's World of Warcraft API: ``C_NamespaceIdentifier``

Even if they aren't necessarily implemented as C functions in ``evo``, this unique prefix clearly differentiates them from lower-level APIs provided by third-party libraries, as well as regular language primitives. If you need more fine-grained control, use lower-level builtins that work at the appropriate level of abstraction for the problem you're trying to solve.

### Events

Many of the API builtins will provide default event handlers. You can recognize them by their name and signature.

The naming scheme for event handlers follows the following pattern:

* ``SomeModule:OnEvent(eventID, eventInfo)`` is the default event handler that triggers before any others
* ``SomeModule:EVENT_NAME(eventID, eventInfo)`` is a handler that listens for the ``EVENT_NAME`` event

Most of these handlers are virtual no-ops that you can implement as needed, but some may perform default actions.

### Shared Constants

API builtins and namespaces may export fixed constants, usually reserved for enum values.

They will always be written in typical C-like constant notation: ``MyModule.SOME_CONSTANT_VALUE``
