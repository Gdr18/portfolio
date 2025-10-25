import { renderNav } from "./presentation/render-nav.js";
import { renderAboutMe } from "./presentation/render-about-me.js";
import { renderElement } from "./presentation/render-element.js";
import { copyEmail } from "./use-cases/copy-email.js";

import htmlHome from "./partials/home.html?raw";
import htmlSkills from "./partials/skills.html?raw";
import htmlProjects from "./partials/projects.html?raw";
import htmlContact from "./partials/contact.html?raw";
import htmlFooter from "./partials/footer.html?raw";

const ToSelectElement = {
	NAV: "nav",
	HOME: "#home",
	ABOUT_ME: "#about-me",
	SKILLS: "#skills",
	PROJECTS: "#projects",
	CONTACT: "#contact",
	FOOTER: "footer",
};

export const renderApp = () => {
	renderNav(ToSelectElement.NAV);
	renderElement(ToSelectElement.HOME, htmlHome);
	renderAboutMe(ToSelectElement.ABOUT_ME);
	renderElement(ToSelectElement.SKILLS, htmlSkills);
	renderElement(ToSelectElement.PROJECTS, htmlProjects);
	renderElement(ToSelectElement.CONTACT, htmlContact);
	renderElement(ToSelectElement.FOOTER, htmlFooter);

	const copyIcon = document.querySelector(".copy-icon");

	copyIcon.addEventListener("click", copyEmail);
};
