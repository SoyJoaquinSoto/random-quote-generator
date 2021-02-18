import axios from "axios";

const instance = axios.create({
	baseURL: "https://quote-garden.herokuapp.com/api/v3/quotes",
});

export default function fetchQuote(fetchUrl) {
	return instance.get(fetchUrl).then((res) => {
		var response = res.data;
		var quotesData = res.data.data.filter(
			(quote) => quote.quoteText.length < 100
		);
		if (!quotesData.length) {
			if (fetchUrl === "/random") {
				response = fetchQuote();
			} else {
				response = null;
			}
		}
		return response;
	});
}
