# Command-line Arguments

Learn how to pass command-line arguments to your application

## Forwarding CLI Arguments

You can provide additional arguments after the  ``--`` separator when invoking the runtime:

```bash
evo myApp.lua -- cli args go here
```

## Receiving CLI Arguments

Scripts can fetch the arguments added after ``--`` via Lua's [varargs](https://www.lua.org/pil/5.2.html) operator:

```lua title="Example: Arguments passed through varargs" source=cli-app-args.lua
```

Expected output:

```bash
Number of command-line arguments received:     4
Dumping command-line arguments...
{ "cli", "args", "go", "here" }
Iterating over command-line arguments...
1       cli
2       args
3       go
4       here
```

## Accessing the C Arguments Vector

If you need the full ``argv`` array as received by the runtime, read the standard global array ``arg``:

```lua title="Example: Reading argv from Lua scripts" source=cli-global-arg.lua
```

This array includes all arguments, including those in front of the ``--`` delimiter. Running the above:

```bash
evo myApp.lua --main ignored.lua -- cli args go here
```

The output shows the full list of arguments, including those already processed by the runtime:

```bash
Number of command-line arguments received:     4
Dumping command line arguments (only those after the -- delimiter)...
{ "cli", "args", "go", "here" }
Dumping command line arguments (the full C arguments vector)...
Full arguments count:     8
{ "myApp.lua", "--main", "ignored.lua", "--", "cli", "args", "go", "here" }
```

## Accessing the Runtime Path

If you want to find out from where the interpreter is running, you can use libuv:

```lua title="Example: Retrieving the executable name" source=uv-exepath.lua
```

The result will depend on where you've placed the ``evo`` binary on your system:

```shell
The executable running this script is located here:     C:\evo-lua\evo.exe
```
