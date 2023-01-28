"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[444],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4924:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],r={},s="Coding Conventions",c={unversionedId:"references/code-conventions",id:"references/code-conventions",title:"Coding Conventions",description:"An overview of the stylistic conventions used in the codebase",source:"@site/docs/references/code-conventions.md",sourceDirName:"references",slug:"/references/code-conventions",permalink:"/docs/references/code-conventions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/references/code-conventions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/docs/category/references"}},u={},d=[{value:"About this Document",id:"about-this-document",level:2},{value:"Lua Conventions",id:"lua-conventions",level:2},{value:"Lua Example: Object-Oriented (Class Module)",id:"lua-example-object-oriented-class-module",level:2},{value:"C++ Conventions",id:"c-conventions",level:2},{value:"Formatting",id:"formatting",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],m={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding-conventions"},"Coding Conventions"),(0,i.kt)("p",null,"An overview of the stylistic conventions used in the codebase"),(0,i.kt)("h2",{id:"about-this-document"},"About this Document"),(0,i.kt)("p",null,"This is a reference, not an explanation. For the rationale behind these conventions, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/background-information/design/implemented/code-conventions"},"RFC: Code Conventions")),(0,i.kt)("h2",{id:"lua-conventions"},"Lua Conventions"),(0,i.kt)("p",null,"There's only a few things that are somewhat important to me (I think):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lua-C bindings implemented by external libraries generally use ",(0,i.kt)("inlineCode",{parentName:"li"},"snake_case")," (mostly because it can't be changed)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"webview.eval()")))),(0,i.kt)("li",{parentName:"ul"},"Lua libraries written for the runtime itself should be written in ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase"),", with lower-case module names",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"bdd.startTestRunner()")))),(0,i.kt)("li",{parentName:"ul"},"Lua-C++ bindings written for the runtime itself should be written in ",(0,i.kt)("inlineCode",{parentName:"li"},"PascalCase"),", and prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"C_*"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"C_FileSystem.ReadFile()")))),(0,i.kt)("li",{parentName:"ul"},"The standard Lua module syntax (return table of exports) is used for every module and library"),(0,i.kt)("li",{parentName:"ul"},"OOP constructors are called ",(0,i.kt)("inlineCode",{parentName:"li"},"Construct")," but never used explicitly (as in ",(0,i.kt)("inlineCode",{parentName:"li"},"local myObject = Object:Construct()"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Instead, I decided to use a Pythonesque/early-JS-style function call convention: ",(0,i.kt)("inlineCode",{parentName:"li"},"local myObject = Object()")))),(0,i.kt)("li",{parentName:"ul"},"Constants and enum values are written in ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOUTING_CASE")," (yes, I made that term up)")),(0,i.kt)("p",null,"It can be argued that combining multiple styles is confusing (and it may be so), but for the time being that's how it is."),(0,i.kt)("h2",{id:"lua-example-object-oriented-class-module"},"Lua Example: Object-Oriented (Class Module)"),(0,i.kt)("p",null,"The following code implements a Lua class module that should help illustrate the code conventions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=code-conventions-example.lua",title:"code-conventions-example.lua"},"-- Modules, classes, and high-level APIs use PascalCase\nlocal MyExampleClass = {}\n\n-- Constructor function that will be hidden via __call metatable magic\n-- The colon (:) symbol is required for OOP code so that self is passed as the first parameter\nfunction MyExampleClass:Construct()\n    local instance = {}\n\n    setmetatable(instance, self) -- Sets up the inheritance hierarchy\n\n    return instance\nend\n\n-- This allows instantiation like so: local myExampleInstance = MyExampleClass()\nMyExampleClass.__call = MyExampleClass.Construct\nsetmetatable(MyExampleClass, MyExampleClass)\n\n-- Functions that aren't part of the exported API use camelCase\nlocal function standaloneFunctionThatIsNotExported()\n    local someLocalVariable = 42 -- Variables use camelCase, as well\nend\n\n-- Module-level functions use PascalCase, too\nfunction MyExampleClass:DemonstrateBindingsUsage()\n    -- Low level APIs use snake_case (for better or worse. It's out of my hands...)\n    -- They are direct LuaJIT-FFI bindings or Lua-C-bindings, and expose cdata (or userdata)\n    local someLowLevelBinding = require(\"binding\")\n    someLowLevelBinding.some_c_api_called_from_lua()\n\n    -- High-level APIs use PascalCase, regardless of whether they're implemented in Lua or C++\n    -- A high-level API is one that abstracts C/FFI details away for convenience and safety\n    -- They may be implemented in Lua or C++ depending on performance requirements\n    C_HighLevelAPI.DoSomething() -- Assumed to be globally available here\n\n    -- Finally, there's non-OOP libraries written in 100% Lua which don't deal with native code\n    -- They generally use camelCase naming (just like variables and independent functions)\n    local myLuaModule = require(\"luamodule\")\n    myLuaModule.doSomethingCool()\nend\n\n-- Lua modules always return themselves (as a table of exports)\nreturn MyExampleClass\n")),(0,i.kt)("p",null,"Needless to say, the implementation details are irrelevant here and should be completely ignored."),(0,i.kt)("h2",{id:"c-conventions"},"C++ Conventions"),(0,i.kt)("p",null,"The conventions are the same as in Lua. Except everything's low-level code, but I don't want ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case")," everywhere. To be honest,  I haven't decided on a best approach for native code yet as I don't have enough experience with it. For now, all code should use the same style for both languages. Default to ",(0,i.kt)("inlineCode",{parentName:"p"},"PascalCase")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case")," however."),(0,i.kt)("p",null,"Beyond that, there are a few things I've been trying to do consistently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standalone functions, just like variables, use ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase")," every time"),(0,i.kt)("li",{parentName:"ul"},"Member variables are prefixed, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"m_someLocalMemberVariable")," (even if I find it bizarre)"),(0,i.kt)("li",{parentName:"ul"},"Global variables aren't used, so there's no ",(0,i.kt)("inlineCode",{parentName:"li"},"g_thisShouldNeverHappen")," anywhere"),(0,i.kt)("li",{parentName:"ul"},"Namespaces use ",(0,i.kt)("inlineCode",{parentName:"li"},"PascalCase"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ThisDoesReadNicely::SomeFunctionNameGoesHere()")),(0,i.kt)("li",{parentName:"ul"},"Speaking of which: Function names for namespaces and classes also use ",(0,i.kt)("inlineCode",{parentName:"li"},"PascalCase")," (as above)"),(0,i.kt)("li",{parentName:"ul"},"I also try to avoid preprocessor instructions (especially ",(0,i.kt)("inlineCode",{parentName:"li"},"#define"),") and use ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," values instead")),(0,i.kt)("p",null,"There's probably a lot more to be considered, but I'm not a C++ programmer. If you have any ideas, let me know!"),(0,i.kt)("h2",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"These guidelines only apply to things that require human interaction. Formatting conventions are handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"clang-format")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stylua"),", precisely so that no thought needs to be wasted on them beyond what was needed to initially set up some rules. If there's a good case to be made for changing the formatting, I'm all ears (except for tabs vs. spaces)."),(0,i.kt)("p",null,"Seriously, anyone who proposes using spaces will be fed to my pet hamster. No, I don't actually have a pet hamster. ",(0,i.kt)("em",{parentName:"p"},"Yet.")),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"These are not necessarily the best (or even good) conventions. In fact, they may seem quite weird. This is mostly just a description of what I've been using. Thinking at different levels of abstraction is necessary when dealing with native code and Lua, as well as FFI or regular C-API bindings, so that's why they're based on proximity to low-level code."),(0,i.kt)("p",null,"As for C++ conventions, I really have no idea what I'm doing here. So I mostly just made it so that the code looked nice."))}p.isMDXComponent=!0}}]);