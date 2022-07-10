import React from 'react';

import CategoryOverviewSection from "./CategoryOverviewSection";

export default function LibUvPrimitives() {
	return (
		<CategoryOverviewSection
			heading="LibUV Primitives"
			linkURL="https://github.com/luvit/luv/blob/master/docs.md"
			linkText="LibUV in Lua (luv API documentation)"
			text="Cross-platform primitives for networking, threading, file system access, and many other tasks are provided by libuv."
		/>
	);
  }