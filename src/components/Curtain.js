import React from "react";
import QuoteTable from "./QuoteTable.js";
import PullButton from "./PullButton.js";
import { animated } from "react-spring";

export default function Curtain(props) {
	return (
		<animated.li style={{ ...props.style }} className={`absolute`}>
			<div
				className={`bg-${props.color}-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2 border-t-2 border-white`}
			>
				<QuoteTable
					quoteText={props.quoteText}
					quoteAuthor={props.quoteAuthor}
					quoteGenre={props.quoteGenre}
				/>

				<PullButton onClick={() => props.onClick()} />
			</div>
		</animated.li>
	);
}
