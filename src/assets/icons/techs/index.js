const rawSvgIconsTech = import.meta.glob("./*.svg", {
	eager: true,
	query: "raw",
	import: "default",
});

const svgIconsTech = {};
Object.entries(rawSvgIconsTech).forEach(([path, svg]) => {
	const start = path.lastIndexOf("/") + 1;
	const finish = path.lastIndexOf(".");
	const name = path.substring(start, finish);
	svgIconsTech[name] = svg;
});

/**
 * Busca la tecnología por su nombre y devuelve el icono SVG
 * @param {String} nameTech Ejemplo: CSS
 * @returns {String} Ejemplo: '<svg>...</svg>'
 */
export const getSvgTech = (nameTech) => {
	return svgIconsTech[nameTech.toLowerCase()];
};

export const getSomeSvgTech = (arrayNamesTech) => {
	let objectSvgTech = {};
	arrayNamesTech.forEach((nametech) => {
		const svgTech = svgIconsTech[nametech];
		objectSvgTech[nametech] = svgTech;
	});

	return objectSvgTech;
};

export const getAllSvgTechs = () => {
	return svgIconsTech;
};
