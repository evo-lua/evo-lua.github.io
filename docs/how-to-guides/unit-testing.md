# Unit Testing

Learn how to employ the `bdd` library to run automated unit tests

## Starting the Test Runner

Simply write a Lua program that calls into the ``bdd`` library:

```lua title=bdd-run.lua
local bdd = require("bdd")

-- All paths are relative to the current working directory, with POSIX-style path separators
local specFiles = {
	"specs/MyApp.spec.lua",
	"specs/SomethingElse.spec.lua",
}

-- Tell the test runner to execute all of the passed tests (executable specifications)
bdd.run(specFiles)
```

## Writing Unit Tests

Inside the files passed to the `run` method, you can implement your test code as a regular Lua program. The test runner will simply execute it and make sure all tests pass, reporting failures as soon as they pop up.

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

## Organizing Tests

Each file passed to `bdd.run` is considered a separate test. You can load other files to separate a larger test suite into smaller reusable components, and structure your test program any way you prefer. Conceptually, tests (and related scripts) are part of a project's architecture, so the `bdd` library doesn't impose artificial constraints on them.

Here's a recommendation to serve as a starting point:

* Create one `module.spec.lua` file for each module (where ``module`` is the name of the library or module under test)
* Pass each of those executable specifications to the ``run`` method in order to create a separate test suite for it

## Alternatives

You can use third-party libraries like [busted](https://github.com/Olivine-Labs/busted) or [luaunit](https://github.com/bluebird75/luaunit) if you need more advanced features.
