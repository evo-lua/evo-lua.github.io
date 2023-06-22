"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[7018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),w=a,v=c["".concat(s,".").concat(w)]||c[w]||p[w]||l;return n?i.createElement(v,r(r({ref:t},u),{},{components:n})):i.createElement(v,r({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=w;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},8210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const l={},r="webview",o={unversionedId:"references/api/bindings/webview",id:"references/api/bindings/webview",title:"webview",description:"LuaJIT bindings for the embedded webview library",source:"@site/docs/references/api/bindings/webview.md",sourceDirName:"references/api/bindings",slug:"/references/api/bindings/webview",permalink:"/docs/references/api/bindings/webview",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/bindings/webview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"uws",permalink:"/docs/references/api/bindings/uws"},next:{title:"zlib",permalink:"/docs/references/api/bindings/zlib"}},s={},d=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Fields",id:"fields",level:2},{value:"cdefs",id:"cdefs",level:3},{value:"bindings",id:"bindings",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"version",id:"version",level:3},{value:"Native Bindings",id:"native-bindings",level:2},{value:"bind",id:"bind",level:3},{value:"create",id:"create",level:3},{value:"destroy",id:"destroy",level:3},{value:"dispatch",id:"dispatch",level:3},{value:"eval",id:"eval",level:3},{value:"get_window",id:"get_window",level:3},{value:"init",id:"init",level:3},{value:"navigate",id:"navigate",level:3},{value:"return",id:"return",level:3},{value:"run",id:"run",level:3},{value:"run_once",id:"run_once",level:3},{value:"set_html",id:"set_html",level:3},{value:"set_icon",id:"set_icon",level:3},{value:"set_size",id:"set_size",level:3},{value:"set_title",id:"set_title",level:3},{value:"terminate",id:"terminate",level:3},{value:"toggle_fullscreen",id:"toggle_fullscreen",level:3},{value:"unbind",id:"unbind",level:3},{value:"version",id:"version-1",level:3},{value:"Changelog",id:"changelog",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("FFI"),p=u("External"),w={toc:d},v="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,i.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webview"},"webview"),(0,a.kt)("p",null,"LuaJIT bindings for the embedded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webview/webview"},"webview")," library"),(0,a.kt)(c,{mdxType:"FFI"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(p,{mdxType:"External"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This module is preloaded. You can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local webview = require("webview")\n')),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"cdefs"},"cdefs"),(0,a.kt)("p",null,"A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to ",(0,a.kt)("inlineCode",{parentName:"p"},"ffi.load")," them manually."),(0,a.kt)("h3",{id:"bindings"},"bindings"),(0,a.kt)("p",null,"A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this note"),"."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"initialize"},"initialize"),(0,a.kt)("p",null,"Initializes the bindings by loading the ",(0,a.kt)("a",{parentName:"p",href:"#cdefs"},"C type definitions"),". Automatically called by the runtime when it sets up the Lua environment."),(0,a.kt)("h3",{id:"version"},"version"),(0,a.kt)("p",null,"Returns the embedded webview library version as a Lua string."),(0,a.kt)("p",null,"Mostly equivalent to ",(0,a.kt)("a",{parentName:"p",href:"#version-1"},"bindings.version()"),", but the latter returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"cdata")," object that may include additional versioning information."),(0,a.kt)("h2",{id:"native-bindings"},"Native Bindings"),(0,a.kt)("p",null,"All C functions listed here can be accessed via ",(0,a.kt)("inlineCode",{parentName:"p"},"webview.bindings")," and must be called with the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"cdata")," values."),(0,a.kt)("h3",{id:"bind"},"bind"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Binds a native C callback so that it will appear under the given name as a\n// global JavaScript function. Internally it uses webview_init(). Callback\n// receives a request string and a user-provided argument pointer. Request\n// string is a JSON array of all the arguments passed to the JavaScript\n// function.\nWEBVIEW_API void webview_bind(webview_t w, const char *name,\n                              void (*fn)(const char *seq, const char *req,\n                                         void *arg),\n                              void *arg);\n")),(0,a.kt)("h3",{id:"create"},"create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Creates a new webview instance. If debug is non-zero - developer tools will\n// be enabled (if the platform supports them). Window parameter can be a\n// pointer to the native window handle. If it's non-null - then child WebView\n// is embedded into the given parent window. Otherwise a new window is created.\n// Depending on the platform, a GtkWindow, NSWindow or HWND pointer can be\n// passed here. Returns null on failure. Creation can fail for various reasons\n// such as when required runtime dependencies are missing or when window creation\n// fails.\n\nWEBVIEW_API webview_t webview_create(int debug, void *window);\n")),(0,a.kt)("h3",{id:"destroy"},"destroy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Destroys a webview and closes the native window.\nWEBVIEW_API void webview_destroy(webview_t w);\n")),(0,a.kt)("h3",{id:"dispatch"},"dispatch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Posts a function to be executed on the main thread. You normally do not need\n// to call this function, unless you want to tweak the native window.\nWEBVIEW_API void\nwebview_dispatch(webview_t w, void (*fn)(webview_t w, void *arg), void *arg);\n")),(0,a.kt)("h3",{id:"eval"},"eval"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Evaluates arbitrary JavaScript code. Evaluation happens asynchronously, also\n// the result of the expression is ignored. Use RPC bindings if you want to\n// receive notifications about the results of the evaluation.\nWEBVIEW_API void webview_eval(webview_t w, const char *js);\n")),(0,a.kt)("h3",{id:"get_window"},"get_window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Returns a native window handle pointer. When using GTK backend the pointer\n// is GtkWindow pointer, when using Cocoa backend the pointer is NSWindow\n// pointer, when using Win32 backend the pointer is HWND pointer.\nWEBVIEW_API void *webview_get_window(webview_t w);\n")),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Injects JavaScript code at the initialization of the new page. Every time\n// the webview will open a the new page - this initialization code will be\n// executed. It is guaranteed that code is executed before window.onload.\nWEBVIEW_API void webview_init(webview_t w, const char *js);\n")),(0,a.kt)("h3",{id:"navigate"},"navigate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Navigates webview to the given URL. URL may be a properly encoded data URI.\n// Examples:\n// webview_navigate(w, "https://github.com/webview/webview");\n// webview_navigate(w, "data:text/html,%3Ch1%3EHello%3C%2Fh1%3E");\n// webview_navigate(w, "data:text/html;base64,PGgxPkhlbGxvPC9oMT4=");\nWEBVIEW_API void webview_navigate(webview_t w, const char *url);\n')),(0,a.kt)("h3",{id:"return"},"return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Allows to return a value from the native binding. Original request pointer\n// must be provided to help internal RPC engine match requests with responses.\n// If status is zero - result is expected to be a valid JSON result value.\n// If status is not zero - result is an error JSON object.\nWEBVIEW_API void webview_return(webview_t w, const char *seq, int status,\n                                const char *result);\n")),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("p",null,"This function completely blocks the event loop and should not be used if you need to perform other asynchronous tasks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Runs the main loop until it's terminated. After this function exits - you\n// must destroy the webview.\nWEBVIEW_API void webview_run(webview_t w);\n")),(0,a.kt)("h3",{id:"run_once"},"run_once"),(0,a.kt)("p",null,"Runs a single iteration of the WebView's update loop. Used to integrate with the event loop, i.e., by polling for updates."),(0,a.kt)("p",null,"You can turn it into a blocking call with the second argument, but it's better to just use ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," instead if you need that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int webview_run_once(webview_t w, int blocking);\n")),(0,a.kt)("h3",{id:"set_html"},"set_html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Set webview HTML directly.\n// Example: webview_set_html(w, "<h1>Hello</h1>");\nWEBVIEW_API void webview_set_html(webview_t w, const char *html);\n')),(0,a.kt)("h3",{id:"set_icon"},"set_icon"),(0,a.kt)("p",null,"Sets the WebView window's application icon, which is displayed in the title bar (or in the dock/Finder on Mac OS)."),(0,a.kt)("p",null,"The icon is loaded using platform-specific APIs. This will briefly block the event loop. In case of success the call returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Importantly, you must respect the OS-specific icon format for each platform or loading will certainly fail:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Windows, icons are expected to be in ",(0,a.kt)("inlineCode",{parentName:"li"},"ico")," format"),(0,a.kt)("li",{parentName:"ul"},"On Mac OS, you should create an ",(0,a.kt)("inlineCode",{parentName:"li"},"icns")," catalog/file using Apple's tools"),(0,a.kt)("li",{parentName:"ul"},"On Linux, GTK APIs are used - they luckily support several common image formats (such as PNG or JPEG)")),(0,a.kt)("p",null,"Needless to say, the image file you submit has to actually exist on disk. Failure to load (or set) the icon results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," return value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool webview_set_icon(webview_t w, const char* file_path);\n")),(0,a.kt)("h3",{id:"set_size"},"set_size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Window size hints\n#define WEBVIEW_HINT_NONE 0  // Width and height are default size\n#define WEBVIEW_HINT_MIN 1   // Width and height are minimum bounds\n#define WEBVIEW_HINT_MAX 2   // Width and height are maximum bounds\n#define WEBVIEW_HINT_FIXED 3 // Window size can not be changed by a user\n// Updates native window size. See WEBVIEW_HINT constants.\nWEBVIEW_API void webview_set_size(webview_t w, int width, int height,\n                                  int hints);\n")),(0,a.kt)("h3",{id:"set_title"},"set_title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Updates the title of the native window. Must be called from the UI thread.\nWEBVIEW_API void webview_set_title(webview_t w, const char *title);\n")),(0,a.kt)("h3",{id:"terminate"},"terminate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Stops the main loop. It is safe to call this function from another other\n// background thread.\nWEBVIEW_API void webview_terminate(webview_t w);\n")),(0,a.kt)("h3",{id:"toggle_fullscreen"},"toggle_fullscreen"),(0,a.kt)("p",null,"Toggles fullscreen mode for the native browser window, switching between windowed and fullscreen mode whenever called."),(0,a.kt)("p",null,"The monitor to be used depends on the platform: It should default to the one that holds the window, but this may not work in WSL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void webview_toggle_fullscreen(webview_t w);\n")),(0,a.kt)("h3",{id:"unbind"},"unbind"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Removes a native C callback that was previously set by webview_bind.\nWEBVIEW_API void webview_unbind(webview_t w, const char *name);\n")),(0,a.kt)("h3",{id:"version-1"},"version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// Get the library's version information.\nWEBVIEW_API const webview_version_info_t *webview_version();\n")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}h.isMDXComponent=!0}}]);