import "./styles/main.css";

import { renderNav } from "./presentation/render-nav.js";
import { renderLogos } from "./presentation/render-logos.js";
import { renderElement } from "./presentation/render-element.js";
import { copyEmail } from "./use-cases/copy-email.js";

import htmlBase from "./partials/base.html?raw";
import htmlHome from "./partials/home.html?raw";
import htmlAboutMe from "./partials/about-me.html?raw";
import htmlSkills from "./partials/skills.html?raw";
import htmlProjects from "./partials/projects.html?raw";
import htmlContact from "./partials/contact.html?raw";
import htmlFooter from "./partials/footer.html?raw";

const ToSelectElement = {
	APP: "#app",
	NAV: "nav",
	HOME: "#home",
	ABOUT_ME: "#about-me",
	SKILLS: "#skills",
	PROJECTS: "#projects",
	CONTACT: "#contact",
	FOOTER: "footer",
};

renderElement(ToSelectElement.APP, htmlBase);
renderNav(ToSelectElement.NAV);
renderElement(ToSelectElement.HOME, htmlHome);
renderElement(ToSelectElement.ABOUT_ME, htmlAboutMe);
renderElement(ToSelectElement.SKILLS, htmlSkills);
renderElement(ToSelectElement.PROJECTS, htmlProjects);
renderElement(ToSelectElement.CONTACT, htmlContact);
renderElement(ToSelectElement.FOOTER, htmlFooter);
renderLogos();

const copyIcon = document.querySelector(".copy-icon");
const photoMine = document.getElementsByClassName("photo-bento")[0];
const storyModal = document.getElementById("story-modal");

copyIcon.addEventListener("click", copyEmail);
photoMine.addEventListener("click", () => storyModal.showModal());
