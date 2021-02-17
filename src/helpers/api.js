import axios from "axios";

export default function fetchQuote() {
	return axios
		.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
		.then((res) => {
			var quoteData = res.data.data[0];
			if (quoteData.quoteText.length > 100) {
				res.data = fetchQuote();
			}
			return res.data;
		});
}
