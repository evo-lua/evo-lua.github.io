# bdd

Behavior-driven testing library for running unit tests

## Status

<Experimental/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local bdd = require("bdd")
```

## Functions

### describe

Signals to the test runner that a new [section](/docs/how-to-guides/unit-testing#sections-and-subsections) should be started. You should only ever call this from within a test file.

<Function>
<Parameters>
<Parameter name="label" type="string"/>
<Parameter name="testFunction" type="function"/>
</Parameters>
</Function>

### getElapsedTime

Returns a [human-readable string representation](#gethumanreadabletime) of the elapsed time for the current test run, which is the period between the last call to [startTestRunner](#starttestrunner) and now. If the tests have all been executed, the elapsed time is the total duration of the test run.

<Function>
<Returns>
<Return name="elapsedTime" type="string"/>
</Returns>
</Function>

### getErrorDetails

Returns a table containing error information about the last (or current) test run. Errors accumulate in-order; i.e., the table is an array.

<Function>
<Returns>
<Return name="errorDetails" type="ErrorDetails[]"/>
</Returns>
</Function>

<Struct name="ErrorDetails">
<Member name="message" type="string"/>
<Member name="specFile" type="string"/>
<Member name="stackTrace" type="string"/>
</Struct>

### getHumanReadableTime

This utility method formats a duration, assumed to be given in nanoseconds, for human consumption. You cannot rely on the format being stable, just that it's easy to read (for an arbitrary definition of "easy"). It's intended to format the time for completed test runs.

<Function>
<Parameters>
<Parameter name="highResolutionTime" type="number"/>
</Parameters>
<Returns>
<Return name="formattedTime" type="string"/>
</Returns>
</Function>

### getReport

Returns the contents of the internal report buffer. You can use this after the test run has finished in order to print a summary.

<Function>
<Returns>
<Return name="report" type="string"/>
</Returns>
</Function>

### isBasicReportingMode

Returns whether the test runner is set to use the [basic reporting mode](/docs/how-to-guides/unit-testing#basic-reports).

<Function>
<Returns>
<Return name="enabledFlag" type="boolean"/>
</Returns>
</Function>

### isDetailedReportingMode

Returns whether the test runner is set to use the [detailed reporting mode](/docs/how-to-guides/unit-testing#detailed-reports).

<Function>
<Returns>
<Return name="enabledFlag" type="boolean"/>
</Returns>
</Function>

### isMinimalReportingMode

Returns whether the test runner is set to use the [minimal reporting mode](/docs/how-to-guides/unit-testing#minimal-reports).

<Function>
<Returns>
<Return name="enabledFlag" type="boolean"/>
</Returns>
</Function>

### it

Signals to the test runner that a new [subsection](/docs/how-to-guides/unit-testing#sections-and-subsections) should be started. You should only ever call this from within a test file.

<Function>
<Parameters>
<Parameter name="label" type="string"/>
<Parameter name="testFunction" type="function"/>
</Parameters>
</Function>

### report

Adds a given message to the internal report buffer, so that it will be included in the final report after all tests have run. Inserts newlines (`\n`) after each message to simulate print-like semantics. Converts non-string values according to the usual LuaJIT conventions.

<Function>
<Parameters>
<Parameter name="message" type="string"/>
</Parameters>
</Function>

### reset

Resets the test runner's internal state to its default values. This will happen automatically whenever you start a new test runner.

### setBasicReportMode

Enables the [basic reporting mode](/docs/how-to-guides/unit-testing#basic-reports) (must be called before starting the test runner). Only one reporting mode can be active.

### setDetailedReportMode

Enables the [detailed reporting mode](/docs/how-to-guides/unit-testing#detailed-reports) (must be called before starting the test runner). Only one reporting mode can be active.

### setMinimalReportMode

Enables the [minimal reporting mode](/docs/how-to-guides/unit-testing#minimal-reports) (must be called before starting the test runner). Only one reporting mode can be active.

### startTestRunner

Starts a new test runner for the given list of test files. It will merely execute the tests, without reporting results or error details[^1]. After a test run has completed, any errors that occured during it can be queried via [getErrorDetails](#geterrordetails), and reports via [getReport](#getreport).

[^1] _The exact behavior depends on the [reporting mode](/docs/how-to-guides/unit-testing#reporting-test-results) used. In some modes, the runner will fail loudly when encountering an error._

:::caution

Only one test runner can be started at a time. Manipulating its state from inside the tests may lead to undefined behavior.

:::

<Function>
<Parameters>
<Parameter name="specFiles" type="table" />
</Parameters>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
