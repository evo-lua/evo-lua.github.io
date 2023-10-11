"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[6212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},o="C_ImageProcessing",s={unversionedId:"references/api/namespaces/imageprocessing",id:"references/api/namespaces/imageprocessing",title:"C_ImageProcessing",description:"High-level API for dealing with common image formats",source:"@site/docs/references/api/namespaces/imageprocessing.md",sourceDirName:"references/api/namespaces",slug:"/references/api/namespaces/imageprocessing",permalink:"/docs/references/api/namespaces/imageprocessing",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/namespaces/imageprocessing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C_FileSystem",permalink:"/docs/references/api/namespaces/filesystem"},next:{title:"C_Runtime",permalink:"/docs/references/api/namespaces/runtime"}},l={},m=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"DecodeFileContents",id:"decodefilecontents",level:3},{value:"EncodeBMP",id:"encodebmp",level:3},{value:"EncodePNG",id:"encodepng",level:3},{value:"EncodeJPG",id:"encodejpg",level:3},{value:"Changelog",id:"changelog",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Experimental"),d=p("Function"),u=p("Parameters"),g=p("Parameter"),y=p("Returns"),b=p("Return"),f={toc:m},k="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c_imageprocessing"},"C_ImageProcessing"),(0,r.kt)("p",null,"High-level API for dealing with common image formats"),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)(c,{mdxType:"Experimental"}),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"This is a global namespace and can be accessed directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"C_ImageProcessing.DecodeFileContents(imageFileContents) -- Implicit global lookup: _G.C_ImageProcessing\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"decodefilecontents"},"DecodeFileContents"),(0,r.kt)("p",null,"Decodes the given ",(0,r.kt)("inlineCode",{parentName:"p"},"imageFileContents")," and returns the raw pixel data in RGBA format, as well as the image dimensions. Any file format that's supported by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nothings/stb/tree/master"},"stbi_image")," can be decoded. This includes at least the following: BMP, PNG, JPG, TGA."),(0,r.kt)(d,{since:"v0.0.9",mdxType:"Function"},(0,r.kt)(u,{mdxType:"Parameters"},(0,r.kt)(g,{name:"imageFileContents",type:"string",mdxType:"Parameter"})),(0,r.kt)(y,{mdxType:"Returns"},(0,r.kt)(b,{name:"rgbaPixelArray",type:"table",mdxType:"Return"}),(0,r.kt)(b,{name:"imageWidthInPixels",type:"number",mdxType:"Return"}),(0,r.kt)(b,{name:"imageHeightInPixels",type:"number",mdxType:"Return"}))),(0,r.kt)("h3",{id:"encodebmp"},"EncodeBMP"),(0,r.kt)("p",null,"Encodes the given ",(0,r.kt)("inlineCode",{parentName:"p"},"rgbaPixelArray")," as a BMP image of the provided dimensions."),(0,r.kt)(d,{since:"v0.0.9",mdxType:"Function"},(0,r.kt)(u,{mdxType:"Parameters"},(0,r.kt)(g,{name:"rgbaPixelArray",type:"table",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageWidthInPixels",type:"number",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageHeightInPixels",type:"number",mdxType:"Parameter"})),(0,r.kt)(y,{mdxType:"Returns"},(0,r.kt)(b,{name:"bmpFileContents",type:"string",mdxType:"Return"}))),(0,r.kt)("h3",{id:"encodepng"},"EncodePNG"),(0,r.kt)("p",null,"Encodes the given ",(0,r.kt)("inlineCode",{parentName:"p"},"rgbaPixelArray")," as a PNG image of the provided dimensions, without padding (zero-length stride)."),(0,r.kt)(d,{since:"v0.0.9",mdxType:"Function"},(0,r.kt)(u,{mdxType:"Parameters"},(0,r.kt)(g,{name:"rgbaPixelArray",type:"table",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageWidthInPixels",type:"number",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageHeightInPixels",type:"number",mdxType:"Parameter"})),(0,r.kt)(y,{mdxType:"Returns"},(0,r.kt)(b,{name:"pngFileContents",type:"string",mdxType:"Return"}))),(0,r.kt)("h3",{id:"encodejpg"},"EncodeJPG"),(0,r.kt)("p",null,"Encodes the given ",(0,r.kt)("inlineCode",{parentName:"p"},"rgbaPixelArray")," as a JPEG image of the provided dimensions, using the highest quality setting (100%)."),(0,r.kt)(d,{since:"v0.0.9",mdxType:"Function"},(0,r.kt)(u,{mdxType:"Parameters"},(0,r.kt)(g,{name:"rgbaPixelArray",type:"table",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageWidthInPixels",type:"number",mdxType:"Parameter"}),(0,r.kt)(g,{name:"imageHeightInPixels",type:"number",mdxType:"Parameter"})),(0,r.kt)(y,{mdxType:"Returns"},(0,r.kt)(b,{name:"jpegFileContents",type:"string",mdxType:"Return"}))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}h.isMDXComponent=!0}}]);