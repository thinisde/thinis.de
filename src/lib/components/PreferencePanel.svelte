<script lang="ts">
	import { locale, setLocalePreference } from '$lib/locale';
	import { siteCopy } from '$lib/site-copy';
	import { applyThemeMode, themeMode, type ThemeMode } from '$lib/theme';
	import { fromStore } from 'svelte/store';

	type Props = {
		mobile?: boolean;
	};

	let { mobile = false }: Props = $props();

	const localeState = fromStore(locale);
	const themeModeState = fromStore(themeMode);
	let desktopOpen = $state(false);

	let copy = $derived(siteCopy[localeState.current].layout.controls);

	const themeOptions: Array<{ value: ThemeMode; label: keyof typeof copy }> = [
		{ value: 'system', label: 'auto' },
		{ value: 'light', label: 'white' },
		{ value: 'dark', label: 'dark' }
	];

	const languageOptions = [
		{ value: 'en' as const, label: 'english' as const },
		{ value: 'de' as const, label: 'german' as const }
	];

	function openDesktopPanel() {
		if (!mobile) {
			desktopOpen = true;
		}
	}

	function closeDesktopPanel() {
		if (!mobile) {
			desktopOpen = false;
		}
	}

	function toggleDesktopPanel() {
		if (!mobile) {
			desktopOpen = !desktopOpen;
		}
	}

	function handleFocusOut(event: FocusEvent) {
		if (mobile) {
			return;
		}

		const currentTarget = event.currentTarget;
		const nextTarget = event.relatedTarget;

		if (
			currentTarget instanceof HTMLElement &&
			nextTarget instanceof Node &&
			currentTarget.contains(nextTarget)
		) {
			return;
		}

		desktopOpen = false;
	}
</script>

<section
	class={`control-panel ${mobile ? 'control-panel--mobile' : 'control-panel--floating'}`}
	class:control-panel--open={!mobile && desktopOpen}
	aria-label={copy.heading}
	onmouseenter={openDesktopPanel}
	onmouseleave={closeDesktopPanel}
	onfocusin={openDesktopPanel}
	onfocusout={handleFocusOut}
>
	<button
		type="button"
		class="control-panel__trigger"
		aria-expanded={mobile || desktopOpen}
		aria-label={copy.heading}
		onclick={toggleDesktopPanel}
	>
		<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.8"
				d="M4 7h16M4 17h16M8 7a2 2 0 110 4 2 2 0 010-4zm8 6a2 2 0 110 4 2 2 0 010-4z"
			/>
		</svg>
	</button>

	<div
		class="control-panel__expanded"
		aria-hidden={!mobile && !desktopOpen}
		inert={!mobile && !desktopOpen}
	>
		<p class="control-panel__eyebrow">{copy.heading}</p>

		<div class="control-panel__section">
			<p class="control-panel__label">{copy.theme}</p>
			<div class="control-options" role="group" aria-label={copy.theme}>
				{#each themeOptions as option}
					<button
						type="button"
						class={`control-option ${themeModeState.current === option.value ? 'control-option--active' : ''}`}
						aria-pressed={themeModeState.current === option.value}
						onclick={() => applyThemeMode(option.value)}
					>
						{copy[option.label]}
					</button>
				{/each}
			</div>
		</div>

		<div class="control-panel__section">
			<p class="control-panel__label">{copy.language}</p>
			<div class="control-options" role="group" aria-label={copy.language}>
				{#each languageOptions as option}
					<button
						type="button"
						class={`control-option ${localeState.current === option.value ? 'control-option--active' : ''}`}
						aria-pressed={localeState.current === option.value}
						onclick={() => setLocalePreference(option.value)}
					>
						{copy[option.label]}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
