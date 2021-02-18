import React, { useState, useEffect } from "react";
import CurtainList from "./components/CurtainList.js";
import fetchQuote from "./helpers/api.js";
import randomColor from "./helpers/randomColor.js";

export default function App() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetchNextQuote();
	}, []);

	const fetchNextQuote = () => {
		var newQuote = {
			loading: true,
			color: randomColor(),
			key: null,
			quoteText: null,
			quoteAuthor: null,
			quoteGenre: null,
		};
		var newQuotes = [...quotes, newQuote];
		setQuotes(newQuotes);
		fetchQuote().then((randomQuote) => {
			newQuote = {
				...newQuote,
				...randomQuote.data[0],
				loading: false,
				key: randomQuote.data[0]._id,
			};
			newQuotes = [...quotes, newQuote];
			setQuotes(newQuotes);
			console.log(quotes);
		});
	};

	return <CurtainList quotes={quotes} onClick={() => fetchNextQuote()} />;
}
