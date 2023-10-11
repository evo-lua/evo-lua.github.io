# glfw

LuaJIT bindings for the embedded [GLFW](https://github.com/glfw/glfw) library

<FFI/>

## Status

<External/>

## Availability

This module is preloaded. You can simply `require` it:

```lua
local glfw = require("glfw")
```

## Fields

### cdefs

A string representing the C type definitions that were used to load the FFI bindings. Do not attempt to `ffi.load` them manually.

### bindings

A pointer to the statically-loaded exports table that exposes the bound functions to Lua. For more details, see [this note](/docs/background-information/luajit/static-ffi-bindings).

## Functions

### initialize

Initializes the bindings by loading the [C type definitions](#cdefs). Automatically called by the runtime when it sets up the Lua environment.

### getCursorPosition

Returns the screen position of the cursor relative to the given `window`.

<Function since="v0.0.8">
<Parameters>
<Parameter name="window" type="cdata"/>
</Parameters>
<Returns>
<Return name="positionX" type="number"/>
<Return name="positionY" type="number"/>
</Returns>
</Function>

### getWindowSize

Returns the dimensions of the given `window` in pixels.

<Function since="v0.0.8">
<Parameters>
<Parameter name="window" type="cdata"/>
</Parameters>
<Returns>
<Return name="width" type="number"/>
<Return name="height" type="number"/>
</Returns>
</Function>

### setCursorImage

Sets the cursor image being displayed when hovering over the content area of the given `window`. The cursor hotspot is specified in pixels, relative to the upper-left corner of the cursor image. Like all other coordinate systems in GLFW, the X-axis points to the right and the Y-axis points down. If no image data is provided and a cursor is set, the existing cursor will be destroyed.

<Function since="v0.0.8">
<Parameters>
<Parameter name="window" type="cdata"/>
<Parameter name="imageFileContents" type="string" optional="true"/>
<Parameter name="hotspotX" type="number" optional="true" fallback="0"/>
<Parameter name="hotspotY" type="number" optional="true" fallback="0"/>
</Parameters>
</Function>

## Native Bindings

All C functions listed here can be accessed via `glfw.bindings` and must be called with the appropriate `cdata` values.

### glfw_create_cursor

Creates a cursor object that can be set to change the mouse icon for a given window. You must destroy it manually later.

```cpp
GLFWcursor* (*glfw_create_cursor)(const GLFWimage* image, int xhot, int yhot);
```

### glfw_create_window

Creates a new native window and returns the platform-agnostic `window` handle.

```cpp
GLFWwindow* (*glfw_create_window)(int width, int height, const char* title, GLFWmonitor* monitor, GLFWwindow* share);
```

### glfw_destroy_cursor

Frees the resources associated with the given cursor object. Don't call this while the cursor is still in use - you must reset it first.

```cpp
void (*glfw_destroy_cursor)(GLFWcursor* cursor);
```

### glfw_destroy_window

Destroys the native window referenced by the given platform-agnostic `window` handle.

```cpp
void (*glfw_destroy_window)(GLFWwindow* window);
```

### glfw_find_constant

Returns the GLFW `enum` value identified by the given `name`, or `0xdead` (an arbitrary sentinel value) if the name was invalid.

```cpp
int (*glfw_find_constant)(const char* name);
```

### glfw_get_cursor_pos

Stores the screen position of the cursor relative to the given platform-agnostic `window` handle in the provided `double` values.

```cpp
void (*glfw_get_cursor_pos)(GLFWwindow* window, double* xpos, double* ypos);
```

### glfw_get_framebuffer_size

Stores the dimensions of the underlying framebuffer for the given platform-agnostic `window` handle in the provided `int` values.

```cpp
void (*glfw_get_framebuffer_size)(GLFWwindow* window, int* width, int* height);
```

### glfw_get_key

Returns whether or not the given `key` is considered pressed by the `window`.

```cpp
int (*glfw_get_key)(GLFWwindow* window, int key);
```

### glfw_get_monitors

Returns a list of detected monitors, and stores the size of the list in the provided `count` value.

```cpp
GLFWmonitor** (*glfw_get_monitors)(int* count);
```

### glfw_get_mouse_button

Returns whether or not the given mouse `button` is considered pressed by the `window`.

```cpp
int (*glfw_get_mouse_button)(GLFWwindow* window, int button);
```

### glfw_get_primary_monitor

Returns a reference to the monitor that has been set as primary display on the system.

```cpp
GLFWmonitor* (*glfw_get_primary_monitor)(void);
```

### glfw_get_video_mode

Returns the display settings for the display referenced by the given `monitor` handle.

```cpp
const GLFWvidmode* (*glfw_get_video_mode)(GLFWmonitor* monitor);
```

### glfw_get_wgpu_surface

Returns a WebGPU-compatible surface object for the given platform-agnostic `window` handle. Allows drawing to its framebuffer.

```cpp
WGPUSurface (*glfw_get_wgpu_surface)(WGPUInstance instance, GLFWwindow* window);
```

### glfw_get_window_monitor

Returns the assigned monitor for the window referenced by the given handle, or `NULL` if it's not in fullscreen mode.

```cpp
GLFWmonitor* (*glfw_get_window_monitor)(GLFWwindow* window);
```

### glfw_get_window_size

```cpp
void (*glfw_get_window_size)(GLFWwindow* window, int* width, int* height);
```

### glfw_init

Initializes the GLFW windowing context. You must call this once before creating native windows.

```cpp
int (*glfw_init)(void);
```

### glfw_poll_events

Continually polls the system for windowing events. This will prevent all asynchronous tasks from completing, and your app from exiting until all windows have been closed. You should set up a render loop (by creating a WebGPU swap chain that presents images at a fixed interval), or create a polling timer and use that to poll manually instead. Otherwise, you'll waste a lot of CPU time (and power) spinning.

```cpp
void (*glfw_poll_events)(void);
```

### glfw_register_events

Registers all event listeners for the given `window`, so that the runtime will asynchronously store them in the provided `queue.`

The purpose of this is to forward native events to Lua; you can fetch input events from the queue and handle them asynchronously.

```cpp
void (*glfw_register_events)(GLFWwindow* window, deferred_event_queue_t queue);
```

### glfw_set_cursor

Changes the mouse icon for the given window. To revert to the default cursor, set the cursor of that window to `NULL`.

```cpp
void (*glfw_set_cursor)(GLFWwindow* window, GLFWcursor* cursor);
```

### glfw_set_window_monitor

Assigns the given `monitor` as the fullscreen display for the native `window`. You can offset the window and set a fixed update interval.

```cpp
void (*glfw_set_window_monitor)(GLFWwindow* window, GLFWmonitor* monitor, int xpos, int ypos, int width, int height, int refreshRate);
```

### glfw_set_window_pos

Moves the native `window` to the given screen coordinates. You have to manually take care that you aren't moving it offscreen.

```cpp
void (*glfw_set_window_pos)(GLFWwindow* window, int xpos, int ypos);
```

### glfw_terminate

Destroys the GLFW windowing context. You can't create native windows afterwards unless you re-initialize the context.

```cpp
void (*glfw_terminate)(void);
```

### glfw_version

Returns the embedded GLFW library version.

```cpp
const char* (*glfw_version)(void);
```

### glfw_window_hint

Configures the windowing context, controlling the appearance and behavior of all windows that are created after this call.

```cpp
void (*glfw_window_hint)(int hint, int value);
```

### glfw_window_should_close

Returns whether the given `window` has received a request for it to be closed (e.g., user clicked on the "Close" button).

```cpp
int (*glfw_window_should_close)(GLFWwindow* window);
```

## Changelog

| Version |                                                                                          What happened?                                                                                          |
| :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| v0.0.8  | Added `glfw_get_key`, `glfw_get_mouse_button`, `glfw_get_cursor_pos`, `glfw_create_cursor`, `glfw_destroy_cursor`, `glfw_set_cursor`, `getCursorPosition`, `setCursorImage,` and `getWindowSize` |
| v0.0.6  |                                                                                         Initial release                                                                                          |
