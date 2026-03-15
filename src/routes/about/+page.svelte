<script lang="ts">
	const birthYear = 2006;
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;
</script>

<svelte:head>
	<title>About - Thinh Nguyen</title>
</svelte:head>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<div class="page-intro motion-sequence max-w-4xl">
			<p class="eyebrow-badge">Builder profile, working style, and technical range</p>
			<h1 class="page-title">About Me</h1>
			<p class="page-lead">
				I'm a <span class="font-semibold">{age}-year-old</span>
				passionate full-stack developer
				<span class="font-semibold">based in Villingen-Schwenningen, Germany</span>, with over 5
				years of experience building web applications that make a difference.
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.9fr)] lg:items-start">
			<div class="space-y-4">
				<p class="section-copy">
					My journey began when I was in fifth grade and learned C++ in high school. Since then,
					I've honed my skills in various programming languages and frameworks, including
					JavaScript, TypeScript, and Go.
				</p>

				<p class="section-copy">
					I specialize in creating scalable backend systems, intuitive frontend interfaces, and
					streamlined deployment processes. I enjoy collaborating with cross-functional teams to
					deliver high-quality software solutions. In my free time, I love exploring new
					technologies such as Arduino and embedded systems.
				</p>

				<p class="section-copy">
					When I'm not coding, you can find me taking my camera out to explore nature or playing
					video games with friends.
				</p>
			</div>

			<div class="mx-auto w-full max-w-sm lg:mx-0">
				<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
					<div class="panel-media mb-4 aspect-square">
						<img
							src="/images/profile.jpeg"
							alt="Portrait of Thinh Nguyen"
							loading="lazy"
							decoding="async"
							class="h-full w-full object-cover object-bottom"
						/>
					</div>
					<h3 class="panel-accent mb-1 font-semibold">Thinh Nguyen</h3>
					<p class="meta-copy">Full-Stack Developer</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="section-title mb-10 sm:mb-12">Skills & Technologies</h2>

		<div class="motion-grid grid gap-6 sm:gap-8 md:grid-cols-2">
			<div>
				<h3 class="panel-accent mb-4 text-xl font-semibold">Frontend</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['JavaScript', 'TypeScript', 'Svelte', 'React', 'Angular', 'HTML/CSS', 'Tailwind CSS', 'Next.js'] as skill}
						<span class="chip">{skill}</span>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="panel-accent mb-4 text-xl font-semibold">Backend</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Docker', 'Linux'] as skill}
						<span class="chip">{skill}</span>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="panel-accent mb-4 text-xl font-semibold">Tools & Practices</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Git', 'CI/CD', 'Testing', 'NeoVim', 'Figma', 'VS Code'] as skill}
						<span class="chip">{skill}</span>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="panel-accent mb-4 text-xl font-semibold">Soft Skills</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Team Leadership'] as skill}
						<span class="chip">{skill}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<h2 class="section-title mb-10 sm:mb-12">Education</h2>

		<div class="space-y-8">
			<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
				<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<div>
						<h3 class="panel-accent text-xl font-semibold">Abitur</h3>
						<p class="meta-copy">Feintechikschule in Schwenningen</p>
					</div>
					<span class="meta-copy">2023 - 2026</span>
				</div>
				<p class="section-copy mt-4">
					Graduated with honors. Focused on software engineering and electrical engineering.
				</p>
			</div>
		</div>

		<div class="mt-8 space-y-8">
			<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
				<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<div>
						<h3 class="panel-accent text-xl font-semibold">High School</h3>
						<p class="meta-copy">Sofia Mathematics Gymnasium</p>
					</div>
					<span class="meta-copy">2018-2023</span>
				</div>
				<p class="section-copy mt-4">
					Graduated with a focus on mathematics and physics. Participated in various coding
					competitions and tech clubs.
				</p>
			</div>
		</div>
	</div>
</section>
