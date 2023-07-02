"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[5458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,g=d["".concat(p,".").concat(b)]||d[b]||c[b]||r;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},l="webgpu",o={unversionedId:"references/api/bindings/webgpu",id:"references/api/bindings/webgpu",title:"webgpu",description:"LuaJIT bindings for the embedded wgpu-native library",source:"@site/docs/references/api/bindings/webgpu.md",sourceDirName:"references/api/bindings",slug:"/references/api/bindings/webgpu",permalink:"/docs/references/api/bindings/webgpu",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/bindings/webgpu.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"uws",permalink:"/docs/references/api/bindings/uws"},next:{title:"webview",permalink:"/docs/references/api/bindings/webview"}},p={},s=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Fields",id:"fields",level:2},{value:"cdefs",id:"cdefs",level:3},{value:"bindings",id:"bindings",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"Native Bindings",id:"native-bindings",level:2},{value:"wgpu_version",id:"wgpu_version",level:3},{value:"Changelog",id:"changelog",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("FFI"),c=u("External"),b={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webgpu"},"webgpu"),(0,a.kt)("p",null,"LuaJIT bindings for the embedded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gfx-rs/wgpu-native"},"wgpu-native")," library"),(0,a.kt)(d,{mdxType:"FFI"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(c,{mdxType:"External"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This module is preloaded. You can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local webgpu = require("webgpu")\n')),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"cdefs"},"cdefs"),(0,a.kt)("p",null,"A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to ",(0,a.kt)("inlineCode",{parentName:"p"},"ffi.load")," them manually."),(0,a.kt)("h3",{id:"bindings"},"bindings"),(0,a.kt)("p",null,"A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this note"),"."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"initialize"},"initialize"),(0,a.kt)("p",null,"Initializes the bindings by loading the ",(0,a.kt)("a",{parentName:"p",href:"#cdefs"},"C type definitions"),". Automatically called by the runtime when it sets up the Lua environment."),(0,a.kt)("h2",{id:"native-bindings"},"Native Bindings"),(0,a.kt)("p",null,"The API is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webgpu-native/webgpu-headers/blob/main/webgpu.h"},"shared WebGPU headers"),", with all function names converted to ",(0,a.kt)("inlineCode",{parentName:"p"},"snake_case"),". A full list can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/blob/main/Runtime/Bindings/webgpu_ffi.hpp"},"here"),", and external documentation for the Rust-based implementation is located ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/wgpu/latest/wgpu/index.html"},"here"),". The Lua bindings map to the WebGPU C/FFI headers 1:1."),(0,a.kt)("p",null,"All C functions can be accessed via ",(0,a.kt)("inlineCode",{parentName:"p"},"webgpu.bindings")," and must be called with the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"cdata")," values."),(0,a.kt)("h3",{id:"wgpu_version"},"wgpu_version"),(0,a.kt)("p",null,"Returns the embedded wgpu-native library version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* (*wgpu_version)(void);\n")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}m.isMDXComponent=!0}}]);