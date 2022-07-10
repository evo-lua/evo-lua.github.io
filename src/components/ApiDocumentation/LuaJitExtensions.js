import React from 'react';

import Link from '@docusaurus/Link';

export default function LuaJitExtensions() {
	return (<>
		<h2>LuaJIT Libraries & Extensions</h2>
		<p>
			The runtime includes all of the LuaJIT extensions and Lua 5.2 features that are enabled by default, and none of the others.
		</p>
		<p>
			See also:
			<Link to="https://luajit.org">
            	LuaJIT website
        	</Link>
		</p>
	</>
	);
  }