# C_FileSystem

Usability-focused abstraction of the underlying file system APIs

## Status

<Experimental/>

## Availability

This is a global namespace and can be accessed directly:

```lua
C_FileSystem.MakeDirectory("test") -- Implicit global lookup: _G.C_FileSystem
```

## Functions

### AppendFile

<Blocking/>

Opens the given `filePath` in append mode and writes `contents` to the end of the file.

<Function since="v0.0.1">
<Parameters>
<Parameter name="filePath" type="string"/>
<Parameter name="contents" type="string"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### Delete

<Blocking/>

Removes the file or directory referenced by the given `fileSystemPath`. This operation cannot be undone.

<Function since="v0.0.1">
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### Exists

<Blocking/>

Returns `true` if the given `fileSystemPath` exists (can be accessed in read-only mode), and `false` otherwise.

<Function since="v0.0.1">
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="isReadableFileSystemEntry" type="boolean"/>
</Returns>
</Function>

### IsDirectory

<Blocking/>

Returns `true` if the given `fileSystemPath` refers to a `directory` type entry, and `false` otherwise.

<Function since="v0.0.1">
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="isDirectory" type="boolean"/>
</Returns>
</Function>

### IsFile

<Blocking/>

Returns `true` if the given `fileSystemPath` refers to a `file` type entry, and `false` otherwise.

<Function since="v0.0.1">
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
</Parameters>
<Returns>
<Return name="isFile" type="boolean"/>
</Returns>
</Function>

### MakeDirectory

<Blocking/>

Creates a new directory with the given `directoryPath` if one doesn't already exist. Will not create parent directories automatically.

<Function since="v0.0.1">
<Parameters>
<Parameter name="directoryPath" type="string"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### MakeDirectoryTree

<Blocking/>

Creates a new directory with the given `directoryPath` if one doesn't already exist. Will create parent directories (recursively) if needed.

<Function since="v0.0.3">
<Parameters>
<Parameter name="directoryPath" type="string"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

### ReadDirectory

<Blocking/>

Reads the contents of the given directory, and returns a list of all files found within it. Will process only the root directory.

The `isFile` flag is always `true` in the current implementation as directories are removed after their contents have been processed.

<Function since="v0.0.1">
<Parameters>
<Parameter name="directoryPath" type="string"/>
</Parameters>
<Returns>
<Return name="directoryContents" type="table"/>
</Returns>
</Function>

<Dictionary name="directoryContents">
<Keys name="absoluteFilePath" type="string"/>
<Values name="isFile" type="boolean"/>
</Dictionary>

### ReadDirectoryTree

<Blocking/>

Reads the contents of the given directory tree (including nested subdirectories), and returns a list of all files found within it.

The `isFile` flag is always `true` in the current implementation as directories are removed after their contents have been processed.

<Function since="v0.0.4">
<Parameters>
<Parameter name="directoryPath" type="string"/>
</Parameters>
<Returns>
<Return name="directoryContents" type="table"/>
</Returns>
</Function>

<Dictionary name="directoryContents">
<Keys name="absoluteFilePath" type="string"/>
<Values name="isFile" type="boolean"/>
</Dictionary>

### ReadFile

<Blocking/>

Opens the given `filePath` in read-only mode and returns the file contents as a Lua string.

<Function since="v0.0.1">
<Parameters>
<Parameter name="filePath" type="string"/>
</Parameters>
<Returns>
<Return name="fileContents" type="string"/>
</Returns>
</Function>

### WriteFile

<Blocking/>

Opens the given `filePath` in write mode and writes `contents` to the file. Overwrites the file if it already exists.

<Function since="v0.0.1">
<Parameters>
<Parameter name="filePath" type="string"/>
<Parameter name="contents" type="string"/>
</Parameters>
<Returns>
<Return name="success" type="boolean"/>
</Returns>
</Function>

## Changelog

| Version |      What happened?       |
| :-----: | :-----------------------: |
| v0.0.4  | Added `ReadDirectoryTree` |
| v0.0.3  | Added `MakeDirectoryTree` |
| v0.0.1  |      Initial release      |
