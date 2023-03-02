# WebView Features

## What can WebViews do?

- Add screenshots (Wikipedia, BJS)
- WSL support (GTK, not Edge)
- Can use JS/HTML/CSS, WebGL, WebAudio, WebGPU etc. in frontend
- Full control over the native window (GTK, WinAPI, Cocoa)
- Full control over the browser engine (limited by vendor SDK APIs, Webkit2GTK, WebView2, WkWebView)
- Lightweight (1.2MB added binary size vs. Electron 150+ MB) due to dynamic linkage
- Can run alongside libuv event loop while other async stuff is running in the backend (webserver, file I/O, data compression, ...)

Mixed bag:

- Convenient auto-updates by OS vendor/package manager (can cause compatibility issues if not synced with runtime updates)

Limitations:

- Can't use NodeJS packages in backend, "only" Lua/C/C++ (because Evo embeds LuaJIT and not NodeJS)
- Small development team and community (webview, luajit and Evo) vs Electronjs/NodeJS/V8 team and contributors ...?
- Feature set is still very minimal, but that can change if there's demand for more
