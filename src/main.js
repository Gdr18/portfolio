// import "./styles/main.css";

import { renderLogos } from "./presentation/render-logos.js";
import { renderSection } from "./presentation/render-section.js";
import { copyEmail } from "./use-cases/copy-email.js";

import htmlNav from "./partials/nav.html?raw";
import htmlHome from "./partials/home.html?raw";
import htmlAboutMe from "./partials/about-me.html?raw";
import htmlSkills from "./partials/skills.html?raw";
import htmlProjects from "./partials/projects.html?raw";
import htmlContact from "./partials/contact.html?raw";
import htmlFooter from "./partials/footer.html?raw";

const Sections = {
    NAV: "#nav",
    HOME: "#home",
    ABOUT_ME: "#about-me",
    SKILLS: "#skills",
    PROJECTS: "#projects",
    CONTACT: "#contact",
    FOOTER: "footer"
};

renderSection(Sections.NAV, htmlNav);
renderSection(Sections.HOME, htmlHome);
renderSection(Sections.ABOUT_ME, htmlAboutMe);
renderSection(Sections.SKILLS, htmlSkills);
renderSection(Sections.PROJECTS, htmlProjects);
renderSection(Sections.CONTACT, htmlContact);
renderSection(Sections.FOOTER, htmlFooter);
renderLogos();

const copyIcon = document.querySelector(".copy-icon");
const photoMine = document.getElementsByClassName("photo-bento")[0];
const storyModal = document.getElementById("story-modal");

copyIcon.addEventListener("click", copyEmail);
photoMine.addEventListener("click", () => storyModal.showModal());
