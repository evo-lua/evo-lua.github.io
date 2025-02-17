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

<Function since="v0.0.1">
<Returns>
<Return name="capturedOutput" type="string"/>
</Returns>
</Function>

### startTimer

Starts a console timer with the given `label`, saving the current (high-resolution) time to mark the beginning of a measured code block.

This is a lightweight helper that takes a snapshot in time when called; it doesn't actually start a "real" (libuv/OS) timer.

<Function since="v0.0.7">
<Parameters>
<Parameter name="label" type="string"/>
</Parameters>
</Function>

### stopTimer

Stops the console timer with the given `label` if it exists, marking the end of a measured code block.

The computed time delta is returned, but also reported to the console in a human-readable (but otherwise unspecified) format.

<Function since="v0.0.7">
<Parameters>
<Parameter name="label" type="string"/>
</Parameters>
<Returns>
<Return name="elapsedTimeInMilliseconds" type="number"/>
</Returns>
</Function>

## Changelog

| Version |           What happened?           |
| :-----: | :--------------------------------: |
| v0.0.7  | Added `startTimer` and `stopTimer` |
| v0.0.1  |          Initial release           |
