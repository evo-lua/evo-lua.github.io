"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[2435],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},591:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={},i="Integrations and Tooling",l={unversionedId:"how-to-guides/integrations-and-tooling",id:"how-to-guides/integrations-and-tooling",title:"Integrations and Tooling",description:"Discover additional tools that can ease your development workflow",source:"@site/docs/how-to-guides/integrations-and-tooling.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/integrations-and-tooling",permalink:"/docs/how-to-guides/integrations-and-tooling",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/how-to-guides/integrations-and-tooling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building from Source",permalink:"/docs/how-to-guides/building-from-source"},next:{title:"Unit Testing",permalink:"/docs/how-to-guides/unit-testing"}},s={},u=[{value:"Code Completion",id:"code-completion",level:2},{value:"Static Analysis",id:"static-analysis",level:2},{value:"Code Formatting",id:"code-formatting",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Other Tools",id:"other-tools",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrations-and-tooling"},"Integrations and Tooling"),(0,a.kt)("p",null,"Discover additional tools that can ease your development workflow"),(0,a.kt)("h2",{id:"code-completion"},"Code Completion"),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),", any plugin that supports Lua 5.1 should also work with Evo. Recommendation: ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua"},"Lua Language Server")),(0,a.kt)("p",null,"Note that LLS will currently only show the Lua/LuaJIT APIs and not the additional ones referenced ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/api/"},"here"),". More info on this soon\u2122."),(0,a.kt)("h2",{id:"static-analysis"},"Static Analysis"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lunarmodules/luacheck"},"luacheck")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kampfkarren/selene"},"selene")," to analyse your codebase and find potential issues. Both can be used with Evo out of the box."),(0,a.kt)("p",null,"They, too, will fail to recognize the additional APIs that Evo provides. For now, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/blob/main/.luacheckrc"},"this luacheck configuration")," as a workaround."),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"All formatting tools that support LuaJIT and Lua 5.1 should work. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JohnnyMorganz/StyLua"},"StyLua")," is a great one and it has a ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.stylua"},"Visual Studio Code plugin"),", too."),(0,a.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"Consider adding automated tests via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," to your repository. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/setup-evo-lua-environment"},"setup-evo-lua-environment")," action will take care of setting up the Lua runtime for you. This action is maintained as part of the project, with the goal of providing a better developer experience."),(0,a.kt)("p",null,"There are also third-party actions to set up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lunarmodules/luacheck"},"luacheck")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NTBBloodbath/selene-action"},"selene"),", though it's unclear whether the latter is still maintained."),(0,a.kt)("h2",{id:"other-tools"},"Other Tools"),(0,a.kt)("p",null,"If you're aware of useful tools that are missing here or you would like to create some for Evo, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-lua.github.io/issues/new"},"open an issue")," and get in touch!"))}d.isMDXComponent=!0}}]);