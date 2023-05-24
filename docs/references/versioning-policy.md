# Versioning Policy

This page describes the versioning scheme that Evo uses and the implications for API consumers

## Semantic Versioning

Before version `1.0.0`, no particular versioning scheme is used as most of the core functionality will likely change very frequently.

Starting with version `1.0.0`, [semantic versioning](https://semver.org/) shall be adopted - with the following caveats:

- Breaking changes cause a major version bump when they affect _stable_ (and _deprecated_) interfaces only
- Interfaces marked as _experimental_ are deliberately excluded since they're likely to require more iteration
- Bindings and other internal low-level glue code that's largely provided by third parties is similarly excempt

:::info About undefined behavior

A _breaking change_ is one that causes at least one of the existing tests to fail. That is to say, tests are the executable specification.

Untested code is, technically-speaking, undefined behavior and not subject to versioning guarantees. Rely on it at your own peril!

:::

## Stability Levels

All API docs reference a set of standardized stability levels. Here's how they look:

<External/>
<Experimental/>
<Stable/>
<Deprecated/>

## Depreciation Process

Interfaces that have been marked as _deprecated_ will be removed as soon as possible (usually with the next major version bump) if they incur significant maintenance cost or otherwise prevent the evolution of the runtime's feature set. Otherwise, they may be removed at a later point in time, depending on how important the functionality is and how closely it aligns with the project's primary goals.

## Release Cadence

While there are versioned releases for the runtime, there's no fixed timeline or schedule. Tagged versions effectively implement "rolling releases" and new artifacts will be published automatically as often as is practical. The goal is to always have releasable code, anyway.

## Integration of Upstream Changes

Changes to external dependencies are pulled in frequently (e.g., once per tagged release). Unless there's a serious issue preventing the integration of upstream code, the runtime should always include the latest commits from all of its embedded libraries.
