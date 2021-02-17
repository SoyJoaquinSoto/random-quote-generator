import React, { useState, useEffect } from "react";
import QuoteTable from "./QuoteTable.js";
import PullButton from "./PullButton.js";

export default function Curtain(props) {
	const [color, setColor] = useState(null);

	useEffect(() => {
		setColor(randomColor());
	}, []);

	const randomColor = () => {
		const colors = [
			"gray",
			"red",
			"yellow",
			"green",
			"blue",
			"indigo",
			"purple",
			"pink",
		];
		return colors[Math.floor(Math.random() * 8)];
	};

	return (
		<li className={`relative`}>
			<PullButton onClick={() => props.onClick()} />
			<div
				className={`bg-${color}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2`}
			>
				<QuoteTable
					quoteText={props.quoteText}
					quoteAuthor={props.quoteAuthor}
					quoteGenre={props.quoteGenre}
				/>
			</div>
		</li>
	);
}
