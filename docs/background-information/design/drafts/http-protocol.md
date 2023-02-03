# RFC: HTTP Protocol Implementation

This document outlines the design for Evo's HTTP implementation

## Motivation

HTTP protocol support is absolutely mandatory for any modern language ecosystem and therefore not optional. It's also especially important for one of the projects I'm personally working on, with said project being one of the main reasons for developing a customized runtime in the first place. There are several issues with the existing Lua implementations:

- Most standard implementations will not easily integrate with the libuv-based event loop
- Said event loop (and other libuv APIs) are a core feature of the runtime and cannot be stripped away
- There's also the questions of security, performance, maintenance status, and cross platform compatiblity
- All other implementations that I have surveyed did not inspire confidence in this regard

Since Evo is a purely LuaJIT-based platform, of course there are native libraries to consider as well. However:

- Anything "large and complicated" should be avoided, as any viable solution must neatly integrate with the runtime
- All C++ libraries I would rather avoid, due to lack of familiarity with the technology but also for ease of integration
- If a library doesn't have at least good documentation and sees regular updates, I can't justify its inclusion at all
- If not battle-tested extensively, it is doubtful whether it can be considered secure and performant enough
- Most libraries do not seem to integrate with libuv's event loop, often featuring their own loop controls

Given all of the above concerns, precious few libraries were left that seemed like they might be a good fit

## Goals

- Must have a battle-tested implementation, so that there's a higher chance of it being secure
- Must have decent documentation and/or a responsive, active maintainer team that inspires confidence
- Competitive performance, which essentially excludes any pure Lua implementation right out of the gate
- Reinvent as little of the wheel as possible (ideally, just some glue code and high-level APIs)
- Must not complicate the build process disproportionately for the perceived benefit (not another OpenSSL, _please_)
- Needless to say, it must be made available for free and under a compatible (and permissive) open-source license

## Design Decisions

After much research and experimentation, the following crystallized as the simplest design that fulfills all requirements:

- HTTP parsing will be handled by NodeJS' [llhttp](https://github.com/nodejs/llhttp) library, which is to be loaded via custom LuaJIT FFI bindings
- Since llhttp's API is push-style and demands callbacks from C to Lua, this needs a thin wrapper layer (written in C)
- This wrapper is extremely minimal and only serves to store the message details in a form that Lua can read
- Lua should then query the state after each parsing step to trigger events inside the runtime
- One parser per HTTP connection should be used, as sharing them may complicate the design too much

## Evaluation

- NodeJS is a usage scenario very closely related to Luvit (and therefore Luvi/Evo), so using their parser is a great fit
- The NodeJS team has a vested interest in keeping their parser updated and secure, as well as to accept reports/fixes
- Its performance is excellent and there appears to be little overhead even when using it via the FFI
- However, the callback issue is a real bummer that kills performance of any "naive" implementation
- Luckily, Mike Pall himself has posted instructions for how to circumvent the FFI-callback issue in principle
- Therefore the only issue is with writing a thin wrapper in C that must briefly store excess data (needs benchmarking)
- It's trivial to write a FFI wrapper for llhttp and the build process is dead simple, too

## Alternatives

The following alternatives have been considered and (at least partially) explored before settling on a decision:

- Use Luvit's `http` library (extremely slow, probably insecure, not actively developed, questionable API design)
- Embed a native HTTP/WS library and let it do all of the heavy lifting (cannot integrate with libuv's event loop cleanly)

While some of the ideas seemed promising at first, in practice they turned out to be more hassle than they are worth.
