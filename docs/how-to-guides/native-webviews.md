# Native Webviews

Learn how to render web apps and UIs in a native browser window

## Standalone WebViews

### Creating WebViews

You can create a native browser window by making use of the global `C_WebView` API:

**TODO**

```lua
local nativeWindowHandle = C_WebView.CreateBrowserWindow()
```

Don't make assumptions about the handle's type; it's generally going to be dependent on what the OS uses internally.

### Loading JavaScript-based Web Apps

You can use WebGL, WebGPU, WebAudio and all the other browser APIs inside the WebView:

* Load a website (HTML) that embeds JavaScript or CSS
* Import JavaScript or CSS modules as usual

### Creating Multiple WebViews

You can create as many WebViews as you require. You'll have to update all of them, and manage their resources.

### Shutting down a WebView

**TODO**

`C_WebView.DestroyBrowserWindow(nativeWindowHandle)`

## Interoperability with the Lua Environment

### Exchanging Data with a WebView

The `webview` library supports sending JSON messages to the browser via `C_WebView.SendMessage(jsonString)`. This way, you can implement a simple JSON RPC protocol for talking to the JavaScript environment.
From inside the browser context, you can in turn send messages via **TODO** to respond. Messaging is always asynchronous.

This protocol is unsuitable for large messages. Consider using regular HTTP requests or WebSockets instead.

### Combine Webviews with Asynchronous I/O

Your WebView-managing code must not block the event loop: Use ``webview.run_once()`` instead of ``webview.run()``

TBD: WebView or C_WebView or webview?

Simply register the WebView updates like any other asynchronous process, such as network or file system requests.

## Limitations

### Mac OS

You cannot run a WebView without blocking on Mac OS X. This is because the `webview` library doesn't currently support it, and I don't have experience with Objective-C bindings, WebKit messaging, or a Mac OS machine to test potential implementations with. You can still run a WebView, but it will always block the event loop (main thread).

There is probably a way to run only a single iteration and update the event loop, but I don't know how. PRs welcome!

### Windows 10 and 11

The [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) isn't installed automatically on Windows 10. You must install it before you can use WebViews.

On Windows 11 systems, the runtime should be installed (and updated) automatically. You may still need to install a different version if the version installed doesn't match the one that the Evo binary is linked against, or recompile it.

### Windows Subsystem for Linux

You simply cannot run the Windows build here, because it relies on MS Edge (requires native Windows).

If using the Linux build, some things may not work as expected since WSL isn't covered by any of the automated tests.

### Platform Capabilities

Since you're running an actual browser engine, which is supplied by the OS, you don't have control over what is running.

This means that if the user's device doesn't support a given feature (such as WebGPU or WebGL2) you simply can't use it.

### Security Sandboxing

Browsers apply all sorts of restrictions to scripts that are running inside the sandbox. These do *not* apply to the Lua environment, but they *do* limit what can be done inside the actual WebView. Running the WebView from Lua gives you more control over the browser engine, but what you can do is still limited by the APIs that the OS vendor supplied.

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
