# gpu

Lua library that allows scheduling work to run on your GPU

## Status

<Experimental/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local gpu = require("gpu")
```

## Functions

### createRenderingContext

Sets up a native window, a GPU rendering context, and maps the window's underlying surface to the context. This handles effectively all the setup required for a native application to start requesting devices, initialize the swap chain, and create render pipelines.

You'll still have to handle these application-specific setup tasks. This is merely intended to provide a starting point that's similar to the one offered to WebGPU users in browsers, where windowing is managed for you and only a single context exists for scripts to run in.

:::note

You only need to do this once (globally) if you want to render to a single window, which is the most common use case.

:::

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.6  | Initial release |
