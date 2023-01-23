# High-level Architecture


```mermaid
mindmap
  root((Evo.lua))
    Nonstandard<br/> Lua Libraries
      Text Transformations
      Unit Testing
        Test Runner
        Assertions
    Lua Bindings for<br/> Third Party Libraries
      libuv
      openssl
      zlib
      pcre2
      lpeg
      llhttp
    LuaJIT Engine
      Foreign Function Interface
      Embedded Bytecode Loader
      Limited Lua 5.2 and 5.3 Compatibility Layer
```