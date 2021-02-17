import React, { useState, useEffect } from "react";
import CurtainList from "./components/CurtainList.js";
import fetchQuote from "./helpers/api.js";

export default function App() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetchNextQuote();
	}, []);

	const fetchNextQuote = () => {
		fetchQuote().then((randomQuote) => {
			const newQuotes = [...quotes, ...randomQuote.data];
			setQuotes(newQuotes);
		});
	};

	return <CurtainList quotes={quotes} onClick={() => fetchNextQuote()} />;
}
