import "./styles/main.css";

import { renderHeader } from "./use-cases/render-header.js";
import { renderNav } from "./components/nav/render-nav.js";
import { renderHome } from "./components/home/render-home.js";
import { renderFooter } from "./components/footer/render-footer.js";

const HeaderSection = {
	ABOUT_ME: renderHeader("Sobre mí"),
	SKILLS: renderHeader("Tecnologías"),
	PROJECTS: renderHeader("Proyectos"),
	CONTACT: renderHeader("Contacto"),
};

const renderMain = () => {
	const mainElement = document.createElement("main");

	mainElement
		.append(
		renderHome(),
		// HeaderSection.ABOUT_ME,
		// await renderAboutMe(),
		// HeaderSection.SKILLS,
		// await renderSkills(),
		// HeaderSection.PROJECTS,
		// await renderProjects(),
		// HeaderSection.CONTACT,
		// await renderContact()
		);

	return mainElement;
};

document.addEventListener("DOMContentLoaded", () => {
	const app = document.querySelector("#app");

	app.append(
        renderNav(), 
        renderMain(), 
        renderFooter()
    );
});
