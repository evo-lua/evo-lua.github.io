"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[328],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="Static FFI Bindings",s={unversionedId:"background-information/luajit/static-ffi-bindings",id:"background-information/luajit/static-ffi-bindings",title:"Static FFI Bindings",description:"How statically-linked libraries are loaded into the Lua environment",source:"@site/docs/background-information/luajit/static-ffi-bindings.md",sourceDirName:"background-information/luajit",slug:"/background-information/luajit/static-ffi-bindings",permalink:"/docs/background-information/luajit/static-ffi-bindings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/background-information/luajit/static-ffi-bindings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LuaJIT Notes",permalink:"/docs/category/luajit-notes"}},c={},d=[{value:"Calling C Functions From a Static Library",id:"calling-c-functions-from-a-static-library",level:2},{value:"Relevance and Advantages",id:"relevance-and-advantages",level:2},{value:"Alternative Approaches",id:"alternative-approaches",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-ffi-bindings"},"Static FFI Bindings"),(0,i.kt)("p",null,"How statically-linked libraries are loaded into the Lua environment"),(0,i.kt)("h2",{id:"calling-c-functions-from-a-static-library"},"Calling C Functions From a Static Library"),(0,i.kt)("p",null,"First, create a struct with function pointers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct myfuncs {\n    int (*some_function_name)(int a, int b);\n    void *(*another_function_name)(char *x, const char *y);\n    //...\n};\n")),(0,i.kt)("p",null,"Then make a static struct on the C side and fill it with the\nfunction pointers. Make a lightuserdata object from the struct\npointer with ",(0,i.kt)("inlineCode",{parentName:"p"},"lua_pushlightuserdata()"),"."),(0,i.kt)("p",null,"Pass that Lua object to\nLuaJIT, e.g. as an argument of ",(0,i.kt)("inlineCode",{parentName:"p"},"lua_call"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"lua_pcall")," or via a global."),(0,i.kt)("p",null,"On the LuaJIT side, declare the identical struct with ",(0,i.kt)("inlineCode",{parentName:"p"},"ffi.cdef"),".\nThen cast that lightuserdata argument back to the struct pointer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'    -- Assumes the lightuserdata is in the variable ud.\n    myfuncs = ffi.cast("struct myfuncs *", ud)\n')),(0,i.kt)("p",null,"All of the above should only be done once at initialization."),(0,i.kt)("p",null,"Now, whenever you want to call one of these functions via the FFI,\nsimply reference them from the struct. E.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    -- That's really an FFI call.\n    local y = myfuncs.some_function_name(1, 2)\n")),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://www.freelists.org/post/luajit/How-to-call-functions-from-a-static-library-in-Luajit,11"},"Mike Pall, LuaJIT mailing list"),"(archived here, with minor formatting edits, in case it becomes unavailable)"),(0,i.kt)("h2",{id:"relevance-and-advantages"},"Relevance and Advantages"),(0,i.kt)("p",null,"The method described here is how all statically-linked library APIs are bound to Lua. Why do it this way?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's faster than using the regular C API, more readable, and less error-prone too (no stack mis-alignment errors...)"),(0,i.kt)("li",{parentName:"ul"},"This is important if new libraries need to be added and Lua bindings either don't exist or aren't well maintained"),(0,i.kt)("li",{parentName:"ul"},"The FFI generally requires less glue code to be written when interfaces change, making maintenance easier")),(0,i.kt)("p",null,"Because the approach may seem a bit convoluted at first, this note exists to provide the necessary background."),(0,i.kt)("h2",{id:"alternative-approaches"},"Alternative Approaches"),(0,i.kt)("p",null,"There are several other ways that functionality from native libraries could be made available to Lua:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regular Lua-C-API bindings (does not scale, cumbersome and error-prone)"),(0,i.kt)("li",{parentName:"ul"},"Rewrite in Lua entirely (usually not feasable, can also be slow depending on the algorithm)"),(0,i.kt)("li",{parentName:"ul"},"Shell out to a native host program (not usually portable, may invoke too much overhead at scale)"),(0,i.kt)("li",{parentName:"ul"},"Just use dynamically-linked libraries with ",(0,i.kt)("inlineCode",{parentName:"li"},"ffi.load()")," - this is indeed preferable IFF static linkage isn't desired")),(0,i.kt)("p",null,"Since LuaJIT is the only supported Lua engine, there's really no reason to use any of them (for embedded libraries)."))}f.isMDXComponent=!0}}]);