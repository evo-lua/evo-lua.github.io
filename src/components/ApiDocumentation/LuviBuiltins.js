import React from 'react';

import CategoryOverviewSection from "./CategoryOverviewSection";

export default function LuviBuiltins() {
	return (
		<CategoryOverviewSection
			heading="Luvi Builtins"
			linkURL="https://github.com/luvit/luvi/blob/master/README.md"
			linkText="Luvi API Documentation"
			text="The Luvi runtime that powers evo allows creating standalone executables. It also comes with bindings to several C libraries."
		/>
	);
  }