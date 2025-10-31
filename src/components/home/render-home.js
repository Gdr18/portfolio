import homeHTML from "./home.html?raw";

/**
 * Renderiza la sección de inicio.
 * @returns {HTMLElement} Ejemplo: <section></section>
 */
export const renderHome = () => {
	const homeElement = document.createElement("section");
	homeElement.setAttribute("id", "home");
	homeElement.innerHTML = homeHTML;

    activateHeroAnimation(homeElement);

	return homeElement;
};

const activateHeroAnimation = (parentElement) => {
	const hero = parentElement.querySelector("header");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					parentElement.classList.add("active");
					hero.classList.add("active");
				} else {
					parentElement.classList.remove("active");
					hero.classList.remove("active");
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(parentElement);
};
