# C_WebView

High-level API for creating and managing native browser windows

## Status

<Experimental/>

## Availability

This is a global namespace and can be accessed directly:

```lua
C_WebView.CreateWithDevTools() -- Implicit global lookup: _G.C_WebView
```

## Functions

### CreateWithDevTools

Creates a native WebView window, with developer tools enabled. Has no effect if called multiple times.

### CreateWithoutDevTools

Creates a native WebView window, with developer tools disabled. Has no effect if called multiple times.

### EvaluateScript

Sends the encoded JavaScript program `jsCodeString` to the native browser engine for (asynchronous) evaluation.

<Function>
<Parameters>
<Parameter name="jsCodeString" type="string"/>
</Parameters>
</Function>

### IsRunning

Returns `true` if a native WebView window has previously been created, and `false` otherwise.

<Function>
<Returns>
<Return name="isRunning" type="boolean"/>
</Returns>
</Function>

### NavigateToURL

Instructs the native browser engine to (asynchronously) navigate to the given `url`. The browser may fetch additional resources.

<Function>
<Parameters>
<Parameter name="url" type="string"/>
</Parameters>
</Function>

### SetAppIcon

<Blocking/>

Sets the application icon for the native window that the WebView is running in. Loading is handled by the underlying OS, but it's generally blocking. Additionally, you must ensure that the app icon is provided in a compatible format for each platform:

- On Windows, icons must use the [ICO](<https://en.wikipedia.org/wiki/ICO_(file_format)>) format
- Mac OS app icons use the [Apple Icon Image](https://en.wikipedia.org/wiki/Apple_Icon_Image_format) format
- On Linux, standard formats like JPG or PNG can be used (assuming a loader is present)

Depending on the OS and its version, the icon may appear in different locations (e.g., OSX Dock and Windows task bar).

<Function>
<Parameters>
<Parameter name="appIconPath" type="string"/>
</Parameters>
</Function>

### SetHTML

Instructs the native browser engine to (asynchronously) load the given `htmlString`. The browser may _not_ fetch additional resources.

<Function>
<Parameters>
<Parameter name="htmlString" type="string"/>
</Parameters>
</Function>

### SetOnLoadScript

Instructs the native browser engine to inject and execute the given `jsCodeString` on page load. You can't easily unset this currently.

<Function>
<Parameters>
<Parameter name="jsCodeString" type="string"/>
</Parameters>
</Function>

### SetWindowSize

Resizes the native window that the WebView is running in. The exact behavior is platform-specific.

<Function>
<Parameters>
<Parameter name="newWidthInPixels" type="number"/>
<Parameter name="newHeightInPixels" type="number"/>
</Parameters>
</Function>

### SetWindowTitle

Updates the `title` of the native window that the WebView is running in. The exact behavior is platform-specific.

<Function>
<Parameters>
<Parameter name="newWindowTitle" type="string"/>
</Parameters>
</Function>

### ToggleFullscreenMode

Sets windowed or fullscreen mode for the native window that the WebView is running in, based on its previous state.

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.2  | Initial release |
