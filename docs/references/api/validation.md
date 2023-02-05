# validation

Tiny utility library for validating function arguments

## Status

<Stable/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local validation = require("validation")
```

## Functions

### validateBoolean

Raises an error if the given argument is not a `boolean` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateFunction

Raises an error if the given argument is not a `function` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateNumber

Raises an error if the given argument is not a `number` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateString

Raises an error if the given argument is not a `string` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateStruct

Raises an error if the given argument is not a `cdata` value. The exact `ctype` is not checked in any way.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateTable

Raises an error if the given argument is not a `table` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateThread

Raises an error if the given argument is not a `thread` value (coroutine).

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

### validateUserdata

Raises an error if the given argument is not a `userdata` value.

<Function>
<Parameters>
<Parameter name="value"/>
<Parameter name="name" type="string"/>
</Parameters>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
