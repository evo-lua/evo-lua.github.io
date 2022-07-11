---
sidebar_position: 1
---

# Standard Library Extensions

This document lists all nonstandard library functions that are present in the ``evo`` runtime environment.

## Global Aliases

The following shorthands are provided purely for ease-of-use, with unchanged semantics:

* ``format``: Alias for ``string.format(...)``
* ``printf``: Alias for ``print(string.format(...))``

## Assertion Library

:::info

This feature is experimental; it will likely be changed or removed in the future.

*Developer's notes: It's probably better to use a standardized assertion library instead, like luassert?*

:::

The following global functions are provided to write tests more easily:

* [assertEquals(actual, expected, description)](#assertEquals)
* [assertFalse(conditionToCheck description)](#assertFalse)
* [assertTrue(conditionToCheck, description)](#assertTrue)
* [assertFunctionCalls(codeUnderTest, hostTable, targetFunctionName, numExpectedInvocations, description)](#assertFunctionCalls)

### assertEquals

### assertFalse

### assertTrue

### assertFunctionCalls

Alias for ``string.format(...)``.

Arguments:

| # | Name | Type | Description |
| :---: | :---: | :---: | :---: |
| 1 | ... | ``any`` | Variable arguments (``varargs``) |

Returns:

| # | Name | Type | Description |
| :---: | :---: | :---: | :---: |
| 1 | formattedString | ``string`` | The original string after all valid placeholder symbols have been resolved


A failed assertion will raise an error identified by ``description``, and fail any test that is currently in progress.
```
