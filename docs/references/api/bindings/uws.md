# uws

LuaJIT bindings for the embedded [uWebSockets](https://github.com/uNetworking/uWebSockets) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local uws = require("uws")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment.

### version

Returns the embedded webview library version as a Lua string.

Mostly equivalent to [bindings.version()](#version-1), but the latter returns a `cdata` object that may include additional versioning information.

## Native Bindings

All C functions listed here can be accessed via `uws.bindings` and must be called with the appropriate `cdata` values.

### version

Get the library's version information.

```cpp
const char* uws_version(void);
```

### event_name

Used to look up the human-readable name for a given event ID.

```cpp
const char* uws_event_name(uws_webserver_event_t event);
```

### webserver_create

Creates and returns a new server instance. WebSockets as well as HTTP routes can be added.

```cpp
uws_webserver_t uws_webserver_create(void);
```

### webserver_listen

Start listening on the given port. The server instance will accept both HTTP and WebSocket routes if any have been registered.

```cpp
void uws_webserver_listen(uws_webserver_t server, int port);
```

### webserver_has_event

Returns `true` if the server instance has buffered unprocessed events that can be polled.

```cpp
bool uws_webserver_has_event(uws_webserver_t server);
```

### webserver_get_next_event

Fetches the next deferred event. Use this to poll events from the queue. Will copy the event data to the provided buffer.

If there are no buffered events, the data copied to the buffer is a useless placeholder - it's probably wise to check `has_event` first.

```cpp
void uws_webserver_get_next_event(uws_webserver_t server, uws_webserver_event_t* event);
```

### webserver_stop

Stops listening for HTTP and WebSocket connections.

```cpp
void uws_webserver_stop(uws_webserver_t server);
```

### webserver_delete

Destroy the server instance and remove all associated data. Buffered events will be lost, so poll first and process them.

```cpp
void uws_webserver_delete(uws_webserver_t server);
```

### webserver_set_echo_mode

Enables echo server mode (WebSockets only). In this mode, all WebSocket messages will be returned verbatim. Only used for testing.

```cpp
void uws_webserver_set_echo_mode(uws_webserver_t server, bool enabled_flag);
```

Prints the current server configuration to `stdout`. Only useful for debugging (and may be removed at some point).

### webserver_dump_config

```cpp
void uws_webserver_dump_config(uws_webserver_t server);
```

Dumps the contents of the internal event buffer. Only useful for debugging (and may be removed at some point).

### webserver_dump_events

```cpp
void uws_webserver_dump_events(uws_webserver_t server);
```

### webserver_get_client_count

Get the number of connected WebSocket clients. HTTP connections are managed separately and therefore not included here.

```cpp
size_t uws_webserver_get_client_count(uws_webserver_t server);
```

### webserver_get_event_count

Get the number of internally buffered events. This includes HTTP and WebSocket events, as both use the same queue.

```cpp
size_t uws_webserver_get_event_count(uws_webserver_t server);
```

### webserver_payload_size

Get the current maximum payload size. WebSocket and HTTP messages above this threshold will automatically be rejected.

```cpp
size_t uws_webserver_payload_size(uws_webserver_t server);
```

### webserver_purge_connections

Removes all "faded" (dead) WebSocket client connections. Should be called if you don't want to process events that have already been stored in the queue. This is a bit of an awkward workaround and likely to change in the future. Also, doesn't apply to HTTP connections.

```cpp
size_t uws_webserver_purge_connections(uws_webserver_t server);
```

### webserver_broadcast_text

Send a text (UTF-8) message to all connected WebSocket clients.

```cpp
int uws_webserver_broadcast_text(uws_webserver_t server, const char* text, size_t length);
```

### webserver_broadcast_binary

Send a binary message to all connected WebSocket clients.

```cpp
int uws_webserver_broadcast_binary(uws_webserver_t server, const char* binary, size_t length);
```

### webserver_broadcast_compressed

Send a text (UTF-8) message with zlib compression enabled to all connected WebSocket clients.

Needless to say, it doesn't make sense to use this with binary protocols.

```cpp
int uws_webserver_broadcast_compressed(uws_webserver_t server, const char* compressed, size_t length);
```

### webserver_send_text

Send a text (UTF-8) message to a connected WebSocket client.

```cpp
int uws_webserver_send_text(uws_webserver_t server, const char* text, size_t length, const char* client_id);
```

### webserver_send_binary

Send a binary message to a connected WebSocket client.

```cpp
int uws_webserver_send_binary(uws_webserver_t server, const char* binary, size_t length, const char* client_id);
```

### webserver_send_compressed

Send a text (UTF-8) message with zlib compression enabled to a connected WebSocket client.

Needless to say, it doesn't make sense to use this with binary protocols.

```cpp
int uws_webserver_send_compressed(uws_webserver_t server, const char* compressed, size_t length, const char* client_id);
```

### webserver_response_write

Write data to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean).

The HTTP connection remains open for further sending, which means the HTTP response will not be ended (finished).

```cpp
HttpSendStatus uws_webserver_response_write(uws_webserver_t server, const char* request_id, const char* data, size_t length);
```

### webserver_response_end

Write a response to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean).

