# RFC: Standardized Unit Test Runner

This document describes potential designs for a BDD-style test runner.

## Motivation

There's a need for unit testing, but the existing frameworks are largely inactive and can't easily be adapted.

## Testing Philosophy

BDD style, meaning ``describe`` and ``it`` is used to define test suites. Why?

* Easy to understand
* Similar to the existing frameworks
* Requires little boilerplate
* Flexible enough for all basic unit testing needs
* Simple enough to implement from scratch
* Lends itself well to domain-driven design

## Alternatives

* Make ``busted`` work the way it should (painful)
* Attempt to fit ``luaunit`` into the BDD framework (impedance mismatch)
* Try out some of more niche frameworks listed on [lua-users.org](http://lua-users.org/wiki/UnitTesting) (unlikely to be fruitful)
