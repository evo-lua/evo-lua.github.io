# Integrations and Tooling

Discover additional tools that can ease your development workflow

## Code Completion

If you're using [Visual Studio Code](https://code.visualstudio.com/), any plugin that supports Lua 5.1 should also work with Evo. Recommendation: [Lua Language Server](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)

Note that LLS will currently only show the Lua/LuaJIT APIs and not the additional ones referenced [here](/docs/category/api/). More info on this soon™.

## Static Analysis

You can use [luacheck](https://github.com/lunarmodules/luacheck) or [selene](https://github.com/Kampfkarren/selene) to analyse your codebase and find potential issues. Both can be used with Evo out of the box.

They, too, will fail to recognize the additional APIs that Evo provides. For now, you can use [this luacheck configuration](https://github.com/evo-lua/evo-runtime/blob/main/.luacheckrc) as a workaround.

## Code Formatting

All formatting tools that support LuaJIT and Lua 5.1 should work. [StyLua](https://github.com/JohnnyMorganz/StyLua) is a great one and it has a [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.stylua), too.

## GitHub Actions

Consider adding automated tests via [GitHub Actions](https://github.com/features/actions) to your repository. The [setup-evo-lua-environment](https://github.com/marketplace/actions/setup-evo-lua-environment) action will take care of setting up the Lua runtime for you. This action is maintained as part of the project, with the goal of providing a better developer experience.

There are also third-party actions to set up [luacheck](https://github.com/lunarmodules/luacheck) and [selene](https://github.com/NTBBloodbath/selene-action), though it's unclear whether the latter is still maintained.

## Other Tools

If you're aware of useful tools that are missing here or you would like to create some for Evo, please [open an issue](https://github.com/evo-lua/evo-lua.github.io/issues/new) and get in touch!
