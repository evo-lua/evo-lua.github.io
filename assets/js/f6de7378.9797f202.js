"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[4663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="console",l={unversionedId:"references/api/libraries/console",id:"references/api/libraries/console",title:"console",description:"Minimal library for capturing and replaying console output",source:"@site/docs/references/api/libraries/console.md",sourceDirName:"references/api/libraries",slug:"/references/api/libraries/console",permalink:"/docs/references/api/libraries/console",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/libraries/console.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bdd",permalink:"/docs/references/api/libraries/bdd"},next:{title:"transform",permalink:"/docs/references/api/libraries/transform"}},p={},u=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"capture",id:"capture",level:3},{value:"release",id:"release",level:3},{value:"Changelog",id:"changelog",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("Experimental"),d=c("Function"),f=c("Returns"),m=c("Return"),b={toc:u},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"console"},"console"),(0,a.kt)("p",null,"Minimal library for capturing and replaying console output"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(s,{mdxType:"Experimental"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This module is preloaded. You can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local console = require("console")\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"capture"},"capture"),(0,a.kt)("p",null,"Starts capturing all regular console output that would normally be printed, buffering it internally. Appends ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," to each token."),(0,a.kt)("p",null,"Currently only captures ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.1/manual.html#pdf-print"},"print"),", but not ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.1/manual.html#pdf-io.write"},"io.write"),". Mainly useful for writing unit tests for user-facing code, or producing delayed output."),(0,a.kt)("h3",{id:"release"},"release"),(0,a.kt)("p",null,"Stops capturing console output, allowing it to be displayed normally again. Returns the contents of the internal buffer and then resets it."),(0,a.kt)(d,{mdxType:"Function"},(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(m,{name:"capturedOutput",type:"string",mdxType:"Return"}))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}g.isMDXComponent=!0}}]);