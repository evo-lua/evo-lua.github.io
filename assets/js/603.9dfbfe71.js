(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[603],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6505:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(6412),i=n(7016),s=n(5281),u="codeBlockContainer_Ckt0",m=["as"];function d(e){var t=e.as,n=(0,a.Z)(e,m),d=(0,l.p)(),p=(0,i.QC)(d);return o.createElement(t,(0,r.Z)({},n,{style:p,className:(0,c.Z)(n.className,u,s.k.common.codeBlock)}))}},1170:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o=n(6505),c=n(2944);function l(e){var t=e.children,n=e.className;return r.createElement(o.Z,{as:"pre",tabIndex:0,className:(0,a.Z)(c.Z.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:c.Z.codeBlockLines},t))}},891:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(7462),a=n(7294),o=n(6010);var c=n(6668),l=n(7016),i=n(6412),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(7410).Z,theme:s};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var p=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},v=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=d({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=d({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?d({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=d({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?d({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),m(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=r[c]++)<a[c];){var s=void 0,u=t[c],m=n[c][o];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=v(u,m.type),m.alias&&(u=v(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(p),g=d.length;l.push({types:u,content:d[0]});for(var h=1;h<g;h++)f(l),i.push(l=[]),l.push({types:u,content:d[h]})}else c++,t.push(u),n.push(s),r.push(0),a.push(s.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return f(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=y,k="codeLine_lJS_",E="codeLineNumber_Tfdd",N="codeLineContent_feaV";function C(e){var t=e.line,n=e.classNames,c=e.showLineNumbers,l=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=l({line:t,className:(0,o.Z)(n,c&&k)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},i({token:e,key:t})))}));return a.createElement("span",s,c?a.createElement(a.Fragment,null,a.createElement("span",{className:E}),a.createElement("span",{className:N},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var L=n(5999),Z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function O(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),c=r[0],l=r[1],i=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),l&&(c.removeAllRanges(),c.addRange(l)),o&&o.focus()}(t),l(!0),i.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":c?(0,L.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,L.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,L.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,Z.copyButton,c&&Z.copyButtonCopied),onClick:s},a.createElement("span",{className:Z.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Z.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Z.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var B="wordWrapButtonIcon_Bwma",j="wordWrapButtonEnabled_EoeP";function x(e){var t=e.className,n=e.onClick,r=e.isEnabled,c=(0,L.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,r&&j),"aria-label":c,title:c},a.createElement("svg",{className:B,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}var w=n(6505),T=n(2944);function _(e){var t,n,s,m,d,p,f,v,g,h,y=e.children,k=e.className,E=void 0===k?"":k,N=e.metastring,L=e.title,Z=e.showLineNumbers,B=e.language,j=(0,c.L)().prism,_=j.defaultLanguage,H=j.magicComments,S=null!=(t=null!=B?B:(0,l.Vo)(E))?t:_,P=(0,i.p)(),I=(n=(0,a.useState)(!1),s=n[0],m=n[1],d=(0,a.useState)(!1),p=d[0],f=d[1],v=(0,a.useRef)(null),g=(0,a.useCallback)((function(){var e=v.current.querySelector("code");s?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",m((function(e){return!e}))}),[v,s]),h=(0,a.useCallback)((function(){var e=v.current,t=e.scrollWidth>e.clientWidth||v.current.querySelector("code").hasAttribute("style");f(t)}),[v]),(0,a.useEffect)((function(){h()}),[s,h]),(0,a.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:v,isEnabled:s,isCodeScrollable:p,toggle:g}),A=(0,l.bc)(N)||L,D=(0,l.nZ)(y,{metastring:N,language:S,magicComments:H}),M=D.lineClassNames,R=D.code,z=null!=Z?Z:(0,l.nt)(N);return a.createElement(w.Z,{as:"div",className:(0,o.Z)(E,S&&!E.includes("language-"+S)&&"language-"+S)},A&&a.createElement("div",{className:T.Z.codeBlockTitle},A),a.createElement("div",{className:T.Z.codeBlockContent},a.createElement(b,(0,r.Z)({},u,{theme:P,code:R,language:null!=S?S:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,c=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,o.Z)(t,T.Z.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,o.Z)(T.Z.codeBlockLines,z&&T.Z.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(C,{key:t,line:e,getLineProps:r,getTokenProps:c,classNames:M[t],showLineNumbers:z})}))))})),a.createElement("div",{className:T.Z.buttonGroup},(I.isEnabled||I.isCodeScrollable)&&a.createElement(x,{className:T.Z.codeButton,onClick:function(){return I.toggle()},isEnabled:I.isEnabled}),a.createElement(O,{className:T.Z.codeButton,code:R}))))}},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(5999),i=n(6668),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},d,{className:(0,c.Z)("anchor",p?u:s),id:n}),d.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},d,{id:void 0}))}},76:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(7294),a=n(3905),o=n(7462),c=n(3366),l=n(5742),i=["mdxType","originalType"];var s=n(8573);var u=n(9960);var m=n(6010),d=n(2389),p=n(6043),f="details_lb9f",v="isBrowser_bmU9",g="collapsibleContent_i85q",h=["summary","children"];function y(e){return!!e&&("SUMMARY"===e.tagName||y(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function k(e){var t=e.summary,n=e.children,a=(0,c.Z)(e,h),l=(0,d.Z)(),i=(0,r.useRef)(null),s=(0,p.u)({initialState:!a.open}),u=s.collapsed,k=s.setCollapsed,E=(0,r.useState)(a.open),N=E[0],C=E[1];return r.createElement("details",(0,o.Z)({},a,{ref:i,open:N,"data-collapsed":u,className:(0,m.Z)(f,l&&v,a.className),onMouseDown:function(e){y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;y(t)&&b(t,i.current)&&(e.preventDefault(),u?(k(!1),C(!0)):k(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),C(!e)}},r.createElement("div",{className:g},n)))}var E="details_b_Ee";function N(e){var t=Object.assign({},e);return r.createElement(k,(0,o.Z)({},t,{className:(0,m.Z)("alert alert--info",E,t.className)}))}var C=n(2503);function L(e){return r.createElement(C.Z,e)}var Z="containsTaskList_mC6p";var O="img_ev3q";var B={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,a=(n.mdxType,n.originalType,(0,c.Z)(n,i));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var t;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(N,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Z))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,O))}));var t},h1:function(e){return r.createElement(L,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(L,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(L,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(L,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(L,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(L,(0,o.Z)({as:"h6"},e))}};function j(e){var t=e.children;return r.createElement(a.Zo,{components:B},t)}},9407:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),o=n(7294),c=n(6010),l=n(3743),i="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,c.Z)(i,"thin-scrollbar",t)},o.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7462),a=n(3366),o=n(7294),c=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,c);n>=0?t[n].children.push(o):r.push(o)})),r}function i(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return u(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,o.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,c=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),i=m(l,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function f(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var v=o.memo(f),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,g),k=(0,s.L)(),E=null!=h?h:k.tableOfContents.minHeadingLevel,N=null!=y?y:k.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:E,maxHeadingLevel:N});return p((0,o.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:N}}),[m,f,E,N])),o.createElement(v,(0,r.Z)({toc:C,className:c,linkClassName:m},b))}},6412:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(2949),a=n(6668);function o(){var e=(0,a.L)().prism,t=(0,r.I)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},7016:function(e,t,n){"use strict";n.d(t,{QC:function(){return f},Vo:function(){return d},bc:function(){return u},nZ:function(){return p},nt:function(){return m}});var r=n(6528),a=n(7594),o=n.n(a),c=(0,r.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),l=(0,r.Z)(/\{([\d,-]+)\}/,{range:1}),i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function s(e,t){var n=e.map((function(e){var n=i[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function u(e){var t,n;return null!=(t=null==e||null==(n=e.match(c))?void 0:n.groups.title)?t:""}function m(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function p(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,c=t.metastring;if(c&&l.test(c)){var u=c.match(l).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var m=a[0].className,d=o()(u).filter((function(e){return e>0})).map((function(e){return[e-1,[m]]}));return{lineClassNames:Object.fromEntries(d),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var p=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return s(["js","jsBlock"],t);case"jsx":case"tsx":return s(["js","jsBlock","jsx"],t);case"html":return s(["js","jsBlock","html"],t);case"python":case"py":case"bash":return s(["bash"],t);case"markdown":case"md":return s(["html","jsx","bash"],t);default:return s(Object.keys(i),t)}}(r,a),f=n.split("\n"),v=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),g=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),h=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),y=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<f.length;){var k=f[b].match(p);if(k){var E=k.slice(1).find((function(e){return void 0!==e}));g[E]?v[g[E]].range+=b+",":h[E]?v[h[E]].start=b:y[E]&&(v[y[E]].range+=v[y[E]].start+"-"+(b-1)+","),f.splice(b,1)}else b+=1}n=f.join("\n");var N={};return Object.entries(v).forEach((function(e){var t=e[0],n=e[1].range;o()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}function f(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}},2944:function(e,t){"use strict";t.Z={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);