---
sidebar_position: 1
---

# Command-Line Interface

A list of available command-line options for the evo runtime

## App Bundles

Generate zip app

Load zip app (see script execution)

Query bundled file system (maybe not via CLI though?)

## Script Execution

Load lua file

Load bundled app (folder, zip?, network?, bytecode?)

Sandbox/security

## Test Runner

Command: `evo test`

Arguments: `test1.spec.lua test2.spec.lua ... testN.spec.lua`

Effect: Execute all of the provided spec files using the [built-in unit test runner](/docs/how-to-guides/unit-testing)

Usage example:

``evo test test.spec.lua`

Advanced usage:

You can execute all tests in a given folder by accumulating them with standard command-line tools

`evo test $(find ...)`

Equivalent API:

- C_Runtime.Run

## Version Queries
