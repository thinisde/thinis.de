<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/work', label: 'Work' },
		{ href: 'https://photos.thinis.de', label: 'Photography' },
		{ href: '/contact', label: 'Contact' }
	];

	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Portfolio website" />
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-surface-50 text-surface-900 dark:bg-surface-900 dark:text-surface-100"
>
	<header
		class="sticky top-0 z-50 border-b border-surface-200 bg-white/80 backdrop-blur-md dark:border-surface-800 dark:bg-surface-900/80"
	>
		<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<a href="/" class="text-xl font-bold tracking-tight">Portfolio</a>

			<!-- Desktop Navigation -->
			<ul class="hidden gap-8 md:flex">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="transition-colors hover:text-primary-600 dark:hover:text-primary-400 {page.url
								.pathname === link.href
								? 'font-semibold text-primary-600 dark:text-primary-400'
								: ''}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile Menu Button -->
			<button
				class="rounded-md p-2 md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
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
		</nav>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<ul
				class="border-t border-surface-200 bg-white px-6 py-4 md:hidden dark:border-surface-800 dark:bg-surface-900"
			>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="block py-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400 {page
								.url.pathname === link.href
								? 'font-semibold text-primary-600 dark:text-primary-400'
								: ''}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-surface-200 bg-white dark:border-surface-800 dark:bg-surface-900">
		<div class="mx-auto max-w-6xl px-6 py-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-sm text-surface-600 dark:text-surface-400">
					&copy; {new Date().getFullYear()} Thinh Nguyen. All rights reserved.
				</p>
				<div class="flex gap-6">
					<a
						href="https://github.com/thinisde"
						target="_blank"
						rel="noopener noreferrer"
						class="text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/thinisde"
						target="_blank"
						rel="noopener noreferrer"
						class="text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
					>
						LinkedIn
					</a>
					<a
						href="https://x.com/CutieCat_6778"
						target="_blank"
						rel="noopener noreferrer"
						class="text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-100"
					>
						X (Twitter)
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
