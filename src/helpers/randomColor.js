export default function randomColor() {
	const colors = [
		"gray",
		"red",
		"yellow",
		"green",
		"blue",
		"indigo",
		"purple",
		"pink",
	];
	return colors[Math.floor(Math.random() * 8)];
}
