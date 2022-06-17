---
title: TCP Client and Server
---

Learn how to implement networking over the TCP/IP protocol.

## TCP Sockets

The ``TcpSocket`` module makes it easy to create TCP connections to a local or remote server. Instead of dealing with callbacks and session management yourself, you can simply connect to a given server, send and receive data, or register event handlers for common socket events.

## TCP Servers

The ``TcpServer`` module provides a lightweight abstraction over a specialized TCP handle that automatically accepts incoming connections. It manages connected clients and allows controlling the flow of incoming data via rate limits and idle timeouts.

## Low-level Access to TCP Handles

If you need more control or the builtin TCP modules don't suit your needs, you can load libuv primitives directly and build your own client or server application. Here's how:

1. Load the Lua bindings for libuv that are embedded in the runtime: ``local uv = require("uv")``
2. Create TCP handles via ``uv.new_tcp()``, one per client and server socket
3. For servers: Call ``bind(host, port)``, ``listen(queueSize, onConnectionCallback)``, then ``accept(clientTcpHandle)``
4. For clients: Call ``connect(host, port)``
5. Finally, use ``read_start()`` (after the connection has been established) to start reading, or ``write(data)`` to send data

You will have to manage callbacks and events yourself, as described in the [luv](https://github.com/luvit/luv/blob/master/docs.md) docs.

## Handling Backpressure

By default, no measures are taken to implement backpressure. This is because the ``TcpServer`` (and ``TcpClient``) modules don't buffer any data. You can manually ``Pause`` and ``Resume`` reading from a given client socket:

* For ``TcpServer``: Call ``self:Pause(client)`` and ``self:Resume(client)`` in any of the relevant event handler callbacks
* For ``TcpClient``: Call ``self:Pause()`` and ``self:Resume()`` in any of the event handler callbacks

If you're using libuv TCP handles directly, you can use ``handle:read_stop()`` on the client handle(s) instead.
