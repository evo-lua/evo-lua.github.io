"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:20},l="Globals",o={unversionedId:"references/api/globals",id:"references/api/globals",title:"Globals",description:"Convenient shorthands for some frequently-used functionality",source:"@site/docs/references/api/globals.md",sourceDirName:"references/api",slug:"/references/api/globals",permalink:"/docs/references/api/globals",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/globals.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/references/api/extensions"},next:{title:"assertions",permalink:"/docs/references/api/assertions"}},s={},p=[{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"describe",id:"describe",level:3},{value:"dump",id:"dump",level:3},{value:"format",id:"format",level:3},{value:"it",id:"it",level:3},{value:"printf",id:"printf",level:3},{value:"Tables",id:"tables",level:2},{value:"buffer",id:"buffer",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"globals"},"Globals"),(0,a.kt)("p",null,"Convenient shorthands for some frequently-used functionality"),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"All functions are made available in the global environment and can be accessed directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'printf("Hello %s", world) -- Implied global lookup: _G.printf\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"describe"},"describe"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/bdd#describe"},"bdd.describe(...)"),"."),(0,a.kt)("h3",{id:"dump"},"dump"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/extensions#debugdump"},"debug.dump(...)"),"."),(0,a.kt)("h3",{id:"format"},"format"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"string.format(...)"),"."),(0,a.kt)("h3",{id:"it"},"it"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/bdd#it"},"bdd.it(...)"),"."),(0,a.kt)("h3",{id:"printf"},"printf"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"print(string.format(...))"),"."),(0,a.kt)("h2",{id:"tables"},"Tables"),(0,a.kt)("h3",{id:"buffer"},"buffer"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"string.buffer")," (LuaJIT builtin)."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}d.isMDXComponent=!0}}]);