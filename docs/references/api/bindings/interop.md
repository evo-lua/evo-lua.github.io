# interop

Interoperability helpers for cross-language event handling

<FFI/>

## Status

<Experimental/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local interop = require("interop")
```

## Constants

You can access the following `enum` values via the global `ffi.C` namespace:

```cpp
enum {
	UNKNOWN_ERROR = 0,
	ERROR_POPPING_EMPTY_QUEUE = 1,
};

typedef enum {
	ERROR_EVENT,
	WINDOW_MOVE_EVENT,
	WINDOW_RESIZE_EVENT,
	WINDOW_CLOSE_EVENT,
	FRAMEBUFFER_RESIZE_EVENT,
	CONTENT_SCALE_EVENT,
	WINDOW_REFRESH_EVENT,
	WINDOW_FOCUS_EVENT,
	WINDOW_ICONIFY_EVENT,
	WINDOW_MAXIMIZE_EVENT,
	MOUSE_BUTTON_EVENT,
	CURSOR_MOVE_EVENT,
	CURSOR_ENTER_EVENT,
	SCROLL_EVENT,
	KEYBOARD_EVENT,
	CHARACTER_INPUT_EVENT
} EventType;
```

## Event Details

Each event has a unique payload structure that is passed to Lua as a `cdata` value when popping from the queue:

```c
typedef struct server_status_event_t {
	int type;
	bool listen_status;
	int port;
} server_status_event_t;

typedef struct window_move_event_t {
	int type;
	int x;
	int y;
} window_move_event_t;

typedef struct window_resize_event_t {
	int type;
	int width;
	int height;
} window_resize_event_t;

typedef struct window_close_event_t {
	int type;
} window_close_event_t;

typedef struct framebuffer_resize_event_t {
	int type;
	int width;
	int height;
} framebuffer_resize_event_t;

typedef struct content_scale_event_t {
	int type;
	float x;
	float y;
} content_scale_event_t;

typedef struct window_refresh_event_t {
	int type;
} window_refresh_event_t;

typedef struct window_focus_event_t {
	int type;
	int focused;
} window_focus_event_t;

typedef struct window_iconify_event_t {
	int type;
	int iconified;
} window_iconify_event_t;

typedef struct window_maximize_event_t {
	int type;
	int maximized;
} window_maximize_event_t;

typedef struct mouse_button_event_t {
	int type;
	int button;
	int action;
	int mods;
} mouse_button_event_t;

typedef struct cursor_move_event_t {
	int type;
	double x;
	double y;
} cursor_move_event_t;

typedef struct cursor_enter_event_t {
	int type;
	int entered;
} cursor_enter_event_t;

typedef struct scroll_event_t {
	int type;
	double x;
	double y;
} scroll_event_t;

typedef struct key_event_t {
	int type;
	int key;
	int scancode;
	int action;
	int mods;
} key_event_t;

typedef struct character_input_event_t {
	int type;
	unsigned int codepoint;
} character_input_event_t;

typedef struct error_event_t {
	int type;
	int code;
} error_event_t;

typedef union deferred_event_t {
	error_event_t error_details;
	window_move_event_t window_move_details;
	window_resize_event_t window_resize_details;
	window_close_event_t window_close_details;
	framebuffer_resize_event_t framebuffer_resize_details;
	content_scale_event_t content_scale_details;
	window_refresh_event_t window_refresh_details;
	window_focus_event_t window_focus_details;
	window_iconify_event_t window_iconify_details;
	window_maximize_event_t window_maximize_details;
	mouse_button_event_t mouse_button_details;
	cursor_move_event_t cursor_move_details;
	cursor_enter_event_t cursor_enter_details;
	scroll_event_t scroll_details;
	key_event_t key_details;
	character_input_event_t character_input_details;
} deferred_event_t;
```

You must then use the event's `type` value to determine the exact payload data (using `ffi.cast` and the above type definitions).

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment

## Native Bindings

All C functions listed here can be accessed via `interop.bindings` and must be called with the appropriate `cdata` values.

### queue_create

Creates a new C++ `std::queue` that can hold deferred runtime events. The returned object is a handle that you can pass to native APIs.

```cpp
deferred_event_queue_t (*queue_create)(void);
```

### queue_destroy

Destroys the queue and frees the allocated memory. Stored events will be destroyed, as well.

```cpp
void (*queue_destroy)(deferred_event_queue_t);
```

### queue_pop_event

Removes the next deferred event from the queue and returns it. If the queue was empty, you'll get an invalid `ERROR_EVENT` type event.

```cpp
deferred_event_t (*queue_pop_event)(deferred_event_queue_t);
```

### queue_push_event

Inserts the given `event` at the back of the queue, resizing it as necessary. Events are usually created in the runtime's opaque C++ layer.

```cpp
bool (*queue_push_event)(deferred_event_queue_t, deferred_event_t event);
```

### queue_size

Returns the number of deferred events currently saved in the queue. You can pop each event individually and then handle it from Lua.

```cpp
size_t (*queue_size)(deferred_event_queue_t);
```

## Changelog

| Version | What happened?  |
| :-----: | :-------------: |
| v0.0.6  | Initial release |
