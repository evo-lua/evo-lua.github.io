"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[4211],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=s.createContext({}),d=function(e){var r=s.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return s.createElement(i.Provider,{value:r},e.children)},_="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},c=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),_=d(t),c=n,v=_["".concat(i,".").concat(c)]||_[c]||p[c]||a;return t?s.createElement(v,l(l({ref:r},u),{},{components:t})):s.createElement(v,l({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[_]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4936:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(7462),n=(t(7294),t(3905));const a={},l="uws",o={unversionedId:"references/api/bindings/uws",id:"references/api/bindings/uws",title:"uws",description:"LuaJIT bindings for the embedded uWebSockets library",source:"@site/docs/references/api/bindings/uws.md",sourceDirName:"references/api/bindings",slug:"/references/api/bindings/uws",permalink:"/docs/references/api/bindings/uws",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/bindings/uws.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"uv",permalink:"/docs/references/api/bindings/uv"},next:{title:"webgpu",permalink:"/docs/references/api/bindings/webgpu"}},i={},d=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Fields",id:"fields",level:2},{value:"cdefs",id:"cdefs",level:3},{value:"bindings",id:"bindings",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"version",id:"version",level:3},{value:"Native Bindings",id:"native-bindings",level:2},{value:"version",id:"version-1",level:3},{value:"event_name",id:"event_name",level:3},{value:"webserver_create",id:"webserver_create",level:3},{value:"webserver_listen",id:"webserver_listen",level:3},{value:"webserver_has_event",id:"webserver_has_event",level:3},{value:"webserver_get_next_event",id:"webserver_get_next_event",level:3},{value:"webserver_stop",id:"webserver_stop",level:3},{value:"webserver_delete",id:"webserver_delete",level:3},{value:"webserver_set_echo_mode",id:"webserver_set_echo_mode",level:3},{value:"webserver_dump_config",id:"webserver_dump_config",level:3},{value:"webserver_dump_events",id:"webserver_dump_events",level:3},{value:"webserver_get_client_count",id:"webserver_get_client_count",level:3},{value:"webserver_get_event_count",id:"webserver_get_event_count",level:3},{value:"webserver_payload_size",id:"webserver_payload_size",level:3},{value:"webserver_purge_connections",id:"webserver_purge_connections",level:3},{value:"webserver_broadcast_text",id:"webserver_broadcast_text",level:3},{value:"webserver_broadcast_binary",id:"webserver_broadcast_binary",level:3},{value:"webserver_broadcast_compressed",id:"webserver_broadcast_compressed",level:3},{value:"webserver_send_text",id:"webserver_send_text",level:3},{value:"webserver_send_binary",id:"webserver_send_binary",level:3},{value:"webserver_send_compressed",id:"webserver_send_compressed",level:3},{value:"webserver_response_write",id:"webserver_response_write",level:3},{value:"webserver_response_end",id:"webserver_response_end",level:3},{value:"webserver_response_try_end",id:"webserver_response_try_end",level:3},{value:"webserver_response_status",id:"webserver_response_status",level:3},{value:"webserver_response_header",id:"webserver_response_header",level:3},{value:"webserver_has_request",id:"webserver_has_request",level:3},{value:"webserver_request_method",id:"webserver_request_method",level:3},{value:"webserver_request_url",id:"webserver_request_url",level:3},{value:"webserver_request_query",id:"webserver_request_query",level:3},{value:"webserver_request_route",id:"webserver_request_route",level:3},{value:"webserver_request_serialized_headers",id:"webserver_request_serialized_headers",level:3},{value:"webserver_request_header_value",id:"webserver_request_header_value",level:3},{value:"webserver_add_websocket_route",id:"webserver_add_websocket_route",level:3},{value:"webserver_add_get_route",id:"webserver_add_get_route",level:3},{value:"webserver_add_post_route",id:"webserver_add_post_route",level:3},{value:"webserver_add_options_route",id:"webserver_add_options_route",level:3},{value:"webserver_add_delete_route",id:"webserver_add_delete_route",level:3},{value:"webserver_add_patch_route",id:"webserver_add_patch_route",level:3},{value:"webserver_add_put_route",id:"webserver_add_put_route",level:3},{value:"webserver_add_head_route",id:"webserver_add_head_route",level:3},{value:"webserver_add_any_route",id:"webserver_add_any_route",level:3},{value:"Changelog",id:"changelog",level:2}],u=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},_=u("FFI"),p=u("External"),c={toc:d},v="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(v,(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uws"},"uws"),(0,n.kt)("p",null,"LuaJIT bindings for the embedded ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/uNetworking/uWebSockets"},"uWebSockets")," library"),(0,n.kt)(_,{mdxType:"FFI"}),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)(p,{mdxType:"External"}),(0,n.kt)("h2",{id:"availability"},"Availability"),(0,n.kt)("p",null,"This module is preloaded. You can simply ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local uws = require("uws")\n')),(0,n.kt)("h2",{id:"fields"},"Fields"),(0,n.kt)("h3",{id:"cdefs"},"cdefs"),(0,n.kt)("p",null,"A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to ",(0,n.kt)("inlineCode",{parentName:"p"},"ffi.load")," them manually."),(0,n.kt)("h3",{id:"bindings"},"bindings"),(0,n.kt)("p",null,"A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this note"),"."),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"initialize"},"initialize"),(0,n.kt)("p",null,"Initializes the bindings by loading the ",(0,n.kt)("a",{parentName:"p",href:"#cdefs"},"C type definitions"),". Automatically called by the runtime when it sets up the Lua environment."),(0,n.kt)("h3",{id:"version"},"version"),(0,n.kt)("p",null,"Returns the embedded webview library version as a Lua string."),(0,n.kt)("p",null,"Mostly equivalent to ",(0,n.kt)("a",{parentName:"p",href:"#version-1"},"bindings.version()"),", but the latter returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"cdata")," object that may include additional versioning information."),(0,n.kt)("h2",{id:"native-bindings"},"Native Bindings"),(0,n.kt)("p",null,"All C functions listed here can be accessed via ",(0,n.kt)("inlineCode",{parentName:"p"},"uws.bindings")," and must be called with the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},"cdata")," values."),(0,n.kt)("h3",{id:"version-1"},"version"),(0,n.kt)("p",null,"Get the library's version information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* uws_version(void);\n")),(0,n.kt)("h3",{id:"event_name"},"event_name"),(0,n.kt)("p",null,"Used to look up the human-readable name for a given event ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* uws_event_name(uws_webserver_event_t event);\n")),(0,n.kt)("h3",{id:"webserver_create"},"webserver_create"),(0,n.kt)("p",null,"Creates and returns a new server instance. WebSockets as well as HTTP routes can be added."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"uws_webserver_t uws_webserver_create(void);\n")),(0,n.kt)("h3",{id:"webserver_listen"},"webserver_listen"),(0,n.kt)("p",null,"Start listening on the given port. The server instance will accept both HTTP and WebSocket routes if any have been registered."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_listen(uws_webserver_t server, int port);\n")),(0,n.kt)("h3",{id:"webserver_has_event"},"webserver_has_event"),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the server instance has buffered unprocessed events that can be polled."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_has_event(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_get_next_event"},"webserver_get_next_event"),(0,n.kt)("p",null,"Fetches the next deferred event. Use this to poll events from the queue. Will copy the event data to the provided buffer."),(0,n.kt)("p",null,"If there are no buffered events, the data copied to the buffer is a useless placeholder - it's probably wise to check ",(0,n.kt)("inlineCode",{parentName:"p"},"has_event")," first."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_get_next_event(uws_webserver_t server, uws_webserver_event_t* event);\n")),(0,n.kt)("h3",{id:"webserver_stop"},"webserver_stop"),(0,n.kt)("p",null,"Stops listening for HTTP and WebSocket connections."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_stop(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_delete"},"webserver_delete"),(0,n.kt)("p",null,"Destroy the server instance and remove all associated data. Buffered events will be lost, so poll first and process them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_delete(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_set_echo_mode"},"webserver_set_echo_mode"),(0,n.kt)("p",null,"Enables echo server mode (WebSockets only). In this mode, all WebSocket messages will be returned verbatim. Only used for testing."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_set_echo_mode(uws_webserver_t server, bool enabled_flag);\n")),(0,n.kt)("p",null,"Prints the current server configuration to ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout"),". Only useful for debugging (and may be removed at some point)."),(0,n.kt)("h3",{id:"webserver_dump_config"},"webserver_dump_config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_dump_config(uws_webserver_t server);\n")),(0,n.kt)("p",null,"Dumps the contents of the internal event buffer. Only useful for debugging (and may be removed at some point)."),(0,n.kt)("h3",{id:"webserver_dump_events"},"webserver_dump_events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_dump_events(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_get_client_count"},"webserver_get_client_count"),(0,n.kt)("p",null,"Get the number of connected WebSocket clients. HTTP connections are managed separately and therefore not included here."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t uws_webserver_get_client_count(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_get_event_count"},"webserver_get_event_count"),(0,n.kt)("p",null,"Get the number of internally buffered events. This includes HTTP and WebSocket events, as both use the same queue."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t uws_webserver_get_event_count(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_payload_size"},"webserver_payload_size"),(0,n.kt)("p",null,"Get the current maximum payload size. WebSocket and HTTP messages above this threshold will automatically be rejected."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t uws_webserver_payload_size(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_purge_connections"},"webserver_purge_connections"),(0,n.kt)("p",null,"Removes all \"faded\" (dead) WebSocket client connections. Should be called if you don't want to process events that have already been stored in the queue. This is a bit of an awkward workaround and likely to change in the future. Also, doesn't apply to HTTP connections."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t uws_webserver_purge_connections(uws_webserver_t server);\n")),(0,n.kt)("h3",{id:"webserver_broadcast_text"},"webserver_broadcast_text"),(0,n.kt)("p",null,"Send a text (UTF-8) message to all connected WebSocket clients."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_broadcast_text(uws_webserver_t server, const char* text, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_broadcast_binary"},"webserver_broadcast_binary"),(0,n.kt)("p",null,"Send a binary message to all connected WebSocket clients."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_broadcast_binary(uws_webserver_t server, const char* binary, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_broadcast_compressed"},"webserver_broadcast_compressed"),(0,n.kt)("p",null,"Send a text (UTF-8) message with zlib compression enabled to all connected WebSocket clients."),(0,n.kt)("p",null,"Needless to say, it doesn't make sense to use this with binary protocols."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_broadcast_compressed(uws_webserver_t server, const char* compressed, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_send_text"},"webserver_send_text"),(0,n.kt)("p",null,"Send a text (UTF-8) message to a connected WebSocket client."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_send_text(uws_webserver_t server, const char* text, size_t length, const char* client_id);\n")),(0,n.kt)("h3",{id:"webserver_send_binary"},"webserver_send_binary"),(0,n.kt)("p",null,"Send a binary message to a connected WebSocket client."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_send_binary(uws_webserver_t server, const char* binary, size_t length, const char* client_id);\n")),(0,n.kt)("h3",{id:"webserver_send_compressed"},"webserver_send_compressed"),(0,n.kt)("p",null,"Send a text (UTF-8) message with zlib compression enabled to a connected WebSocket client."),(0,n.kt)("p",null,"Needless to say, it doesn't make sense to use this with binary protocols."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int uws_webserver_send_compressed(uws_webserver_t server, const char* compressed, size_t length, const char* client_id);\n")),(0,n.kt)("h3",{id:"webserver_response_write"},"webserver_response_write"),(0,n.kt)("p",null,"Write data to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean)."),(0,n.kt)("p",null,"The HTTP connection remains open for further sending, which means the HTTP response will not be ended (finished)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"HttpSendStatus uws_webserver_response_write(uws_webserver_t server, const char* request_id, const char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_response_end"},"webserver_response_end"),(0,n.kt)("p",null,"Write a response to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean)."),(0,n.kt)("p",null,"This is guaranteed to send the data and finish the HTTP response, which may cause memory pressure due to internal buffering."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"HttpSendStatus uws_webserver_response_end(uws_webserver_t server, const char* request_id, const char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_response_try_end"},"webserver_response_try_end"),(0,n.kt)("p",null,"Stream a response to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean)."),(0,n.kt)("p",null,'If sending all the data fails due to backpressure on the receiver\'s end, you will see a "writable" event (with an offset indicating how much was sent already). You can use this to send the remaining data. If the connection is dropped you\'ll see an "aborted" event.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"HttpSendStatus uws_webserver_response_try_end(uws_webserver_t server, const char* request_id, const char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_response_status"},"webserver_response_status"),(0,n.kt)("p",null,"Writes the response status to an open HTTP connection. You should only use this once per response."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_response_status(uws_webserver_t server, const char* request_id, const char* status_code_and_text);\n")),(0,n.kt)("h3",{id:"webserver_response_header"},"webserver_response_header"),(0,n.kt)("p",null,"Writes a response header/value pair to an open HTTP connection."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_response_header(uws_webserver_t server, const char* request_id, const char* key, const char* value);\n")),(0,n.kt)("h3",{id:"webserver_has_request"},"webserver_has_request"),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the given request is still alive (i.e., the HTTP connection is still open). If it returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", you can't send more data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_has_request(uws_webserver_t server, const char* request_id);\n")),(0,n.kt)("h3",{id:"webserver_request_method"},"webserver_request_method"),(0,n.kt)("p",null,"Get the request method for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_method(uws_webserver_t server, const char* request_id, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_request_url"},"webserver_request_url"),(0,n.kt)("p",null,"Get the request URL for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_url(uws_webserver_t server, const char* request_id, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_request_query"},"webserver_request_query"),(0,n.kt)("p",null,"Get the request query for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_query(uws_webserver_t server, const char* request_id, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_request_route"},"webserver_request_route"),(0,n.kt)("p",null,"Get the request route for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_endpoint(uws_webserver_t server, const char* request_id, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_request_serialized_headers"},"webserver_request_serialized_headers"),(0,n.kt)("p",null,"Get the request header/values for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("p",null,"They are returned as a single string, where in typical ",(0,n.kt)("inlineCode",{parentName:"p"},"header: value\\r\\n")," format. This format may change in the future."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_serialized_headers(uws_webserver_t server, const char* request_id, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_request_header_value"},"webserver_request_header_value"),(0,n.kt)("p",null,"Get a request header value for the given HTTP connection. Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the request is no longer alive."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"bool uws_webserver_request_header_value(uws_webserver_t server, const char* request_id, char* header, char* data, size_t length);\n")),(0,n.kt)("h3",{id:"webserver_add_websocket_route"},"webserver_add_websocket_route"),(0,n.kt)("p",null,"Registers a new WebSocket route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_websocket_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_get_route"},"webserver_add_get_route"),(0,n.kt)("p",null,"Registers a new HTTP GET route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_get_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_post_route"},"webserver_add_post_route"),(0,n.kt)("p",null,"Registers a new HTTP POST route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_post_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_options_route"},"webserver_add_options_route"),(0,n.kt)("p",null,"Registers a new HTTP OPTIONS route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"\nvoid uws_webserver_add_options_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_delete_route"},"webserver_add_delete_route"),(0,n.kt)("p",null,"Registers a new HTTP DELETE route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_delete_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_patch_route"},"webserver_add_patch_route"),(0,n.kt)("p",null,"Registers a new HTTP PATCH route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_patch_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_put_route"},"webserver_add_put_route"),(0,n.kt)("p",null,"Registers a new HTTP PUT route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_put_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_head_route"},"webserver_add_head_route"),(0,n.kt)("p",null,"Registers a new HTTP HEAD route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_head_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h3",{id:"webserver_add_any_route"},"webserver_add_any_route"),(0,n.kt)("p",null,"Registers a new HTTP ANY route handler. Wildcards are supported and routes are served in order of specificity."),(0,n.kt)("p",null,'This is a default "catch-all" handler that covers requests intended for any of the other HTTP methods. Beware of routing conflicts.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void uws_webserver_add_any_route(uws_webserver_t server, const char* route);\n")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}b.isMDXComponent=!0}}]);