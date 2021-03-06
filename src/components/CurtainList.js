import React, { useState } from "react";
import Curtain from "./Curtain.js";
import { useTransition } from "react-spring";

export default function CurtainList(quotes) {
	const [index, set] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);

	const onClick = (fetchUrl) => {
		console.log(fetchUrl);
		if (!isDisabled) {
			setIsDisabled(true);
			setTimeout(() => setIsDisabled(false), 2500);
			quotes.onClick(fetchUrl);
			if (quotes.quotes.length > index) {
				set(quotes.quotes.length);
			}
		}
	};

	const transitions = useTransition(index, (p) => p, {
		from: { transform: "translate3d(0,-100%,0)" },
		enter: { transform: "translate3d(0,0%,0)" },
		leave: { transform: "translate3d(0,100%,0)" },
	});

	return (
		<ul>
			{transitions.map(({ item, props, key }) => {
				return quotes.quotes[item] ? (
					<Curtain
						key={key}
						color={quotes.quotes[item].color}
						quoteText={quotes.quotes[item].quoteText}
						quoteAuthor={quotes.quotes[item].quoteAuthor}
						quoteGenre={quotes.quotes[item].quoteGenre}
						style={props}
						onClick={(fetchUrl) => onClick(fetchUrl)}
					/>
				) : (
					<Curtain
						key={key}
						color={"blue"}
						quoteText={null}
						quoteAuthor={null}
						quoteGenre={null}
						style={null}
						onClick={(fetchUrl) => onClick(fetchUrl)}
					/>
				);
			})}
		</ul>
	);
}
