import React, { useState, useCallback } from "react";
import Curtain from "./Curtain.js";
import { useTransition } from "react-spring";

export default function CurtainList(quotes) {
	console.log(quotes);
	const [index, set] = useState(0);

	const onClick = () => {
		set(index + 1);
		quotes.onClick();
	};

	const transitions = useTransition(index, (p) => p, {
		from: { transform: "translate3d(0,-100%,0)" },
		enter: { transform: "translate3d(0,0%,0)" },
		leave: { transform: "translate3d(0,100%,0)" },
	});

	return (
		<ul>
			{transitions.map(({ item, props, key }) => {
				return quotes.quotes.length ? (
					<Curtain
						key={key}
						color={quotes.quotes[item].color}
						quoteText={quotes.quotes[item].quoteText}
						quoteAuthor={quotes.quotes[item].quoteAuthor}
						quoteGenre={quotes.quotes[item].quoteGenre}
						style={props}
						onClick={() => onClick()}
					/>
				) : (
					<h1>narices</h1>
				);
			})}
		</ul>
	);
	/* 	const quotes = props.quotes;
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

	return <ul>{listQuotes}</ul>; */
}
