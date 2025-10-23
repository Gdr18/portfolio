export const loadIcon = async (el, path) => {
	const res = await fetch(path);
	const svg = await res.text();
	el.innerHTML = svg;
};
