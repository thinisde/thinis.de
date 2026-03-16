<script lang="ts">
	import { locale } from '$lib/locale';
	import ResilientImage from '$lib/components/ResilientImage.svelte';
	import { siteCopy } from '$lib/site-copy';
	import { fromStore } from 'svelte/store';

	const localeState = fromStore(locale);
	let copy = $derived(siteCopy[localeState.current].about);
</script>

<svelte:head>
	<title>{copy.title}</title>
</svelte:head>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="page-intro motion-sequence max-w-3xl">
			<p class="eyebrow-badge">{copy.eyebrow}</p>
			<h1 class="page-title">{copy.heading}</h1>
			<p class="page-lead">{copy.lead}</p>
		</div>

		<div class="about-grid">
			<div class="content-stack">
				{#each copy.paragraphs as paragraph}
					<p class="section-copy">{paragraph}</p>
				{/each}
			</div>

			<figure class="profile-figure mx-auto w-full max-w-sm lg:mx-0">
				<div class="panel-media aspect-[4/5]">
					<ResilientImage
						src="https://avatars.githubusercontent.com/u/51492960?v=4"
						alt={copy.profileImageAlt}
						loading="lazy"
						decoding="async"
						fallbackLabel={copy.profileFallbackLabel}
						class="h-full w-full object-cover object-bottom"
					/>
				</div>
				<figcaption class="profile-caption">
					<h2 class="panel-accent text-xl font-semibold">Thinh Nguyen</h2>
					<p class="meta-copy">{copy.profileRole}</p>
				</figcaption>
			</figure>
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="section-title mb-10 sm:mb-12">{copy.skillsHeading}</h2>

		<div class="rule-list motion-grid">
			{#each copy.skillGroups as group}
				<div class="rule-item skill-row">
					<h3 class="panel-accent text-xl font-semibold">{group.title}</h3>
					<p class="section-copy">{group.items.join(' · ')}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<h2 class="section-title mb-10 sm:mb-12">{copy.educationHeading}</h2>

		<div class="rule-list motion-grid">
			{#each copy.education as item}
				<article class="rule-item education-row">
					<div class="education-row__header">
						<div class="min-w-0">
							<h3 class="panel-accent text-xl font-semibold">{item.title}</h3>
							<p class="meta-copy">{item.school}</p>
						</div>
						<p class="meta-copy">{item.period}</p>
					</div>
					<p class="section-copy">{item.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
