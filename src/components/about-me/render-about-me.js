import logo from "../../assets/icons/logo.svg?raw";
import mapPin from "../../assets/icons/home_pin.svg?raw";

import htmlAboutMe from "./about-me.html?raw";
import htmlModal from "./modal.html?raw";

// TODO: Manejar el modal con JavaScript
/**
 * Listener para el modal de la sección "Sobre mí".
 * @param {HTMLElement} parentElement 
 */
export const modalListener = (parentElement) => {
	const storyModal = parentElement.querySelector("#story-modal");
	const photoMine = parentElement.querySelector(".photo-me");

	photoMine.addEventListener("click", () => storyModal.showModal());
};

/**
 * Renderiza la sección "Sobre mí".
 * @returns {HTMLElement} sectionElement Ejemplo: <section id="about-me">...</section>
 */
export const renderAboutMe = () => {
	const htmlFormated = htmlAboutMe
		.replaceAll("{{ svgLogo }}", logo)
		.replace("{{ svgPin }}", mapPin)
		.replace("{{ modal }}", htmlModal);

	const sectionElement = document.createElement("section");
	sectionElement.setAttribute("id", "about-me");
	sectionElement.innerHTML = htmlFormated;

	modalListener(sectionElement);

	return sectionElement;
};
