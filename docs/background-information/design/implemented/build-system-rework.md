# RFC: Ninja-based Builds

This document lists reasons for replacing Luvi's CMake build system

## Motivation

Evo-Luvi is based on Luvi, and as such uses the same build system (based on [CMake](https://cmake.org/)). Multiple issues have surfaced:

* CMake adds an exceeding amount of complexity and an entirely new (poorly-designed) language to the stack
* Integrating external dependencies in the build process has proven to be a huge pain in at least some cases
* The existing build system accounts for many unsupported use cases, unnecessarily increasing complexity further
* It uses version 2 of CMake, which makes the code difficult to maintain and extend, or migrate to "modern" CMake
* Builds using WSL can randomly fail with segmentation faults that I'd rather not spend more time debugging
* CMake builds also frequently fail for obscure reasons, don't build what they're supposed to, or rebuild too many things (might be a configuration issue)
* Speaking of which, debugging CMake files is not fun (it's not a fully-fledged language, with poor tooling)
* Builds are somewhat slow when using the standard CMake generators, and Ninja support is experimental
* In fact, the Ninja build files that CMake creates are huge and complicated, which doesn't bode well for their quality
* The ability to create VS solutions (and use the VS debugger) aren't very valuable because the C code involved consists largely of glue code and Lua bindings

After spending obscene amounts of time battling build-related problems, it may be time for a change of scenery.

## Goals

A reimagined build system for the runtime should fulfill the following requirements:

* Anyone familiar with Lua (and possibly C/C++) should be able to make changes to the build system easily
* Those familiar with standard Makefile builds (widely used in the Unix world) should experience less friction
* Support for any optional configuration, toolchains etc. should be dropped to minimize the maintenance burden

Since Makefiles aren't ideal for reducing build times, Ninja build files might be created from within Lua scripts.

## Design Decisions

To cut down on accidental complexity, the build system should only support a minimal and "recommended" configuration:

* One "blessed" configuration, building the runtime as an executable that's linked with a minimal set of libraries
* Only the GNU compiler toolchain should be supported, since it's free software available on all relevant systems
* Incremental builds should be handled by Ninja, with support for gmake, MSVC and other CMake generators dropped
* The build configuration (``ninja.build``) should be auto-generated in Lua, which is trivial given the restrictions above
* Third-party libraries may use Makefiles, CMake or any other build script that can be integrated via ninja commands
* Build tools must function with only standard LuaJIT functionality, i.e., be usable after compiling `luajit` and nothing else

## Evaluation

This design should cover all of the requirements:

* The build configuration can be trivially changed by anyone with basic Lua knowledge
* Builds are fast thanks to relying on Ninja's incremental build functionality (same or better as CMake)
* The ``ninja.build`` files can be understood by anyone familiar with Makefiles if low-level debugging is required
* Compatibility with third party libraries is unaffected (ninja can easily build them by invoking ``cmake`` or ``make``)
* More complex configuration needs that may arise in the future can be scripted with maximum flexibility

## Alternatives

The following alternatives have been considered and (at least partially) explored before settling on a decision:

* Attempt to migrate the CMake build system to "modern" CMake and prune unused features (still a giant headache)
* Use another established (Lua-based) build system, like xmake or premake (only alleviates the language issue)
* Use another established (non-Lua-based) build system, like meson (Python-based syntax, limiting language)
* Move to using Ninja build files directly (efficient, but difficult to maintain as they're glorified makefiles)
* Build with [zig](https://ziglang.org/), which has been suggested by the luvi authors (requires rewriting external build scripts; not Lua)
* Use regular build scripts (cannot do incremental builds, which significantly slows down development)

None of these options really seems all that appealing, as they don't fully solve the outlined problems.

## Disclaimer

For a regular C library, CMake would be more valuable due to its status as de-facto standard. In this case, there's barely any C code (that isn't glue) and using the runtime as a library makes no sense, so the headaches really aren't worth it.
