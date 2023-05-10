---
sidebar_position: 6
---

# Contributing

Thank you for your interest in helping to improve the project! This section will help you get started.

## Prerequisites

### Contributing Code to the Lua Runtime

For code contributions, you need at least working knowledge of the various technologies used:

- [Lua](https://www.lua.org/pil/) (and possibly [LuaJIT extensions](https://luajit.org/extensions.html), as well as its [Foreign Function Interface](https://luajit.org/ext_ffi_api.html))
- [C++](https://www.learncpp.com/) for the native glue layers
- [Git](https://git-scm.com/book/en/v2/) for version controlling your changes
- [Ninja](https://ninja-build.org/) is the build system used, though you probably don't ever need to mess with it
- [clang-format](https://clang.llvm.org/docs/ClangFormat.html), [luacheck](https://github.com/lunarmodules/luacheck), and [StyLua](https://github.com/JohnnyMorganz/StyLua) help with formatting and static analysis

You can use GitHub's web UI, the GitHub desktop app, or any other method to submit a [Pull Request](https://docs.github.com/en/pull-requests).

### Improving the Documentation

If instead you wish to contribute to the documentation (i.e., these pages), you might need:

- Basic knowledge of [Markdown](https://www.markdownguide.org/) (and possibly [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) or [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) if you want to modify the layout)
- For advanced features, you will require some experience with [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) and [React](https://react.dev/)
- A little technical writing expertise might be helpful (recommended reading: [Technical Writing Guide](https://developers.google.com/tech-writing))
- For more elaborate work that you need to test locally, you may want to install [NodeJS](https://nodejs.org/en)
- The documentation website is built using [Docusaurus](https://docusaurus.io/), so feel free to read up on that too

In many cases, you can simply use the GitHub UI and the "Edit this page" button to propose changes.

## Building the Lua Runtime

You can follow this guide to compile modified versions of the runtime and test your changes: [Building from Source](/docs/how-to-guides/building-from-source)

If you face build issues (which is unfortunately a common occurence with C++ development), don't hesitate to ask for help!

## Building the Documentation

There's no dedicated guide for building the website, since the process is rather simple:

1. Clone the repository: `https://github.com/evo-lua/evo-lua.github.io`
1. Change into the root directory: `cd evo-lua.github.io`
1. Install dependencies via the Node Package Manager: `npm install`
1. Start a local development server: `npm start`
1. A browser window should open to preview your changes (with live updates)

If you wish to test the build process, you can create a production release via `npm run build`.

## Commit Message Guidelines

Please use commit messages in a similar style to the ones already existing:

- Phrased in present tense: "Add xyz to do something awesome"
- Prefixed with a sensible category: `Runtime: Add a new API for xyz"
- The message should make sense when read (without the prefix) as "This commit will ..." (commit message here)
- Don't worry about getting this wrong, it's trivial to fix before the changes are merged!

## Code Style and Consistency

This is a bit hit-or-miss currently as I haven't settled on a final policy yet. If you just try to follow what's already there it should be fine.

Generally speaking, the code should be easy to read, understand, and maintain in the future above all. See also: [The Evo Philosophy](/docs/background-information/the-evo-philosophy)

## Automated Testing (CI)

Both the runtime and the documentation (to a lesser extent) make heavy use of [GitHub Actions](https://github.com/features/actions) to guarantee releasability:

- Every change is submitted as a Pull Request and must pass the entire pipeline before being merged into the `main` branch
- New features must be tested in as far as is sensible - no need to cover every possible scenario, but the code should provably work
- You can check the pipeline status [here](https://github.com/evo-lua/evo-runtime/actions) (for the runtime) and [here](https://github.com/evo-lua/evo-lua.github.io/actions) (for the documentation website) - the end result should be green
- The workflow definitions are located [here](https://github.com/evo-lua/evo-runtime/tree/main/.github/workflows); there is one for each platform, and several others for miscellaneous quality checks
- Documentation for GitHub Actions can be found [here](https://docs.github.com/en/actions) (it's easy to get started, even if you've never used them before)

Feel free to check the existing test cases for inspiration, and don't hesitate to ask for help if you need it!

## Final Words

Hopefully, this didn't seem too daunting! Let it be said that just getting started is half the battle - iteration will then take care of the rest.
