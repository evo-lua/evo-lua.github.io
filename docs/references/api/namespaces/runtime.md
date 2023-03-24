---
sidebar_position: 30
---

# C_Runtime

Implementation of the runtime's [command-line interface](/docs/references/command-line-interface) (CLI)

## Status

<Experimental/>

## Availability

This is a global namespace and can be accessed directly:

```lua
C_Runtime.PrintVersionString() -- Implicit global lookup: _G.C_Runtime
```

### DisplayHelpText

Displays a text containing versioning information and some basic usage instructions for the runtime's [command-line interface](/docs/references/command-line-interface).

### EvaluateString

Evaluates the string value passed in as a [Lua chunk](https://www.lua.org/pil/1.1.html) and returns all results. Propagates any errors that may be encountered.

<Function>
<Parameters>
<Parameter name="luaCode" type="string"/>
</Parameters>
<Returns>
<Return varargs="true" />
</Returns>
</Function>

### PrintVersionString

Displays the semantic version string identifying the build of the native runtime. The exact format is defined by `git describe`:

- Tagged release: `v0.0.1`
- Local build: `v0.0.0-151`
- For details, see [the git manual](https://git-scm.com/docs/git-describe)

The value displayed is also exported globally via [EVO_VERSION](/docs/references/api/globals#evo-version) and can thus be queried.

### RunBasicTests

Starts a [bdd-style unit test runner](/docs/references/api/libraries/bdd) in [basic reporting mode](/docs/how-to-guides/unit-testing#basic-reports) with the given list of test files as input and returns the result.

<Function>
<Parameters>
<Parameter name="specFiles" type="table"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### RunDetailedTests

Starts a [bdd-style unit test runner](/docs/references/api/libraries/bdd) in [detailed reporting mode](/docs/how-to-guides/unit-testing#detailed-reports) with the given list of test files as input and returns the result.

<Function>
<Parameters>
<Parameter name="specFiles" type="table"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### RunMinimalTests

Starts a [bdd-style unit test runner](/docs/references/api/libraries/bdd) in [minimal reporting mode](/docs/how-to-guides/unit-testing#minimal-reports) with the given list of test files as input and returns the result.

<Function>
<Parameters>
<Parameter name="specFiles" type="table"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
