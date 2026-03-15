<script lang="ts">
	import { prefersReducedMotion } from '$lib/motion';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const experiences = [
		{
			title: 'System Administrator (Vacation Position)',
			company: 'Gleason Cutting Tools GmbH',
			location: 'Eisenbach, DE',
			period: 'Sep 2022 - Sep 2022',
			description:
				'Managed and maintained company IT infrastructure, ensuring optimal performance and security.',
			achievements: [
				'Implemented a network monitoring system that reduced downtime by 30%',
				'Upgraded company servers to improve data processing speed by 25%',
				'Developed and enforced IT security policies, reducing security incidents by 40%'
			],
			technologies: ['Linux', 'Windows Server', 'Cisco Networking', 'VMware', 'Bash Scripting']
		},
		{
			title: 'Internship',
			company: 'Gleason Cutting Tools GmbH',
			location: 'Eisenbach, DE',
			period: 'May 2022 - May 2022',
			description: 'Rebuilt and optimized the logging system for production machines.',
			achievements: [
				'Redesigned the logging architecture to enhance data accuracy and reliability',
				'Integrated real-time monitoring features, reducing response time to system issues by 20%',
				'Collaborated with cross-functional teams to ensure seamless implementation of the new system'
			],
			technologies: ['CMD', 'SQL', 'Linux', 'Grafana', 'Prometheus']
		},
		{
			title: 'Internship',
			company: 'Helios Ventilatoren GmbH',
			location: 'Schwenningen, DE',
			period: 'May 2021 - May 2022',
			description: 'Building a server from scratch to host internal web applications.',
			achievements: [
				'Set up and configured a Linux server to host multiple internal web applications',
				'Deployed applications using Kubernetes for scalability and reliability',
				'Implemented security measures, including firewalls and regular backups, to protect data integrity'
			],
			technologies: ['Linux', 'Docker', 'Kubernetes', 'NGINX', 'Python']
		}
	];

	const projects = [
		{
			title: 'Vital Smart Vest',
			description:
				'A smart vest that monitors vital signs such as heart rate, respiration, and temperature, providing real-time health data to users and healthcare providers.',
			technologies: ['Arduino', 'Raspberry Pi', 'Go', 'SvelteKit'],
			imageUrl: '/images/ekg.png',
			githubUrl: 'https://github.com/FTS-SIA-HFU-24-25/vital-smart-vest/',
			liveUrl: 'https://youtube.com/shorts/DEUS8_lVHP0?feature=share',
			featured: true
		},
		{
			title: 'Veritas',
			description:
				'A news reading mobile application that allows users to read from many different news sources in a clean and user-friendly interface.',
			technologies: ['Swift', 'Go', 'GraphQL', 'PostgreSQL'],
			imageUrl: '/images/veritas.jpg',
			liveUrl: 'https://veritas-eight-bice.vercel.app',
			githubUrl: 'https://github.com/thinisde/veritas',
			featured: true
		},
		{
			title: 'ML ChatBot',
			description:
				'A Discord chatbot that uses machine learning to answer questions and engage in conversations with users.',
			technologies: ['Python', 'DialogFlow', 'Discord API'],
			liveUrl: 'https://www.youtube.com/watch?v=GHLsw4Dsf0o',
			githubUrl: 'https://github.com/thinisde/talky-bot',
			imageUrl: '/images/talky.png',
			featured: true
		}
	];

	let activeTab = $state<'experience' | 'projects'>('experience');
</script>

<svelte:head>
	<title>Work - Thinh Nguyen</title>
</svelte:head>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="page-intro motion-sequence max-w-4xl">
			<p class="eyebrow-badge">Proof of work across systems, products, and experiments</p>
			<h1 class="page-title">My Work</h1>
			<p class="page-lead">A showcase of my professional experience and personal projects.</p>
		</div>

		<!-- Tab Navigation -->
		<div class="work-tabs mb-10 grid grid-cols-2 gap-3 rounded-2xl border p-2 sm:mb-12">
			<button
				type="button"
				onclick={() => (activeTab = 'experience')}
				class={`work-tab inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:text-base ${
					activeTab === 'experience' ? 'work-tab--active' : ''
				}`}
			>
				Experience
			</button>
			<button
				type="button"
				onclick={() => (activeTab = 'projects')}
				class={`work-tab inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:text-base ${
					activeTab === 'projects' ? 'work-tab--active' : ''
				}`}
			>
				Projects
			</button>
		</div>

		{#key activeTab}
			<div
				in:fly={{
					y: $prefersReducedMotion ? 0 : 18,
					duration: $prefersReducedMotion ? 0 : 280,
					easing: quintOut
				}}
				out:fade={{ duration: $prefersReducedMotion ? 0 : 180 }}
			>
				{#if activeTab === 'experience'}
					<div class="relative">
						<!-- Timeline line -->
						<div
							class="timeline-rail absolute top-0 left-0 hidden h-full w-px md:left-5 md:block"
						></div>

						<div class="motion-grid space-y-6 sm:space-y-8 md:space-y-10">
							{#each experiences as exp}
								<div class="relative md:pl-16">
									<!-- Timeline dot -->
									<div
										class="timeline-marker absolute top-1 left-3 hidden h-4 w-4 rounded-full md:block"
									></div>

									<article class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
										<div
											class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
										>
											<div>
												<h2 class="text-xl font-bold">{exp.title}</h2>
												<p class="panel-accent">{exp.company}</p>
											</div>
											<div class="meta-copy sm:text-right">
												<p>{exp.period}</p>
												<p>{exp.location}</p>
											</div>
										</div>

										<p class="section-copy mb-4">{exp.description}</p>

										<ul class="mb-4 space-y-1">
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

										<div class="flex flex-wrap gap-2">
											{#each exp.technologies as tech}
												<span class="chip text-xs">{tech}</span>
											{/each}
										</div>
									</article>
								</div>
							{/each}
						</div>

						<div class="mt-12 text-center">
							<a
								href="/Lebenslauf.pdf"
								class="outline-burst min-h-11 w-full gap-2 rounded-lg px-6 py-3 font-medium sm:w-auto"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Download Resume
							</a>
						</div>
					</div>
				{:else}
					<div>
						<h2 class="section-title mb-6 text-balance">Featured Projects</h2>
						<div class="motion-grid mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
							{#each projects.filter((p) => p.featured) as project}
								<article
									class="project-card chromatic-panel motion-lift flex flex-col overflow-hidden rounded-xl"
								>
									<div class="panel-media aspect-video">
										<div class="panel-accent flex h-full items-center justify-center">
											{#if project.imageUrl}
												<img
													src={project.imageUrl}
													alt={`Preview of ${project.title}`}
													loading="lazy"
													decoding="async"
													class="h-full w-full object-cover"
												/>
											{:else}
												<svg
													class="h-10 w-10"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											{/if}
										</div>
									</div>
									<div class="flex flex-1 flex-col p-5">
										<h3 class="panel-accent mb-2 text-lg font-semibold">{project.title}</h3>
										<p class="section-copy mb-4 flex-1 text-sm">
											{project.description}
										</p>
										<div class="mb-4 flex flex-wrap gap-1.5">
											{#each project.technologies as tech}
												<span class="chip text-xs">{tech}</span>
											{/each}
										</div>
										<div class="flex flex-wrap gap-4">
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
													Demo
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
													Code
												</a>
											{/if}
										</div>
									</div>
								</article>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{/key}
	</div>
</section>
