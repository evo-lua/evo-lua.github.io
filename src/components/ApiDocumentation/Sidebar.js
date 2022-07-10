import React from 'react';

import Link from '@docusaurus/Link';

export default function Sidebar(props) {
	return(
		<>
			<div>
				<h2>Namespaces</h2>
				Lua Standard Library
				<ul>
					<li>string</li>
					<li>table</li>
					<li>printf</li>
					<li>assertions</li>
					<li>event</li>
					<li>json</li>
					<li>log
						<ul>
							<li>event</li>
							<li>test</li>
							<li>debug</li>
							<li>info</li>
							<li>notice</li>
							<li>warning</li>
							<li>error</li>
							<li>critical</li>
							<li>alert</li>
							<li>emergency</li>
							<li>Global Aliases</li>
						</ul>
					</li>
					<li>mixin</li>
					<li>serialize</li>
					<li>transform</li>
					<li>typeof</li>
				</ul>

				Luvi and LibUV
				<ul>
					<li>coro-fs</li>
					<li>import</li>
					<li>luvi</li>
					<li>path</li>
					<li>uv</li>
					<li>vfs</li>
					<li>AsyncHandleMixin</li>
					<li>AsyncStreamMixin</li>
					<li>AsyncSocketMixin</li>
					<li>LuviAppBundle</li>
					<li>ZipApp</li>
				</ul>

				Evo.lua Namespaces
				<ul>
					<li>AutomatedTesting
						<ul>
							<li>describe</li>
							<li>it</li>
							<li>Scenario</li>
							<li>TestRunner</li>
							<li>TestSuite</li>
						</ul>
					</li>
					<li>FileSystem</li>
						<li>Networking
							<ul>
								<li>TcpSocket</li>
								<li>TcpClient</li>
								<li>TcpServer</li>
								<li>HttpClient</li>
								<li>HttpServer</li>
								<li>HttpRequest</li>
								<li>HttpResponse</li>
								<li>WebSocket</li>
								<li>WebSocketFrame</li>
								<li>WebSocketMessage</li>
								<li>WebSocketClient</li>
								<li>WebSocketServer</li>
							</ul>
						</li>
					<ul>
					</ul>
					<li>Shared Constants</li>
				</ul>
			</div>
		</>
	)
  }