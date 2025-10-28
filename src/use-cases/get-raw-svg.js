const svgIcons = import.meta.glob("../assets/icons/techs/*.svg", {
	as: "raw",
	eager: true,
});

/**
 * Busca la tecnología por su nombre y devuelve el icono SVG
 * @param {String} nameTech Ejemplo: CSS
 * @returns {String} Ejemplo: '<svg>...</svg>'
 */
export const getSvgTech = (nameTech) => {
	const tech = Object.entries(svgIcons).find(([key]) => {
		return key.toLowerCase().includes(nameTech.toLowerCase());
	});

	if (!tech) throw new Error("Icono no encontrado");

	return tech[1];
};
