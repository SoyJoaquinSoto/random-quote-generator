import React from "react";

export default function QuoteText(props) {
	return (
		<div className={`pb-2 border-b-2 border-white`}>
			<h1 className={`font-display text-white text-7xl`}>{props.text}</h1>
		</div>
	);
}
