import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Locale } from '$lib/site-copy';

type GeoApiResponse = {
	location?: {
		country?: string | null;
	} | null;
};

const GEO_API_URL = 'https://geoapi.info/api/geo';
const LOCALE_STORAGE_KEY = 'thinis-locale';

const isLocale = (value: string | null): value is Locale => value === 'de' || value === 'en';

const getNavigatorLocale = (): Locale => {
	if (!browser || typeof navigator.language !== 'string') {
		return 'en';
	}

	return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
};

const getStoredLocalePreference = (): Locale | null => {
	if (!browser) {
		return null;
	}

	try {
		const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
		return isLocale(storedLocale) ? storedLocale : null;
	} catch {
		return null;
	}
};

const detectLocaleFromCountry = (country: string | null | undefined): Locale =>
	country?.toUpperCase() === 'DE' ? 'de' : 'en';

export const locale = writable<Locale>('en');

export const applyLocale = (next: Locale, persist = false) => {
	locale.set(next);

	if (!browser) {
		return next;
	}

	document.documentElement.lang = next;

	if (!persist) {
		return next;
	}

	try {
		window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
	} catch {
		// Ignore storage failures and keep the in-memory locale.
	}

	return next;
};

export const setLocalePreference = (next: Locale) => applyLocale(next, true);

export const detectLocaleFromGeo = async (signal?: AbortSignal): Promise<Locale> => {
	if (!browser) {
		return 'en';
	}

	try {
		const response = await fetch(GEO_API_URL, {
			headers: { accept: 'application/json' },
			signal
		});

		if (!response.ok) {
			throw new Error(`Geo API responded with ${response.status}`);
		}

		const payload = (await response.json()) as GeoApiResponse;
		return detectLocaleFromCountry(payload.location?.country);
	} catch (error) {
		if (error instanceof DOMException && error.name === 'AbortError') {
			throw error;
		}

		return getNavigatorLocale();
	}
};

export const initLocale = async (signal?: AbortSignal): Promise<Locale> => {
	const storedLocalePreference = getStoredLocalePreference();

	if (storedLocalePreference) {
		return applyLocale(storedLocalePreference);
	}

	const fallbackLocale = applyLocale(getNavigatorLocale());

	try {
		return applyLocale(await detectLocaleFromGeo(signal));
	} catch (error) {
		if (error instanceof DOMException && error.name === 'AbortError') {
			return fallbackLocale;
		}

		return fallbackLocale;
	}
};

export const localeInitScript = `
(() => {
	const storageKey = '${LOCALE_STORAGE_KEY}';
	let initialLocale = 'en';

	try {
		const storedLocale = window.localStorage.getItem(storageKey);
		if (storedLocale === 'de' || storedLocale === 'en') {
			initialLocale = storedLocale;
		} else if (
			typeof navigator !== 'undefined' &&
			typeof navigator.language === 'string' &&
			navigator.language.toLowerCase().startsWith('de')
		) {
			initialLocale = 'de';
		}
	} catch {}

	document.documentElement.lang = initialLocale;
})();
`.trim();
