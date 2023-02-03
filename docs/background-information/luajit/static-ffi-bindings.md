# Static FFI Bindings

How statically-linked libraries are loaded into the Lua environment

## Calling C Functions From a Static Library

First, create a struct with function pointers:

```c
struct myfuncs {
	int (*some_function_name)(int a, int b);
	void *(*another_function_name)(char *x, const char *y);
	//...
};
```

Then make a static struct on the C side and fill it with the
function pointers. Make a lightuserdata object from the struct
pointer with `lua_pushlightuserdata()`.

Pass that Lua object to
LuaJIT, e.g. as an argument of `lua_call`/`lua_pcall` or via a global.

On the LuaJIT side, declare the identical struct with `ffi.cdef`.
Then cast that lightuserdata argument back to the struct pointer:

```lua
	-- Assumes the lightuserdata is in the variable ud.
	myfuncs = ffi.cast("struct myfuncs *", ud)
```

All of the above should only be done once at initialization.

Now, whenever you want to call one of these functions via the FFI,
simply reference them from the struct. E.g.:

```lua
	-- That's really an FFI call.
	local y = myfuncs.some_function_name(1, 2)
```

Source: [Mike Pall, LuaJIT mailing list](https://www.freelists.org/post/luajit/How-to-call-functions-from-a-static-library-in-Luajit,11) (archived here, with minor formatting edits, in case it becomes unavailable)

## Relevance and Advantages

The method described here is how all statically-linked library APIs are bound to Lua. Why do it this way?

- It's faster than using the regular C API, more readable, and less error-prone too (no stack mis-alignment errors...)
- This is important if new libraries need to be added and Lua bindings either don't exist or aren't well maintained
- The FFI generally requires less glue code to be written when interfaces change, making maintenance easier

Because the approach may seem a bit convoluted at first, this note exists to provide the necessary background.

## Alternative Approaches

There are several other ways that functionality from native libraries could be made available to Lua:

- Regular Lua-C-API bindings (does not scale, cumbersome and error-prone)
- Rewrite in Lua entirely (usually not feasable, can also be slow depending on the algorithm)
- Shell out to a native host program (not usually portable, may invoke too much overhead at scale)
- Just use dynamically-linked libraries with `ffi.load()` - this is indeed preferable IFF static linkage isn't desired

Since LuaJIT is the only supported Lua engine, there's really no reason to use any of them (for embedded libraries).
