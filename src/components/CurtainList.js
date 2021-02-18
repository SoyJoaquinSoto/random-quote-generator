import React, { useState, useCallback } from "react";
import Curtain from "./Curtain.js";
import { useTransition } from "react-spring";

export default function CurtainList(quotes) {
	const [index, set] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);

	const onClick = () => {
		if (!isDisabled) {
			setIsDisabled(true);
			setTimeout(() => setIsDisabled(false), 2500);
			quotes.onClick();
			if (quotes.quotes.length > index) {
				set(quotes.quotes.length);
			}
		}
	};

	const transitions = useTransition(index, (p) => p, {
		from: { transform: "translate3d(0,-100%,0)" },
		enter: { transform: "translate3d(0,0%,0)" },
		leave: { transform: "translate3d(0,100%,0)" },
	});

	return (
		<ul>
			{transitions.map(({ item, props, key }) => {
				/* while (
					(index >= quotes.quotes.length || index < 0) &&
					quotes.quotes.length !== 0
				) {
					console.log("bajando de ", index);
					const i = index - 1;
					set(i);
					console.log("a ", index, i);
				} */
				return quotes.quotes[item] ? (
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
					<Curtain
						key={key}
						color={"blue"}
						quoteText={null}
						quoteAuthor={null}
						quoteGenre={null}
						style={null}
						onClick={() => onClick()}
					/>
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
