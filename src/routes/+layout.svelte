<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { prefersReducedMotion } from '$lib/motion';
	import { applySystemTheme, themeInitScript } from '$lib/theme';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: '/contact', label: 'Contact' }
	];

	let mobileMenuOpen = $state(false);

	$effect(() => {
		page.url.pathname;
		mobileMenuOpen = false;
	});

	onMount(() => {
		applySystemTheme();

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleThemeChange = () => applySystemTheme();

		mediaQuery.addEventListener('change', handleThemeChange);

		return () => mediaQuery.removeEventListener('change', handleThemeChange);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{@html `<script>${themeInitScript}</script>`}
	<meta
		name="description"
		content="Thinh Nguyen is a full-stack and embedded developer building web products, systems, and technical experiments."
	/>
</svelte:head>

<div class="site-frame theme-surface flex min-h-screen flex-col">
	<header class="chromatic-header theme-border theme-surface sticky top-0 z-50 border-b">
		<nav
			class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
		>
			<a href="/" class="brand-spark text-lg font-bold tracking-tight sm:text-xl">Portfolio</a>

			<div class="flex items-center gap-2 sm:gap-3">
				<!-- Desktop Navigation -->
				<ul class="hidden items-center gap-6 md:flex lg:gap-8">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class={`nav-link ${page.url.pathname === link.href ? 'nav-link--active' : ''}`}
								aria-current={page.url.pathname === link.href ? 'page' : undefined}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="theme-border theme-surface inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border p-2 md:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-menu"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</nav>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div
				id="mobile-menu"
				class="theme-border theme-surface border-t md:hidden"
				in:fly={{
					y: $prefersReducedMotion ? 0 : -12,
					duration: $prefersReducedMotion ? 0 : 220,
					easing: quintOut
				}}
				out:fade={{ duration: $prefersReducedMotion ? 0 : 160 }}
			>
				<ul class="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class={`menu-link ${page.url.pathname === link.href ? 'menu-link--active' : ''}`}
								onclick={() => (mobileMenuOpen = false)}
								aria-current={page.url.pathname === link.href ? 'page' : undefined}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</header>

	<main class="site-canvas flex-1 overflow-x-clip">
		{@render children()}
	</main>

	<footer class="chromatic-footer theme-border theme-surface border-t">
		<div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
			<div
				class="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
			>
				<p class="text-sm">&copy; {new Date().getFullYear()} Thinh Nguyen. All rights reserved.</p>
				<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
					<a
						href="https://github.com/thinisde"
						target="_blank"
						rel="noopener noreferrer"
						class="footer-link"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/thinisde"
						target="_blank"
						rel="noopener noreferrer"
						class="footer-link"
					>
						LinkedIn
					</a>
					<a
						href="https://x.com/CutieCat_6778"
						target="_blank"
						rel="noopener noreferrer"
						class="footer-link"
					>
						X / Twitter
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
