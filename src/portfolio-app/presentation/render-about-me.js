import { renderModal } from "./render-modal";
import htmlAboutMe from "../partials/about-me.html?raw";

import { renderElement } from "./render-element";
import htmlHandle from "../use-cases/html-handle";

export const renderAboutMe = (aboutMeParentSelector) => {
	renderElement(aboutMeParentSelector, htmlAboutMe);

	renderModal();

	const parentsLogoElements = document.querySelectorAll("#inc-logo-little");
	parentsLogoElements.forEach((parentLogoElement) => {
		const logoClasses = ["items-photo-me", "logo"];
		const logoIconName = "logo";
		htmlHandle.loadIcon(parentLogoElement, logoIconName, logoClasses);
	});
};
