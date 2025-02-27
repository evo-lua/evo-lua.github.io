---
sidebar_position: 0
---

# Extensions

Unofficial extensions to the Lua standard libraries

## Status

<Experimental/>

## Availability

Extensions are added to the existing global standard library tables. You can simply index them:

```lua
debug.dump({ 1, 2, 3 })
```

## Debug Library

### debug.dump

Prints a human-readable string representation of the given object. Mostly useful for dumping tables, but unsuitable for serialization purposes. The output format cannot be considered stable. Currently uses [inspect](/docs/references/api/bindings/inspect) internally, though this may change in the future.

<Function since="v0.0.1">
<Parameters>
<Parameter name="object"/>
</Parameters>
<Returns>
<Return name="stringifiedObject" type="string"/>
</Returns>
</Function>

## String Library

### string.diff

Returns a string representing the difference between `firstValue` and `secondValue`. The exact format is subject to change.

<Function since="v0.0.1">
<Parameters>
<Parameter name="firstValue" type="string"/>
<Parameter name="firstValue" type="string"/>
</Parameters>
<Returns>
<Return name="humanReadableDiff" type="string"/>
</Returns>
</Function>

### string.explode

Tokenizes the given `inputString` based on a configurable `delimiter` character, which is stripped from the output.

<Function since="v0.0.1">
<Parameters>
<Parameter name="inputString" type="string"/>
<Parameter name="delimiter" type="string" optional fallback="'%s' (whitespace)"/>
</Parameters>
<Returns>
<Return name="tokens" type="table"/>
</Returns>
</Function>

### string.filesize

Returns a human-readable representation of the given `fileSizeInBytes` using standard units. The exact format is subject to change.

<Function since="v0.0.2">
<Parameters>
<Parameter name="fileSizeInBytes" type="number"/>
</Parameters>
<Returns>
<Return name="formattedFileSize" type="string"/>
</Returns>
</Function>

## Table Library

### table.contains

Returns `true` if the given `table` contains `value` in the array part of the table, and `false` otherwise. The dictionary part is ignored.

<Function since="v0.0.1">
<Parameters>
<Parameter name="table" type="table"/>
<Parameter name="value"/>
</Parameters>
<Returns>
<Return name="isValuePresent" type="boolean"/>
</Returns>
</Function>

## Changelog

| Version |     What happened?      |
| :-----: | :---------------------: |
| v0.0.2  | Added `string.filesize` |
| v0.0.1  |     Initial release     |
