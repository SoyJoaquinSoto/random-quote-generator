import React from "react";

export default function QuoteAuthor(props) {
	return (
		<div className={`pt-4`}>
			<h1 className={`font-display text-white text-2xl`}>{props.author}</h1>
		</div>
	);
}
