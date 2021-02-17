import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import QuoteGenre from "./QuoteGenre.js";

export default function QuoteTable() {
	const [text, setText] = useState(null);
	const [author, setAuthor] = useState(null);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		async function fetchData() {
			var request;
			var quoteData;
			request = await axios.get(
				"https://quote-garden.herokuapp.com/api/v3/quotes/random"
			);
			quoteData = request.data.data[0];
			if (quoteData.quoteText.length > 110) {
				fetchData();
			} else {
				setText(quoteData.quoteText);
				setAuthor(quoteData.quoteAuthor);
				setGenre(quoteData.quoteGenre);
			}
		}
		fetchData();
	}, []);

	return (
		<div className={`h-auto w-5/6 m-auto`}>
			<QuoteText text={text} />
			<QuoteAuthor author={author} />
			<QuoteGenre genre={genre} />
		</div>
	);
}
