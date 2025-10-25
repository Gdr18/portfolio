import { renderModal } from "./render-modal";
import htmlAboutMe from "../partials/about-me.html?raw";

import { renderElement } from "./render-element";
import { addIconAndAttributes } from "./load-icons";

export const renderAboutMe = () => {
    renderElement("#about-me", htmlAboutMe);
	renderModal();

    const logoPath = "/icons/logo.svg";
    const logoContainers = document.querySelectorAll("#inc-logo-little");
    const logoClasses = ["items-photo-me", "logo"];
    logoContainers.forEach((logoDiv) => {
        addIconAndAttributes(logoDiv, logoPath, logoClasses);
    })
};
