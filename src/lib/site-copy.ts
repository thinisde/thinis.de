export const siteCopy = {
	en: {
		layout: {
			brand: 'Thinh Nguyen',
			skipToContent: 'Skip to content',
			metaDescription:
				'Thinh Nguyen is a full-stack and embedded developer in Germany building reliable web products, backend systems, and embedded prototypes.',
			nav: {
				home: 'Home',
				about: 'About',
				work: 'Work',
				contact: 'Contact'
			},
			menu: {
				open: 'Open menu',
				close: 'Close menu'
			},
			controls: {
				heading: 'Preferences',
				theme: 'Theme',
				language: 'Language',
				auto: 'Auto',
				white: 'White',
				dark: 'Dark',
				english: 'English',
				german: 'Deutsch'
			},
			footer: {
				rights: 'All rights reserved.'
			}
		},
		home: {
			title: 'Thinh Nguyen - Portfolio',
			eyebrow: 'Full-stack systems, embedded builds, and product-minded engineering',
			heading: 'I build software and hardware that hold up in real use.',
			role: 'Based in Germany. Open to freelance work and junior full-time roles.',
			lead: 'I work across web apps, backend systems, and embedded prototypes. The focus is simple: clear interfaces, dependable architecture, and fast delivery.',
			buttons: {
				viewWork: 'See selected work',
				getInTouch: 'Email me'
			},
			snapshotHeading: 'At a glance',
			snapshot: [
				'Web products, internal tools, and backend systems',
				'Embedded prototypes with Arduino, Raspberry Pi, and Go',
				'German- and English-language collaboration'
			],
			servicesHeading: 'What I build',
			services: [
				{
					title: 'Web products',
					description:
						'Svelte, React, APIs, and databases for internal tools and customer-facing products.'
				},
				{
					title: 'Backend systems',
					description:
						'Services, data flows, and infrastructure that stay understandable as projects grow.'
				},
				{
					title: 'Embedded builds',
					description:
						'Microcontrollers, sensors, and hardware-software integrations that turn prototypes into usable systems.'
				}
			]
		},
		about: {
			title: 'About - Thinh Nguyen',
			eyebrow: 'Background, working style, and core stack',
			heading: 'About',
			lead: 'I am a full-stack and embedded developer from Villingen-Schwenningen, Germany, focused on practical systems that are clear, fast, and reliable.',
			paragraphs: [
				'I started programming early and moved from school projects into web apps, backend systems, and embedded work. Today I am most comfortable working with JavaScript, TypeScript, Go, Linux-based tooling, and product-focused frontend development.',
				'I enjoy turning rough ideas into working products, especially when a project spans software, hardware, and deployment. Outside of coding, I spend time with photography and the occasional game session with friends.'
			],
			profileImageAlt: 'Portrait of Thinh Nguyen',
			profileFallbackLabel: 'Profile photo unavailable',
			profileRole: 'Full-Stack & Embedded Developer',
			skillsHeading: 'Core stack',
			skillGroups: [
				{
					title: 'Frontend',
					items: ['JavaScript', 'TypeScript', 'Svelte', 'React', 'HTML/CSS', 'Tailwind CSS']
				},
				{
					title: 'Backend',
					items: ['Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Linux']
				},
				{
					title: 'Tools & workflow',
					items: ['Git', 'CI/CD', 'Docker', 'Testing', 'NeoVim', 'Figma']
				},
				{
					title: 'Ways of working',
					items: ['Problem solving', 'Clear communication', 'Team collaboration', 'Fast iteration']
				}
			],
			educationHeading: 'Education',
			education: [
				{
					title: 'Abitur',
					school: 'Feintechikschule in Schwenningen',
					period: '2023 - 2026',
					description:
						'Graduated with honors. Focused on software engineering and electrical engineering.'
				},
				{
					title: 'High School',
					school: 'Sofia Mathematics Gymnasium',
					period: '2018-2023',
					description:
						'Graduated with a focus on mathematics and physics. Participated in various coding competitions and tech clubs.'
				}
			]
		},
		work: {
			title: 'Work - Thinh Nguyen',
			eyebrow: 'Selected experience, projects, and shipped experiments',
			heading: 'Work',
			lead: 'A short overview of the roles and projects that best show how I build.',
			tabs: {
				experience: 'Experience',
				projects: 'Projects'
			},
			tabListLabel: 'Work sections',
			resumeHref: '/Lebenslauf_en.pdf',
			resumeButton: 'Open resume',
			requestLatestWork: 'Ask for current experience',
			projectsHeading: 'Selected projects',
			requestProjectDetails: 'Ask for project details',
			projectLinksUnavailable: 'Public links are not available for this project yet.',
			projectPreviewAltPrefix: 'Preview of',
			projectPreviewFallbackSuffix: 'preview unavailable',
			experienceEmpty: {
				title: 'Experience is being updated',
				description:
					'The timeline is temporarily empty. You can still review my resume or reach out for a current summary of roles, projects, and technical responsibilities.'
			},
			projectsEmpty: {
				title: 'Projects are being refreshed',
				description:
					'Featured case studies are temporarily unavailable. Reach out if you want a private walkthrough or the latest repository links.'
			},
			linkLabels: {
				demo: 'View live',
				code: 'Source'
			},
			experiences: [
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
			],
			projects: [
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
			]
		},
		contact: {
			title: 'Contact - Thinh Nguyen',
			eyebrow: 'Best for hiring, freelance work, and technical collaborations',
			heading: 'Contact',
			lead: 'If you have a role, project, or product idea in mind, send me a note.',
			waysToConnect: 'Where to reach me',
			cards: [
				{
					title: 'Email',
					value: 'hello@thinis.de',
					href: 'mailto:hello@thinis.de'
				},
				{
					title: 'GitHub',
					value: 'github.com/thinisde',
					href: 'https://github.com/thinisde'
				},
				{
					title: 'LinkedIn',
					value: 'linkedin.com/in/thinisde',
					href: 'https://linkedin.com/in/thinisde'
				},
				{
					title: 'Stack Overflow',
					value: 'beta.stackoverflow.com/users/12344712/thinh-nguyen',
					href: 'https://beta.stackoverflow.com/users/12344712/thinh-nguyen'
				}
			],
			availabilityEyebrow: 'Current availability',
			availabilityHeading: 'Open to work',
			availabilityLead:
				"I'm available for freelance projects, internships, and junior full-time roles. I usually reply within 24 to 48 hours."
		}
	},
	de: {
		layout: {
			brand: 'Thinh Nguyen',
			skipToContent: 'Zum Inhalt springen',
			metaDescription:
				'Thinh Nguyen ist ein Full-Stack- und Embedded-Entwickler in Deutschland und entwickelt belastbare Webprodukte, Backend-Systeme und Embedded-Prototypen.',
			nav: {
				home: 'Start',
				about: 'Über mich',
				work: 'Arbeiten',
				contact: 'Kontakt'
			},
			menu: {
				open: 'Menü öffnen',
				close: 'Menü schließen'
			},
			controls: {
				heading: 'Einstellungen',
				theme: 'Modus',
				language: 'Sprache',
				auto: 'Auto',
				white: 'Weiß',
				dark: 'Dunkel',
				english: 'Englisch',
				german: 'Deutsch'
			},
			footer: {
				rights: 'Alle Rechte vorbehalten.'
			}
		},
		home: {
			title: 'Thinh Nguyen - Portfolio',
			eyebrow: 'Full-Stack-Systeme, Embedded-Builds und produktorientiertes Engineering',
			heading: 'Ich baue Software und Hardware, die im echten Einsatz bestehen.',
			role: 'In Deutschland zuhause. Offen für Freelance-Projekte und Einstiegsrollen in Vollzeit.',
			lead: 'Ich arbeite an Webanwendungen, Backend-Systemen und Embedded-Prototypen. Mein Fokus ist einfach: klare Oberflächen, belastbare Architektur und schnelle Umsetzung.',
			buttons: {
				viewWork: 'Ausgewählte Arbeiten sehen',
				getInTouch: 'E-Mail schreiben'
			},
			snapshotHeading: 'Kurz zusammengefasst',
			snapshot: [
				'Webprodukte, interne Tools und Backend-Systeme',
				'Embedded-Prototypen mit Arduino, Raspberry Pi und Go',
				'Zusammenarbeit auf Deutsch und Englisch'
			],
			servicesHeading: 'Woran ich arbeite',
			services: [
				{
					title: 'Webprodukte',
					description:
						'Svelte, React, APIs und Datenbanken für interne Tools und kundennahe Produkte.'
				},
				{
					title: 'Backend-Systeme',
					description:
						'Dienste, Datenflüsse und Infrastruktur, die auch mit wachsendem Umfang verständlich bleiben.'
				},
				{
					title: 'Embedded-Builds',
					description:
						'Mikrocontroller, Sensorik und Hardware-Software-Integrationen, die Prototypen in nutzbare Systeme verwandeln.'
				}
			]
		},
		about: {
			title: 'Über mich - Thinh Nguyen',
			eyebrow: 'Hintergrund, Arbeitsweise und Kern-Stack',
			heading: 'Über mich',
			lead: 'Ich bin Full-Stack- und Embedded-Entwickler aus Villingen-Schwenningen und konzentriere mich auf praktische Systeme, die klar, schnell und verlässlich sind.',
			paragraphs: [
				'Ich habe früh mit dem Programmieren angefangen und mich von Schulprojekten zu Webanwendungen, Backend-Systemen und Embedded-Arbeit entwickelt. Heute arbeite ich am sichersten mit JavaScript, TypeScript, Go, Linux-basierten Tools und produktorientiertem Frontend-Engineering.',
				'Ich mag es, aus einer groben Idee ein funktionierendes Produkt zu machen, besonders wenn Software, Hardware und Deployment zusammenkommen. Außerhalb des Codens verbringe ich Zeit mit Fotografie und der einen oder anderen Spielrunde mit Freunden.'
			],
			profileImageAlt: 'Porträt von Thinh Nguyen',
			profileFallbackLabel: 'Profilfoto nicht verfügbar',
			profileRole: 'Full-Stack- und Embedded-Entwickler',
			skillsHeading: 'Kern-Stack',
			skillGroups: [
				{
					title: 'Frontend',
					items: ['JavaScript', 'TypeScript', 'Svelte', 'React', 'HTML/CSS', 'Tailwind CSS']
				},
				{
					title: 'Backend',
					items: ['Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Linux']
				},
				{
					title: 'Tools & Workflow',
					items: ['Git', 'CI/CD', 'Docker', 'Testing', 'NeoVim', 'Figma']
				},
				{
					title: 'Arbeitsweise',
					items: ['Problemlösung', 'Klare Kommunikation', 'Teamarbeit', 'Schnelle Iteration']
				}
			],
			educationHeading: 'Ausbildung',
			education: [
				{
					title: 'Abitur',
					school: 'Feintechikschule in Schwenningen',
					period: '2023 - 2026',
					description:
						'Mit Auszeichnung abgeschlossen. Schwerpunkt auf Softwaretechnik und Elektrotechnik.'
				},
				{
					title: 'High School',
					school: 'Sofia Mathematics Gymnasium',
					period: '2018-2023',
					description:
						'Abschluss mit Schwerpunkt Mathematik und Physik. Teilnahme an verschiedenen Programmierwettbewerben und Technik-AGs.'
				}
			]
		},
		work: {
			title: 'Arbeiten - Thinh Nguyen',
			eyebrow: 'Ausgewählte Erfahrung, Projekte und ausgelieferte Experimente',
			heading: 'Arbeit',
			lead: 'Ein kurzer Überblick über Rollen und Projekte, die am besten zeigen, wie ich arbeite.',
			tabs: {
				experience: 'Erfahrung',
				projects: 'Projekte'
			},
			tabListLabel: 'Arbeitsbereiche',
			resumeHref: '/Lebenslauf.pdf',
			resumeButton: 'Lebenslauf öffnen',
			requestLatestWork: 'Aktuelle Erfahrung anfragen',
			projectsHeading: 'Ausgewählte Projekte',
			requestProjectDetails: 'Projektdetails anfragen',
			projectLinksUnavailable: 'Öffentliche Links sind für dieses Projekt noch nicht verfügbar.',
			projectPreviewAltPrefix: 'Vorschau von',
			projectPreviewFallbackSuffix: 'Vorschau nicht verfügbar',
			experienceEmpty: {
				title: 'Erfahrung wird aktualisiert',
				description:
					'Die Timeline ist momentan leer. Du kannst trotzdem meinen Lebenslauf ansehen oder mich für eine aktuelle Übersicht zu Rollen, Projekten und Verantwortlichkeiten kontaktieren.'
			},
			projectsEmpty: {
				title: 'Projekte werden aktualisiert',
				description:
					'Ausgewählte Fallstudien sind momentan nicht verfügbar. Schreib mir, wenn du eine private Vorstellung oder die neuesten Repository-Links möchtest.'
			},
			linkLabels: {
				demo: 'Live ansehen',
				code: 'Quellcode'
			},
			experiences: [
				{
					title: 'Systemadministrator (Ferienjob)',
					company: 'Gleason Cutting Tools GmbH',
					location: 'Eisenbach, DE',
					period: 'Sep 2022 - Sep 2022',
					description:
						'Verwaltung und Wartung der IT-Infrastruktur des Unternehmens, um Leistung und Sicherheit sicherzustellen.',
					achievements: [
						'Ein Netzwerk-Monitoring-System eingeführt, das Ausfallzeiten um 30 % reduzierte',
						'Unternehmensserver modernisiert und die Datenverarbeitung um 25 % verbessert',
						'IT-Sicherheitsrichtlinien entwickelt und umgesetzt, wodurch Sicherheitsvorfälle um 40 % reduziert wurden'
					],
					technologies: ['Linux', 'Windows Server', 'Cisco Networking', 'VMware', 'Bash Scripting']
				},
				{
					title: 'Praktikum',
					company: 'Gleason Cutting Tools GmbH',
					location: 'Eisenbach, DE',
					period: 'May 2022 - May 2022',
					description: 'Das Logging-System für Produktionsmaschinen neu aufgebaut und optimiert.',
					achievements: [
						'Die Logging-Architektur neu gestaltet, um Genauigkeit und Zuverlässigkeit zu verbessern',
						'Echtzeit-Monitoring integriert und die Reaktionszeit auf Systemprobleme um 20 % reduziert',
						'Mit interdisziplinären Teams zusammengearbeitet, um die Einführung des neuen Systems reibungslos umzusetzen'
					],
					technologies: ['CMD', 'SQL', 'Linux', 'Grafana', 'Prometheus']
				},
				{
					title: 'Praktikum',
					company: 'Helios Ventilatoren GmbH',
					location: 'Schwenningen, DE',
					period: 'May 2021 - May 2022',
					description: 'Einen Server von Grund auf aufgebaut, um interne Webanwendungen zu hosten.',
					achievements: [
						'Linux-Server eingerichtet und konfiguriert, um mehrere interne Webanwendungen zu hosten',
						'Anwendungen mit Kubernetes für Skalierbarkeit und Zuverlässigkeit bereitgestellt',
						'Sicherheitsmaßnahmen wie Firewalls und regelmäßige Backups umgesetzt, um die Datenintegrität zu schützen'
					],
					technologies: ['Linux', 'Docker', 'Kubernetes', 'NGINX', 'Python']
				}
			],
			projects: [
				{
					title: 'Vital Smart Vest',
					description:
						'Eine smarte Weste, die Vitalwerte wie Herzfrequenz, Atmung und Temperatur überwacht und Gesundheitsdaten in Echtzeit für Nutzer und medizinisches Personal bereitstellt.',
					technologies: ['Arduino', 'Raspberry Pi', 'Go', 'SvelteKit'],
					imageUrl: '/images/ekg.png',
					githubUrl: 'https://github.com/FTS-SIA-HFU-24-25/vital-smart-vest/',
					liveUrl: 'https://youtube.com/shorts/DEUS8_lVHP0?feature=share',
					featured: true
				},
				{
					title: 'Veritas',
					description:
						'Eine mobile News-App, mit der Nutzer viele verschiedene Nachrichtenquellen in einer klaren und benutzerfreundlichen Oberfläche lesen können.',
					technologies: ['Swift', 'Go', 'GraphQL', 'PostgreSQL'],
					imageUrl: '/images/veritas.jpg',
					liveUrl: 'https://veritas-eight-bice.vercel.app',
					githubUrl: 'https://github.com/thinisde/veritas',
					featured: true
				},
				{
					title: 'ML ChatBot',
					description:
						'Ein Discord-Chatbot, der maschinelles Lernen nutzt, um Fragen zu beantworten und mit Nutzern zu interagieren.',
					technologies: ['Python', 'DialogFlow', 'Discord API'],
					liveUrl: 'https://www.youtube.com/watch?v=GHLsw4Dsf0o',
					githubUrl: 'https://github.com/thinisde/talky-bot',
					imageUrl: '/images/talky.png',
					featured: true
				}
			]
		},
		contact: {
			title: 'Kontakt - Thinh Nguyen',
			eyebrow: 'Ideal für Hiring, Freelance-Arbeit und technische Zusammenarbeit',
			heading: 'Kontakt',
			lead: 'Wenn du eine Rolle, ein Projekt oder eine Produktidee im Kopf hast, schreib mir.',
			waysToConnect: 'So erreichst du mich',
			cards: [
				{
					title: 'E-Mail',
					value: 'hello@thinis.de',
					href: 'mailto:hello@thinis.de'
				},
				{
					title: 'GitHub',
					value: 'github.com/thinisde',
					href: 'https://github.com/thinisde'
				},
				{
					title: 'LinkedIn',
					value: 'linkedin.com/in/thinisde',
					href: 'https://linkedin.com/in/thinisde'
				},
				{
					title: 'Stack Overflow',
					value: 'beta.stackoverflow.com/users/12344712/thinh-nguyen',
					href: 'https://beta.stackoverflow.com/users/12344712/thinh-nguyen'
				}
			],
			availabilityEyebrow: 'Aktuelle Verfügbarkeit',
			availabilityHeading: 'Offen für neue Arbeit',
			availabilityLead:
				'Ich bin offen für Freelance-Projekte, Praktika und Einstiegsrollen in Vollzeit. Meist antworte ich innerhalb von 24 bis 48 Stunden.'
		}
	}
} as const;

export type Locale = keyof typeof siteCopy;
