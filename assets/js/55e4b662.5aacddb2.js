"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[151],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(i),h=n,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return i?r.createElement(y,l(l({ref:t},c),{},{components:i})):r.createElement(y,l({ref:t},c))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,l[1]=a;for(var u=2;u<o;u++)l[u]=i[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5894:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const o={sidebar_position:5},l="Security Policy",a={unversionedId:"security-policy",id:"security-policy",title:"Security Policy",description:"This page describes how security vulnerabilities should be reported, and how reports will be handled",source:"@site/docs/security-policy.md",sourceDirName:".",slug:"/security-policy",permalink:"/docs/security-policy",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/security-policy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Coding Conventions",permalink:"/docs/references/code-conventions"}},s={},u=[{value:"Reporting Vulnerabilities",id:"reporting-vulnerabilities",level:2},{value:"What should you include in your report?",id:"what-should-you-include-in-your-report",level:2},{value:"Responsible Disclosure Policy",id:"responsible-disclosure-policy",level:2},{value:"Backporting of Security Fixes",id:"backporting-of-security-fixes",level:2},{value:"Reporting Issues with External Dependencies",id:"reporting-issues-with-external-dependencies",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security-policy"},"Security Policy"),(0,n.kt)("p",null,"This page describes how security vulnerabilities should be reported, and how reports will be handled"),(0,n.kt)("h2",{id:"reporting-vulnerabilities"},"Reporting Vulnerabilities"),(0,n.kt)("p",null,"There currently aren't any official disclosure channels in place. If you encounter a security-critical issue, please get in touch:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ideally, contact ",(0,n.kt)("strong",{parentName:"li"},"RDW#9823")," on Discord (via DM) with all the relevant details to discuss how we should proceed"),(0,n.kt)("li",{parentName:"ul"},"If you must open an issue in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/evo-lua/ev-runtime/"},"GitHub repository"),", mention security but ",(0,n.kt)("em",{parentName:"li"},"without giving ANY further details publicly")),(0,n.kt)("li",{parentName:"ul"},"In this case, you should probably include your contact info, (e.g., email address) - keep in mind that anyone can see what you post!")),(0,n.kt)("p",null,"You'll (hopefully) quickly receive a reply and then we can get the issue fixed as soon as possible."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is best practice to ",(0,n.kt)("strong",{parentName:"p"},"never")," disclose security vulnerabilities publicly, at least before having given the authors the opportunity to publish a fix. This will help reduce the possibility of zero-day exploits, where an attacker who learned of the vulnerability can effectively use it against exposed applications before they have a chance to patch the security hole."),(0,n.kt)("p",{parentName:"admonition"},"This is why the recommended approach is to give details ",(0,n.kt)("strong",{parentName:"p"},"only in private"),", and hold potential fixes locally (or in a private fork) instead of simply opening a (public) Pull Request on GitHub.")),(0,n.kt)("p",null,"For more details, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Responsible_disclosure"},"Wikipedia article on Responsible Disclosure"),"."),(0,n.kt)("h2",{id:"what-should-you-include-in-your-report"},"What should you include in your report?"),(0,n.kt)("p",null,"Please include all of the following information whenever you report a (potential) security vulnerability:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Description of the problem"),(0,n.kt)("li",{parentName:"ul"},"Potential impact / severity"),(0,n.kt)("li",{parentName:"ul"},"Steps to reproduce (ideally in code)"),(0,n.kt)("li",{parentName:"ul"},"Whether or not you'd like to be credited (mention in the release changelog) - will default to yes if omitted")),(0,n.kt)("h2",{id:"responsible-disclosure-policy"},"Responsible Disclosure Policy"),(0,n.kt)("p",null,"When a security issue is reported, disclosure happens as part of the release process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The issue will be confirmed as quickly as humanly possible (within reason - keep in mind that this is a hobbyist project)"),(0,n.kt)("li",{parentName:"ul"},"A new release will be published immediately after the fix has been tested, even if there are no other changes to include"),(0,n.kt)("li",{parentName:"ul"},'Its changelog shall contain a category for "Security Fixes" including a categorization and estimate of the potential impact'),(0,n.kt)("li",{parentName:"ul"},"There's no dedicated notification process for security releases - users are expected to update frequently, anyway")),(0,n.kt)("h2",{id:"backporting-of-security-fixes"},"Backporting of Security Fixes"),(0,n.kt)("p",null,'No backports, as it directly contradicts the "evolutionary approach" behind Evo\'s development. Frequent releases alleviate the need.'),(0,n.kt)("h2",{id:"reporting-issues-with-external-dependencies"},"Reporting Issues with External Dependencies"),(0,n.kt)("p",null,"If there's an issue with third-party code that Evo depends on, the above still applies. A new release will be published as soon as possible."))}d.isMDXComponent=!0}}]);