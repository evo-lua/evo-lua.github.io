# path

Lua port of the [NodeJS path library](https://nodejs.org/api/path.html)

## Status

<Stable/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local path = require("path")
```

It's also available as a [global alias](/docs/references/api/globals).

## Functions

### path.basename

Returns the filename and extension of the given `fileSystemPath` (ignoring trailing separators), similar to the Unix [basename](https://en.wikipedia.org/wiki/Basename) command.

If an extension is also given, the matched component (case-sensitive) will be stripped from the result before returning it.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
<Parameter name="extensionToRemove" type="string" optional/>
</Parameters>
<Returns>
<Return name="basename" type="string"/>
</Returns>
</Function>

### path.dirname

Returns the directory path of the given `fileSystemPath` (ignoring trailing separators), similar to the Unix [dirname](https://en.wikipedia.org/wiki/Dirname) command.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="dirname" type="string"/>
</Returns>
</Function>

### path.extname

Returns the file extension of the given `fileSystemPath`. This is an empty string if the given file has no extension (or is a directory).

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="extname" type="string"/>
</Returns>
</Function>

### path.isAbsolute

Returns `true` if the given `fileSystemPath` is an absolute (fully-qualified) path, and `false` otherwise.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="isAbsolutePath" type="boolean"/>
</Returns>
</Function>

### path.join

Returns the normalized `fileSystemPath` constructed from the given path segments and the platform-specific path separator.

<Function>
<Parameters>
<Parameter varargs/>
</Parameters>
<Returns>
<Return name="normalizedFileSystemPath" type="string"/>
</Returns>
</Function>

### path.normalize

Returns the normalized `fileSystemPath` after resolving `.` and `..` segments. Preserves trailing separators, but removes duplicates.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="normalizedFileSystemPath" type="string"/>
</Returns>
</Function>

### path.relative

Returns the relative path from `from` to `to` based on the current working directory.

<Function>
<Parameters>
<Parameter name="from" type="string"/>
<Parameter name="to" type="string"/>
</Parameters>
<Returns>
<Return name="relativeFileSystemPath" type="string"/>
</Returns>
</Function>

### path.resolve

Returns the `fileSystemPath` constructed by resolving a sequence of paths (or path segments) to create an absolute path.

This is conceptually similar to running a sequence of `cd` commands and writing down the end result (i.e., where you landed).

<Function>
<Parameters>
<Parameter varargs/>
</Parameters>
<Returns>
<Return name="absoluteResolvedFileSystemPath" type="string"/>
</Returns>
</Function>

## Tables

### path.posix

POSIX-specific version that is preloaded automatically on Linux and Mac OS, but can be accessed explicitly on Windows.

That is to say, if you're on Linux (or Mac OS) then `path` is always equal to `path.posix`, but you can still use the `path.win32` APIs.

### path.win32

Windows-specific version that is preloaded automatically on Windows, but can be accessed explicitly on other platforms.

That is to say, if you're on Windows then `path` is always equal to `path.win32`, but you can still use the `path.posix` APIs.

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
