import projects from "../data/projects.json";
import htmlHandle from "../use-cases/html-handle.js";
import handleHtml from "../use-cases/html-handle.js";

/**
 * Crea un artículo para un proyecto.
 * @param {Object} project Ejemplo: { title: "Proyecto 1", description: "Descripción del proyecto 1", ... }
 * @returns {HTMLElement} El elemento del artículo del proyecto creado.
 */
const createProjectArticle = (project) => {
    // Creación del artículo del proyecto
	const articleElement = document.createElement("article");
	articleElement.classList.add("card", "animated-card");

	// Creación del header con el título del proyecto
	const headerElement = document.createElement("header");
	const h3Element = handleHtml.createElementAndAppend(
		"h3",
		{ class: "project-header" },
		headerElement
	);
	h3Element.textContent = project.title;

	// Creación del contenedor de logos de tecnologías
	const logoContainer = htmlHandle.createElementAndAppend("div", {
		class: "logo-container",
	});
	for (const iconTech of project.technologies) {
		handleHtml.loadIcon(logoContainer, iconTech.toLowerCase(), [
			"logo-project",
		]);
	}

	const attributesImg = {
		class: "project-image",
		src: `images/${project.image}`,
		alt: `Captura ${project.title}`,
	};
	const imgElement = handleHtml.createElementAndAppend("img", attributesImg);

	const paragraphElement = handleHtml.createElementAndAppend(
		"p",
		articleElement
	);
	paragraphElement.textContent = project.description;

	// Creación del contenedor de botones de enlaces
	const buttonsContainer = htmlHandle.createElementAndAppend("div", {
		class: "buttons-container",
	});
	for (const [host, link] of Object.entries(project.links)) {
		const attributesLink = {
			class: "button",
			href: link,
			target: "_blank",
			rel: "noreferrer",
		};
		const linkElement = handleHtml.createElementAndAppend(
			"a",
			attributesLink,
			buttonsContainer
		);

		handleHtml.loadIcon(linkElement, host.toLowerCase());

		const spanElement = handleHtml.createElementAndAppend(
			"span",
			{},
			linkElement
		);
		spanElement.textContent = host;
	}

	// Ensamblaje del artículo del proyecto
	articleElement.append(
		headerElement,
		logoContainer,
		imgElement,
		paragraphElement,
		buttonsContainer
	);

	return articleElement;
};

export const renderProjects = (elementSelector) => {
	// Creación del contenedor de la lista de proyectos
	const projectsListParentElement = htmlHandle.createElementAndAppend("div", {
        class: "project-list",
    });

	for (const project of projects) {
		const articleElement = createProjectArticle(project);
		projectsListParentElement.append(articleElement);
	}
	// Añadir la lista de proyectos al elemento seleccionado en el DOM
	const projectsParentElement = document.querySelector(elementSelector);
	projectsParentElement.append(projectsListParentElement);
};

// export const renderProjects = async (elementSelector) => {
// 	const projectsListParentElement = document.createElement("div");
// 	projectsListParentElement.classList.add("project-list");

// 	projects.forEach((project) => {
// 		const htmlProject = `
//     <article class="card animated-card">
// 		<header>
// 			<h3>${project.title}</h3>
// 		</header>
// 		<div class="logo-container"></div>
// 		<img
// 			class="project-image"
// 			src="images/${project.image}"
// 			alt="Captura Postman de ${project.title}"
// 		/>
// 		<p>
// 			${project.description}
// 		</p>
// 		<div class="buttons-container"></div>
// 	</article>
//     `;

// 		projectsListParentElement.insertAdjacentHTML("beforeend", htmlProject);
// 		const articleElement =
// 			projectsListParentElement.querySelector("article:last-child");

// 		// Insertas logos de tecnologías en .logo-container
// 		const logoContainer = articleElement.querySelector(".logo-container");
// 		for (const iconTech of project.technologies) {
// 			handleHtml.loadIcon(logoContainer, iconTech.toLowerCase(), [
// 				"logo-project",
// 			]);
// 		}

// 		// Insertas links en .buttons-container
// 		const buttonsContainer = articleElement.querySelector(
// 			".buttons-container:last-child"
// 		);
// 		for (const [host, link] of Object.entries(project.links)) {
// 			const attributesLink = {
// 				class: "button",
// 				href: link,
// 				target: "_blank",
// 				rel: "noreferrer",
// 			};
// 			const linkElement = handleHtml.createElementAndAppend(
// 				"a",
// 				buttonsContainer,
// 				attributesLink
// 			);

// 			handleHtml.loadIcon(
// 				linkElement,
// 				host.toLowerCase() === "host" ? "link" : host.toLowerCase()
// 			);

// 			const spanElement = handleHtml.createElementAndAppend(
// 				"span",
// 				linkElement
// 			);
// 			spanElement.textContent = host;
// 		}
// 	});

// 	const projectsParentElement = document.querySelector(elementSelector);
// 	projectsParentElement.append(projectsListParentElement);
// };
