# uuid

Lua library that allows generating [universally-unique identifiers](https://en.wikipedia.org/wiki/Universally_unique_identifier) (UUIDs)

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local uuid = require("uuid")
```

## Fields

### RFC_STRING_PATTERN

A Lua string pattern that can be used to [match](https://www.lua.org/manual/5.1/manual.html#pdf-string.gmatch) strings according to the [standardized RFC UUID format](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format).

## Functions

### createBasicUUID

Generates a UUID using the default (basic) random number generator. May produce inferior randomness ([see details here](https://github.com/mariusbancila/stduuid#random-uuids)).

<Function since="v0.0.1">
<Returns>
<Return name="uuid" type="string"/>
</Returns>
</Function>

### createMersenneTwistedUUID

Generates a UUID using the [mt19937](https://cplusplus.com/reference/random/mt19937/) random number generator. Produces high-quality randomness via [Mersenne Twister Engine](https://cplusplus.com/reference/random/mersenne_twister_engine/).

<Function since="v0.0.1">
<Returns>
<Return name="uuid" type="string"/>
</Returns>
</Function>

### createNameBasedUUID

Generates a [name-based](<https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_(namespace_name-based)>) UUID using SHA-1 hashing to deterministically produce an identifier based on a given [namespace-name-pair](https://stackoverflow.com/questions/10867405/generating-v5-uuid-what-is-name-and-namespace).

<Function since="v0.0.1">
<Parameters>
<Parameter name="namespace" type="string"/>
<Parameter name="name" type="string"/>
</Parameters>
<Returns>
<Return name="uuid" type="string"/>
</Returns>
</Function>

### createSystemUUID

Generates a UUID using a nonstandard, platform-specific random number generator. It currently uses the following APIs internally:

- Windows: [CoCreateGuid](https://learn.microsoft.com/en-us/windows/win32/api/combaseapi/nf-combaseapi-cocreateguid)
- Linux: [uuid_generate](https://man7.org/linux/man-pages/man3/uuid_generate.3.html)
- Mac OS: [CFUUIDCreate](https://developer.apple.com/documentation/corefoundation/1542906-cfuuidcreate?language=objc)

<Function since="v0.0.1">
<Returns>
<Return name="uuid" type="string"/>
</Returns>
</Function>

### isCanonical

Returns whether or not the given value is a valid RFC UUID string, i.e., whether it matches the [RFC_STRING_PATTERN](#rfc_string_pattern).

<Function since="v0.0.1">
<Parameters>
<Parameter name="input" type="any"/>
</Parameters>
<Returns>
<Return name="isValidUUID" type="boolean"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
