const svgIcons = import.meta.glob("../assets/icons/techs/*.svg", {
	as: "raw",
	eager: true,
});

const svgIconsFormatted = {};
Object.entries(svgIcons).forEach(([ path, svg ]) => {
	const start = path.lastIndexOf("/") + 1;
	const finish = path.lastIndexOf(".");
	const name = path.substring(start, finish);
	svgIconsFormatted[name] = svg;
})

/**
 * Busca la tecnología por su nombre y devuelve el icono SVG
 * @param {String} nameTech Ejemplo: CSS
 * @returns {String} Ejemplo: '<svg>...</svg>'
 */
export const getSvgTech = (nameTech) => {
	return svgIconsFormatted[nameTech.toLowerCase()];
};

export const getAllSvgTechs = () => {
	return svgIconsFormatted;
}
