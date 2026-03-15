<svelte:head>
	<title>Thinh Nguyen - Portfolio</title>
</svelte:head>

<section class="spectral-hero px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
	<div class="page-intro page-intro--center motion-sequence mx-auto max-w-4xl">
		<p class="eyebrow-badge">Bold code for web, hardware, and visual experiments</p>
		<h1 class="page-title">
			Hi, I'm <span class="font-semibold">Thinh Nguyen</span>
		</h1>
		<p class="meta-copy text-sm tracking-[0.22em] sm:text-base">
			A Full-Stack & Embedded Developer
		</p>
		<p class="page-lead mb-8 sm:mb-10">
			I specialize in creating dynamic web applications and embedded systems that deliver seamless
			user experiences. With a passion for coding and problem-solving, I bring ideas to life through
			innovative technology solutions.
		</p>
		<div
			class="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
		>
			<a href="/work" class="burst-button min-h-11 rounded-lg px-6 py-3 font-semibold">
				View My Work
			</a>
			<a href="/contact" class="outline-burst min-h-11 rounded-lg px-6 py-3 font-semibold">
				Get in Touch
			</a>
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<h2 class="section-title mb-10 text-center sm:mb-12">What I Do</h2>
		<div class="motion-grid grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
			<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
				<div class="panel-icon mb-4">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
				<h3 class="panel-accent mb-2 text-xl font-semibold">Frontend Development</h3>
				<p class="section-copy">
					Building responsive and interactive user interfaces with modern frameworks like Svelte,
					React, and Vue.
				</p>
			</div>
			<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
				<div class="panel-icon mb-4">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
						/>
					</svg>
				</div>
				<h3 class="panel-accent mb-2 text-xl font-semibold">Backend Development</h3>
				<p class="section-copy">
					Creating robust APIs and server-side applications with Node.js, Python, and various
					databases.
				</p>
			</div>
			<div class="chromatic-panel motion-lift rounded-xl p-5 sm:p-6">
				<div class="panel-icon mb-4">
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 16v-4m8-4h4m-16 0H4m12.364-5.364l2.828-2.828m-12.728 0l2.828 2.828m12.728 12.728l-2.828 2.828m-12.728 0l2.828-2.828"
						/>
					</svg>
				</div>
				<h3 class="panel-accent mb-2 text-xl font-semibold">Embedded</h3>
				<p class="section-copy">
					Designing and programming embedded systems using C/C++ and microcontrollers for IoT
					applications.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-burst px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="page-intro page-intro--center motion-sequence mx-auto max-w-4xl">
		<h2 class="section-title">Let's Work Together</h2>
		<p class="page-lead mb-8">
			Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas
			to life.
		</p>
		<a
			href="/contact"
			class="burst-button min-h-11 w-full rounded-lg px-8 py-4 font-semibold sm:w-auto"
		>
			Start a Conversation
		</a>
	</div>
</section>
