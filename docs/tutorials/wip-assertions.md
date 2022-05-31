---
title: Use the assertion library
---

Learn how to use complex assertions to make testing easier.

## Assertion Library

 TODO: Remove, NYI (separate feature/issue/doc article)

To complement the standard ``assert`` function, complex assertions  for common use cases are also exported globally:

* ``assertTrue``
* ``assertFalse``
* ``assertEquals``
* ``assertNotEquals``
* ``assertDeepEquals``
* ``assertNil``
* ``assertNotNil``
* ``assertTypeOf``
* ``assertThrows``
* ``assertApproximatelyEquals``
* ``assertNotApproximatelyEquals``

These are just shorthands,  they work exactly like assertions in other languages.

## Labelling Assertions for the Test Runner

All of the above assertions support labeling to produce human-readable error messages on failure:

```lua title="assertions-usage-example.lua"

	local scenario = Scenario:Construct("Using complex assertions")

	function scenario:OnEvaluate()
		assertTypeOf(42, "number", "Should be a number") -- true
		assertTypeOf(print, "number", "Should be a number") -- false

		assertEquals(0.1, 0.1000001, "Should ignore tiny differences in floating-point comparisons") -- false
		assertApproximatelyEquals(0.1, 0.1000001, "Should ignore tiny differences in floating-point comparisons") -- true

		assertEquals({ test = { foo = {}}}, { test = {}}, "Should traverse nested tables") -- true
		assertDeepEquals({ test = { foo = {}}}, { test = {}}, "Should traverse nested tables") -- false

		assertThrows(print("hello"), "Should raise an error") -- false
		assertThrows(error("raises an error"), "Should raise an error") -- true
	end

	return scenario

```

Similar to the standard ``assert``, adding a message after the regular parameters will allow you to troubleshoot assertion failures more easily. When using the ``TestSuite`` and ``Scenario`` builtins, these labels will be used in the final report.
