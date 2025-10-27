const copyIcon = document.querySelector(".copy-icon");

export const copyEmailListener = () => {
	const email = import.meta.env.VITE_EMAIL;
	const span = document.querySelector(".email-container span");
	navigator.clipboard.writeText(email).then(() => {
		span.style.display = "inline";
		setTimeout(() => {
			span.style.display = "none";
		}, 1500);
	});
};

copyIcon.addEventListener("click", copyEmailListener);
