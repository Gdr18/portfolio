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

// TODO: Animación con Intersection Observer, habría que especificar la clase .animate en el CSS
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate");
//     }
//   });
// });
// observer.observe(document.querySelector("#home"));