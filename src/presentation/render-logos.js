import { loadIcon } from "./render-icon-template.js";

/**
 * Renderiza los logos SVG en los elementos designados.
 * 
 */
export const renderLogos = () => {
	const elementsList = ["#inc-logo", "#inc-logo-little"];
	const pathLogo = "/icons/logo.svg";
	elementsList.forEach((el) => {
		const elements = document.querySelectorAll(el);
		elements.forEach(async (element) => {
			await loadIcon(element, pathLogo);
			const svg = element.querySelector("svg");
			element.id === "inc-logo-little"
				? svg.classList.add("items-photo-me")
				: null;
		});
	});
};
