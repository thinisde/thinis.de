import { browser } from '$app/environment';

export type ResolvedTheme = 'light' | 'dark';

export const getSystemTheme = (): ResolvedTheme => {
	if (!browser || typeof window.matchMedia !== 'function') {
		return 'light';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const applySystemTheme = (): ResolvedTheme => {
	const resolvedTheme = getSystemTheme();

	if (!browser) {
		return resolvedTheme;
	}

	const root = document.documentElement;

	root.dataset.themeMode = 'system';
	root.dataset.theme = resolvedTheme;
	root.style.colorScheme = resolvedTheme;

	return resolvedTheme;
};

export const themeInitScript = `
(() => {
	const prefersDark =
		typeof window.matchMedia === 'function' &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	const resolvedTheme = prefersDark ? 'dark' : 'light';
	const root = document.documentElement;

	root.dataset.themeMode = 'system';
	root.dataset.theme = resolvedTheme;
	root.style.colorScheme = resolvedTheme;
})();
`.trim();
