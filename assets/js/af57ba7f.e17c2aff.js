"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[8685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,b=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:0},l="Extensions",o={unversionedId:"references/api/extensions",id:"references/api/extensions",title:"Extensions",description:"Unofficial extensions to the Lua standard libraries",source:"@site/docs/references/api/extensions.md",sourceDirName:"references/api",slug:"/references/api/extensions",permalink:"/docs/references/api/extensions",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/extensions.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"zlib",permalink:"/docs/references/api/bindings/zlib"},next:{title:"Globals",permalink:"/docs/references/api/globals"}},s={},p=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Debug Library",id:"debug-library",level:2},{value:"debug.dump",id:"debugdump",level:3},{value:"String Library",id:"string-library",level:2},{value:"string.diff",id:"stringdiff",level:3},{value:"string.explode",id:"stringexplode",level:3},{value:"string.filesize",id:"stringfilesize",level:3},{value:"Table Library",id:"table-library",level:2},{value:"table.contains",id:"tablecontains",level:3},{value:"Changelog",id:"changelog",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=d("Experimental"),m=d("Function"),c=d("Parameters"),b=d("Parameter"),y=d("Returns"),f=d("Return"),g={toc:p},k="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"Unofficial extensions to the Lua standard libraries"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(u,{mdxType:"Experimental"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Extensions are added to the existing global standard library tables. You can simply index them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"debug.dump({ 1, 2, 3 })\n")),(0,a.kt)("h2",{id:"debug-library"},"Debug Library"),(0,a.kt)("h3",{id:"debugdump"},"debug.dump"),(0,a.kt)("p",null,"Prints a human-readable string representation of the given object. Mostly useful for dumping tables, but unsuitable for serialization purposes. The output format cannot be considered stable. Currently uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/bindings/inspect"},"inspect")," internally, though this may change in the future."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(b,{name:"object",mdxType:"Parameter"})),(0,a.kt)(y,{mdxType:"Returns"},(0,a.kt)(f,{name:"stringifiedObject",type:"string",mdxType:"Return"}))),(0,a.kt)("h2",{id:"string-library"},"String Library"),(0,a.kt)("h3",{id:"stringdiff"},"string.diff"),(0,a.kt)("p",null,"Returns a string representing the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"firstValue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secondValue"),". The exact format is subject to change."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(b,{name:"firstValue",type:"string",mdxType:"Parameter"}),(0,a.kt)(b,{name:"firstValue",type:"string",mdxType:"Parameter"})),(0,a.kt)(y,{mdxType:"Returns"},(0,a.kt)(f,{name:"humanReadableDiff",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"stringexplode"},"string.explode"),(0,a.kt)("p",null,"Tokenizes the given ",(0,a.kt)("inlineCode",{parentName:"p"},"inputString")," based on a configurable ",(0,a.kt)("inlineCode",{parentName:"p"},"delimiter")," character, which is stripped from the output."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(b,{name:"inputString",type:"string",mdxType:"Parameter"}),(0,a.kt)(b,{name:"delimiter",type:"string",optional:!0,fallback:"'%s' (whitespace)",mdxType:"Parameter"})),(0,a.kt)(y,{mdxType:"Returns"},(0,a.kt)(f,{name:"tokens",type:"table",mdxType:"Return"}))),(0,a.kt)("h3",{id:"stringfilesize"},"string.filesize"),(0,a.kt)("p",null,"Returns a human-readable representation of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSizeInBytes")," using standard units. The exact format is subject to change."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(b,{name:"fileSizeInBytes",type:"number",mdxType:"Parameter"})),(0,a.kt)(y,{mdxType:"Returns"},(0,a.kt)(f,{name:"formattedFileSize",type:"string",mdxType:"Return"}))),(0,a.kt)("h2",{id:"table-library"},"Table Library"),(0,a.kt)("h3",{id:"tablecontains"},"table.contains"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," in the array part of the table, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The dictionary part is ignored."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(b,{name:"table",type:"table",mdxType:"Parameter"}),(0,a.kt)(b,{name:"value",mdxType:"Parameter"})),(0,a.kt)(y,{mdxType:"Returns"},(0,a.kt)(f,{name:"isValuePresent",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Added ",(0,a.kt)("inlineCode",{parentName:"td"},"string.filesize"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}h.isMDXComponent=!0}}]);