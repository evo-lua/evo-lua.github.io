"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[62],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=r,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},959:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={},u="The Evo Philosophy",s={unversionedId:"background-information/the-evo-philosophy",id:"background-information/the-evo-philosophy",title:"The Evo Philosophy",description:"This document specifies the general approach to development for Evo",source:"@site/docs/background-information/the-evo-philosophy.md",sourceDirName:"background-information",slug:"/background-information/the-evo-philosophy",permalink:"/docs/background-information/the-evo-philosophy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/background-information/the-evo-philosophy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static FFI Bindings",permalink:"/docs/background-information/luajit/static-ffi-bindings"},next:{title:"References",permalink:"/docs/category/references"}},c={},p=[{value:"It&#39;s All About Evolutionary Design",id:"its-all-about-evolutionary-design",level:2},{value:"Don&#39;t Be Clever, Be Clear",id:"dont-be-clever-be-clear",level:2},{value:"Quality MUST Be Built In",id:"quality-must-be-built-in",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-evo-philosophy"},"The Evo Philosophy"),(0,a.kt)("p",null,"This document specifies the general approach to development for Evo"),(0,a.kt)("h2",{id:"its-all-about-evolutionary-design"},"It's All About Evolutionary Design"),(0,a.kt)("p",null,"No one can predict the future, least of all me. It should therefore be considered of utmost priority to keep the code changeable at all times, and eliminate complexity that could prevent changes from accumulating whenever feasible. If code cannot evolve it's doomed to wither and die, just like biological organisms in nature do. Evo's logo is a caterpillar for this reason (if the name didn't give it away)."),(0,a.kt)("h2",{id:"dont-be-clever-be-clear"},"Don't Be Clever, Be Clear"),(0,a.kt)("p",null,"I'd rather have someone go through the codebase (or even documentation) and say, ",(0,a.kt)("em",{parentName:"p"},"I get what you were going for, but this is really stupid! Why not do it this way, or do that instead?")," than leave in bewilderment, wondering just what they were looking at. This kind of feedback is a huge win, because it means they were actually able to understand the code and come up with ideas for improvement!"),(0,a.kt)("h2",{id:"quality-must-be-built-in"},"Quality MUST Be Built In"),(0,a.kt)("p",null,"In order to maintain a rapid pace of development, a reasonably high standard of quality must be maintained at all times. What exactly that means is of course up for debate, but the core idea is this: Poorly-done work must be done twice (or more), and that's to be avoided at all costs. This isn't to say every feature will turn out great, but ",(0,a.kt)("em",{parentName:"p"},"deliberately")," taking shortcuts which ",(0,a.kt)("em",{parentName:"p"},"disproportionately")," hinder future development, such as skimping on tests and/or documentation work, must be avoided - at least outside of prototyping phases."))}h.isMDXComponent=!0}}]);