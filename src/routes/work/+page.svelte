<script lang="ts">
	import { locale } from '$lib/locale';
	import ResilientImage from '$lib/components/ResilientImage.svelte';
	import { prefersReducedMotion } from '$lib/motion';
	import { siteCopy } from '$lib/site-copy';
	import { quintOut } from 'svelte/easing';
	import { fromStore } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';

	type LocalizedProject = {
		title: string;
		description: string;
		technologies: readonly string[];
		imageUrl?: string;
		githubUrl?: string;
		liveUrl?: string;
		featured: boolean;
	};

	const localeState = fromStore(locale);

	let copy = $derived(siteCopy[localeState.current].work);
	let featuredProjects = $derived(
		copy.projects.filter((project) => project.featured) as LocalizedProject[]
	);
	let activeTab = $state<'experience' | 'projects'>('experience');
</script>

<svelte:head>
	<title>{copy.title}</title>
</svelte:head>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="page-intro motion-sequence max-w-4xl">
			<p class="eyebrow-badge">{copy.eyebrow}</p>
			<h1 class="page-title">{copy.heading}</h1>
			<p class="page-lead">{copy.lead}</p>
		</div>

		<div
			class="work-tabs mb-10 grid grid-cols-2 gap-3 py-3 sm:mb-12"
			role="tablist"
			aria-label={copy.tabListLabel}
		>
			<button
				id="tab-experience"
				type="button"
				onclick={() => (activeTab = 'experience')}
				role="tab"
				aria-selected={activeTab === 'experience'}
				aria-controls="panel-experience"
				class={`work-tab inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:text-base ${
					activeTab === 'experience' ? 'work-tab--active' : ''
				}`}
			>
				{copy.tabs.experience}
			</button>
			<button
				id="tab-projects"
				type="button"
				onclick={() => (activeTab = 'projects')}
				role="tab"
				aria-selected={activeTab === 'projects'}
				aria-controls="panel-projects"
				class={`work-tab inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:text-base ${
					activeTab === 'projects' ? 'work-tab--active' : ''
				}`}
			>
				{copy.tabs.projects}
			</button>
		</div>

		{#key `${localeState.current}-${activeTab}`}
			<div
				in:fly={{
					y: $prefersReducedMotion ? 0 : 18,
					duration: $prefersReducedMotion ? 0 : 280,
					easing: quintOut
				}}
				out:fade={{ duration: $prefersReducedMotion ? 0 : 180 }}
			>
				{#if activeTab === 'experience'}
					<div id="panel-experience" role="tabpanel" aria-labelledby="tab-experience" tabindex="-1">
						{#if copy.experiences.length > 0}
							<div class="rule-list motion-grid">
								{#each copy.experiences as exp}
									<article class="rule-item experience-entry">
										<div
											class="experience-entry__header mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
										>
											<div class="min-w-0">
												<h2 class="text-xl font-semibold">{exp.title}</h2>
												<p class="panel-accent">{exp.company}</p>
											</div>
											<div class="meta-copy sm:text-right">
												<p>{exp.period}</p>
												<p>{exp.location}</p>
											</div>
										</div>

										<p class="section-copy mb-4">{exp.description}</p>

										{#if exp.achievements.length > 0}
											<ul class="content-stack mb-4">
												{#each exp.achievements as achievement}
													<li class="section-copy flex items-start gap-2 text-sm">
														<svg
															class="mt-1 h-3 w-3 flex-shrink-0"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fill-rule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clip-rule="evenodd"
															/>
														</svg>
														{achievement}
													</li>
												{/each}
											</ul>
										{/if}

										{#if exp.technologies.length > 0}
											<p class="meta-copy">{exp.technologies.join(' / ')}</p>
										{/if}
									</article>
								{/each}
							</div>

							<div class="mt-12 text-center">
								<a
									href={copy.resumeHref}
									class="outline-burst min-h-11 w-full gap-2 px-6 py-3 font-medium sm:w-auto"
								>
									<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									{copy.resumeButton}
								</a>
							</div>
						{:else}
							<div class="chromatic-panel empty-state-panel rounded-xl p-5 sm:p-6">
								<h2 class="section-title">{copy.experienceEmpty.title}</h2>
								<p class="empty-state-copy section-copy">{copy.experienceEmpty.description}</p>
								<div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
									<a
										href={copy.resumeHref}
										class="outline-burst min-h-11 justify-center rounded-lg px-6 py-3 font-medium"
									>
										{copy.resumeButton}
									</a>
									<a
										href="/contact"
										class="burst-button min-h-11 justify-center rounded-lg px-6 py-3 font-medium"
									>
										{copy.requestLatestWork}
									</a>
								</div>
							</div>
						{/if}
					</div>
				{:else}
					<div id="panel-projects" role="tabpanel" aria-labelledby="tab-projects" tabindex="-1">
						<h2 class="section-title mb-6 text-balance">{copy.projectsHeading}</h2>
						{#if featuredProjects.length > 0}
							<div class="project-stack motion-grid mb-12">
								{#each featuredProjects as project}
									<article class="project-entry">
										<div class="panel-media project-entry__media aspect-video">
											<ResilientImage
												src={project.imageUrl}
												alt={`${copy.projectPreviewAltPrefix} ${project.title}`}
												loading="lazy"
												decoding="async"
												fallbackLabel={`${project.title} ${copy.projectPreviewFallbackSuffix}`}
												class="h-full w-full object-cover"
											/>
										</div>
										<div class="project-entry__body">
											<div class="project-entry__header">
												<h3 class="panel-accent text-xl font-semibold">{project.title}</h3>
												<div class="project-links">
													{#if project.liveUrl}
														<a
															href={project.liveUrl}
															target="_blank"
															rel="noopener noreferrer"
															class="project-link inline-flex min-h-11 items-center gap-1 text-sm"
														>
															<svg
																class="h-4 w-4"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
																/>
															</svg>
															{copy.linkLabels.demo}
														</a>
													{/if}
													{#if project.githubUrl}
														<a
															href={project.githubUrl}
															target="_blank"
															rel="noopener noreferrer"
															class="project-link inline-flex min-h-11 items-center gap-1 text-sm"
														>
															<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
																<path
																	d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
																/>
															</svg>
															{copy.linkLabels.code}
														</a>
													{/if}
												</div>
											</div>
											<p class="section-copy">{project.description}</p>
											{#if project.technologies.length > 0}
												<p class="meta-copy">{project.technologies.join(' / ')}</p>
											{/if}
											{#if !project.liveUrl && !project.githubUrl}
												<p class="empty-state-copy text-sm">{copy.projectLinksUnavailable}</p>
											{/if}
										</div>
									</article>
								{/each}
							</div>
						{:else}
							<div class="chromatic-panel empty-state-panel rounded-xl p-5 sm:p-6">
								<h3 class="section-title">{copy.projectsEmpty.title}</h3>
								<p class="empty-state-copy section-copy">{copy.projectsEmpty.description}</p>
								<a
									href="/contact"
									class="burst-button min-h-11 justify-center rounded-lg px-6 py-3 font-medium"
								>
									{copy.requestProjectDetails}
								</a>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		{/key}
	</div>
</section>
