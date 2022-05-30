# Event Handlers

Events are notifications that your program can subscribe to when needed.

## Event Types

There is only two event types currently:

* Events that indicate something is **about to happen** use present tense, like ``SCENARIO_LOAD``
* Events that indicate something **already happened** use past tense, like ``SCENARIO_LOADED``

In the first case, the scenario is going to start loading right after the event fired - but *it hasn't started yet*. In the latter case, the scenario has already loaded and all information that is known about it should be available to you.

## Testing Primitives

TBD: Is this really needed? Maybe for different reporters (HTML, TAP)... so, later?

TODO Commit to branch and shelve it for now?

### Test Suite

When using test suites, the following events may be of interest:

* ``TEST_SUITE_SCENARIO_ADDED``
* ``TEST_SUITE_SCENARIO_LOADED``
* ``TEST_SUITE_EXECUTION_STARTED``
* ``TEST_SUITE_EXECUTION_FINISHED``
* ``TEST_SUITE_REPORT``
* ``TEST_SUITE_REPORT_FINISHED``

TODO Reference, not concepts?

### Scenario

Test suites trigger event handlers when running scenarios. This happens in a well-defined order:

1. ``SCENARIO_LOAD``: Event is fired when the test suite first imports the scenario, and triggers its ``OnLoad`` handler
2. ``SCENARIO_SETUP``: Event is fired when the scenario runs its ``OnSetup`` method, after the test suite was started
3. ``SCENARIO_RUN``: Event is fired when the scenario executes its main body, the ``OnRun`` method, after the setup
4. ``SCENARIO_EVALUATE``: Event is fired when post-conditions are evaluated, before ``OnEvaluate`` is triggered
5. ``SCENARIO_CLEANUP``: Event is fired when the scenario was run, before the ``OnCleanup`` method is called
6. ``SCENARIO_REPORT``: Event is fired at the very end, before the results of the test run for this scenario are displayed

These events are what causes the runtime to execute the various event handlers you can register in a scenario file (``OnSetup``, ``OnRun``, ``OnEvaluate``, ``OnCleanup``, etc.). By default, an empty placeholder is used, and by overriding it with your own implementation you're telling ``evo`` what should be happening in each of the tested scenarios.
