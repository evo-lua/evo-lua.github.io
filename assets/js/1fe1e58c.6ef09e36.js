"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[568],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={},l="RFC: Standardized Unit Test Runner",s={unversionedId:"background-information/design/drafts/unit-test-runner",id:"background-information/design/drafts/unit-test-runner",title:"RFC: Standardized Unit Test Runner",description:"This document describes potential designs for a BDD-style test runner.",source:"@site/docs/background-information/design/drafts/unit-test-runner.md",sourceDirName:"background-information/design/drafts",slug:"/background-information/design/drafts/unit-test-runner",permalink:"/docs/background-information/design/drafts/unit-test-runner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/background-information/design/drafts/unit-test-runner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RFC: Standardized Logging Framework",permalink:"/docs/background-information/design/drafts/logging-framework"},next:{title:"Template",permalink:"/docs/background-information/design/template"}},d={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Testing Philosophy",id:"testing-philosophy",level:2},{value:"Alternatives",id:"alternatives",level:2}],p={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rfc-standardized-unit-test-runner"},"RFC: Standardized Unit Test Runner"),(0,a.kt)("p",null,"This document describes potential designs for a BDD-style test runner."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"There's a need for unit testing, but the existing frameworks are largely inactive and can't easily be adapted."),(0,a.kt)("h2",{id:"testing-philosophy"},"Testing Philosophy"),(0,a.kt)("p",null,"BDD style, meaning ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," is used to define test suites. Why?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy to understand"),(0,a.kt)("li",{parentName:"ul"},"Similar to the existing frameworks"),(0,a.kt)("li",{parentName:"ul"},"Requires little boilerplate"),(0,a.kt)("li",{parentName:"ul"},"Flexible enough for all basic unit testing needs"),(0,a.kt)("li",{parentName:"ul"},"Simple enough to implement from scratch"),(0,a.kt)("li",{parentName:"ul"},"Lends itself well to domain-driven design")),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make ",(0,a.kt)("inlineCode",{parentName:"li"},"busted")," work the way it should (painful)"),(0,a.kt)("li",{parentName:"ul"},"Attempt to fit ",(0,a.kt)("inlineCode",{parentName:"li"},"luaunit")," into the BDD framework (impedance mismatch)"),(0,a.kt)("li",{parentName:"ul"},"Try out some of more niche frameworks listed on ",(0,a.kt)("a",{parentName:"li",href:"http://lua-users.org/wiki/UnitTesting"},"lua-users.org")," (unlikely to be fruitful)")))}f.isMDXComponent=!0}}]);