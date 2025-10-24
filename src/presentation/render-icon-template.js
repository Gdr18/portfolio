export const loadIcon = async (element, path) => {
	const res = await fetch(path);
	const svg = await res.text();
	element.innerHTML = svg;
};
