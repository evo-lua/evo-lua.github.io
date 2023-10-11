# C_ImageProcessing

High-level API for dealing with common image formats

## Status

<Experimental/>

## Availability

This is a global namespace and can be accessed directly:

```lua
C_ImageProcessing.DecodeFileContents(imageFileContents) -- Implicit global lookup: _G.C_ImageProcessing
```

## Functions

### DecodeFileContents

Decodes the given `imageFileContents` and returns the raw pixel data in RGBA format, as well as the image dimensions. Any file format that's supported by [stbi_image](https://github.com/nothings/stb/tree/master) can be decoded. This includes at least the following: BMP, PNG, JPG, TGA.

<Function since="v0.0.9">
<Parameters>
<Parameter name="imageFileContents" type="string"/>
</Parameters>
<Returns>
<Return name="rgbaPixelArray" type="table"/>
<Return name="imageWidthInPixels" type="number"/>
<Return name="imageHeightInPixels" type="number"/>
</Returns>
</Function>

### EncodeBMP

Encodes the given `rgbaPixelArray` as a BMP image of the provided dimensions.

<Function since="v0.0.9">
<Parameters>
<Parameter name="rgbaPixelArray" type="table"/>
<Parameter name="imageWidthInPixels" type="number"/>
<Parameter name="imageHeightInPixels" type="number"/>
</Parameters>
<Returns>
<Return name="bmpFileContents" type="string"/>
</Returns>
</Function>

### EncodePNG

Encodes the given `rgbaPixelArray` as a PNG image of the provided dimensions, without padding (zero-length stride).

<Function since="v0.0.9">
<Parameters>
<Parameter name="rgbaPixelArray" type="table"/>
<Parameter name="imageWidthInPixels" type="number"/>
<Parameter name="imageHeightInPixels" type="number"/>
</Parameters>
<Returns>
<Return name="pngFileContents" type="string"/>
</Returns>
</Function>

### EncodeJPG

Encodes the given `rgbaPixelArray` as a JPEG image of the provided dimensions, using the highest quality setting (100%).

<Function since="v0.0.9">
<Parameters>
<Parameter name="rgbaPixelArray" type="table"/>
<Parameter name="imageWidthInPixels" type="number"/>
<Parameter name="imageHeightInPixels" type="number"/>
</Parameters>
<Returns>
<Return name="jpegFileContents" type="string"/>
</Returns>
</Function>

### EncodeTGA

Encodes the given `rgbaPixelArray` as a TGA image of the provided dimensions.

<Function since="v0.0.10">
<Parameters>
<Parameter name="rgbaPixelArray" type="table"/>
<Parameter name="imageWidthInPixels" type="number"/>
<Parameter name="imageHeightInPixels" type="number"/>
</Parameters>
<Returns>
<Return name="tgaFileContents" type="string"/>
</Returns>
</Function>

## Changelog

| Version |  What happened?   |
| :-----: | :---------------: |
| v0.0.10 | Added `EncodeTGA` |
| v0.0.9  |  Initial release  |
