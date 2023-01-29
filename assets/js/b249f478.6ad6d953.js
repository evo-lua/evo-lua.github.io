"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[933],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5018:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={},l="Introduction: Evo in a Nutshell",u={unversionedId:"getting-started/evo-in-a-nutshell",id:"getting-started/evo-in-a-nutshell",title:"Introduction: Evo in a Nutshell",description:"If you're completely new, this article can give you quick answers",source:"@site/docs/getting-started/evo-in-a-nutshell.md",sourceDirName:"getting-started",slug:"/getting-started/evo-in-a-nutshell",permalink:"/docs/getting-started/evo-in-a-nutshell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/evo-in-a-nutshell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"How-to Guides",permalink:"/docs/category/how-to-guides"}},h={},c=[{value:"What problem does it solve?",id:"what-problem-does-it-solve",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What are the key features?",id:"what-are-the-key-features",level:2},{value:"How can it be used?",id:"how-can-it-be-used",level:2},{value:"Can it be integrated with other libraries?",id:"can-it-be-integrated-with-other-libraries",level:2},{value:"What is the development status?",id:"what-is-the-development-status",level:2},{value:"How can users get started?",id:"how-can-users-get-started",level:2},{value:"How can users get support?",id:"how-can-users-get-support",level:2},{value:"How can users contribute?",id:"how-can-users-contribute",level:2},{value:"What is the governance model?",id:"what-is-the-governance-model",level:2},{value:"What are the license and terms of use?",id:"what-are-the-license-and-terms-of-use",level:2}],p={toc:c};function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-evo-in-a-nutshell"},"Introduction: Evo in a Nutshell"),(0,i.kt)("p",null,"If you're completely new, this article can give you quick answers"),(0,i.kt)("h2",{id:"what-problem-does-it-solve"},"What problem does it solve?"),(0,i.kt)("p",null,"Lua is an embedded scripting language, and doesn't have many features (to keep the language minimal). While this is by design, it means that you almost always need additional libraries to do something that's actually useful. These libraries are frequently outdated, underdocumented, difficult to use, or just don't work very well/at all. Evo is an effort to create a standalone platform that gives users access to the most important libraries, so that they can focus on just writing code instead of having to deal with all of the above."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Evo is a standalone application written in C++, which embeds Mike Pall's ",(0,i.kt)("a",{parentName:"p",href:"http://luajit.org/"},"LuaJIT engine")," alongside a host of general-purpose C (and C++) libraries. Then it adds more tooling, custom Lua libraries and everything that the runtime doesn't already provide on top. This results in a fast, flexible, ",(0,i.kt)("em",{parentName:"p"},"and")," powerful Lua interpreter (with included ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Just-in-time_compilation"},"just-in-time compiler"),") which can ","[only in principle, not in terms of maturity or features]"," be compared to runtimes for other languages, like ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"Node.js")," (JavaScript), ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PyPy"},"PyPy")," (Python), ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mono_(software)"},"Mono")," (.NET), and the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_virtual_machine"},"JVM"),"."),(0,i.kt)("p",null,"The above is only an approximation since all engines work differently and feature unique library systems. But generally, Evo is most closely related to NodeJS because it is based on the same event loop mechanism. It even uses the same C library, which is called ",(0,i.kt)("a",{parentName:"p",href:"http://docs.libuv.org/en/v1.x/design.html"},"libuv"),"."),(0,i.kt)("h2",{id:"what-are-the-key-features"},"What are the key features?"),(0,i.kt)("p",null,"Here is a short list covering some of the things that you can do with Evo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network programming (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"DNS"),", ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol"},"TCP"),", ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP"),", ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},"HTTP"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),")"),(0,i.kt)("li",{parentName:"ul"},"File system access, both buffered and via data streaming"),(0,i.kt)("li",{parentName:"ul"},"Multithreading, launching subshells, and ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Inter-process_communication"},"inter-process communication")),(0,i.kt)("li",{parentName:"ul"},"Data compression, decompression, and integrity checks"),(0,i.kt)("li",{parentName:"ul"},"Running web applications (in a separate browser window)"),(0,i.kt)("li",{parentName:"ul"},"If all else fails: Integrate other C (and C++) libraries into your Lua program")),(0,i.kt)("p",null,"There's much more to discover, so feel free to take a look around!"),(0,i.kt)("h2",{id:"how-can-it-be-used"},"How can it be used?"),(0,i.kt)("p",null,"In the most simple case, you tell Evo to execute a Lua program (on the command line) and then it goes off and runs it. Realistically, you will quickly need more than just the standard Lua libraries and that's where it gets get interesting: If you're looking to implement more advanced program functionality, such as networking via sockets, reading/writing files, data compression or even 3D rendering, you can call into special Lua APIs to use the builtin libraries. All this becomes much simpler to do in Evo than standard Lua, but the most important benefit is that you can accomplish a lot of the above even with relatively little experience - entirely from Lua (and not C)."),(0,i.kt)("h2",{id:"can-it-be-integrated-with-other-libraries"},"Can it be integrated with other libraries?"),(0,i.kt)("p",null,"As for compatibility with the standard Lua ecosystem: There's nothing preventing you from using the existing libraries. However, due to the asynchronous nature of the event loop, many of the more complex tasks (such as file system access or networking) function very differently in Evo than they do in popular libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://lunarmodules.github.io/luafilesystem/"},"LuaFileSystem")," or ",(0,i.kt)("a",{parentName:"p",href:"https://lunarmodules.github.io/luasocket/"},"LuaSocket"),". This means that, were you to use these libraries, your program could potentially run much slower than it should. Essentially, the library calls will prevent the runtime from doing its job."),(0,i.kt)("p",null,"The good news is that you shouldn't really need any of those problematic libraries, because Evo can do many things out of the box. Other libraries and tools written for Lua 5.1 should work without hiccups, though newer versions are only partially supported by the LuaJIT runtime. In any event, you can always add more functionality by accessing libraries written in C or C++. Integrating native code would normally be a somewhat painful and error-prone process, but with LuaJIT's ",(0,i.kt)("a",{parentName:"p",href:"http://luajit.org/ext_ffi.html"},"foreign function interface")," it doesn't take much work."),(0,i.kt)("h2",{id:"what-is-the-development-status"},"What is the development status?"),(0,i.kt)("p",null,"Since documentation like this can easily become outdated, you should check for yourself. Follow the activity of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evo-lua"},"evo-lua container organization on GitHub")," if you're interested to see where this is going. Even better: You can help propel development forward by giving feedback, making suggestions, or other contributions (including code, testing, and documentation) if you think the effort is worthwhile."),(0,i.kt)("h2",{id:"how-can-users-get-started"},"How can users get started?"),(0,i.kt)("p",null,"The documentation is right here, so all that's left is to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/releases"},"download Evo")," and give it a spin! If your platform doesn't have release binaries, you can take the code and ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-to-guides/building-from-source"},"build Evo from source"),", provided your platform is already supported. If it is not, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/issues/new"},"open an issue")," (after checking that none already exists for your platform) and let me know so I can look into what it would take to support it. Please do understand that I can't feasibly support every obscure configuration - or at least not fully - unless users are willing to pitch in and help."),(0,i.kt)("h2",{id:"how-can-users-get-support"},"How can users get support?"),(0,i.kt)("p",null,"Please open an issue describing your problem ",(0,i.kt)("em",{parentName:"p"},"in as much detail as possible"),". If you don't provide enough context, I can't assist you."),(0,i.kt)("h2",{id:"how-can-users-contribute"},"How can users contribute?"),(0,i.kt)("p",null,"All contributions are very welcome. Feel free to use GitHub issues to their fullest potential!"),(0,i.kt)("h2",{id:"what-is-the-governance-model"},"What is the governance model?"),(0,i.kt)("p",null,"There isn't one. Evo is developed by a single developer (the humble author of these pages), in their free time. See also: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Benevolent_dictator_for_life"},"BDFL")),(0,i.kt)("h2",{id:"what-are-the-license-and-terms-of-use"},"What are the license and terms of use?"),(0,i.kt)("p",null,"Evo is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/MPL/2.0/FAQ/"},"Mozilla Public License, Version 2")," (GPL-compatible). You can also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/blob/main/LICENSE"},"read the full license text on GitHub"),"."))}d.isMDXComponent=!0}}]);