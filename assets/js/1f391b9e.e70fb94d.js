"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[85],{4247:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(7294),r=t(6010),l=t(1944),i=t(5281),u=t(5257),m=t(76),c=t(9407),o="mdxPageWrapper_j9I6";function s(e){var n=e.content,t=n.metadata,s=t.title,p=t.description,g=t.frontMatter,d=g.wrapperClassName,v=g.hide_table_of_contents;return a.createElement(l.FG,{className:(0,r.Z)(null!=d?d:i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(l.d,{title:s,description:p}),a.createElement(u.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",o)},a.createElement("div",{className:(0,r.Z)("col",!v&&"col--8")},a.createElement(m.Z,null,a.createElement(n,null))),!v&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(c.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level}))))))}},8573:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7462),r=t(3366),l=t(7294),i=t(2389),u=t(1170),m=t(891),c=["children"];function o(e){var n,o=e.children,s=(0,r.Z)(e,c),p=(0,i.Z)(),g=function(e){return l.Children.toArray(e).some((function(e){return(0,l.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(o),d="string"==typeof g?m.Z:u.Z,v="https://github.com/evo-lua/evo-luvi/blob/main/Tests/Examples/"+s.source,h=s.source?l.createElement(l.Fragment,null,l.createElement("a",{className:"optional-snippet-source",href:v},v)):"",f="Loading snippet...";s.source?f=null!=(n=t(6720)[s.source])?n:"[[ERROR: Failed to load snippet "+s.source+"\nReason: No such entry exists in the autogenerated snippet database\n\nPlease report this problem!]]":f=g;return l.createElement(l.Fragment,null,l.createElement(d,(0,a.Z)({key:String(p)},s),f),h)}},6720:function(e){e.exports=JSON.parse('{"cli-app-args.lua":"local arguments = { ... }\\n\\nprint(\\"Number of command-line arguments received:\\", #arguments)\\n\\nprint(\\"Dumping command-line arguments...\\")\\ndump(arguments)\\n\\nprint(\\"Iterating over command-line arguments...\\")\\nfor index, argument in pairs(arguments) do\\n\\tprint(index, argument)\\nend\\n","cli-global-arg.lua":"local arguments = { ... }\\n\\nprint(\\"Number of command-line arguments received:\\", #arguments)\\n\\nprint(\\"Dumping command line arguments (only those after the -- delimiter)...\\")\\ndump(arguments)\\n\\n-- Alternatively, access the full arguments vector (argv in C) passed to the runtime\\nprint(\\"Dumping command line arguments (the full C arguments vector)...\\")\\nprint(\\"Full arguments count:\\", #arg)\\ndump(arg)\\n","uv-exepath.lua":"local libuv = require(\\"uv\\")\\nprint(\\"The executable running this script is located here:\\", libuv.exepath())\\n"}')}}]);