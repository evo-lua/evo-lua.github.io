"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:200},o="Setup: Installation and Usage",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Setup: Installation and Usage",description:"Get started with Lua development using the Evo runtime",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Introduction: Evo in a Nutshell",permalink:"/docs/getting-started/evo-in-a-nutshell"},next:{title:"Overview: Core Concepts",permalink:"/docs/getting-started/core-concepts"}},s={},p=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"External Dependencies",id:"external-dependencies",level:2},{value:"Basic Command-Line Usage",id:"basic-command-line-usage",level:2},{value:"Running Scripts",id:"running-scripts",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-installation-and-usage"},"Setup: Installation and Usage"),(0,i.kt)("p",null,"Get started with Lua development using the Evo runtime"),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("p",null,"The most commonly-used systems should have ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/releases"},"binary releases available on GitHub"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Windows 10 and 11, download ",(0,i.kt)("inlineCode",{parentName:"li"},"evo.exe")," from the releases page"),(0,i.kt)("li",{parentName:"ul"},"Mac OS users on an Intel-based machine can download ",(0,i.kt)("inlineCode",{parentName:"li"},"evo-macos-x64")," (rename to ",(0,i.kt)("inlineCode",{parentName:"li"},"evo")," after downloading, if you prefer)"),(0,i.kt)("li",{parentName:"ul"},"Linux (Debian/Ubuntu-likes) can try ",(0,i.kt)("inlineCode",{parentName:"li"},"evo-linux-x64")," (rename to ",(0,i.kt)("inlineCode",{parentName:"li"},"evo"),"), though there may be incompatibilities")),(0,i.kt)("p",null,"Alternatively, and likely preferably for Linux users, you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-to-guides/building-from-source"},"build from source")," to obtain a fresh binary that way."),(0,i.kt)("h2",{id:"external-dependencies"},"External Dependencies"),(0,i.kt)("p",null,"Evo comes with most of its dependencies embedded in the runtime, in order to make it as easy as possible to use."),(0,i.kt)("p",null,"However, there is one deliberate exception (that only affects Linux users):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To avoid shipping a heavy-weight browser engine, Evo uses the operating system's native browser"),(0,i.kt)("li",{parentName:"ul"},"This is Microsoft Edge on Windows, Apple's Safari on Mac OS, and WebKit (via ",(0,i.kt)("a",{parentName:"li",href:"https://webkitgtk.org/"},"WebKitGTK"),") on Linux"),(0,i.kt)("li",{parentName:"ul"},"Since WebKit isn't usually delivered to Linux users automatically, you must manually install it",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you're a Linux user building from source, simply follow the installation steps listed ",(0,i.kt)("a",{parentName:"li",href:"/docs/how-to-guides/building-from-source#linux"},"here")),(0,i.kt)("li",{parentName:"ul"},"Otherwise, you can quickly install the relevant libraries via the package manager:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Debian/Ubuntu: ",(0,i.kt)("inlineCode",{parentName:"li"},"apt install libgtk-3-0 libwebkit2gtk-4.0-37"))))))),(0,i.kt)("p",null,"This step is required even if you don't want to use WebViews (e.g., for a headless server application)."),(0,i.kt)("h2",{id:"basic-command-line-usage"},"Basic Command-Line Usage"),(0,i.kt)("p",null,"The command-line interface is rather simplistic currently. You can see all supported commands by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"evo")," in your terminal:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"commands overview",src:n(1670).Z,width:"603",height:"431"})),(0,i.kt)("p",null,"For the most part, you can use it to execute Lua scripts or query some basic runtime information. More features are planned for later."),(0,i.kt)("h2",{id:"running-scripts"},"Running Scripts"),(0,i.kt)("p",null,"The most important thing is that the scripts thus executed are run inside the Evo.lua environment, with many additional APIs available."),(0,i.kt)("p",null,"Before you move on, here's a first motivating example (don't worry about understanding all the details just yet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=hello-http.lua",title:"hello-http.lua"},'local HttpServer = require("HttpServer")\n\n-- Starts a local HTTP server on port 18898\nlocal server = HttpServer()\nlocal port = 18898\nserver:StartListening(port)\n\n-- Any GET request with URL matching the pattern will be accepted and forwarded to Lua\n-- Note: Any request that doesn\'t have a registered endpoint will be rejected by the server (TCP connection reset)\nserver:AddRoute("/hello", "GET")\n\nfunction server:SERVER_STARTED_LISTENING(event, payload)\n    print("The HTTP server is now ready to use", event, payload.clientID, payload.message)\n    -- Clients can now connect via HTTP to the server\nend\n\nfunction server:HTTP_REQUEST_FINISHED(event, payload)\n    print("Received the end of a HTTP message", event, payload.clientID, payload.message)\n    -- You can query request details or send a response here\n\n    local requestID = payload.clientID -- Uniquely identifies the HTTP connection that will receive the response\n    server:SendResponse(requestID, "Hello from Evo.lua!")\nend\n')),(0,i.kt)("p",null,"This code will create a HTTP server and allow you to handle its events as clients connect and send messages:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hello-http-server",src:n(7330).Z,width:"945",height:"118"})),(0,i.kt)("p",null,"And this is how it looks from the browser's point of view:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hello-http-client",src:n(2820).Z,width:"451",height:"186"})),(0,i.kt)("p",null,"There is of course a lot more to creating a fully-fledged server, and many other things you could do. But that's for you to discover!"),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"After you've got the basics down, feel free to explore the list of available ",(0,i.kt)("a",{parentName:"p",href:"/docs/category/api/"},"APIs")," or find more examples in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/category/how-to-guides/"},"how-to guides")," section."),(0,i.kt)("p",null,"Keep in mind that some things might not be working as expected since Evo is still young - but ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"with your help")," that can quickly change."))}c.isMDXComponent=!0},1670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cli-commands-a2b9bdc3a35066615b23d05063f05de5.png"},2820:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hello-http-server-53a82badacca87690bfa8cd7f1191f7e.png"}}]);