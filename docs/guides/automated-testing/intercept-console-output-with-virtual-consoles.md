---
title: Intercept console output
---

Learn how to intercept console outputs and access them in your tests.

## Motivation

Testing at the edges of any system is much more difficult than testing regular functionality. If your application outputs text to ``stdout`` (e.g., the console window), you may want to write tests that make sure it's outputting the correct thing.

## Virtual Consoles

A ``FauxConsole``, or "virtual console", is an in-memory representation of a console buffer with behavior akin to ``stdout``. Instead of printing text to the console environment that your application is running in, it simply "swallows" the output and stores it inside an internal buffer. This buffer can trivially be queried in your tests, allowing you to inspect its contents.

## Forwarding Outputs

In order to make your application's console output testable, you can do the following in your code:

1. Create a virtual console, via ``C_Testing.CreateFauxConsole()``
2. Pass the console into the function, class, or module that needs to output text
3. Internally, use the virtual console's ``print`` function if one was passed
4. If no console was passed, simply output text as you would do normally (e.g., via the standard ``print``)
5. You can then make assertions about the buffered contents, which you can retrieve via ``console:read()``

## Usage Example

Checking the contents of the virtual console's buffer doesn't take much effort:

```lua title="faux-console-usage-example.lua"
local fauxConsole = C_Testing.CreateFauxConsole()

assertEquals(fauxConsole.read(), "", "The console buffer should be empty before outputting any text")

fauxConsole.print("This text will never see the light of day!")
assertEquals(fauxConsole.read(), "This text will never see the light of day!\n", "The console should buffer all outputs")
-- Beware: A newline (\n) symbol is added to the end, just like printing to a real console!

fauxConsole.clear()

assertEquals(fauxConsole.read(), "", "The console buffer should be empty after it was cleared")
```

It's equally simple to plug a virtual console into a function and store its output for testing purposes:

```lua title="faux-console-injection-example.lua"
local MyAPI = {}

function MyAPI:PrintHelloWorld(console)
	-- Simply omit the console parameter to print to the regular terminal window instead
	local print = console and console.print or print
	print("Hello world!") -- Prints to the fauxConsole if one was passed, and stdout otherwise
end

-- Now the output can easily be tested, without affecting the logic of your program
local fauxConsole = C_Testing.CreateFauxConsole()

MyAPI:PrintHelloWorld() -- Doesn't use the virtual console (visible console output WILL occur)
assertEquals(fauxConsole.read(), "", "Should print to stdout if no console parameter was passed")
MyAPI:PrintHelloWorld(fauxConsole) -- DOES use the virtual console (no visible console output will occur)
assertEquals(fauxConsole.read(), "Hello world!\n", "Should write to the buffer if a console parameter was passed")

return MyAPI
```
