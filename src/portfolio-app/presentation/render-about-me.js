import { renderModal } from "./render-modal";
import htmlAboutMe from "../partials/about-me.html?raw";

import { renderElement } from "./render-element";
import { loadIcon } from "./load-icons";

export const renderAboutMe = (aboutMeParentSelector) => {
    renderElement(aboutMeParentSelector, htmlAboutMe);

	renderModal();

    const parentsLogoElements = document.querySelectorAll("#inc-logo-little");
    parentsLogoElements.forEach((parentLogoElement) => {
        const logoClasses = ["items-photo-me", "logo"];
        const logoIconName = "logo";
        loadIcon(parentLogoElement, logoIconName, logoClasses);
    })
};
