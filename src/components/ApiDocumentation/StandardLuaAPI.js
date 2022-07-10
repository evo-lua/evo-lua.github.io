import React from 'react';

import Link from '@docusaurus/Link';

export default function StandardLuaAPI() {
	return (<>
		<h2>Lua Standard Libraries</h2>
		<p>
			All of the Lua 5.1 functionality is available in the evo runtime. It uses LuaJIT and not the "official" PUC Lua interpreter.
		</p>
		<p>
			See also:
			<Link to="https://www.lua.org/manual/5.1/manual.html">
            	Lua 5.1 Reference Manual
        	</Link>
		</p>
	</>
	);
  }