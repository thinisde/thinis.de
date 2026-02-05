<script lang="ts">
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
			description: 'Rebuilded and optimized the logging system for production machines.',
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
				'Deployed app using kubernetes for scalability and reliability',
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
			technologies: ['Arduino', 'Raspberry Pi', 'GoLang', 'SvelteKit'],
			imageUrl: '/images/ekg.png',
			githubUrl: 'https://github.com/FTS-SIA-HFU-24-25/vital-smart-vest/',
			liveUrl: 'https://youtube.com/shorts/DEUS8_lVHP0?feature=share',
			featured: true
		},
		{
			title: 'Veritas',
			description:
				'A news reading mobile application that allows users to read from many different news sources in a clean and user-friendly interface.',
			technologies: ['Swift', 'GoLang', 'GraphQL', 'PostgreSQL'],
			imageUrl: '/images/veritas.jpg',
			liveUrl: 'https://veritas-eight-bice.vercel.app',
			githubUrl: 'github.com/thinisde/veritas',
			featured: true
		},
		{
			title: 'ML ChatBot',
			description:
				'A discord chatbot that uses machine learning to answer questions and engage in conversations with users.',
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

<section class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<h1 class="mb-4 text-4xl font-bold">My Work</h1>
		<p class="mb-12 text-xl text-surface-600 dark:text-surface-400">
			A showcase of my professional experience and personal projects.
		</p>

		<!-- Tab Navigation -->
		<div class="mb-12 flex gap-4 border-b border-surface-200 dark:border-surface-700">
			<button
				onclick={() => (activeTab = 'experience')}
				class="relative px-4 py-3 font-medium transition-colors {activeTab === 'experience'
					? 'text-primary-600 dark:text-primary-400'
					: 'text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300'}"
			>
				Experience
				{#if activeTab === 'experience'}
					<div
						class="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600 dark:bg-primary-400"
					></div>
				{/if}
			</button>
			<button
				onclick={() => (activeTab = 'projects')}
				class="relative px-4 py-3 font-medium transition-colors {activeTab === 'projects'
					? 'text-primary-600 dark:text-primary-400'
					: 'text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300'}"
			>
				Projects
				{#if activeTab === 'projects'}
					<div
						class="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600 dark:bg-primary-400"
					></div>
				{/if}
			</button>
		</div>

		<!-- Experience Tab -->
		{#if activeTab === 'experience'}
			<div class="relative">
				<!-- Timeline line -->
				<div
					class="absolute top-0 left-0 hidden h-full w-px bg-surface-200 md:left-4 md:block dark:bg-surface-700"
				></div>

				<div class="space-y-10">
					{#each experiences as exp}
						<div class="relative md:pl-14">
							<!-- Timeline dot -->
							<div
								class="absolute top-0 left-2 hidden h-4 w-4 rounded-full border-4 border-primary-600 bg-white md:block dark:border-primary-400 dark:bg-surface-900"
							></div>

							<article
								class="rounded-xl border border-surface-200 bg-white p-6 dark:border-surface-700 dark:bg-surface-800"
							>
								<div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
									<div>
										<h2 class="text-xl font-bold">{exp.title}</h2>
										<p class="text-primary-600 dark:text-primary-400">{exp.company}</p>
									</div>
									<div class="text-sm text-surface-500">
										<p>{exp.period}</p>
										<p>{exp.location}</p>
									</div>
								</div>

								<p class="mb-4 text-surface-600 dark:text-surface-400">{exp.description}</p>

								<ul class="mb-4 space-y-1">
									{#each exp.achievements as achievement}
										<li
											class="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-400"
										>
											<svg
												class="mt-1 h-3 w-3 flex-shrink-0 text-accent-500"
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
										<span
											class="rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-700 dark:bg-surface-700 dark:text-surface-300"
										>
											{tech}
										</span>
									{/each}
								</div>
							</article>
						</div>
					{/each}
				</div>

				<div class="mt-12 text-center">
					<a
						href="Lebenslauf.pdf"
						class="inline-flex items-center gap-2 rounded-lg border border-surface-300 px-6 py-3 font-medium transition-colors hover:bg-surface-100 dark:border-surface-600 dark:hover:bg-surface-800"
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
		{/if}

		<!-- Projects Tab -->
		{#if activeTab === 'projects'}
			<div>
				<h2 class="mb-6 text-xl font-semibold">Featured Projects</h2>
				<div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each projects.filter((p) => p.featured) as project}
						<article
							class="group flex flex-col overflow-hidden rounded-xl border border-surface-200 bg-white transition-shadow hover:shadow-lg dark:border-surface-700 dark:bg-surface-800"
						>
							<div
								class="aspect-video bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-700 dark:to-surface-800"
							>
								<div class="flex h-full items-center justify-center text-surface-400">
									{#if project.imageUrl}
										<img
											src={project.imageUrl}
											alt={project.title}
											class="h-full w-full object-cover transition-transform group-hover:scale-105"
										/>
									{:else}
										<svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
								<h3 class="mb-2 text-lg font-semibold">{project.title}</h3>
								<p class="mb-4 flex-1 text-sm text-surface-600 dark:text-surface-400">
									{project.description}
								</p>
								<div class="mb-4 flex flex-wrap gap-1.5">
									{#each project.technologies as tech}
										<span
											class="rounded bg-surface-100 px-2 py-0.5 text-xs text-surface-600 dark:bg-surface-700 dark:text-surface-400"
										>
											{tech}
										</span>
									{/each}
								</div>
								<div class="flex gap-4">
									{#if project.liveUrl}
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center gap-1 text-sm text-primary-600 hover:underline dark:text-primary-400"
										>
											<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
											class="flex items-center gap-1 text-sm text-surface-600 hover:underline dark:text-surface-400"
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
</section>
