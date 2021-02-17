import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import QuoteGenre from "./QuoteGenre.js";

export default function QuoteTable(props) {
	return (
		<div className={`h-auto w-5/6 m-auto`}>
			<QuoteText text={props.quoteText} />
			<QuoteAuthor author={props.quoteAuthor} />
			<QuoteGenre genre={props.quoteGenre} />
		</div>
	);
}
