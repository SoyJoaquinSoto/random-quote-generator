import React from "react";
import Skeleton from "react-loading-skeleton";

export default function QuoteText(props) {
	return (
		<div className={`pb-2 border-b-2 border-white`}>
			<h1 className={`font-display text-white text-5xl md:text-7xl`}>
				{props.text || <Skeleton count={5} height={60} />}
			</h1>
		</div>
	);
}
