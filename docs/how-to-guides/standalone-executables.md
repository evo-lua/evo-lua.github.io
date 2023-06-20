# Standalone Executables

Learn how to package your Lua apps for distribution to end-users

## Introduction

Since Lua is an interpreted scripting language, it doesn't allow distributing binary releases on its own. However, there's a workaround:

Instead of compiling Lua files to binary objects, you can simply distribute the scripts as text files (or bytecode objects). However: Since end-users likely won't have a Lua interpreter available, you must ship one alongside the application's script files. This is the approach that Evo takes, but the scripts are bundled into a ZIP archive and embedded into the executable you distribute to the user's system.

The interpreter can then detect the presence of a ZIP archive inside its own executable and read data from it as needed. To run your application, the interpreter will extract the files at runtime and load them "behind the scenes", invisible to the user. The concept may seem a bit strange, but it works because ZIP files can also be executables. It's similar to Java's JAR files or the Windows installers of old.

This page describes the options that Evo supports out of the box for creating these executable ZIP files, and limitations to the approach.

## Building Standalone Apps

There's only two steps needed to create a standalone executable:

1. Prepare a directory that contains only the files to be distributed in a ZIP archive
1. Run `evo build` in this directory (or provide the path to it as an additional argument)

You should see a summary with some technical details about the executable that was built:

![Console output displayed when successfully building a standalone app via 'evo build' command](build-standalone-app.png)

After the process has completed, you will notice the presence of two build artifacts:

1. The standalone executable itself (here called `hello-world-app.exe`), which end-users should be able to run on their system
1. A ZIP archive that contains all the bundled files (here called `hello-world-app.zip`) - look inside to see what you would ship

The executable is all you need to distribute; it includes the ZIP archive alongside the Evo runtime used to build it (and a signature).

## Extracting Bundled Files

You'll need to create a "loader" called `main.lua`, which initializes the rest of your application. Place it in the directory that you package.

Evo will by default only extract the entry point, `main.lua`, and run it when it detects a self-contained app. This means that any extra files you might need (such as DLL/SO files or Lua scripts), you'll have to extract from the ZIP archive. In the future, helpers for this could be added, but it's somewhat difficult to predict what exactly is needed here so for now the runtime only provides the most basic support.

For the time being, you can distribute other files on disk or extract everything to a temporary directory before loading the app.

## Native Look and Feel

You may want to perform cosmetic surgery to provide a better user experience, such as setting an app icon or hiding the console window. Evo currently doesn't provide any tools to help with this part of the process, though it's something to consider for the future.

Since icons are always platform-specific, you'll need to use third-party tools (e.g., `wine` has some for Windows, or Apple's icon utilities).

## Limitations

The nature of interpreted languages puts some limits on what you can do. The following might help you decide if this works for you.

### Binary Size

If you're shipping a full Lua runtime alongside your application, this will clearly increase the total binary size of the artifacts you have to distribute. While Lua interpreters are generally tiny, as a full-fledged runtime environment Evo is a bit bulkier, and you'll be effectively adding all of the contained libraries regardless of whether you actually use them. Especially for small programs this could be significant.

The good news is that it's not that big compared to other options, and also you could ship a leaner, trimmed-down version of Evo.

### Obfuscation

While this provides very limited security against tampering or reverse engineering efforts, publishing Lua code (or even bytecode) very clearly makes it relatively easy to access a more readable version of the source code. This generally won't be an issue for open source projects, and even many proprietary applications (as few users would bother to read the source code even if you waved it in their face).

For commercial use cases, however, you may want to consider moving business-critical parts into a native DLL/SO file and ship that.

### Runtime Dependencies

Although Evo comes with quite a few "batteries" that you don't need to manually distribute, the builtin APIs don't cover every use case.

Complex programs often require the help of advanced libraries, which are usually bundled alongside the app (as DLL or shared object files). While LuaJIT can easily access these, you will still need to include them. If creating a standalone executable, you'd then have to extract all the needed libraries at runtime before you can dynamically load them. This is what other interpreted languages do, as well.

Unfortunately, shipping binaries to different Linux systems may be troublesome. But at least users there won't necessarily expect it.

### Licensing Issues

Because you're providing a complete runtime (including lots of third-party code) alongside the program, certain licensing terms must be adhered to. In the case of Lua, LuaJIT, and indeed all of Evo this should however be unproblematic. All of them use permissive open-source licenses that should play nice, but it's best to conduct a proper legal review to ensure compliance won't cause any problems.

For open-source projects, there obviously won't be any issues. But it's still good practice to review your dependencies and their licenses.

## Alternatives

If the above limitations are making the "combined ZIP executable" approach untenable, you could consider some other options:

- Using an installer (such as MSI or DMG) to distribute files to the end user would give you more fine-grained control
- Compiling a binary "addon" (DLL/SO) and loading it with LuaJIT's foreign function interface can be a viable alternative
- Writing the application in a compiled language altogether and distributing binary artifacts only would be the last resort
