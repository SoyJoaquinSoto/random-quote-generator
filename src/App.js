import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteTable from "./components/QuoteTable.js";
import PullButton from "./components/PullButton.js";

export default function App() {
	const [color, setColor] = useState(null);
	const [data, setData] = useState({
		quoteText: null,
		quoteAuthor: null,
		quoteGenre: null,
	});

	useEffect(() => {
		resetQuote();
	}, []);

	function fetchData() {
		axios
			.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((res) => {
				const quoteData = res.data.data[0];
				if (quoteData.quoteText.length > 100) {
					fetchData();
				} else {
					setData(quoteData);
				}
			});
	}

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

	const resetQuote = () => {
		setColor(randomColor());
		setData({
			quoteText: null,
			quoteAuthor: null,
			quoteGenre: null,
		});
		fetchData();
	};

	return (
		<div className={`relative`}>
			<PullButton onClick={() => resetQuote()} />
			<div
				className={`bg-${color}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2`}
			>
				<QuoteTable data={data} />
			</div>
		</div>
	);
}
