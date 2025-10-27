import homeHTML from "./home.html?raw";

/**
 * Renderiza la sección de inicio.
 * @returns {HTMLElement} Ejemplo: <section></section>
 */
export const renderHome = () => {
    const homeElement = document.createElement("section");
    homeElement.setAttribute("id", "home");
    homeElement.innerHTML = homeHTML;
    return homeElement;
};
