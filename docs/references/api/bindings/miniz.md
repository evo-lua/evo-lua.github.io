# miniz

Lua bindings for the embedded [miniz](https://github.com/richgel999/miniz) library

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local miniz = require("miniz")
```

## Compression Levels

Whenever you compress data, you can optionally pass a `compressionLevel`, which must be a `number` value:

- The minimum compression level is zero (meaning "no compression")
- The highest supported level is nine (meaning "maximum compression")
- If you don't pass a `compressionLevel`, the maximum compression level of nine will be used

If you pass invalid values, you may get an error or the input may silently be clamped to the nearest possible value.

## Compressor Flags

Many methods accept an optional `flags` parameter. By setting a nonzero value, you can control advanced compression options such as "write ZIP archives with a zlib-compatible header". Since they aren't part of the Lua bindings, this page doesn't attempt to list them all.

:::info

You can find out what flags are currently supported by reading the source comments in the [miniz header](https://github.com/richgel999/miniz/blob/master/miniz.h) file.

:::

## Deflator

Created by [new_deflator](#new_deflator). You can use this to compress large amounts of data, or smaller chunks that simply aren't available all at once.

### deflate

Applies [DEFLATE](https://en.wikipedia.org/wiki/Deflate) to the given `input` and returns the compressed bytes as a Lua string.

:::info

For advanced use cases, you may control the flushing behavior of the compressor with an additional `flushingBehavior` flag:

- Supported values are `"no"`, `"partial"`, `"sync"`, `"full"`, `"finish"`, and `"block"`
- The default value is `"no"`, i.e., no flushing of the compressor is enforced (useful for stream compression)
- For additional details and potential use cases, see [this zlib-specific documentation](https://www.bolet.org/~pornin/deflate-flush.html) explaining the modes

Most of the time, you'll want to pass `"no"` or `"finish"` for asynchronous and synchronous compression, respectively.

:::

<Function>
<Parameters>
<Parameter name="self" type="Deflator"/>
<Parameter name="input" type="string"/>
<Parameter name="flushingBehavior" type="string" optional/>
</Parameters>
<Returns>
<Return name="compressedInput" type="string"/>
</Returns>
</Function>

## Inflator

Created by [new_inflator](#new_inflator). You can use this to decompress large amounts of data, or smaller chunks that simply aren't available all at once.

### inflate

Applies [INFLATE](https://en.wikipedia.org/wiki/Deflate#Decoder/decompressor) to the given (DEFLATE-compressed) `input` and returns the decompressed bytes as a Lua string.

<Function>
<Parameters>
<Parameter name="self" type="Inflator"/>
<Parameter name="input" type="string"/>
</Parameters>
<Returns>
<Return name="decompressedInput" type="string"/>
</Returns>
</Function>

## ZipFileReader

Created by [new_reader](#new_reader) or [new_reader_memory](#new_reader_memory). You can use this to get information about the files within a ZIP archive or to extract them (in-memory).

### extract

Extracts the file referenced by the given `fileTableIndex` and returns the file contents (or `""` on failure). The `flags` are passed to `miniz` directly. Since the extraction happens entirely in memory, this method may not be well-suited for extracting very large files.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
<Parameter name="fileTableIndex" type="number"/>
</Parameters>
<Returns>
<Return name="decompressedFileContents" type="string"/>
</Returns>
</Function>

### get_filename

Returns the file name referenced by the given `fileTableIndex`, or `nil` and an error message if the given index was invalid.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
<Parameter name="fileTableIndex" type="number"/>
</Parameters>
<Returns>
<Return name="filePath" type="string" optional/>
<Return name="errorMessage" type="string" optional/>
</Returns>
</Function>

### get_num_files

Returns the total number of files within the ZIP archive. This is the maximum `fileTableIndex` that you can pass to other functions.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
</Parameters>
<Returns>
<Return name="fileCount" type="number" optional/>
</Returns>
</Function>

### get_offset

Returns the starting offset (from the beginning of the file) of the ZIP archive.

:::note

This offset is likely zero for normal archives, but the file format allows storing arbitrary data before the beginning of the ZIP header.

:::

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
</Parameters>
<Returns>
<Return name="startingOffset" type="number" optional/>
</Returns>
</Function>

### is_directory

Returns `true` if the entry referenced by the given `fileTableIndex` is a directory entry, and `false` otherwise.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
<Parameter name="fileTableIndex" type="number"/>
</Parameters>
<Returns>
<Return name="isDirectoryEntry" type="boolean"/>
</Returns>
</Function>

### locate_file

Searches the internal file system table of the given ZIP archive for an entry that matches `fileSystemPath` and returns the corresponding `fileTableIndex`, or `nil` and an error message if no match was found. It uses a simple linear search method that might have to iterate over the entire table, which is slow for very large files. The `flags` passed to `miniz` can control the way that the search is performed.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="fileTableIndex" type="number"/>
</Returns>
</Function>

### stat

Returns a list of attributes for the entry referenced by the given `fileTableIndex`, or `nil` and an error message if the index was invalid.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileReader"/>
<Parameter name="fileTableIndex" type="number"/>
</Parameters>
<Returns>
<Return name="stats" type="ZipArchiveFileStatistics" optional/>
<Return name="errorMessage" type="string" optional/>
</Returns>
</Function>

<Struct name="ZipArchiveFileStatistics">
<Member name="index" type="number"/>
<Member name="version_made_by" type="number"/>
<Member name="version_needed" type="number"/>
<Member name="bit_flag" type="number"/>
<Member name="method" type="number"/>
<Member name="time" type="number"/>
<Member name="crc32" type="number"/>
<Member name="comp_size" type="number"/>
<Member name="uncomp_size" type="number"/>
<Member name="internal_attr" type="number"/>
<Member name="external_attr" type="number"/>
<Member name="filename" type="string"/>
<Member name="comment" type="string"/>
</Struct>

## ZipFileWriter

Created by [new_writer](#new_writer). You can use this to add files to a ZIP archive or to save the in-memory data to disk.

### add

Adds (in-memory) a new file entry referenced by `fileSystemPath` with the given `fileContents` to the archive. The `flags` passed to `miniz` control the compression level and settings for this specific entry; it's a bitfield with the level being stored in the lowest byte.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileWriter"/>
<Parameter name="fileSystemPath" type="string"/>
<Parameter name="fileContents" type="string"/>
</Parameters>
</Function>

### add_from_zip

Adds (in-memory) the contents of the entry referenced by the given `fileTableIndex` from another ZIP archive to the archive.

<Function>
<Parameters>
<Parameter name="self" type="ZipFileWriter"/>
<Parameter name="reader" type="ZipFileReader"/>
<Parameter name="fileTableIndex" type="number"/>
</Parameters>
</Function>

### finalize

Finishes the current archive, adding the necessary structures to make it a valid and complete ZIP file. Then, returns the file contents.

:::note

Once the archive has been finalized, you can no longer add new entries to it. You'd usually do this before saving the file to disk.

:::

<Function>
<Parameters>
<Parameter name="self" type="ZipFileWriter"/>
</Parameters>
<Returns>
<Return name="zipFileContents" type="string"/>
</Returns>
</Function>

## Functions

### adler32

Returns the [Adler-32](https://en.wikipedia.org/wiki/Adler-32) checksum for the given `input`. Supplying an `initialValue` allows processing multiple chunks as they arrive.

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="initialValue" type="string" optional/>
</Parameters>
<Returns>
<Return name="checksum" type="string"/>
</Returns>
</Function>

### crc32

Returns the [CRC-32](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) checksum for the given `input`. Supplying an `initialValue` allows processing multiple chunks as they arrive.

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="initialValue" type="string" optional/>
</Parameters>
<Returns>
<Return name="checksum" type="string"/>
</Returns>
</Function>

### compress

Applies [DEFLATE](https://en.wikipedia.org/wiki/Deflate) to the given `input` and returns the compressed bytes as a Lua string, or `nil` and an error message in case of failure. This method is identical to [Deflator.deflate](#deflate) in principle, but cannot be used to compress data in chunks.

:::info

As a general guideline, you would use the different compression methods as follows:

- For maximum ease of use, simply call [compress](#compress) for "one and done" synchronous compression (blocking)
- If you want to control the behavior of the compressor by passing flags to `miniz`, use [deflate](#deflate-1) instead (blocking)
- Using an [Deflator](#deflator) allows compressing chunks as they come in, i.e., work asynchronously (non-blocking)

While you don't need to worry about buffer allocation with either of these, the performance characteristics may still differ.

:::

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="compressionLevel" type="number" optional/>
</Parameters>
<Returns>
<Return name="compressedInput" type="string"/>
</Returns>
</Function>

### deflate

Applies [DEFLATE](https://en.wikipedia.org/wiki/Deflate) to the given `input` and returns the decompressed bytes, or `""` in case of failure.

The `flags` passed to `miniz` control the behavior of the compressor.

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="decompressedInput" type="string"/>
</Returns>
</Function>

### inflate

Applies [INFLATE](https://en.wikipedia.org/wiki/Deflate#Decoder/decompressor) to the given (DEFLATE-compressed) `input` and returns the decompressed bytes, or `""` in case of failure.

The `flags` passed to `miniz` control the behavior of the decompressor.

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="decompressedInput" type="string"/>
</Returns>
</Function>

### last_error

Returns the last compression or decompression error (as a human-readable string) if any was encountered, or `nil` otherwise.

<Function>
<Returns>
<Return name="errorString" type="string" optional/>
</Returns>
</Function>

### new_deflator

Creates a new [Deflator](#deflator) object and returns a `userdata` reference to it. If you set `compressionLevel`, it must be a valid value (0 to 9).

<Function>
<Parameters>
<Parameter name="compressionLevel" type="number" optional/>
</Parameters>
<Returns>
<Return name="deflator" type="Deflator"/>
</Returns>
</Function>

### new_inflator

Creates a new [Inflator](#inflator) object and returns a `userdata` reference to it.

<Function>
<Returns>
<Return name="inflator" type="Inflator"/>
</Returns>
</Function>

### new_reader

Creates a new ZIP file reader for the given `fileSystemPath`. The `flags` passed to `miniz` can control the way that the archive is read.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="reader" type="ZipFileReader"/>
</Returns>
</Function>

### new_reader_memory

Creates a new ZIP file reader for the given `fileContents`. The `flags` passed to `miniz` can control the way that the archive is read.

<Function>
<Parameters>
<Parameter name="fileContents" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="reader" type="ZipFileReader"/>
</Returns>
</Function>

### new_writer

Creates a new ZIP file writer for the given `fileSystemPath`. The `flags` passed to `miniz` can control the way that the archive is written.

<Function>
<Parameters>
<Parameter name="fileSystemPath" type="string"/>
<Parameter name="flags" type="number" optional/>
</Parameters>
<Returns>
<Return name="writer" type="ZipFileWriter"/>
</Returns>
</Function>

### uncompress

Applies [INFLATE](https://en.wikipedia.org/wiki/Deflate#Decoder/decompressor) to the given (DEFLATE-compressed) `input` and returns the decompressed bytes as a Lua string, or `nil` and an error message in case of failure. This method is identical to [Inflator.inflate](#inflate) in principle, but cannot be used to decompress data in chunks.

For optimization purposes, you can configure an `initialOutputBufferSize` (in bytes). The decompressor will otherwise double the buffer whenever it needs more space, until decompression has finished or the maximum integer size of the platform has been reached.

:::info

As a general guideline, you would use the different decompression methods as follows:

- For maximum ease of use, simply call [uncompress](#uncompress) for "one and done" synchronous decompression (blocking)
- If you want to control the behavior of the decompressor by passing flags to `miniz`, use [inflate](#inflate-1) instead (blocking)
- Using an [Inflator](#inflator) allows compressing chunks as they come in, i.e., work asynchronously (non-blocking)

While you don't need to worry about buffer allocation with either of these, the performance characteristics may still differ.

:::

<Function>
<Parameters>
<Parameter name="input" type="string"/>
<Parameter name="initialOutputBufferSize" type="number" optional/>
</Parameters>
<Returns>
<Return name="decompressedInput" type="string"/>
</Returns>
</Function>

### version

Returns the version number of the embedded `miniz` library as a Lua string.

<Function>
<Returns>
<Return name="version" type="string"/>
</Returns>
</Function>

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.5  | Initial release |
