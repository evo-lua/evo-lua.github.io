import React from 'react';

import Link from '@docusaurus/Link';

export default function CategoryOverviewSection(props) {

	const description = <>
		<h2>{props.heading}</h2>
		<p>
			{props.text}
		</p>
	</>

	const hasFurtherReadingLink = (props.linkURL && props.linkText);
	if(!hasFurtherReadingLink) {
		return description;
	}

	return (<>
		<h2>{props.heading}</h2>
		<p>
			{props.text}
		</p>
		<p>
			See also:
			<Link to={props.linkURL}>
            	{props.linkText}
        	</Link>
		</p>
	</>
	);
  }