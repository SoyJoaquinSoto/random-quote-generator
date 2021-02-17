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
		setColor(randomColor());

		async function fetchData() {
			const request = await axios.get(
				"https://quote-garden.herokuapp.com/api/v3/quotes/random"
			);
			const quoteData = request.data.data[0];
			if (!quoteData) {
				fetchData();
				return;
			}
			if (quoteData.quoteText.length > 110) {
				fetchData();
			} else {
				setData(quoteData);
				console.log(quoteData);
			}
		}
		fetchData();
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

	const handleClick = () => {
		console.log("botón picado");
		setColor(randomColor());
	};

	return (
		<div
			className={`bg-${color}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2`}
		>
			<QuoteTable data={data} />
			<PullButton onClick={() => handleClick()} />
		</div>
	);
}
