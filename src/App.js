import React from "react";
import QuoteTable from "./components/QuoteTable.js";
import PullButton from "./components/PullButton.js";

export default function App() {
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
		<div
			className={`bg-${randomColor()}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2`}
		>
			<QuoteTable />
			<PullButton />
		</div>
	);
}
