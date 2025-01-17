"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[1682],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(i),h=a,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return i?n.createElement(m,l(l({ref:t},d),{},{components:i})):n.createElement(m,l({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5513:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));const o={},l="Standalone Executables",r={unversionedId:"how-to-guides/standalone-executables",id:"how-to-guides/standalone-executables",title:"Standalone Executables",description:"Learn how to package your Lua apps for distribution to end-users",source:"@site/docs/how-to-guides/standalone-executables.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/standalone-executables",permalink:"/docs/how-to-guides/standalone-executables",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/how-to-guides/standalone-executables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrations and Tooling",permalink:"/docs/how-to-guides/integrations-and-tooling"},next:{title:"Unit Testing",permalink:"/docs/how-to-guides/unit-testing"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Building Standalone Apps",id:"building-standalone-apps",level:2},{value:"Loading Bundled Files",id:"loading-bundled-files",level:2},{value:"Native Look and Feel",id:"native-look-and-feel",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Binary Size",id:"binary-size",level:3},{value:"Obfuscation",id:"obfuscation",level:3},{value:"Runtime Dependencies",id:"runtime-dependencies",level:3},{value:"Licensing Issues",id:"licensing-issues",level:3},{value:"Alternatives",id:"alternatives",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"standalone-executables"},"Standalone Executables"),(0,a.kt)("p",null,"Learn how to package your Lua apps for distribution to end-users"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Since Lua is an interpreted scripting language, it doesn't allow distributing binary releases on its own. However, there's a workaround:"),(0,a.kt)("p",null,"Instead of compiling Lua files to binary objects, you can simply distribute the scripts as text files (or bytecode objects). However: Since end-users likely won't have a Lua interpreter available, you must ship one alongside the application's script files. This is the approach that Evo takes, but the scripts are bundled into a ZIP archive and embedded into the executable you distribute to the user's system."),(0,a.kt)("p",null,"The interpreter can then detect the presence of a ZIP archive inside its own executable and read data from it as needed. To run your application, the interpreter will extract the files at runtime and load them \"behind the scenes\", invisible to the user. The concept may seem a bit strange, but it works because ZIP files can also be executables. It's similar to Java's JAR files or the Windows installers of old."),(0,a.kt)("p",null,"This page describes the options that Evo supports out of the box for creating these executable ZIP files, and limitations to the approach."),(0,a.kt)("h2",{id:"building-standalone-apps"},"Building Standalone Apps"),(0,a.kt)("p",null,"There's only two steps needed to create a standalone executable:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prepare a directory that contains only the files to be distributed in a ZIP archive"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"evo build")," in this directory (or provide the path to it as an additional argument)")),(0,a.kt)("p",null,"You should see a summary with some technical details about the executable that was built:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Console output displayed when successfully building a standalone app via &#39;evo build&#39; command",src:i(6308).Z,width:"676",height:"183"})),(0,a.kt)("p",null,"After the process has completed, you will notice the presence of two build artifacts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The standalone executable itself (here called ",(0,a.kt)("inlineCode",{parentName:"li"},"hello-world-app.exe"),"), which end-users should be able to run on their system"),(0,a.kt)("li",{parentName:"ol"},"A ZIP archive that contains all the bundled files (here called ",(0,a.kt)("inlineCode",{parentName:"li"},"hello-world-app.zip"),") - look inside to see what you would ship")),(0,a.kt)("p",null,"The executable is all you need to distribute; it includes the ZIP archive alongside the Evo runtime used to build it (and a signature)."),(0,a.kt)("h2",{id:"loading-bundled-files"},"Loading Bundled Files"),(0,a.kt)("p",null,'You\'ll need to create a "loader" called ',(0,a.kt)("inlineCode",{parentName:"p"},"main.lua"),", which initializes the rest of your application. Place it in the directory that you package. Evo will extract the entry point, ",(0,a.kt)("inlineCode",{parentName:"p"},"main.lua"),", and run it when it detects a self-contained app. Your entry point can ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," modules from within the virtual file system just like any other file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- main.lua\nlocal someModule = require("someModule")\ndump(someModule)\n\nlocal someOtherModule = require("subdirectory.someOtherModule")\ndump(someOtherModule)\n')),(0,a.kt)("p",null,"In the above example, Evo will load both files from the VFS, if they exist, or use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," behavior otherwise:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Whenever a module exists in the VFS and on disk, the VFS takes priority (for security and performance reasons)"),(0,a.kt)("li",{parentName:"ol"},"All ",(0,a.kt)("inlineCode",{parentName:"li"},".")," (dots) in the path names are internally replaced by ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," to cleanly map to the VFS paths")),(0,a.kt)("p",null,"This change isn't disruptive; all Evo does is add a custom ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.2/manual.html#pdf-package.searchers"},"searcher")," that looks into the VFS first when it dectects it is running a standalone executable."),(0,a.kt)("p",null,"There is one limitation that does exist: You can't directly load native libraries from the VFS."),(0,a.kt)("p",null,"If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"ffi.load"),") to load a C module, you'll need to provide the DLL/SO files alongside the standalone executable. Alternatively, you can build the DLL/SO files into the app, but then you'll have to extract them from the ZIP archive."),(0,a.kt)("p",null,"In the future, helpers for this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/issues/488"},"will likely be added"),", but it's somewhat difficult to predict what exactly is needed here. For now the runtime only provides the most basic support."),(0,a.kt)("p",null,"For the time being, you can distribute C modules separetely (on disk) or extract everything to a temporary directory before loading the app."),(0,a.kt)("h2",{id:"native-look-and-feel"},"Native Look and Feel"),(0,a.kt)("p",null,"You may want to perform cosmetic surgery to provide a better user experience, such as setting an app icon or hiding the console window. Evo currently doesn't provide any tools to help with this part of the process, though it's something to consider for the future."),(0,a.kt)("p",null,"Since icons are always platform-specific, you'll need to use third-party tools (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"wine")," has some for Windows, or Apple's icon utilities)."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"The nature of interpreted languages puts some limits on what you can do. The following might help you decide if this works for you."),(0,a.kt)("h3",{id:"binary-size"},"Binary Size"),(0,a.kt)("p",null,"If you're shipping a full Lua runtime alongside your application, this will clearly increase the total binary size of the artifacts you have to distribute. While Lua interpreters are generally tiny, as a full-fledged runtime environment Evo is a bit bulkier, and you'll be effectively adding all of the contained libraries regardless of whether you actually use them. Especially for small programs this could be significant."),(0,a.kt)("p",null,"The good news is that it's not that big compared to other options, and also you could ship a leaner, trimmed-down version of Evo."),(0,a.kt)("h3",{id:"obfuscation"},"Obfuscation"),(0,a.kt)("p",null,"While this provides very limited security against tampering or reverse engineering efforts, publishing Lua code (or even bytecode) very clearly makes it relatively easy to access a more readable version of the source code. This generally won't be an issue for open source projects, and even many proprietary applications (as few users would bother to read the source code even if you waved it in their face)."),(0,a.kt)("p",null,"For commercial use cases, however, you may want to consider moving business-critical parts into a native DLL/SO file and ship that."),(0,a.kt)("h3",{id:"runtime-dependencies"},"Runtime Dependencies"),(0,a.kt)("p",null,"Although Evo comes with quite a few \"batteries\" that you don't need to manually distribute, the builtin APIs don't cover every use case."),(0,a.kt)("p",null,"Complex programs often require the help of advanced libraries, which are usually bundled alongside the app (as DLL or shared object files). While LuaJIT can easily access these, you will still need to include them. If creating a standalone executable, you'd then have to extract all the needed libraries at runtime before you can dynamically load them. This is what other interpreted languages do, as well."),(0,a.kt)("p",null,"Unfortunately, shipping binaries to different Linux systems may be troublesome. But at least users there won't necessarily expect it."),(0,a.kt)("h3",{id:"licensing-issues"},"Licensing Issues"),(0,a.kt)("p",null,"Because you're providing a complete runtime (including lots of third-party code) alongside the program, certain licensing terms must be adhered to. In the case of Lua, LuaJIT, and indeed all of Evo this should however be unproblematic. All of them use permissive open-source licenses that should play nice, but it's best to conduct a proper legal review to ensure compliance won't cause any problems."),(0,a.kt)("p",null,"For open-source projects, there obviously won't be any issues. But it's still good practice to review your dependencies and their licenses."),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("p",null,'If the above limitations are making the "combined ZIP executable" approach untenable, you could consider some other options:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using an installer (such as MSI or DMG) to distribute files to the end user would give you more fine-grained control"),(0,a.kt)("li",{parentName:"ul"},'Compiling a binary "addon" (DLL/SO) and loading it with LuaJIT\'s foreign function interface can be a viable alternative'),(0,a.kt)("li",{parentName:"ul"},"Writing the application in a compiled language altogether and distributing binary artifacts only would be the last resort")))}p.isMDXComponent=!0},6308:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/build-standalone-app-5af6645ed9a3e31148b89804a30c8d48.png"}}]);