This is guaranteed to send the data and finish the HTTP response, which may cause memory pressure due to internal buffering.

```cpp
HttpSendStatus uws_webserver_response_end(uws_webserver_t server, const char* request_id, const char* data, size_t length);
```

### webserver_response_try_end

Stream a response to an open HTTP connection. May fail due to backpressure, which is indicated by the response code (boolean).

If sending all the data fails due to backpressure on the receiver's end, you will see a "writable" event (with an offset indicating how much was sent already). You can use this to send the remaining data. If the connection is dropped you'll see an "aborted" event.

```cpp
HttpSendStatus uws_webserver_response_try_end(uws_webserver_t server, const char* request_id, const char* data, size_t length);
```

### webserver_response_status

Writes the response status to an open HTTP connection. You should only use this once per response.

```cpp
bool uws_webserver_response_status(uws_webserver_t server, const char* request_id, const char* status_code_and_text);
```

### webserver_response_header

Writes a response header/value pair to an open HTTP connection.

```cpp
bool uws_webserver_response_header(uws_webserver_t server, const char* request_id, const char* key, const char* value);
```

### webserver_has_request

Returns `true` if the given request is still alive (i.e., the HTTP connection is still open). If it returns `false`, you can't send more data.

```cpp
bool uws_webserver_has_request(uws_webserver_t server, const char* request_id);
```

### webserver_request_method

Get the request method for the given HTTP connection. Returns `false` if the request is no longer alive.

```cpp
bool uws_webserver_request_method(uws_webserver_t server, const char* request_id, char* data, size_t length);
```

### webserver_request_url

Get the request URL for the given HTTP connection. Returns `false` if the request is no longer alive.

```cpp
bool uws_webserver_request_url(uws_webserver_t server, const char* request_id, char* data, size_t length);
```

### webserver_request_query

Get the request query for the given HTTP connection. Returns `false` if the request is no longer alive.

```cpp
bool uws_webserver_request_query(uws_webserver_t server, const char* request_id, char* data, size_t length);
```

### webserver_request_route

Get the request route for the given HTTP connection. Returns `false` if the request is no longer alive.

```cpp
bool uws_webserver_request_endpoint(uws_webserver_t server, const char* request_id, char* data, size_t length);
```

### webserver_request_serialized_headers

Get the request header/values for the given HTTP connection. Returns `false` if the request is no longer alive.

They are returned as a single string, where in typical `header: value\r\n` format. This format may change in the future.

```cpp
bool uws_webserver_request_serialized_headers(uws_webserver_t server, const char* request_id, char* data, size_t length);
```

### webserver_request_header_value

Get a request header value for the given HTTP connection. Returns `false` if the request is no longer alive.

```cpp
bool uws_webserver_request_header_value(uws_webserver_t server, const char* request_id, char* header, char* data, size_t length);
```

### webserver_add_websocket_route

Registers a new WebSocket route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_websocket_route(uws_webserver_t server, const char* route);
```

### webserver_add_get_route

Registers a new HTTP GET route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_get_route(uws_webserver_t server, const char* route);
```

### webserver_add_post_route

Registers a new HTTP POST route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_post_route(uws_webserver_t server, const char* route);
```

### webserver_add_options_route

Registers a new HTTP OPTIONS route handler. Wildcards are supported and routes are served in order of specificity.

```cpp

void uws_webserver_add_options_route(uws_webserver_t server, const char* route);
```

### webserver_add_delete_route

Registers a new HTTP DELETE route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_delete_route(uws_webserver_t server, const char* route);
```

### webserver_add_patch_route

Registers a new HTTP PATCH route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_patch_route(uws_webserver_t server, const char* route);
```

### webserver_add_put_route

Registers a new HTTP PUT route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_put_route(uws_webserver_t server, const char* route);
```

### webserver_add_head_route

Registers a new HTTP HEAD route handler. Wildcards are supported and routes are served in order of specificity.

```cpp
void uws_webserver_add_head_route(uws_webserver_t server, const char* route);
```

### webserver_add_any_route

Registers a new HTTP ANY route handler. Wildcards are supported and routes are served in order of specificity.

This is a default "catch-all" handler that covers requests intended for any of the other HTTP methods. Beware of routing conflicts.

```cpp
void uws_webserver_add_any_route(uws_webserver_t server, const char* route);
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.1  | Initial release |
