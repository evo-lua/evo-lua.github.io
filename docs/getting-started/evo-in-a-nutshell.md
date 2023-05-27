---
sidebar_position: 100
---

# Introduction: Evo in a Nutshell

If you're completely new, this article can give you quick answers

## What problem does Evo solve?

Lua is an embedded scripting language, and doesn't have many features out of the box. While this minimalism is by design, it means that you almost always need additional libraries to do something that's actually useful. These libraries are frequently outdated, severely underdocumented, difficult to use, or just don't work very well/at all. Evo is an effort to create a standalone platform that gives users access to the most important libraries, so that they can focus on just writing code instead of having to deal with all of the above.

## How does it work?

Evo is a standalone application written in C++, which embeds Mike Pall's [LuaJIT engine](http://luajit.org/) alongside a host of general-purpose C and C++ libraries. Then it adds more tooling, custom Lua libraries and everything that the runtime doesn't already provide on top. This results in a fast, flexible, and powerful Lua interpreter (with included [just-in-time compiler](https://en.wikipedia.org/wiki/Just-in-time_compilation)) which can - _only in principle, not in terms of maturity or features (!)_ - be compared to runtimes for other languages, like [Node.js](https://en.wikipedia.org/wiki/Node.js) (JavaScript), [PyPy](https://en.wikipedia.org/wiki/PyPy) (Python), [Mono](<https://en.wikipedia.org/wiki/Mono_(software)>) (.NET), and the [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine).

The above is only an approximation since all engines work differently and feature unique library ecosystems. But generally, Evo is most closely related to NodeJS because it is based on a similar event loop mechanism. It even uses the same C library, which is called [libuv](http://docs.libuv.org/en/v1.x/design.html).

## What are the key features?

Here is a short list covering some of the things that you can do with Evo:

- Network programming ([DNS](https://en.wikipedia.org/wiki/Domain_Name_System), [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol), [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol), [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), and [WebSockets](https://en.wikipedia.org/wiki/WebSocket))
- File system access, both buffered and via data streaming
- Multithreading, launching subshells, timers, and [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication)
- Data compression, decompression, and integrity checks
- Running fully-powered web applications (in a native browser window), inside of the Lua runtime
- If all else fails: Easily integrate other C and C++ libraries with your Lua program to add what's missing

There's much more to discover, so feel free to take a look around!

## How can it be used?

In the most simple case, you tell Evo to execute a Lua program (on the command line) and then it goes off and runs it. Realistically, you will quickly need more than just the standard Lua libraries and that's where it gets interesting: If you're looking to implement more advanced program functionality, such as networking via sockets, reading/writing files, data compression or even 3D rendering, you can call into special Lua APIs to use the builtin libraries. All this becomes much simpler to do in Evo and it often runs faster, too. The most important benefit is that you can accomplish a lot of the above even with relatively little experience - entirely from Lua (and not C/C++).

## Can it be integrated with other libraries?

As for compatibility with the standard Lua ecosystem: There's nothing preventing you from using the existing libraries. However, due to the asynchronous nature of Evo's event loop, many of the more complex tasks (such as file system access or networking) function very differently here than they do in popular libraries like [LuaFileSystem](https://lunarmodules.github.io/luafilesystem/) or [LuaSocket](https://lunarmodules.github.io/luasocket/). This means that, were you to use these libraries, your program could potentially run much slower than it should. Essentially, the library calls will prevent the runtime from doing its job.

The good news is that you shouldn't really need any of those "problematic" libraries, because Evo can do many things out of the box. Other libraries and tools written for Lua 5.1 should work without hiccups, though newer versions are only partially supported by the LuaJIT runtime. In any event, you can always add more functionality by accessing libraries written in C or C++. Integrating native code would normally be a somewhat painful and error-prone process, but with LuaJIT's [foreign function interface](http://luajit.org/ext_ffi.html) it doesn't take much work.

## What is the development status?

Since documentation like this can easily become outdated, you should check for yourself. Follow the activity of the [evo-lua container organization on GitHub](https://github.com/evo-lua) if you're interested to see where this is going. Even better: You can help propel development forward by giving feedback, making suggestions, or other contributions (including code, testing, and documentation) if you think the effort is worthwhile.

## How do I get started?

The documentation is right here, so all that's left is to [install Evo](/docs/getting-started/installation) and give it a spin! If your platform doesn't have release binaries, you can take the code and [build Evo from source](/docs/how-to-guides/building-from-source), provided your platform is already supported. If it is not, please [open an issue](https://github.com/evo-lua/evo-runtime/issues/new) (after checking that none already exists for your platform) and let me know so I can look into what it would take to support it. Please do understand that I can't feasibly support every obscure configuration - or at least not fully - unless users are willing to pitch in and help.

## Where can I get support?

Please open an issue describing your problem _in as much detail as possible_. If you don't provide enough context, I can't assist you.

## How can I contribute?

All contributions are very welcome! [This guide](/docs/contributing) can help you get started. If you need assistance, please use GitHub issues deliberately.

## What is the governance model?

There isn't one. Evo is developed by a single developer (the humble author of these pages), in their free time. See also: [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life)

## What are the license and terms of use?

Evo is licensed under the [Mozilla Public License, Version 2](https://www.mozilla.org/en-US/MPL/2.0/FAQ/) (GPL-compatible). You can [read the full license text on GitHub](https://github.com/evo-lua/evo-runtime/blob/main/LICENSE).

This is a free and permissible license that should suit most use cases. If you would prefer a different license model, please get in touch.
