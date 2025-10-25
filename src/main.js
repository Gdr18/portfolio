import "./portfolio-app/styles/main.css";

import { renderElement } from "./portfolio-app/presentation/render-element.js";
import { renderApp } from "./portfolio-app/app.js";

import htmlBase from "./portfolio-app/partials/base.html?raw";

renderElement("#app", htmlBase);
renderApp();