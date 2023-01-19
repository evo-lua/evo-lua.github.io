# RFC: Standardized Unit Test Runner

This document describes potential designs for a BDD-style test runner.

## Motivation

There's a need for unit testing, but the existing frameworks are largely inactive and can't easily be adapted.

## Testing Philosophy

BDD style, meaning ``describe`` and ``it`` is used to define test suites. Why?

* Easy to understand
* Requires little boilerplate
* Flexible enough for all basic unit testing needs
* Simple enough to implement from scratch
* Lends itself well to domain-driven design

Guiding principle: Focus on what matters - fast feedback and iteration speed above extensive feature sets.

## Organizing Tests

No concept of test suites and test cases should be implemented in code. Instead, Lua scripts (files) *are* test suites. Separations inside them are only relevant for the reporting stage (for readability's sake).

The core idea here is that all those fancy bells and whistles detracts from the one (and only) thing developers care about when writing tests: Making sure that the code works, as fast as possible and with minimal headaches. No one enjoys writing tests, after all, and since test code needs to be maintained as part of the code base it might as well be "real code".

For the reporting step, and for backwards compatibility, using *describe* and *it* functions should be possible. However, these don't need to do anything other than visually indent the printed labels and are otherwise purely optional.

## Additional Features

Various commonly-included features have been considered for an initial prototype.

### Nonstandard Assertions

Assertions are optionally provided via the *assertions* library which is built into the runtime itself.

Using the standard Lua *assert* or a third-party solution like *luassert* is also possible as long as failing tests throw.

### Asynchronous Tests

Coroutines can trivially be used to implement asynchronous tests. There's really no need for more complexity.

### Setup and Teardown Code

Setup and teardown should be implemented by each test, as appropriate. Special functions add very little here.

### Test Retries and Pending Tests

Flaky tests should be fixed and not retried until they work. Pending or "not-yet-implemented" tests should be removed.

### Test Discovery

Instead of adding fancy discovery logic, CLI flags and other magic, simply passing a list of test files will suffice.

### Parallelization

Multiple runners can be spawned via shell scripts or by using the *uv* library. Better support may be worth adding later.

### Stubs, Mocks & Spies

These may be worth adding as a separate library should they become relevant. For the time being, they are not.

### Additional Reporting Formats

TAP or other formats may be added in the future. But at least for an initial version, that's probably not useful enough.

## Alternatives

* Make ``busted`` work the way it should (painful)
* Attempt to fit ``luaunit`` into the BDD framework (impedance mismatch)
* Try out some of more niche frameworks listed on [lua-users.org](http://lua-users.org/wiki/UnitTesting) (unlikely to be fruitful)
