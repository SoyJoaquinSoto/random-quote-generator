import React from "react";
import Skeleton from "react-loading-skeleton";

export default function QuoteGenre(props) {
	return (
		<div className={``}>
			<h1 className={`font-display text-white text-1xl`}>
				{props.genre || <Skeleton width={60} />}
			</h1>
		</div>
	);
}
