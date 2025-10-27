import modalHTML from "../partials/modal.html?raw";

import { renderElement } from "../render-element.js";

export const renderModal = () => {
	renderElement("#modal-container", modalHTML);

	const storyModal = document.querySelector("#story-modal");
	const photoMine = document.querySelector(".photo-me");

	photoMine.addEventListener("click", () => storyModal.showModal());
};
