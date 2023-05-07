---
sidebar_position: 5
---

# Security Policy

This page describes how security vulnerabilities should be reported, and how reports will be handled

## Reporting Vulnerabilities

There currently aren't any official disclosure channels in place. If you encounter a security-critical issue, please get in touch:

- Ideally, contact **RDW#9823** on Discord (via DM) with all the relevant details to discuss how we should proceed
- If you must open an issue in the [GitHub repository](https://github.com/evo-lua/ev-runtime/), mention security but _without giving ANY further details publicly_
- In this case, you should probably include your contact info, (e.g., email address) - keep in mind that anyone can see what you post!

You'll (hopefully) quickly receive a reply and then we can get the issue fixed as soon as possible.

:::caution
It is best practice to **never** disclose security vulnerabilities publicly, at least before having given the authors the opportunity to publish a fix. This will help reduce the possibility of zero-day exploits, where an attacker who learned of the vulnerability can effectively use it against exposed applications before they have a chance to patch the security hole.

This is why the recommended approach is to give details **only in private**, and hold potential fixes locally (or in a private fork) instead of simply opening a (public) Pull Request on GitHub.
:::

For more details, please see the [Wikipedia article on Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).

## What should you include in your report?

Please include all of the following information whenever you report a (potential) security vulnerability:

- Description of the problem
- Potential impact / severity
- Steps to reproduce (ideally in code)
- Whether or not you'd like to be credited (mention in the release changelog) - will default to yes if omitted

## Responsible Disclosure Policy

When a security issue is reported, disclosure happens as part of the release process:

- The issue will be confirmed as quickly as humanly possible (within reason - keep in mind that this is a hobbyist project)
- A new release will be published immediately after the fix has been tested, even if there are no other changes to include
- Its changelog shall contain a category for "Security Fixes" including a categorization and estimate of the potential impact
- There's no dedicated notification process for security releases - users are expected to update frequently, anyway

## Backporting of Security Fixes

No backports, as it directly contradicts the "evolutionary approach" behind Evo's development. Frequent releases alleviate the need.

## Reporting Issues with External Dependencies

If there's an issue with third-party code that Evo depends on, the above still applies. A new release will be published as soon as possible.
