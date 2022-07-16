---
sidebar_position: 1
url: /api-reference/globals/
---

# Global Namespace

This document lists all nonstandard functions exported to the global environment.

## Aliases

The following shorthands are provided purely for ease-of-use, with unchanged semantics:

* ``format``: Alias for ``string.format(...)``
* ``printf``: Alias for ``print(string.format(...))``

import { Function, Parameters, Parameter, Returns, Return } from "@site/src/components/ApiDocumentation/API.jsx";

## Assertions

:::info

This feature is experimental; it will likely be changed or removed in future versions.

*Developer's notes: It's probably better to use a standardized assertion library instead, like luassert?*

:::

Some utility functions that help with assertion testing are globally exported, for the time being.

### assertEquals

Asserts that ``actual`` equals ``expected``. Raises an error in case of failure, with ``description`` as the error message.

<Function>
  <Parameters>
    <Parameter name="actual" />
    <Parameter name="expected" />
    <Parameter name="description" type="string" optional />
  </Parameters>
</Function>

### assertFalse

Asserts that ``actual`` equals ``false``. Raises an error in case of failure, with ``description`` as the error message.

<Function>
  <Parameters>
    <Parameter name="conditionToCheck" />
    <Parameter name="description" type="string" optional />
    </Parameters>
</Function>

### assertTrue

Asserts that ``actual`` equals ``true``. Raises an error in case of failure, with ``description`` as the error message.

<Function>
  <Parameters>
    <Parameter name="conditionToCheck" />
    <Parameter name="description" type="string" optional />
    </Parameters>
</Function>

### assertFunctionCalls

Asserts that ``codeUnderTest`` calls  ``hostTable[targetFunctionName]`` (both must be functions) exactly ``numExpectedInvocations`` times. Raises an error in case of failure, with ``description`` as the error message.

In order to target a global function, you can pass ``_G`` as the ``hostTable``.

<Function>
  <Parameters>
    <Parameter name="codeUnderTest" type="function" />
    <Parameter name="hostTable" type="table" />
    <Parameter name="targetFunctionName" type="string" />
    <Parameter name="numExpectedInvocations" type="number" optional fallback="1" />
    <Parameter name="description" type="string" optional />
    </Parameters>
</Function>

## Event System

:::info

This feature is experimental; it will likely be changed or removed in future versions.

*Developer's notes: A global event system is probably not useful enough to keep around. Use localized events instead?*

:::

The event registry is made available as a global ``event`` table.

### event.register

Registers a new event listener for the event identified by ``eventID``. Registering the same listener twice has no effect.

<Function>
  <Parameters>
      <Parameter name="eventID" type="string" />
      <Parameter name="listener" type="function" />
    </Parameters>
</Function>

### event.unregister

Attempts to remove a registered event listener for the event identified by ``eventID``. If no ``listener`` was passed, removes all event listeners that have previously been registered for this event.

<Function>
  <Parameters>
      <Parameter name="eventID" type="string" />
      <Parameter name="listener" type="function" optional />
    </Parameters>
  <Returns>
    <Return name="success" type="boolean" optional />
    <Return name="errorMessage" type="string" optional />
  </Returns>
</Function>

### event.trigger

Triggers all registered event listeners for the event identified by ``eventID``, forwarding it alongside any passed arguments. This is equivalent to manually calling ``OnEvent(eventID, ...)`` on a specific event target, which is preferable since it doesn't trigger other event listeners that may have been registered for the same event.

<Function>
  <Parameters>
      <Parameter name="eventID" type="string" />
      <Parameter varargs />
    </Parameters>
  <Returns>
    <Return name="success" type="boolean" optional />
    <Return name="errorMessage" type="string" optional />
  </Returns>
</Function>

### event.list

Returns a list of all event handlers that have been registered for the event identified by ``eventID``.

<Function>
  <Parameters>
      <Parameter name="eventID" type="string" />
    </Parameters>
  <Returns>
    <Return name="eventHandlers" type="table" optional />
  </Returns>
</Function>

## JSON

:::info

This feature is experimental; it will likely be changed or removed in future versions.

*Developer's notes: Since the JSON library used is slow and not maintainable, it will be replaced at some point.*

:::

