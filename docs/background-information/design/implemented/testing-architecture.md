# RFC: Smoke Testing

This document describes the core design of the test suite

## Summary

Smoke tests guard against failures in the unit test runner and related primitives. The test runner can be used to write the rest of the unit tests, providing convenience features and fancier reporting modes. Writing many smoke tests would be painful due to the limited support that Lua provides for testing, so switching to the test runner ASAP is the main goal.

## First Principles

A module can only be said to be working if it is tested. But testing too many modules with only primitive Lua builtins is painful. That's the tradeoff. I really wanted to find an optimal point where _all_ of the following held true:

- As little code as possible is tested without a proper framework (that makes testing easier) in place
- No code goes untested; this is especially important for the code placed in said testing framework
- Tests cannot use any primitives that they implement for testing their own implementation (cyclic dependencies)
- When the foundation is well-tested, it can then be used to gradually make testing of the remaining modules easier

In practice this means separating the unit tests into smoke tests and BDD (unit) tests, running one after the other.

## Mandatory Features

To reduce the PITA factor of unit testing, the implementation should satisfy all of the following:

- Keeping the code as minimal and "stupid" as possible
- Assertions for all common use cases, with useful error reporting
- A test runner that loads files and evaluates the results of running tests
- Reporting in at least two different output formats (to future-proof, since I know TAP and HTML will be needed)
- Concentrating the functionality in as few modules as possible (ideally, just an `assertions` and `bdd` library)

Eventually, the test reporting will have to be extracted. But for the initial prototype, that wasn't a requirement.

## Smoke Tests

A smoke test is limited by the following restrictions:

- Cannot access any other nonstandard Lua library (and so must rely on the buitin `assert` function)
- Must test all basic use cases (can skip optional failure modes to reduce the complexity)
- Must give clear feedback about the progress and any errrors that may have occured
- Should be organized such that the code remains readable and well-organized

I opted to adopt a xunit-style functional organization scheme that helps maintain readability, but doesn't scale.

## BDD Unit Tests

The test runner needs enough primitives to allow implementing a minimal required feature set:

- Supports colored output for reporting test failures (red as a signal color helps detect failed tests at a glance)
- Must allow BDD-style syntax used in legacy tests (`describe`, `it`, and setup/teardown functions)
- Can report errors separately from test failures so that they may be saved and/or reported prominently
- Setup and teardown functions can be omitted from the initial prototype to keep it simple

All of the above should be covered by smoke tests. The test runner can then handle the remaining unit tests.

## See also

To read about the thought process behind building a standalone unit test runner in the first place, read this:

- [RFC: Standardized Unit Test Runner](/docs/background-information/design/implemented/unit-test-runner.md)
