# WebView Trade-Offs

This document discusses the trade-offs of using WebViews in Evo

## Disclaimer

Please note that this is a likely incomplete and biased enumeration, based purely on my own personal experience (working extensively with both Lua and JavaScript) in this context. There's no "better" in every case; only you can decide whether WebViews are a more appropriate solution for your problem than other, more established technologies. This page is intended to help you make that decision.

## Native Webviews

There are some disadvantages for using WebViews in Evo:

* The webview library used doesn't have very many features (yet), and a small development team
* Interoperability is limited by the SDK that the browser vendor offers, which may not always include desired functionality
* The installed version is also automatically managed on Windows and Mac OS (though it can be pinned?)
* Can only benefit from the NodeJS ecosystem in the frontend, because the backend is running LuaJIT and not Node

Generally speaking, they have the following advantages:

* Full control over the browser engine and native windows (from both Lua or C/C++)
* Can run async tasks or anything else alongside the browser engine, in the same application
* Can make use of the Lua ecosystem, LuaJIT FFI, and (probably more interesting) the C/C++ ecosystem in the "backend"
* ... without trading in any power on the JavaScript side (NPM modules, WebGL/WebAudio, it all generally works)
* Browser engines are automatically updated by the OS vendor (semi-automatically on Linux)
* Extremely lightweight due to dynamic linkage (though this is technically optional, it is still the default)
* Full control over most parts of the stack, at least in between browser engine and C++ compiler

In summary, you can easily build a custom solution. But it likely will have fewer features built in than you might prefer.

## Electron.js

Advantages:

* Large ecosystem with great community support
* Can use JavaScript modules for both main and render thread

Drawbacks:

* Seems to be stuck with CommonJS modules (that are being phased out in the Node ecosystem) due to certain design decisions (TBD link issue)
* Creates enormous binaries
* Build times are extremely slow
* Inflexible in architecture and file system layout (depending on the technologies used)
* Integrating with native code is rather painful

## NW.js

Same as Electron, but a smaller ecosystem (?)

## Tauri

Similar to WebViews in Evo, but trading Lua and C/C++ for Rust (arguably a downgrade?)

## Qt WebEngine

Advantages:

* Mature and extensive ecosystem

Drawbacks:

* Extremely huge and invasive

## Other Options

If there's another important solution that should be considered here, please [submit a Pull Request](image.png).
