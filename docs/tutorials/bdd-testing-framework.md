---
title: Test your Evo.lua application
---

Learn how to use the builtin testing facilities in your application.

## TODOs

:::danger Important stuff is still missing here

* Link to auto-generated API docs for the testing primitives
* Add automated testing for the code snippets
* Link to downloadable example repository
* Actually embed ``RedGreenRefactor`` into the ``evo`` runtime
* Implement the spec file parser and embed it, too
* Implement the assertion library
* Split into multiple docs, one per docType

:::

## Testing Primitives

The ``evo`` runtime ships with builtin testing primitives that allow you to hierarchically organize your tests:

* Create top-level containers for use-cases in the form of a ``TestSuite``
* Define the environment for a single test case in a ``Scenario``
* Add any number of scenarios to a given test suite to "queue" them up
* Run any number of test suites to execute the scenarios and display a report

You don't have to install anything to use them in your application; they're made available to all scripts out of the box.

## Methodology

The reports generated roughly adhere to the [behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) philosophy. You can define an executable specification for your program's behaviour in a ``Scenario``, and (optionally) label it with standardized keywords:

* ``GIVEN``: Describes the state of the environment that enables the scenario ("pre-conditions")
* ``WHEN``: Describes the steps that your program is taking in the given scenario, i.e., its actual, programmed behaviour
* ``THEN``: Describes the state of the environment that you expect after running the code under test ("post-conditions")

The above terminology loosely maps to the typical flow of setup - test - teardown you'd encounter in [xUnit](https://en.wikipedia.org/wiki/XUnit) style tests.

## Running Tests

The test runner is built into the ``evo`` runtime. All you have to do is create a file that defines one or multiple test suites:

```lua title="my-test-suite.lua"
	local testSuite = TestSuite:Construct("Name or description (displayed in the final report)")

	local listOfScenarioFilesToLoad = {
		"./example-scenario.lua"
	}

	testSuite:AddScenarios(listOfScenarioFilesToLoad)

	-- Return test suite instance as a Lua module
	return testSuite
```

Any test suite consist of a module that returns the ``TestSuite`` instance, which loads ``Scenario`` instances like this one:


```lua title="example-scenario.lua"
	local scenario = Scenario:Construct("Testing the framework")

	-- Labelling the individual phases is optional, but highly recommended
	-- This simply replaces the placeholder descriptions displayed in the final output
	scenario:GIVEN("I have established the pre-conditions")
	scenario:WHEN("I run the test code")
	scenario:THEN("The post-conditions hold true")

	-- Event handlers can be overridden to implement a simulation of the scenario you're testing
	function scenario:OnSetup()
			-- This function should run all setup code and establish the preconditions you expect
	end

	function scenario:OnRun()
			-- This function should run the code that you want to test
			self.someValue = 42
	end

	function scenario:OnEvaluate()
		-- This function should assert the expected post-conditions, using standard assertions
			assert(self.someValue == 42, "Some value is set correctly")
	end

	function scenario:OnCleanup()
		-- This should undo any setup you've had to do to establish the pre-conditions
	end

	-- Return scenario instance as a Lua module
	return scenario
```

You can then create and invoke a script that loads and runs a test suite normally, the "test runner":

```lua title="run-my-tests.lua"
	local testSuite = import("./my-test-suite.lua")
	testSuite:Run()
```

Executing this with ``evo run-my-tests.lua`` should result in the following report being displayed:

TODO: Image

You can also import multiple test suites here, and run them with a simple for loop instead:

```lua title="run-ALL-the-tests.lua"
	local testSuites = {
		"./my-test-suite.lua",
		"./another-test-suite.lua"
	}

	for _, filePath in pairs(testSuites) do
		local testSuite = import(filePath)
		testSuite:Run()
	end
```

Each test suite will run all of its scenarios and display a report before the next one is started, then the next, and so on.

## Event Handlers

Test suites trigger event handlers when running scenarios. This happens in a well-defined order:

1. ``SCENARIO_LOAD``: Event is fired when the test suite first imports the scenario, and triggers its ``OnLoad`` handler
2. ``SCENARIO_SETUP``: Event is fired when the scenario runs its ``OnSetup`` method, after the test suite was started
3. ``SCENARIO_RUN``: Event is fired when the scenario executes its main body, the ``OnRun`` method, after the setup
4. ``SCENARIO_EVALUATE``: Event is fired when post-conditions are evaluated, before ``OnEvaluate`` is triggered
5. ``SCENARIO_CLEANUP``: Event is fired when the scenario was run, before the ``OnCleanup`` method is called
6. ``SCENARIO_REPORT``: Event is fired at the very end, before the results of the test run for this scenario are displayed

