import "./styles/main.css";

import { renderNav } from "./components/nav/render-nav.js";
import { renderFooter } from "./components/footer/render-footer.js";

const renderHeader = (section) => {
	const headerElement = document.createElement("header");
	headerElement.classList.add("heading-transition");
	const h2Template = `<h2>${section}</h2>`;
	headerElement.innerHTML = h2Template;
	return headerElement;
};

const HeaderSection = {
	ABOUT_ME: renderHeader("Sobre mí"),
	SKILLS: renderHeader("Tecnologías"),
	PROJECTS: renderHeader("Proyectos"),
	CONTACT: renderHeader("Contacto"),
};

const renderMain = async () => {
	const mainElement = document.createElement("main");

	mainElement
		.append
		// await renderHome(),
		// HeaderSection.ABOUT_ME,
		// await renderAboutMe(),
		// HeaderSection.SKILLS,
		// await renderSkills(),
		// HeaderSection.PROJECTS,
		// await renderProjects(),
		// HeaderSection.CONTACT,
		// await renderContact()
		();

	return mainElement;
};

document.addEventListener("DOMContentLoaded", () => {
	const app = document.querySelector("#app");

	app.append(
        renderNav(), 
        // renderMain(), 
        renderFooter()
    );
});
