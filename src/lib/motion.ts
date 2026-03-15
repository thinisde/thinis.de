import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export const prefersReducedMotion = readable(true, (set) => {
	if (!browser) {
		return;
	}

	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	const updatePreference = () => set(mediaQuery.matches);

	updatePreference();
	mediaQuery.addEventListener('change', updatePreference);

	return () => mediaQuery.removeEventListener('change', updatePreference);
});
