import "./styles/main.css";

import { renderNav } from "./components/nav/render-nav.js";
import { renderMain } from "./components/render-main.js";
import { renderFooter } from "./components/footer/render-footer.js";

/**
 * Punto de entrada de la aplicación.
 */
document.addEventListener("DOMContentLoaded", () => {
	const app = document.querySelector("#app");

	app.append(renderNav(), renderMain(), renderFooter());
});
