import React from "react";
import Skeleton from "react-loading-skeleton";

export default function QuoteAuthor(props) {
	return (
		<div className={`pt-4`}>
			<h1
				className={`font-display text-white text-2xl`}
				onClick={props.onClick}
			>
				{props.author || <Skeleton width={120} />}
			</h1>
		</div>
	);
}
