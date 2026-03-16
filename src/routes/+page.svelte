<script lang="ts">
	import { locale } from '$lib/locale';
	import { siteCopy } from '$lib/site-copy';
	import { fromStore } from 'svelte/store';

	const localeState = fromStore(locale);
	let copy = $derived(siteCopy[localeState.current].home);
</script>

<svelte:head>
	<title>{copy.title}</title>
</svelte:head>

<section class="spectral-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
	<div class="hero-grid mx-auto max-w-6xl">
		<div class="page-intro motion-sequence max-w-3xl">
			<p class="eyebrow-badge">{copy.eyebrow}</p>
			<h1 class="page-title">{copy.heading}</h1>
			<p class="meta-copy text-sm tracking-[0.22em] sm:text-base">{copy.role}</p>
			<p class="page-lead">{copy.lead}</p>
			<div class="hero-actions">
				<a href="/work" class="burst-button px-6 py-3 font-semibold">
					{copy.buttons.viewWork}
				</a>
				<a href="/contact" class="project-link text-sm font-semibold sm:text-base">
					{copy.buttons.getInTouch}
				</a>
			</div>
		</div>

		<aside class="hero-note motion-sequence" aria-label={copy.snapshotHeading}>
			<p class="meta-copy">{copy.snapshotHeading}</p>
			<ul class="fact-list">
				{#each copy.snapshot as item}
					<li class="fact-item">{item}</li>
				{/each}
			</ul>
		</aside>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="section-heading-row">
			<h2 class="section-title">{copy.servicesHeading}</h2>
			<a href="/work" class="project-link text-sm font-semibold sm:text-base">
				{copy.buttons.viewWork}
			</a>
		</div>

		<div class="rule-list motion-grid">
			{#each copy.services as service}
				<article class="rule-item">
					<p class="meta-copy">{service.title}</p>
					<p class="section-copy">{service.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
