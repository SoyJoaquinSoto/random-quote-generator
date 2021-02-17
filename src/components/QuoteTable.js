import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";

export default function QuoteTable() {
	const [text, setText] = useState(null);
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		async function fetchData() {
			var request;
			var quoteData;
			request = await axios.get(
				"https://quote-garden.herokuapp.com/api/v3/quotes/random"
			);
			quoteData = request.data.data[0];
			console.log(quoteData.quoteText.length);
			if (quoteData.quoteText.length > 120) {
				fetchData();
			} else {
				setText(quoteData.quoteText);
				setAuthor(quoteData.quoteAuthor);
			}
		}
		fetchData();
	}, []);

	return (
		<div className={`h-auto w-5/6 m-auto`}>
			<QuoteText text={text} />
			<QuoteAuthor author={author} />
		</div>
	);
}
