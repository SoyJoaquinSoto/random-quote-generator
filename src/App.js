import React, { useState, useEffect } from "react";
import CurtainList from "./components/CurtainList.js";
import fetchQuote from "./helpers/api.js";
import randomColor from "./helpers/randomColor.js";

export default function App() {
	const [quotes, setQuotes] = useState([]);

	const fetchNextQuote = (fetchUrl) => {
		var quotesCopy = [...quotes];
		var newQuote = {
			loading: true,
			color: randomColor(),
			key: null,
			quoteText: null,
			quoteAuthor: null,
			quoteGenre: null,
		};
		var newQuotes = [...quotesCopy, newQuote];
		setQuotes(newQuotes);
		fetchQuote(fetchUrl).then((randomQuote) => {
			newQuote = {
				...newQuote,
				...randomQuote.data[0],
				loading: false,
				key: randomQuote.data[0]._id,
			};
			newQuotes = [...quotesCopy, newQuote];
			setQuotes(newQuotes);
		});
	};

	useEffect(() => {
		fetchNextQuote("/random");
	}, []);

	return (
		<CurtainList
			quotes={quotes}
			onClick={(fetchUrl) => fetchNextQuote(fetchUrl)}
		/>
	);
}
