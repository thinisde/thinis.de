import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ThemeMode = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const THEME_STORAGE_KEY = 'thinis-theme-mode';

const isThemeMode = (value: string | null): value is ThemeMode =>
	value === 'system' || value === 'light' || value === 'dark';

export const resolveTheme = (mode: ThemeMode, prefersDark: boolean): ResolvedTheme =>
	mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

const getStoredThemeMode = (): ThemeMode | null => {
	if (!browser) {
		return null;
	}

	try {
		const storedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY);
		return isThemeMode(storedThemeMode) ? storedThemeMode : null;
	} catch {
		return null;
	}
};

export const themeMode = writable<ThemeMode>('system');

export const getSystemTheme = (): ResolvedTheme => {
	if (!browser || typeof window.matchMedia !== 'function') {
		return 'light';
	}

	return window.matchMedia(THEME_MEDIA_QUERY).matches ? 'dark' : 'light';
};

export const applyThemeMode = (mode: ThemeMode, persist = true): ResolvedTheme => {
	const resolvedTheme = resolveTheme(mode, getSystemTheme() === 'dark');

	themeMode.set(mode);

	if (!browser) {
		return resolvedTheme;
	}

	const root = document.documentElement;

	root.dataset.themeMode = mode;
	root.dataset.theme = resolvedTheme;
	root.style.colorScheme = resolvedTheme;

	if (!persist) {
		return resolvedTheme;
	}

	try {
		window.localStorage.setItem(THEME_STORAGE_KEY, mode);
	} catch {
		// Ignore storage failures and keep the in-memory preference.
	}

	return resolvedTheme;
};

export const initTheme = (): ResolvedTheme =>
	applyThemeMode(getStoredThemeMode() ?? 'system', false);

export const subscribeToSystemTheme = (callback: () => void): (() => void) => {
	if (!browser || typeof window.matchMedia !== 'function') {
		return () => {};
	}

	const mediaQuery = window.matchMedia(THEME_MEDIA_QUERY);

	if (typeof mediaQuery.addEventListener === 'function') {
		mediaQuery.addEventListener('change', callback);
		return () => mediaQuery.removeEventListener('change', callback);
	}

	if (typeof mediaQuery.addListener === 'function') {
		mediaQuery.addListener(callback);
		return () => mediaQuery.removeListener(callback);
	}

	return () => {};
};

export const themeInitScript = `
(() => {
	const storageKey = '${THEME_STORAGE_KEY}';
	let mode = 'system';

	try {
		const storedMode = window.localStorage.getItem(storageKey);
		if (storedMode === 'system' || storedMode === 'light' || storedMode === 'dark') {
			mode = storedMode;
		}
	} catch {}

	const prefersDark =
		typeof window.matchMedia === 'function' &&
		window.matchMedia('${THEME_MEDIA_QUERY}').matches;
	const resolvedTheme = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;
	const root = document.documentElement;

	root.dataset.themeMode = mode;
	root.dataset.theme = resolvedTheme;
	root.style.colorScheme = resolvedTheme;
})();
`.trim();
