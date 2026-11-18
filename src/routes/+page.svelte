<script lang="ts">
	import type { PageProps } from './$types';
	import { profile, projects, skillGroups, achievements, socials, instagram } from '$lib/data';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Section from '$lib/components/Section.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { form }: PageProps = $props();
</script>

<Navbar />
<main>
	<Hero name={profile.name} photo={profile.photo} school={profile.school} location={profile.location} />
	<About name={profile.name} school={profile.school} />
	<Skills groups={skillGroups} />

	<Section
		id="projects"
		label="KARYA DAN EKSPERIMEN"
		title="Ide yang Berhasil Saya Wujudkan."
		intro="Kumpulan proyek, eksperimen, dan eksplorasi teknologi yang menjadi bagian dari perjalanan belajar saya."
	>
		<div class="grid gap-5 md:grid-cols-2">
			{#each projects as project (project.title)}
				<ProjectCard {project} />
			{:else}
				<p class="border border-dashed border-line p-6 text-muted md:col-span-2">Belum ada proyek yang ditambahkan.</p>
			{/each}
		</div>
	</Section>

	<Achievements items={achievements} />

	<Section
		id="contact"
		label="MARI TERHUBUNG"
		title="Punya Ide atau Ingin Berdiskusi?"
		intro="Jika kamu memiliki pertanyaan, ide proyek, atau sekadar ingin berdiskusi seputar teknologi dan kreativitas, jangan ragu untuk menghubungi saya. Saya terbuka untuk belajar, bertukar pikiran, dan mengeksplorasi berbagai kemungkinan baru."
	>
		<ContactForm {form} />
		<p class="mt-8 text-muted">
			Atau kirim pesan lewat Instagram:
			<a href={instagram.href} target="_blank" rel="noopener noreferrer" class="text-fg underline decoration-accent underline-offset-4 hover:text-accent">@{instagram.handle}</a>
		</p>
	</Section>
</main>
<Footer name={profile.name} location={profile.location} {socials} />
