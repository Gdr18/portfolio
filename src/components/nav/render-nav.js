import svgAboutMe from '../../assets/icons/logo_dev.svg?raw';
import svgSkills from "../../assets/icons/sdk.svg?raw";
import svgProjects from "../../assets/icons/folder_code.svg?raw";
import svgContact from "../../assets/icons/3p.svg?raw";
import svgLogo from "../../assets/icons/logo.svg?raw";

const LinksInfo = {
	ABOUT_ME: {
		linkId: "#about-me", 
		linkTitle: "Sobre mí",
		linkSvg: svgAboutMe,
	},
	SKILLS: {
		linkId: "#skills", 
		linkTitle: "Habilidades",
		linkSvg: svgSkills,
	},
	PROJECTS: {
		linkId: "#projects", 
		linkTitle: "Proyectos",
		linkSvg: svgProjects,
	},
	CONTACT: {
		linkId: "#contact", 
		linkTitle: "Contacto",
		linkSvg: svgContact,
	},
};

/**
 * Genera los enlaces de navegación.
 * @returns <String>
 */
const generateLinks = () => {
	const linksList = Object.values(LinksInfo).map(link => {
		const {linkId, linkTitle, linkSvg} = link;

		const linkTemplate = `
		<a href="${linkId}" title="${linkTitle}">
			${linkSvg}
		</a>
		`
		return linkTemplate;
	});
	return linksList.join("");
}

/**
 * Renderiza la barra de navegación.
 */
export const renderNav = () => {
	const navElement = document.createElement("nav");
    
	const htmlNav = `
                <a href="#home" title="Inicio">
					${svgLogo}
				</a>
                <div class="links-nav-section">
					${generateLinks()}
				</div>`;

	navElement.innerHTML = htmlNav;
	navElement.querySelectorAll(".links-nav-section svg").forEach(link => link.classList.add("link-icon"))
	return navElement;
};
