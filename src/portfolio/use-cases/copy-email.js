export const copyEmail = () => {
	const email = import.meta.env.VITE_EMAIL;
	const span = document.querySelector(".email-container span");
	navigator.clipboard.writeText(email).then(() => {
		span.style.display = "inline";
		setTimeout(() => {
			span.style.display = "none";
		}, 1500);
	});
};
