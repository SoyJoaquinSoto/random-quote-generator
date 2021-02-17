import React, { useState, useEffect } from "react";
import QuoteTable from "./components/QuoteTable.js";
import PullButton from "./components/PullButton.js";

export default function App() {
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

	const handleClick = () => {
		console.log("botón picado");
		setColor(randomColor());
	};

	return (
		<div
			className={`bg-${color}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2`}
		>
			<QuoteTable />
			<PullButton onClick={() => handleClick()} />
		</div>
	);
}