These events are what causes the runtime to execute the various event handlers you can register in a scenario file (``OnSetup``, ``OnRun``, ``OnEvaluate``, ``OnCleanup``, etc.). By default, an empty placeholder is used, and by overriding it with your own implementation you're telling ``evo`` what should be happening in each of the tested scenarios.

---

TODO: Remove, probably?

You can run your tests like any other script, by invoking the interpreter on your scenario file: ``evo bdd-demo.lua``

The displayed summary of the above script should read as follows:

![Screenshot of the BDD test output](bdd-test-output-example.png)

The API is optimized for readability and quite verbose. Don't worry, there's an easier way to create these kinds of tests!

## JSON Spec Files

TODO: Remove, obsolete?

You can also create a ``specs.json`` file that stores the layout of one or multiple test suites, with all scenarios and descriptions but absolutely none of the boilerplate code. Here's how this would look for the above example:

```json title="specs.json"
	[
		{
			"name": "Basic demonstration",
			"scenarios": [
				{
					"name": "Testing the framework",
					"given": "I have established the pre-conditions",
					"when": "I run the test code",
					"then": "The post-conditions hold true",
					"script": "Tests/BasicDemonstration/TestingTheFramework.lua"
				}
			]
		}
	]
```

Now, simply create a file ``Tests/BasicDemonstration/TestingTheFramework.lua`` (starting **at the root directory of your package**, i.e., where ``specs.json`` should be located) and add the actual test code that is to be executed:

```lua title="Tests/BasicDemonstration/TestingTheFramework.lua"

	function GIVEN()
		-- This function should run all setup code ("establish preconditions" for the test)
	end

	function WHEN()
		-- This function should run the code under test
		self.someValue = 42
	end

	function THEN()
		-- This function should assert the expected post-conditions
		assert(self.someValue == 42, "Some value is set correctly")
	end

	function FINALLY()
		-- Cleanup tasks; this won't be displayed in the final report
	end

```

Once done, you can run test suites via ``epo test <TestSuite> <Scenario>``, where the angle brackets denote placeholders that refer to the ``name`` field in ``specs.json``. Omitting the scenario name will run all scenarios for the suite, and omitting the suite will run all tests found in the spec file. Use quotes if needed: ``epo test "Basic demonstration"``

Unfortunately, there's no getting around writing *some* code here. But hopefully, minimizing boilerplate and gathering all test specs in a standardized location will take some of the pain out of writing well-structured, readable tests.


## Assertion Library

 TODO: Remove, NYI (separate feature/issue/doc article)

As part of the ``bdd`` library, commonly-used assertions are also exported globally:

* ``assertTrue``
* ``assertFalse``
* ``assertEquals``
* ``assertNotEquals``
* ``assertDeepEquals``
* ``assertNil``
* ``assertNotNil``
* ``assertTypeOf``
* ``assertThrows``
* ``assertApproximatelyEquals`` (for float comparisons)
* ``assertNotApproximatelyEquals`` (for float comparisons)

These are just shorthands, but they work with the testing framework to produce human-readable error messages.

## Limitations

TODO Review. It's likely outdated?

As with every other design for a testing framework, there are some drawbacks to consider:

* Nested hierarchies of tests are not supported, although you can of course organize each ``Scenario`` however you like
* Only ``assert`` function can currently be used to label assertions in the final report
* You must write textual descriptions for all test suites and scenarios and their ``name`` must must be unique
* Asynchronous tests (using callbacks) aren't currently supported, though you can use [coroutines](https://www.lua.org/pil/9.1.html) if you need this

If you need more features or you dislike the structure that writing BDD-style tests imposes, there may be other options.

## Alternatives

Naturally, you don't need to use the provided testing primitives if you don't want to. Any standard Lua testing framework, such as [busted](https://github.com/Olivine-Labs/busted) or [LuaUnit](https://luarocks.org/modules/bluebird75/luaunit), should work as long as it only uses Lua 5.1 and [supported Lua 5.2 features](https://luajit.org/extensions.html). You could even create your own test runner, or use a native (C/C++) library via LuaJIT's [foreign function interface (FFI)](https://luajit.org/ext_ffi.html).

However, the builtins described here are "officially" maintained. They're guaranteed to see updates when changes to the runtime and the environment necessitate it, while all other solutions are likely to require maintenance on your part.

If you're unhappy with the framework, please open an issue or otherwise give feedback to help make it better!
