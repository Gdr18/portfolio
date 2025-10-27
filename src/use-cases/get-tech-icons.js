const svgIcons = import.meta.glob('../assets/icons/techs/*.svg', { as: 'raw', eager: true });

/**
 * Busca la tecnología por su nombrey devuelve el icono SVG
 * @param {<String>} nameTech Ejemplo: CSS
 * @returns {<String>} Ejemplo: '<svg>...</svg>'
 */
export const getTechIcon = nameTech => {
    const tech = Object.entries(svgIcons).find(([key]) => {
        return key.toLowerCase().includes(nameTech.toLowerCase());
    });

    if (!tech) throw new Error("Icono no encontrado");

    return tech[1];
}
