"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[5465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),w=r,c=g["".concat(s,".").concat(w)]||g[w]||u[w]||o;return n?i.createElement(c,a(a({ref:t},p),{},{components:n})):i.createElement(c,a({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},1622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const o={},a="glfw",l={unversionedId:"references/api/bindings/glfw",id:"references/api/bindings/glfw",title:"glfw",description:"LuaJIT bindings for the embedded GLFW library",source:"@site/docs/references/api/bindings/glfw.md",sourceDirName:"references/api/bindings",slug:"/references/api/bindings/glfw",permalink:"/docs/references/api/bindings/glfw",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/bindings/glfw.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bindings",permalink:"/docs/category/bindings"},next:{title:"inspect",permalink:"/docs/references/api/bindings/inspect"}},s={},d=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Fields",id:"fields",level:2},{value:"cdefs",id:"cdefs",level:3},{value:"bindings",id:"bindings",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"getCursorPosition",id:"getcursorposition",level:3},{value:"getWindowSize",id:"getwindowsize",level:3},{value:"setCursorImage",id:"setcursorimage",level:3},{value:"Native Bindings",id:"native-bindings",level:2},{value:"glfw_create_cursor",id:"glfw_create_cursor",level:3},{value:"glfw_create_window",id:"glfw_create_window",level:3},{value:"glfw_destroy_cursor",id:"glfw_destroy_cursor",level:3},{value:"glfw_destroy_window",id:"glfw_destroy_window",level:3},{value:"glfw_find_constant",id:"glfw_find_constant",level:3},{value:"glfw_get_cursor_pos",id:"glfw_get_cursor_pos",level:3},{value:"glfw_get_framebuffer_size",id:"glfw_get_framebuffer_size",level:3},{value:"glfw_get_key",id:"glfw_get_key",level:3},{value:"glfw_get_monitors",id:"glfw_get_monitors",level:3},{value:"glfw_get_mouse_button",id:"glfw_get_mouse_button",level:3},{value:"glfw_get_primary_monitor",id:"glfw_get_primary_monitor",level:3},{value:"glfw_get_video_mode",id:"glfw_get_video_mode",level:3},{value:"glfw_get_wgpu_surface",id:"glfw_get_wgpu_surface",level:3},{value:"glfw_get_window_monitor",id:"glfw_get_window_monitor",level:3},{value:"glfw_get_window_size",id:"glfw_get_window_size",level:3},{value:"glfw_init",id:"glfw_init",level:3},{value:"glfw_poll_events",id:"glfw_poll_events",level:3},{value:"glfw_register_events",id:"glfw_register_events",level:3},{value:"glfw_set_cursor",id:"glfw_set_cursor",level:3},{value:"glfw_set_window_monitor",id:"glfw_set_window_monitor",level:3},{value:"glfw_set_window_pos",id:"glfw_set_window_pos",level:3},{value:"glfw_terminate",id:"glfw_terminate",level:3},{value:"glfw_version",id:"glfw_version",level:3},{value:"glfw_window_hint",id:"glfw_window_hint",level:3},{value:"glfw_window_should_close",id:"glfw_window_should_close",level:3},{value:"Changelog",id:"changelog",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},g=p("FFI"),u=p("External"),w=p("Function"),c=p("Parameters"),m=p("Parameter"),f=p("Returns"),_=p("Return"),h={toc:d},k="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glfw"},"glfw"),(0,r.kt)("p",null,"LuaJIT bindings for the embedded ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/glfw/glfw"},"GLFW")," library"),(0,r.kt)(g,{mdxType:"FFI"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)(u,{mdxType:"External"}),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"This module is preloaded. You can simply ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local glfw = require("glfw")\n')),(0,r.kt)("h2",{id:"fields"},"Fields"),(0,r.kt)("h3",{id:"cdefs"},"cdefs"),(0,r.kt)("p",null,"A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to ",(0,r.kt)("inlineCode",{parentName:"p"},"ffi.load")," them manually."),(0,r.kt)("h3",{id:"bindings"},"bindings"),(0,r.kt)("p",null,"A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this note"),"."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("p",null,"Initializes the bindings by loading the ",(0,r.kt)("a",{parentName:"p",href:"#cdefs"},"C type definitions"),". Automatically called by the runtime when it sets up the Lua environment."),(0,r.kt)("h3",{id:"getcursorposition"},"getCursorPosition"),(0,r.kt)("p",null,"Returns the screen position of the cursor relative to the given ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,r.kt)(w,{since:"v0.0.8",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(m,{name:"window",type:"cdata",mdxType:"Parameter"})),(0,r.kt)(f,{mdxType:"Returns"},(0,r.kt)(_,{name:"positionX",type:"number",mdxType:"Return"}),(0,r.kt)(_,{name:"positionY",type:"number",mdxType:"Return"}))),(0,r.kt)("h3",{id:"getwindowsize"},"getWindowSize"),(0,r.kt)("p",null,"Returns the dimensions of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," in pixels."),(0,r.kt)(w,{since:"v0.0.8",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(m,{name:"window",type:"cdata",mdxType:"Parameter"})),(0,r.kt)(f,{mdxType:"Returns"},(0,r.kt)(_,{name:"width",type:"number",mdxType:"Return"}),(0,r.kt)(_,{name:"height",type:"number",mdxType:"Return"}))),(0,r.kt)("h3",{id:"setcursorimage"},"setCursorImage"),(0,r.kt)("p",null,"Sets the cursor image being displayed when hovering over the content area of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),". The cursor hotspot is specified in pixels, relative to the upper-left corner of the cursor image. Like all other coordinate systems in GLFW, the X-axis points to the right and the Y-axis points down. If no image data is provided and a cursor is set, the existing cursor will be destroyed."),(0,r.kt)(w,{since:"v0.0.8",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(m,{name:"window",type:"cdata",mdxType:"Parameter"}),(0,r.kt)(m,{name:"imageFileContents",type:"string",optional:"true",mdxType:"Parameter"}),(0,r.kt)(m,{name:"hotspotX",type:"number",optional:"true",fallback:"0",mdxType:"Parameter"}),(0,r.kt)(m,{name:"hotspotY",type:"number",optional:"true",fallback:"0",mdxType:"Parameter"}))),(0,r.kt)("h2",{id:"native-bindings"},"Native Bindings"),(0,r.kt)("p",null,"All C functions listed here can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"glfw.bindings")," and must be called with the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"cdata")," values."),(0,r.kt)("h3",{id:"glfw_create_cursor"},"glfw_create_cursor"),(0,r.kt)("p",null,"Creates a cursor object that can be set to change the mouse icon for a given window. You must destroy it manually later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"GLFWcursor* (*glfw_create_cursor)(const GLFWimage* image, int xhot, int yhot);\n")),(0,r.kt)("h3",{id:"glfw_create_window"},"glfw_create_window"),(0,r.kt)("p",null,"Creates a new native window and returns the platform-agnostic ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"GLFWwindow* (*glfw_create_window)(int width, int height, const char* title, GLFWmonitor* monitor, GLFWwindow* share);\n")),(0,r.kt)("h3",{id:"glfw_destroy_cursor"},"glfw_destroy_cursor"),(0,r.kt)("p",null,"Frees the resources associated with the given cursor object. Don't call this while the cursor is still in use - you must reset it first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_destroy_cursor)(GLFWcursor* cursor);\n")),(0,r.kt)("h3",{id:"glfw_destroy_window"},"glfw_destroy_window"),(0,r.kt)("p",null,"Destroys the native window referenced by the given platform-agnostic ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_destroy_window)(GLFWwindow* window);\n")),(0,r.kt)("h3",{id:"glfw_find_constant"},"glfw_find_constant"),(0,r.kt)("p",null,"Returns the GLFW ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," value identified by the given ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"0xdead")," (an arbitrary sentinel value) if the name was invalid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*glfw_find_constant)(const char* name);\n")),(0,r.kt)("h3",{id:"glfw_get_cursor_pos"},"glfw_get_cursor_pos"),(0,r.kt)("p",null,"Stores the screen position of the cursor relative to the given platform-agnostic ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," handle in the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_get_cursor_pos)(GLFWwindow* window, double* xpos, double* ypos);\n")),(0,r.kt)("h3",{id:"glfw_get_framebuffer_size"},"glfw_get_framebuffer_size"),(0,r.kt)("p",null,"Stores the dimensions of the underlying framebuffer for the given platform-agnostic ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," handle in the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_get_framebuffer_size)(GLFWwindow* window, int* width, int* height);\n")),(0,r.kt)("h3",{id:"glfw_get_key"},"glfw_get_key"),(0,r.kt)("p",null,"Returns whether or not the given ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is considered pressed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*glfw_get_key)(GLFWwindow* window, int key);\n")),(0,r.kt)("h3",{id:"glfw_get_monitors"},"glfw_get_monitors"),(0,r.kt)("p",null,"Returns a list of detected monitors, and stores the size of the list in the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"GLFWmonitor** (*glfw_get_monitors)(int* count);\n")),(0,r.kt)("h3",{id:"glfw_get_mouse_button"},"glfw_get_mouse_button"),(0,r.kt)("p",null,"Returns whether or not the given mouse ",(0,r.kt)("inlineCode",{parentName:"p"},"button")," is considered pressed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*glfw_get_mouse_button)(GLFWwindow* window, int button);\n")),(0,r.kt)("h3",{id:"glfw_get_primary_monitor"},"glfw_get_primary_monitor"),(0,r.kt)("p",null,"Returns a reference to the monitor that has been set as primary display on the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"GLFWmonitor* (*glfw_get_primary_monitor)(void);\n")),(0,r.kt)("h3",{id:"glfw_get_video_mode"},"glfw_get_video_mode"),(0,r.kt)("p",null,"Returns the display settings for the display referenced by the given ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const GLFWvidmode* (*glfw_get_video_mode)(GLFWmonitor* monitor);\n")),(0,r.kt)("h3",{id:"glfw_get_wgpu_surface"},"glfw_get_wgpu_surface"),(0,r.kt)("p",null,"Returns a WebGPU-compatible surface object for the given platform-agnostic ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," handle. Allows drawing to its framebuffer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"WGPUSurface (*glfw_get_wgpu_surface)(WGPUInstance instance, GLFWwindow* window);\n")),(0,r.kt)("h3",{id:"glfw_get_window_monitor"},"glfw_get_window_monitor"),(0,r.kt)("p",null,"Returns the assigned monitor for the window referenced by the given handle, or ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," if it's not in fullscreen mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"GLFWmonitor* (*glfw_get_window_monitor)(GLFWwindow* window);\n")),(0,r.kt)("h3",{id:"glfw_get_window_size"},"glfw_get_window_size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_get_window_size)(GLFWwindow* window, int* width, int* height);\n")),(0,r.kt)("h3",{id:"glfw_init"},"glfw_init"),(0,r.kt)("p",null,"Initializes the GLFW windowing context. You must call this once before creating native windows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*glfw_init)(void);\n")),(0,r.kt)("h3",{id:"glfw_poll_events"},"glfw_poll_events"),(0,r.kt)("p",null,"Continually polls the system for windowing events. This will prevent all asynchronous tasks from completing, and your app from exiting until all windows have been closed. You should set up a render loop (by creating a WebGPU swap chain that presents images at a fixed interval), or create a polling timer and use that to poll manually instead. Otherwise, you'll waste a lot of CPU time (and power) spinning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_poll_events)(void);\n")),(0,r.kt)("h3",{id:"glfw_register_events"},"glfw_register_events"),(0,r.kt)("p",null,"Registers all event listeners for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),", so that the runtime will asynchronously store them in the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"queue.")),(0,r.kt)("p",null,"The purpose of this is to forward native events to Lua; you can fetch input events from the queue and handle them asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_register_events)(GLFWwindow* window, deferred_event_queue_t queue);\n")),(0,r.kt)("h3",{id:"glfw_set_cursor"},"glfw_set_cursor"),(0,r.kt)("p",null,"Changes the mouse icon for the given window. To revert to the default cursor, set the cursor of that window to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_set_cursor)(GLFWwindow* window, GLFWcursor* cursor);\n")),(0,r.kt)("h3",{id:"glfw_set_window_monitor"},"glfw_set_window_monitor"),(0,r.kt)("p",null,"Assigns the given ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor")," as the fullscreen display for the native ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),". You can offset the window and set a fixed update interval."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_set_window_monitor)(GLFWwindow* window, GLFWmonitor* monitor, int xpos, int ypos, int width, int height, int refreshRate);\n")),(0,r.kt)("h3",{id:"glfw_set_window_pos"},"glfw_set_window_pos"),(0,r.kt)("p",null,"Moves the native ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," to the given screen coordinates. You have to manually take care that you aren't moving it offscreen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_set_window_pos)(GLFWwindow* window, int xpos, int ypos);\n")),(0,r.kt)("h3",{id:"glfw_terminate"},"glfw_terminate"),(0,r.kt)("p",null,"Destroys the GLFW windowing context. You can't create native windows afterwards unless you re-initialize the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_terminate)(void);\n")),(0,r.kt)("h3",{id:"glfw_version"},"glfw_version"),(0,r.kt)("p",null,"Returns the embedded GLFW library version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* (*glfw_version)(void);\n")),(0,r.kt)("h3",{id:"glfw_window_hint"},"glfw_window_hint"),(0,r.kt)("p",null,"Configures the windowing context, controlling the appearance and behavior of all windows that are created after this call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void (*glfw_window_hint)(int hint, int value);\n")),(0,r.kt)("h3",{id:"glfw_window_should_close"},"glfw_window_should_close"),(0,r.kt)("p",null,"Returns whether the given ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),' has received a request for it to be closed (e.g., user clicked on the "Close" button).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int (*glfw_window_should_close)(GLFWwindow* window);\n")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Added ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_get_key"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_get_mouse_button"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_get_cursor_pos"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_create_cursor"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_destroy_cursor"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"glfw_set_cursor"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getCursorPosition"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"setCursorImage,")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"getWindowSize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}v.isMDXComponent=!0}}]);