An unoptimized JSON serialization API is exported via the global ``json`` table. It currently uses [dkjson](http://dkolf.de/src/dkjson-lua.fsl/home) internally.

### json.stringify

Converts a Lua table to an equivalent JSON string, This is an alias for ``dkjson.encode``.

<Function>
  <Parameters>
      <Parameter name="valueToEncode" type="table" />
    </Parameters>
  <Returns>
    <Return name="stringifiedValue" type="string" optional />
  </Returns>
</Function>

### json.parse

Converts a JSON string to an equivalent Lua table. This is an alias for ``dkjson.decode``.

<Function>
  <Parameters>
      <Parameter name="jsonStringToDecode" type="string" />
    </Parameters>
  <Returns>
    <Return name="decodedTableObject" type="table" optional />
  </Returns>
</Function>

## Object Serialization

[serpent](https://github.com/pkulchenko/serpent) can be used to serialize Lua objects. If performance is a concern, you may want to use LuaJIT's bytecode serialization instead.

### dump

Outputs a human-readable representation of the given Lua object. Can be used to pretty-print tables.

<Function>
  <Parameters>
      <Parameter name="object" type="any" />
    </Parameters>
  <Returns>
    <Return name="serializedObject" type="string" />
  </Returns>
</Function>

### serialize

Serializes a given Lua object. You can use ``loadstring`` to parse the result and get the original data back.

The output is NOT optimized for readability, but you can use ``dump`` instead.

<Function>
  <Parameters>
      <Parameter name="object" type="any" />
    </Parameters>
  <Returns>
    <Return name="serializedObject" type="string" />
  </Returns>
</Function>

## Text Transformations

global ``transform``

### transform.

function transform.bold(text)
	if type(text) ~= "string" then return nil, "Usage: bold(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_BOLD .. text .. RESET_SEQUENCE
end

function transform.underline(text)
	if type(text) ~= "string" then return nil, "Usage: underline(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_UNDERLINE .. text .. RESET_SEQUENCE
end

function transform.black(text)
	if type(text) ~= "string" then return nil, "Usage: black(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_BLACK .. text .. RESET_SEQUENCE
 end

function transform.blackBackground(text)
	if type(text) ~= "string" then return nil, "Usage: blackBackground(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_BLACK_BACKGROUND .. text .. RESET_SEQUENCE
end

function transform.green(text)
	if type(text) ~= "string" then return nil, "Usage: green(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_GREEN .. text .. RESET_SEQUENCE
end

function transform.gray(text)
	if type(text) ~= "string" then return nil, "Usage: gray(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_GRAY .. text .. RESET_SEQUENCE
end

function transform.white(text)
	if type(text) ~= "string" then return nil, "Usage: white(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_WHITE .. text .. RESET_SEQUENCE
end

function transform.red(text)
	if type(text) ~= "string" then return nil, "Usage: red(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_RED .. text .. RESET_SEQUENCE
end

function transform.brightRed(text)
	if type(text) ~= "string" then return nil, "Usage: red(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_BRIGHT_RED .. text .. RESET_SEQUENCE
end

function transform.cyan(text)
	if type(text) ~= "string" then return nil, "Usage: cyan(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_CYAN .. text .. RESET_SEQUENCE
end

function transform.yellow(text)
	if type(text) ~= "string" then return nil, "Usage: yellow(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_YELLOW .. text .. RESET_SEQUENCE
end

function transform.brightRedBackground(text)
	if type(text) ~= "string" then return nil, "Usage: brightRedBackground(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_RED_BACKGROUND_BRIGHT .. text .. RESET_SEQUENCE
end

function transform.greenBackground(text)
	if type(text) ~= "string" then return nil, "Usage: greenBackground(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_GREEN_BACKGROUND .. text .. RESET_SEQUENCE
end

function transform.whiteBackground(text)
	if type(text) ~= "string" then return nil, "Usage: whiteBackground(text)" end

	if not ENABLE_TEXT_TRANSFORMATIONS then return text end

	return COLOR_START_SEQUENCE .. COLOR_CODE_WHITE_BACKGROUND .. text .. RESET_SEQUENCE
end

## Object Oriented Programming

### mixin

Copies all functions from the provided mixins to ``target``. Ignores metatables and other value types.

<Function>
    <Parameters>
        <Parameter name="target" type="table" />
        <Parameter varargs />
    </Parameters>
</Function>

### typeof

:::info

This feature is experimental; it will likely be changed or removed in future versions.

*Developer's notes: This isn't very useful, as there's no real class system. Will likely be removed, or at least reworked.*

:::

Returns the Lua type of the given object, or class name if the object is a ``table`` with a ``__className`` meta field.

<Function>
    <Parameters>
        <Parameter name="object" type="table" />
    </Parameters>
    <Returns>
        <Return name="typeOrClassName" type="string" />
    </Returns>
</Function>

## Path Resolution

NodeJS path library

### path.resolve

## Modules

### import

... string, table.count