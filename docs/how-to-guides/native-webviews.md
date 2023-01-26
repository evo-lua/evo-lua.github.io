# Native Webviews

Learn how to render web apps and UIs in a native browser window

## Prerequisites

### Compile-time Dependencies

Evo embeds LuaJIT bindings to various native browser engines via static linkage. For that reason, they must be installed at compile time even if you don't actually want to use WebViews. While this is somewhat inconvenient on some platforms, the overhead is otherwise insignificant (a few seconds of extra link time and a slightly increased binary size).

The browser engines used are those supported by the [webview](https://github.com/webview/webview) library:

* Windows: [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2)
* Linux: [WebKitGTK](https://webkitgtk.org)
* Mac OS: [WebKit](https://developer.apple.com/documentation/webkit)

Unlike other solutions (like [ElectronJS](https://www.electronjs.org)), the browser engines are NOT embedded in the runtime, only referenced.

**TODO Move to build guide? Users don't care about this stuff?**

### Development Headers (Linux only)

Since the webview bindings are statically linked, you *must* have the development headers installed at compile time:

* Ubuntu-likes: `sudo apt install libgtk-3-dev libwebkit2gtk-4.0-dev`

These are *not* required to be present for end users, even if they want to use WebViews.

**TODO Move to build guide? Users don't care about this stuff?**

### Run-time Dependencies

If WebViews are to be used, Linux and Windows 10 users must install a native browser engine to create WebViews:

* `sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37` (Ubuntu and derivatives)
* [Download an installer from the Microsoft website](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) (Windows 10)

If WebViews *aren't* used, the browser engine doesn't need to be installed (it's included with Mac OS and Windows 11).

In either case, Evo will run just fine if the browser engine isn't installed - but you won't be able to use WebViews.

## Standalone WebViews

### Creating WebViews

You can create a native browser window by making use of the global `C_WebView` API:

**TODO**

```lua
local nativeWindowHandle = C_WebView.CreateBrowserWindow()
```

Don't make assumptions about the handle's type; it's generally going to be dependent on what the OS uses internally.

**TODO: That's terrible, it should be wrapped to provide a standardized interface...?**

### Loading JavaScript-based Web Apps

You can use WebGL, WebGPU, WebAudio and all the other browser APIs inside the WebView:

* Load a website (HTML) that embeds JavaScript or CSS
* Import JavaScript or CSS modules as usual

**TODO: OK, but how do I load a website, or JS/CSS?**

### Creating Multiple WebViews

You can create as many WebViews as you require. You'll have to update all of them, and manage their resources.

**TODO: Great, and how exactly do I do that?**

### Shutting down a WebView

**TODO**

`C_WebView.DestroyBrowserWindow(nativeWindowHandle)`

## Interoperability with the Lua Environment

### Exchanging Data with a WebView

The `webview` library supports sending JSON messages to the browser via `C_WebView.SendMessage(jsonString)`. This way, you can implement a simple JSON RPC protocol for talking to the JavaScript environment.
From inside the browser context, you can in turn send messages via **TODO** to respond. Messaging is always asynchronous.

This protocol is unsuitable for large messages. Consider using regular HTTP requests or WebSockets instead.

** TODO: Or maybe shared buffers? WebView2 only? Hmm...**

### Combine Webviews with Asynchronous I/O

Your WebView-managing code must not block the event loop: Use ``webview.run_once()`` instead of ``webview.run()``

TBD: WebView or C_WebView or webview?

Simply register the WebView updates like any other asynchronous process, such as network or file system requests.

## Limitations

### Mac OS

You cannot run webviews without blocking the event loop on Mac OS X. This is because the `webview` library doesn't currently support it, and I don't have experience with Objective-C bindings, WebKit messaging, or a Mac OS machine to test potential implementations with. You can still run *one* WebView, but it will always block the event loop (main thread).

There is *probably* a way to run only a single iteration and update the event loop, but I don't know how. Send PRs?

**TODO Link to contribution guide**

### Windows 10 and 11

The [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) isn't installed automatically on Windows 10. You must install it before you can use webviews.

On Windows 11 systems, the runtime should be installed (and updated) automatically. You may still need to install a different version if the version installed doesn't match the one that the Evo binary is linked against, or recompile it.

### Windows Subsystem for Linux

You can't run the Windows build here, because it relies on the Microsoft Edge browser engine.

If using the Linux build, you probably need to forward the UI to a local xserver, like [vcxserv](https://sourceforge.net/projects/vcxsrv/). You're on your own here.

** TODO: Actually it seems to "just work" with the latest WSL2? Link to Linux instructions then...**

### Platform Capabilities

Since you're running an actual browser engine, which is supplied by the OS, you don't have control over what is running.

This means that if the user's device doesn't support a given feature (such as WebGPU or WebGL2) you simply can't use it.

### Security Sandboxing

Browsers apply all sorts of restrictions to scripts that are running inside the sandbox. These do *not* apply to the Lua environment, but they *do* limit what can be done inside the actual WebView. Running a WebView from Lua gives you more control over the browser engine, but what you can do is still limited by the APIs that the engine's SDK provides.

## Examples

**TODO**

* Hello world app with HTML, JS, and CSS (query WebView capabilities)
* JSON RPC protocol
* Managing multiple WebViews
* 3D Rendering with Babylon.js
* git url to clone?

## See Also

* WebView2 API
* WebKit2GTK API
* WebKit API
* webview API
* C_WebView API reference
