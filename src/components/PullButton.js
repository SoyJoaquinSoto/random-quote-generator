import React from "react";

export default function PullButton(props) {
	return (
		<div className={`h-full w-full`}>
			<button onClick={props.onClick}>random</button>
		</div>
	);
}
