export const linkButtonTemplate = (svg, url, text) => {
    const linkTemplate = `<a
	class="button"
	href=${url}
	target="_blank"
	rel="noreferrer"
	>
    ${svg}
	${text}
</a>`;
    return linkTemplate;
};
