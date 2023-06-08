# stbi

LuaJIT bindings for the embedded [stbi](https://github.com/nothings/stb/tree/master) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local stbi = require("stbi")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment

### max_bitmap_size

Computes an estimated worst-case output file size for the given image, assuming a primitive BMP format. Uses a simple heuristic that should cover all edge cases, but is a bit wasteful. The result can be used to pre-allocate buffers to perform image conversions.

If you want to encode images in different formats, e.g., using [stbi_encode_bmp](#stbi_encode_bmp), you can use this to determine the buffer size.

<Function>
<Parameters>
<Parameter name="width" type="number"/>
<Parameter name="height" type="number"/>
<Parameter name="channels" type="number"/>
</Parameters>
<Returns>
<Return name="estimatedWorstCaseFileSize" type="number"/>
</Returns>
</Function>

### replace_pixel_color_rgba

Replaces all pixels using the RGBA values from `sourceColor` with those from `replacementColor`. Accepts `cdata` or `table` values.

The pixel format used by the given `image` is expected to be in RGBA format; use [stbi_load_rgba](#stbi_load_rgba) to ensure this is always the case.

<Function>
<Parameters>
<Parameter name="image" type="stbi_image_t"/>
<Parameter name="sourceColor" type="stbi_color_t"/>
<Parameter name="replacementColor" type="stbi_color_t"/>
</Parameters>
</Function>

<Struct name="stbi_image_t">
<Member name="width" type="int"/>
<Member name="height" type="int"/>
<Member name="data" type="stbi_color_t*"/>
<Member name="channels" type="int"/>
</Struct>

<Struct name="stbi_color_t">
<Member name="red" type="uint8_t"/>
<Member name="green" type="uint8_t"/>
<Member name="blue" type="uint8_t"/>
<Member name="alpha" type="uint8_t"/>
</Struct>

### version

Returns the embedded stbi library version as a Lua string.

## Native Bindings

All C functions listed here can be accessed via `stbi.bindings` and must be called with the appropriate `cdata` values.

### stbi_image_info

Retrieves the metadata for the given image, without actually decoding the pixel buffer or performing color depth conversions.

The resulting `image` will have no pixels (`data` member), so don't pass it to any of the other functions that expect a full image struct.

```cpp
bool stbi_image_info(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_load_image

Loads the given buffer containing the file contents, which must be a supported image format, and returns the image as a `cdata` struct.

The original color depth remains unchanged, i.e., no conversions are performed while loading the image.

```cpp
bool stbi_load_image(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_load_rgb

Loads the given buffer containing the file contents, which must be a supported image format, and returns the image as a `cdata` struct.

The pixel data is converted while loading the image, so that all pixels are in RGB format (no transparency).

```cpp
bool stbi_load_rgb(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_load_rgba

Loads the given buffer containing the file contents, which must be a supported image format, and returns the image as a `cdata` struct.

The pixel data is converted while loading the image, so that all pixels are in RGBA format (with transparency).

```cpp
bool stbi_load_rgba(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_load_monochrome

Loads the given buffer containing the file contents, which must be a supported image format, and returns the image as a `cdata` struct.

The pixel data is converted while loading the image, so that all pixels are in monochrome format (no transparency).

```cpp
bool stbi_load_monochrome(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_load_monochrome_with_alpha

Loads the given buffer containing the file contents, which must be a supported image format, and returns the image as a `cdata` struct.

The pixel data is converted while loading the image, so that all pixels are in monochrome format (with transparency).

```cpp
bool stbi_load_monochrome_with_alpha(stbi_readonly_file_contents_t buffer, const size_t file_size, stbi_image_t* image);
```

### stbi_image_free

Releases the given `image` struct's pixel buffer. This must be called manually, since the pixel buffers are allocated dynamically in stbi.

```cpp
bool stbi_image_free(stbi_image_t* image);
```

### stbi_encode_bmp

Encodes the given `image` as a [BMP](https://en.wikipedia.org/wiki/BMP_file_format) file and stores the result in the provided buffer, which you can pre-allocate using [max_bitmap_size](#max_bitmap_size).

```cpp
size_t stbi_encode_bmp(stbi_image_t* image, uint8_t* buffer, const size_t buffer_size);
```

### stbi_encode_png

Encodes the given `image` as a [PNG](https://en.wikipedia.org/wiki/PNG) file and stores the result in the provided buffer, which you can pre-allocate using [max_bitmap_size](#max_bitmap_size).

```cpp
size_t stbi_encode_png(stbi_image_t* image, uint8_t* buffer, const size_t buffer_size, const int stride);
```

### stbi_encode_jpg

Encodes the given `image` as a [JPG](https://en.wikipedia.org/wiki/JPEG) file and stores the result in the provided buffer, which you can pre-allocate using [max_bitmap_size](#max_bitmap_size).

```cpp
size_t stbi_encode_jpg(stbi_image_t* image, uint8_t* buffer, const size_t buffer_size, int quality);
```

### stbi_encode_tga

Encodes the given `image` as a [TGA](https://en.wikipedia.org/wiki/Truevision_TGA) file and stores the result in the provided buffer, which you can pre-allocate using [max_bitmap_size](#max_bitmap_size).

```cpp
size_t stbi_encode_tga(stbi_image_t* image, uint8_t* buffer, const size_t buffer_size);
```

### stbi_version

Returns the embedded stbi library version as a `cdata` string.

```cpp
const char* stbi_version(void);
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.4  | Initial release |
