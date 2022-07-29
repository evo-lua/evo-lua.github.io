# Command-line Arguments

Learn how to pass command-line arguments to your application

## Forwarding CLI Arguments

You can provide additional arguments after the  ``--`` separator when invoking the runtime:

```bash
evo myApp.lua -- cli args go here
```

## Receiving CLI Arguments

Scripts can fetch the arguments passed after ``--`` via Lua's [varargs](https://www.lua.org/pil/5.2.html) operator:

```lua title=myApp.lua
local arguments = { ... }

print("Number of command-line arguments received:", #arguments)

print("Dumping command-line arguments...")
dump(commandLineArguments)

print("Iterating over command-line arguments...")
for index, argument in pairs(arguments) do
	print(index, argument)
end
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

```lua title=receiving-command-line-arguments.lua
local commandLineArguments = { ... }

print("Number of command-line arguments received:", #commandLineArguments)

print("Dumping command line arguments (only those after the -- delimiter)...")
dump(commandLineArguments)

-- Alternatively, access the full arguments vector (argv in C) passed to the runtime
print("Dumping command line arguments (the full C arguments vector)...")
print("Full arguments count:", #arg)
dump(arg)
```

This array includes all arguments, including those in front of the ``--`` delimiter. Running the above:

```bash
evo receiving-command-line-options.lua --main ignored.lua -- cli args go here
```

The output shows the full list of arguments, including those already processed by the runtime:

```bash
Number of command-line arguments received:     4
Dumping command line arguments (only those after the -- delimiter)...
{ "cli", "args", "go", "here" }
Dumping command line arguments (the full C arguments vector)...
Full arguments count:     8
{ "receiving-command-line-options.lua", "--main", "ignored.lua", "--", "cli", "args", "go", "here" }
```

## Accessing the Runtime Path

The executable name isn't present in the arguments vector. To retrieve it, you can use libuv instead:

```lua title=read-executable-path.lua
local libuv = require("uv")
print("The executable running this script is located here:", libuv.exepath())
```

The result will depend on where you've placed the ``evo`` binary on your system:

```shell
The executable running this script is located here:     C:\evo-lua\evo.exe
```
