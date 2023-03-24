# assertions

Builtin assertion library designed for more convenient unit testing

## Status

<Experimental/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local assertions = require("assertions")
```

## Functions

### assertCallsFunction

Raises an error if the function passed doesn't call the target function. The function has to be executed in order to determine this fact.

<Function>
<Parameters>
<Parameter name="codeUnderTest" type="function"/>
<Parameter name="targetFunction" type="function"/>
</Parameters>
</Function>

### assertDoesNotThrow

Raises an error if the function passed throws (raises an error) itself. The purpose of this is to generate standardized error messages.

<Function>
<Parameters>
<Parameter name="codeUnderTest" type="function"/>
</Parameters>
</Function>

### assertEquals

Raises an error if the two passed values are not identical. This is a catch-all handler that uses the more specialized assertions internally.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualBooleans

Raises an error if the two passed values do not represent the same `boolean` value.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualBytes

Raises an error if the two passed values do not represent the same `cdata` bytes. Use [assertEqualPointers](#assertequalpointers) to compare only the pointer.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualFunctions

Raises an error if the two passed values do not represent the same `function` value.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualNumbers

Raises an error if the two passed values do not represent the same `number` value.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualPointers

Raises an error if the two passed values do not represent the same `cdata` pointer. Use [assertEqualBytes](#assertequalbytes) to compare them by value.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualStrings

Raises an error if the two passed values do not represent the same `string` value. Supports LuaJIT string buffers and `cdata` strings.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertEqualTables

Raises an error if the two passed values do not represent the same `table` value. Supports deep table comparisons.

<Function>
<Parameters>
<Parameter name="firstValue"/>
<Parameter name="secondValue"/>
</Parameters>
</Function>

### assertFailure

Raises an error if the function passed does not return a "failure" type (`nil` and an error message).

<Function>
<Parameters>
<Parameter name="codeUnderTest" type="function"/>
<Parameter name="expectedErrorMessage" type="string"/>
</Parameters>
</Function>

### assertFalse

Raises an error if the value passed is not exactly `false`.

<Function>
<Parameters>
<Parameter name="conditionToCheck"/>
</Parameters>
</Function>

### assertNil

Raises an error if the value passed is not exactly `nil`.

<Function>
<Parameters>
<Parameter name="conditionToCheck"/>
</Parameters>
</Function>

### assertThrows

Raises an error if the function passed does not itself raise an error (with the expected error message).

<Function>
<Parameters>
<Parameter name="codeUnderTest" type="function"/>
<Parameter name="expectedErrorMessage" type="string"/>
</Parameters>
</Function>

### assertTrue

Raises an error if the value passed is not exactly `true`.

<Function>
<Parameters>
<Parameter name="conditionToCheck"/>
</Parameters>
</Function>

### export

Exports all of the assertions in this module to the global Lua environment. Use this if you don't want to `require` them in every test.

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
