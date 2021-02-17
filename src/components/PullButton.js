import React from "react";

export default function PullButton(props) {
	return (
		<div className={`absolute right-11 text-white`}>
			<button onClick={props.onClick}>random</button>
		</div>
	);
}
