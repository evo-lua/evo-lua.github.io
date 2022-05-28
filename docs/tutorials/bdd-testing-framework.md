---
title: Test your Evo.lua application
---

Learn how to use the builtin BDD-style testing framework to test your app.

## TODOs

:::danger Important stuff is still missing here

* Link to auto-generated API docs for the testing primitives
* Add automated testing for the code snippets
* Link to downloadable example repository
* Actually embed ``RedGreenRefactor`` into the ``evo`` runtime
* Implement the spec file parser and embed it, too
* Add docs for the spec file format (JSON)

:::

## Installation

The ``evo`` runtime ships with a builtin testing framework. You don't have to install anything to use it; it's just there.

## Testing Methodology

As the name ``bdd`` might suggest, the framework roughly follows the [behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) philosophy.

## Global Testing Primitives

The following testing primitives are exported to the global environment:

* ``TestSuite`` with the following API:
  * ``Construct(name)``
  * ``AddScenario(scenario)``
  * ``RunScenario(scenario)``
  * ``RunAllScenarios()``
  * ``PrintSummary()``
* ``Scenario`` with the following API:
  * ``Construct(name)``
  * ``Run()``
  * ``PrintResults()``
  * ``GetName()``
  * ``GetResultsText()``
  * ``GetNumFailedAssertions()``
  * ``HasFailed()``
  * ``GIVEN(description, establishPreconditions)``
  * ``WHEN(description, runTestCode)``
  * ``THEN(description, assertPostconditions)``
  * ``FINALLY(cleanupCode)``

Most of these should be self-explanatory, but let's check out a short example next.

## Writing and Running Tests

Here's a simple script that defines a test suite with just one scenario:

```lua title="bdd-demo.lua"
	local testSuite = TestSuite:Construct("Basic demonstration")
	local scenario = Scenario:Construct("Testing the framework")

	scenario:GIVEN(
		"I have established the pre-conditions",
		function()
			-- This function should run all setup code ("establish preconditions" for the test)
		end
	)

	scenario:WHEN(
		"I run the test code",
		function()
			-- This function should run the code under test
			self.someValue = 42
		end
	)

	scenario:THEN(
		"The post-conditions hold true",
		function()
			-- This function should assert the expected post-conditions
			assert(self.someValue == 42, "Some value is set correctly")
		end
	)

	scenario:FINALLY(function()
		-- Cleanup tasks; this won't be displayed in the final report
	end)

	testSuite:AddScenario(scenario)
	testSuite:RunAllScenarios()
```

You can execute your tests like any other Lua code, by running ``evo myTestFile.lua``. Running the above script:

![Screenshot of the BDD test output](bdd-test-output-example.png)

The input format is somewhat verbose on purpose. Don't worry, there's an easier way.

## Running Tests



## Alternatives

There's obviously no need to use the provided ``bdd`` framework if you don't want to. Any standard Lua testing framework, such as [busted](https://github.com/Olivine-Labs/busted) or [LuaUnit](https://luarocks.org/modules/bluebird75/luaunit), should work as long as it only uses Lua 5.1 or [supported Lua 5.2 features](https://luajit.org/extensions.html). You could even create your own test runner, or use a native (C/C++) framework via LuaJIT's [foreign function interface (FFI)](https://luajit.org/ext_ffi.html).

However, only the ``bdd`` library is officially maintained. It's guaranteed to see updates when changes to the runtime and the environment necessitate it, while all other solutions are likely to require some maintenance on your part.

If you're unhappy with ``bdd``, please consider opening an issue or otherwise giving feedback to help make it better!
