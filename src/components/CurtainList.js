import React from "react";
import Curtain from "./Curtain.js";

export default function CurtainList(props) {
	const quotes = props.quotes;
	const listQuotes = quotes.map((quote) => {
		return (
			<Curtain
				key={quote.key}
				color={quote.color}
				quoteText={quote.quoteText}
				quoteAuthor={quote.quoteAuthor}
				quoteGenre={quote.quoteGenre}
				onClick={() => props.onClick()}
			/>
		);
	});

	return <ul>{listQuotes}</ul>;
}
