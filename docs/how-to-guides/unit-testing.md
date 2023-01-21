# Unit Testing

Learn how to employ the `bdd` library to run automated unit tests

## Starting a Test Runner

Simply write a Lua program that calls into the ``bdd`` library:

```lua title=run-some-tests.lua
local bdd = require("bdd")

-- All paths are relative to the current working directory, with POSIX-style path separators
local specFiles = {
	"specs/MyApp.spec.lua",
	"specs/SomethingElse.spec.lua",
}

-- Tell the test runner to execute all of the passed tests (executable specifications)
bdd.startTestRunner(specFiles)
```

You can then execute it like any other Lua script:

`evo run-some-tests.lua`

The expected output (assuming those test files exist and are passing):



## Writing Unit Tests

Inside the files passed to the `startTestRunner` method, you can implement your test code as a regular Lua program. The test runner will simply execute it and make sure all tests pass, reporting failures as soon as they pop up.

### Passing and Failing Tests

The definition for what constitutes a passing or a failing test is quite simple:

* A test (script) *passes* if it runs to completion when interpreted and executed as a Lua chunk, regardless of its output
* Any script that throws an error (e.g., by calling the `error` function or if it's syntactically incorrect) *fails* the test

The basic idea is that a test exercises your code and uses *assertions* to raise Lua errors if any assumptions are wrong.

### Examples

Here's some examples for failing tests:

```lua title=failure-due-to-syntax-error.lua
-- Fails with Lua error: '<name>' expected near 'local'
local local = "this is invalid syntax" -- ... because 'local' is a reserved keyword
```

```lua title=failure-due-to-lua-error.lua
local function sayHelloTo(name)
	print("Hello, " .. name .. "!")
end

-- Fails, because Lua raises an error: "attempt to concatenate local 'name' (a nil value)"
sayHelloTo(nil)
```

```lua title=failure-due-to-error-call.lua
local function sayHelloTo(name)
	if not name then
		error("Usage: sayHelloTo(name)")
	end
	print("Hello, " .. name .. "!")
end

-- Fails, because Lua raises an error: "Usage: sayHelloTo(name)"
sayHelloTo(nil)
```

And here, various examples for tests that pass (even if they're not necessarily very useful):

```lua title=success-because-of-noop.lua
-- This program doesn't have any code, but it also doesn't raise any errors
```

```lua title=success-without-assertions.lua
-- This program doesn't raise any errors, but it's still not very useful as a test
local function sayHelloTo(name)
	print("Hello, " .. name .. "!")
end

-- Passes, because the function prints the text and exits cleanly
sayHelloTo("my little friend")
```

```lua title=success-with-assertions.lua
-- In order to make sure the code behaves as expected, some assertions should be used
local function sayHelloTo(name)
	print("Hello, " .. name .. "!")
end

-- Passes, because the the assertion doesn't raise an error if the function exits cleanly
assertDoesNotThrow(function()
	sayHelloTo("my little friend")
end)
```

Lastly, this example would be more useful as a "real" test, even if it's still somewhat incomplete:

```lua title=test-with-assertions.lua
local validation = require("validation")
local validateString = validation.validateString

local function sayHelloTo(name)
	-- Validation functions will throw an error if the parameter isn't of the expected type
	validateString(name, "name")

	print("Hello, " .. name .. "!")
end

assertDoesNotThrow(function()
	sayHelloTo("my little friend")
end)

assertThrows(function()
	sayHelloTo(nil)
end, "Expected argument name to be a string value, but received a nil value instead")
```


## Organizing Tests

Each file passed to the `startTestRunner` method is considered a separate test. You can load other files to separate a larger test suite into smaller reusable components, and structure your test program any way you prefer. Conceptually, tests are part of a project's architecture, so the `bdd` library doesn't impose artificial constraints on them.

However, as the name `bdd` (for [behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)) implies, there is support for executable specifications.

### Sections and Subsections

Inside any given test file, you can use the following functions to create logically separate blocks:

* `bdd.describe(label, testFunction)`: Alias for `bdd.createSection(label, testFunction)`
* `bdd.it(label, testFunction)`: Alias for `bdd.createSubsection(label, testFunction)`

Using `describe` and `it` can help you generate more useful reports, but there's no change to how tests are run.

## Setup and Teardown Code

If you need to run some code before or after your test, you can combine `describe` and `it` with these:

* `bdd.before(setupFunction)`: Run `setupFunction` before each call to the `testFunction` in `describe`
* `bdd.beforeEach(setupFunction)`: Run `setupFunction` before each call to the `testFunction` in `it`
* `bdd.after(teardownFunction)`Run `teardownFunction` after each call to the `testFunction` in `describe`
* `bdd.afterEach(teardownFunction)`: Run `teardownFunction` after each call to the `testFunction` in `it`

The passed functions will run for all (sub)sections in the same test file after they've been registered.

## Reporting Test Results

Test reports can be generated in multiple formats:

* Detailed: Displays a full status report containing all relevant information (this is the default)
* Basic: Displays the number of test files, pass/fail status for each file, and the time taken
* Minimal: Displays nothing, unless there are errors or test failures (Unix style)

You can select the reporting mode before calling ``bdd.startTestRunner`` with the following APIs:

* `bdd.setDetailedReportMode()`: Enables detailed reports (and disables all other report modes)
* `bdd.setBasicReportMode()`: Enables basic reports (and disables all other report modes)
* `bdd.setMinimalReportMode()`: Enables minimal reports (and disables all other report modes)

Please note that sections and subsections (created with `describe` and `it`) *only* appear in detailed reports.

### Minimal Reports

Minimal (no failures):

TODO

### Basic Reports

Basic (no failures):

TODO

Basic (with failures):

TODO

### Detailed Reports

Detailed (no failures):

TODO

Detailed (with failures):

TODO

## Alternatives

If you need more advanced features, consider using third-party libraries like [busted](https://github.com/Olivine-Labs/busted) or [luaunit](https://github.com/bluebird75/luaunit).
