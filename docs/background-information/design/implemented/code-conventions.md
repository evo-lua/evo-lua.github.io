# RFC: Code Conventions

This document describes the rationale behind Evo's code conventions

## Separate Styles for Lua and Native Components

What is idiomatic in Lua may not be in C or C++, and vice versa. Additionally, low-level code often is written in a way that makes it more difficult to read and understand[^1]. Programmers working on a high-level of abstraction presumably have different expectations than those working with lower-level languages and concepts, so it seems reasonable to treat native code differently than Lua code, especially since much of the native libraries are provided by third parties[^2].

*[^1] I'm primarily referring to naming conventions, use of opaque abbreviations, lack of useful abstractions, lack of modularity, and other such issues unrelated to the syntax of the language itself (which may further add to the problem).*

*[^2] The code written by library authors may follow arbitrary conventions that don't necessarily translate well to Lua.*

## Finding a Stylistic Vision

But what styles should be adopted? Unfortunately, there is no one true way of writing C or C++, and definitely not Lua.

Let's first see what some of the existing conventions are, where they originate, and what the benefits and drawbacks are.

## A Survey of Code Style Issues

### Tabs vs. Spaces

Here are some benefits of using tabs:

* Semantically, the tab key is exactly what you want to use when indenting code
* It somewhat reduces file size on disk, at least for raw textual data
* The indentation size can be adjusted to provide a perfect experience for every developer

And here are some benefits of using spaces:

* You get to train your fingers by pressing the space key twice as many times as would be required for pressing tabs
* You may be earning more money than those tab-indenting peasants (or so [this blog post half-jokingly claims](https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/))

This is actually not a serious comparison (if you couldn't tell). I can't think of any real reasons to use spaces over tabs, so let's not. If someone disagrees, it is trivial to set up some tooling that automatically converts between the two.

### Capitalization Rules

I'm not an expert in Human-Computer-Interaction, but [some cursory research](https://ux.stackexchange.com/questions/67454/how-does-capitalization-affect-readability) indicates that there may be benefits to adopting capitalization for "important" concepts, which hopefully would improve reading comprehension.

So what are the drawbacks of using capitalized names? I can think of a few:

* You'll have to think even harder about whether to (and what to) capitalize
* If you overshoot the target, you may end up in the [Kingdom of Nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html) - a terrible thought, indeed

None of that seems enough of a drawback to eschew capital letters altogether, though.

For the documentation, I would consider title case more "authoritative" and sentence case more conversational.
It's probably acceptable to keep the `lowercase` or even `snake_case` for low-level code, especially the embedded libraries. And for the Lua (and C++) code I'd consider `camelCase` or `PascalCase` to be a better convention that fits stylistically.

### Semicolons

Some less civilized languages still cling to this ancient tradition. Thankfully, Lua has made them entirely optional.

Needless to say, they add very little (except visual clutter) and so there needn't be any in Evo's Lua codebase.

### Magic Globals

The global environment is a key concept in Lua's design, so painstakingly avoiding to use it seems silly. Primarily, the question is which nonstandard builtins and libraries should be exported globally. This number should be relatively small, though it needn't be zero, because there are some drawbacks to providing additional global exports:

* Anything in the global environment may potentially collide with userland code
* If unused packages are preloaded and exported, resource usage increases (slightly)
* There is a much smaller benefit for frequently-accessed globals in places where it would usually be upvalued
* This is because typing one line to `require` a module is mostly the same work as creating a local copy of a gobal

However, there are certain areas where having packages or even just functions pre-exported really saves a lot of hassle:

* In test files, which won't benefit from local upvalues, assertions and testing primitives should be readily available
* Commonly-used functions that don't get upvalued anyway, such as formatted printing (`printf`)
* Cross-cutting concerns, such as functions for logging debug messages (e.g., ``WARNING`` or ``DEBUG``)

I think it's perfectly alright to export those as globals, and I can't see there being enough of them to cause problems.

### Enumerations and (Shared) Constants

I don't think anyone has ever invented a better convention, so let's just use the C-style ``CAPITAL_CASE`` naming here.

## Autoformat Wherever Possible

Regardless of which style one considers ideal, it's clear that any and all formatting issues are moot with `clang-format`.

Changing the rules is trivial, so let's focus on the stylistic questions that can't be automated: Capitalization and globals.

## By Royal Decree (TL;DR)

I hereby declare the following conventions should be used:

* Low-level bindings exposing embedded libraries use `snake_case`, because that's what those libraries use as well
* C++ code uses `camelCase` for variables and regular functions, but `PascalCase` for objects, namespaces, etc.
* Lua code uses `camelCase` for regular functions or variables, but `PascalCase` for objects and high-level APIs

The specifics shall be published on a [separate reference page](/docs/references/code-conventions) posthaste. You may now leave this website, peasant.[^1]

[^1] *Actually, I'm always open to changes if there are good reasons to use a different convention.*
