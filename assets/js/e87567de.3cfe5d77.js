"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[9502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:0},l="Globals",o={unversionedId:"references/api/globals",id:"references/api/globals",title:"Globals",description:"Convenient shorthands for some frequently-used functionality",source:"@site/docs/references/api/globals.md",sourceDirName:"references/api",slug:"/references/api/globals",permalink:"/docs/references/api/globals",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/globals.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/references/api/extensions"},next:{title:"Libraries",permalink:"/docs/category/libraries"}},s={},p=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Constants",id:"constants",level:2},{value:"EVO_VERSION",id:"evo_version",level:3},{value:"STATIC_FFI_EXPORTS",id:"static_ffi_exports",level:3},{value:"Functions",id:"functions",level:2},{value:"describe",id:"describe",level:3},{value:"dump",id:"dump",level:3},{value:"extend",id:"extend",level:3},{value:"format",id:"format",level:3},{value:"it",id:"it",level:3},{value:"printf",id:"printf",level:3},{value:"Tables",id:"tables",level:2},{value:"buffer",id:"buffer",level:3},{value:"path",id:"path",level:3},{value:"Changelog",id:"changelog",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Experimental"),c=d("Function"),f=d("Parameters"),m=d("Parameter"),b={toc:p},h="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"globals"},"Globals"),(0,n.kt)("p",null,"Convenient shorthands for some frequently-used functionality"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)(u,{mdxType:"Experimental"}),(0,n.kt)("h2",{id:"availability"},"Availability"),(0,n.kt)("p",null,"All functions are made available in the global environment and can be accessed directly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'printf("Hello %s", "world") -- Implied global lookup: _G.printf\n')),(0,n.kt)("h2",{id:"constants"},"Constants"),(0,n.kt)("h3",{id:"evo_version"},"EVO_VERSION"),(0,n.kt)("p",null,"The build version embedded into the native C++ runtime at compile time, given as a ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic version")," string in ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-describe"},"git describe")," format."),(0,n.kt)("h3",{id:"static_ffi_exports"},"STATIC_FFI_EXPORTS"),(0,n.kt)("p",null,"A table containing the low-level APIs bound to the Lua environment via LuaJIT's ",(0,n.kt)("a",{parentName:"p",href:"http://luajit.org/ext_ffi.html"},"foreign function interface"),". For details, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this page"),"."),(0,n.kt)("p",null,"You probably don't need to access these manually unless you want to know which libraries are embedded using this method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=dump-ffi-exports.lua",title:"dump-ffi-exports.lua"},"dump(STATIC_FFI_EXPORTS)\n\n-- Result:\n{\n        webview = <userdata 1>\n}\n")),(0,n.kt)("p",null,"Keep in mind that FFI libraries are generally memory-unsafe, so prefer using the high-level interfaces provided if possible."),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"describe"},"describe"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/api/libraries/bdd#describe"},"bdd.describe(...)"),"."),(0,n.kt)("h3",{id:"dump"},"dump"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/api/extensions#debugdump"},"debug.dump(...)"),"."),(0,n.kt)("h3",{id:"extend"},"extend"),(0,n.kt)("p",null,"Sets up the metatable of ",(0,n.kt)("inlineCode",{parentName:"p"},"child")," so that it acts as an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"parent")," (in terms of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"object-oriented programming"),")."),(0,n.kt)(c,{mdxType:"Function"},(0,n.kt)(f,{mdxType:"Parameters"},(0,n.kt)(m,{name:"parent",type:"table",mdxType:"Parameter"}),(0,n.kt)(m,{name:"child",type:"table",mdxType:"Parameter"}))),(0,n.kt)("h3",{id:"format"},"format"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.1/manual.html#pdf-string.format"},"string.format(...)"),"."),(0,n.kt)("h3",{id:"it"},"it"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/api/libraries/bdd#it"},"bdd.it(...)"),"."),(0,n.kt)("h3",{id:"printf"},"printf"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"print(string.format(...))"),"."),(0,n.kt)("h2",{id:"tables"},"Tables"),(0,n.kt)("h3",{id:"buffer"},"buffer"),(0,n.kt)("p",null,"Alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"string.buffer")," (LuaJIT builtin)."),(0,n.kt)("h3",{id:"path"},"path"),(0,n.kt)("p",null,"Alias for the preloaded ",(0,n.kt)("a",{parentName:"p",href:"/docs/references/api/libraries/path"},"path library"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}v.isMDXComponent=!0}}]);