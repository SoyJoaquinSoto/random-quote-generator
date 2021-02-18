import React from "react";
import { ReactComponent as SVG } from "../assets/next.svg";

export default function PullButton(props) {
	return (
		<div className={`grid grid-rows-3 border-t-2 border-white lg:border-0`}>
			<div className={`grid grid-cols-2`}>
				<div className={`border-r-4 border-black`}></div>
				<div className={`border-l-4 border-black`}></div>
			</div>
			<div>
				<div className={`w-1/6 mx-auto`}>
					<button onClick={props.onClick}>
						<SVG className={"h-auto w-full"} />
					</button>
				</div>
			</div>
		</div>
	);
}
