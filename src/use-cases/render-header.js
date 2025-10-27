export const renderHeader = (sectionName) => {
	const headerElement = document.createElement("header");
	headerElement.classList.add("heading-transition");
	const h2Template = `<h2>${sectionName}</h2>`;
	headerElement.innerHTML = h2Template;
	return headerElement;
};