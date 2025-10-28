import homeHTML from "./home.html?raw";

const imageListener = (imgContainer) => {
    imgContainer.classList.toggle("active");
};


/**
 * Renderiza la sección de inicio.
 * @returns {HTMLElement} Ejemplo: <section></section>
 */
export const renderHome = () => {
    const homeElement = document.createElement("section");
    homeElement.setAttribute("id", "home");
    homeElement.innerHTML = homeHTML;

    const imgContainer = homeElement.querySelector(".welcome-container");
    imgContainer.addEventListener("click", imageListener(imgContainer));
    return homeElement;
};
