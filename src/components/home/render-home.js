import homeHTML from "./home.html?raw";

export const renderHome = () => {
    const homeElement = document.createElement("section");
    homeElement.setAttribute("id", "home");
    homeElement.innerHTML = homeHTML;
    return homeElement;
};
