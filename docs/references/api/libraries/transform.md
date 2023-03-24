# transform

Text transformation library for generating colored console output

## Status

<Stable/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local transform = require("transform")
```

## Functions

### black

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered black in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### blackBackground

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered on a black background in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### bold

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered with bold font in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="transformedText" type="string"/>
</Returns>
</Function>

### brightRed

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered bright red in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### brightRedBackground

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered on a bright red background in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### cyan

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered cyan in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### enable

Globally enables text transformations. This operation is not applied retroactively. Text transformations are enabled by default.

### disable

Globally disables text transformations. This operation is not applied retroactively. Use this if your terminal can't display colors.

### gray

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered gray in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### green

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered green in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### greenBackground

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered on a green background in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### red

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered dark red in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### underline

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered underlined in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="transformedText" type="string"/>
</Returns>
</Function>

### yellow

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered yellow in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### white

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered white in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

### whiteBackground

Returns the input string wrapped in [ANSI escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code) so that it is rendered on a white background in supporting terminals.

<Function>
<Parameters>
<Parameter name="text" type="string"/>
</Parameters>
<Returns>
<Return name="coloredText" type="string"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
