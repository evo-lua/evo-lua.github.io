# Coding Conventions

An overview of the stylistic conventions used in the codebase

## About this Document

This is a reference, not an explanation. For the rationale behind these conventions, see [RFC: Code Conventions](/docs/background-information/design/drafts/code-conventions)

## Lua Conventions

There's only a few things that are somewhat important to me (I think):

* Lua-C bindings implemented by external libraries generally use `snake_case` (mostly because it can't be changed)
  * Example: `webview.eval()`
* Lua libraries written for the runtime itself should be written in `camelCase`, with lower-case module names
  * Example: `bdd.startTestRunner()`
* Lua-C++ bindings written for the runtime itself should be written in `PascalCase`, and prefixed with `C_*`
  * Example: `C_FileSystem.ReadFile()`
* The standard Lua module syntax (return table of exports) is used for every module and library
* OOP constructors are called ``Construct`` but never used explicitly (as in ``local myObject = Object:Construct()``)
  * Instead, I decided to use a Pythonesque/early-JS-style function call convention: ``local myObject = Object()``
* Constants and enum values are written in ``SHOUTING_CASE`` (yes, I made that term up)

It can be argued that combining multiple styles is confusing (and it may be so), but for the time being that's how it is.

## Lua Example: Object-Oriented (Class Module)

The following code implements a Lua class module that should help illustrate the code conventions:

```lua title=code-conventions-example.lua
-- Modules, classes, and high-level APIs use PascalCase
local MyExampleClass = {}

-- Constructor function that will be hidden via __call metatable magic
-- The colon (:) symbol is required for OOP code so that self is passed as the first parameter
function MyExampleClass:Construct()
	local instance = {}

	setmetatable(instance, self) -- Sets up the inheritance hierarchy

	return instance
end

-- This allows instantiation like so: local myExampleInstance = MyExampleClass()
MyExampleClass.__call = MyExampleClass.Construct
setmetatable(MyExampleClass, MyExampleClass)

-- Functions that aren't part of the exported API use camelCase
local function standaloneFunctionThatIsNotExported()
	local someLocalVariable = 42 -- Variables use camelCase, as well
end

-- Module-level functions use PascalCase, too
function MyExampleClass:DemonstrateBindingsUsage()
	-- Low level APIs use snake_case (for better or worse. It's out of my hands...)
	-- They are direct LuaJIT-FFI bindings or Lua-C-bindings, and expose cdata (or userdata)
	local someLowLevelBinding = require("binding")
	someLowLevelBinding.some_c_api_called_from_lua()

	-- High-level APIs use PascalCase, regardless of whether they're implemented in Lua or C++
	-- A high-level API is one that abstracts C/FFI details away for convenience and safety
	-- They may be implemented in Lua or C++ depending on performance requirements
	C_HighLevelAPI.DoSomething() -- Assumed to be globally available here

	-- Finally, there's non-OOP libraries written in 100% Lua which don't deal with native code
	-- They generally use camelCase naming (just like variables and independent functions)
	local myLuaModule = require("luamodule")
	myLuaModule.doSomethingCool()
end

-- Lua modules always return themselves (as a table of exports)
return MyExampleClass
```

Needless to say, the implementation details are irrelevant here and should be completely ignored.

## C++ Conventions

The conventions are the same as in Lua. Except everything's low-level code, but I don't want `snake_case` everywhere. To be honest,  I haven't decided on a best approach for native code yet as I don't have enough experience with it. For now, all code should use the same style for both languages. Default to `PascalCase` instead of `snake_case` however.

Beyond that, there are a few things I've been trying to do consistently:

* Standalone functions, just like variables, use `camelCase` every time
* Member variables are prefixed, e.g., `m_someLocalMemberVariable` (even if I find it bizarre)
* Global variables aren't used, so there's no `g_thisShouldNeverHappen` anywhere
* Namespaces use `PascalCase`, such as `ThisDoesReadNicely::SomeFunctionNameGoesHere()`
* Speaking of which: Function names for namespaces and classes also use `PascalCase` (as above)
* I also try to avoid preprocessor instructions (especially ``#define``) and use ``const`` values instead

There's probably a lot more to be considered, but I'm not a C++ programmer. If you have any ideas, let me know!

## Formatting

These guidelines only apply to things that require human interaction. Formatting conventions are handled by ``clang-format`` and ``stylua``, precisely so that no thought needs to be wasted on them beyond what was needed to initially set up some rules. If there's a good case to be made for changing the formatting, I'm all ears (except for tabs vs. spaces).

Seriously, anyone who proposes using spaces will be fed to my pet hamster. No, I don't actually have a pet hamster. *Yet.*

## Disclaimer

These are not necessarily the best (or even good) conventions. In fact, they may seem quite weird. This is mostly just a description of what I've been using. Thinking at different levels of abstraction is necessary when dealing with native code and Lua, as well as FFI or regular C-API bindings, so that's why they're based on proximity to low-level code.

As for C++ conventions, I really have no idea what I'm doing here. So I mostly just made it so that the code looked nice.
