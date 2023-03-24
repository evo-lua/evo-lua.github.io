---
sidebar_position: 0
---

# Extensions

Unofficial extensions to the Lua standard libraries

## Debug Library

### debug.dump

Prints a human-readable string representation of the given object. Mostly useful for dumping tables, but unsuitable for serialization purposes. The output format cannot be considered stable. Currently uses [inspect](/docs/references/api/inspect) internally, though this may change in the future.

<Function>
<Parameters>
<Parameter name="object"/>
</Parameters>
<Returns>
<Return name="stringifiedObject" type="string"/>
</Returns>
</Function>
