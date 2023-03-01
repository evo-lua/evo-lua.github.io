# console

Minimal library for capturing and replaying console output

## Status

<Experimental/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local console = require("console")
```

## Functions

### capture

Starts capturing all regular console output that would normally be printed, buffering it internally. Appends `\n` to each token.

Currently only captures [print](https://www.lua.org/manual/5.1/manual.html#pdf-print), but not [io.write](https://www.lua.org/manual/5.1/manual.html#pdf-io.write). Mainly useful for writing unit tests for user-facing code, or producing delayed output.

### release

Stops capturing console output, allowing it to be displayed normally again. Returns the contents of the internal buffer and then resets it.

<Function>
<Returns>
<Return name="capturedOutput" type="string"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
