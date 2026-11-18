<script lang="ts">
	import type { Project } from '$lib/data';
	import PhotoGallery from './PhotoGallery.svelte';
	let { project }: { project: Project } = $props();
	const stack = $derived(
		project.stack
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean)
	);
	let open = $state(false);
	const hasActions = $derived(Boolean(project.href || project.download || project.repo || project.gallery));
</script>

<article
	class="group flex flex-col border border-line bg-panel transition-colors hover:border-accent {project.featured
		? 'md:col-span-2 md:grid md:grid-cols-2'
		: ''}"
>
	<div class="aspect-video overflow-hidden border-b border-line bg-bg {project.featured ? 'md:aspect-auto md:min-h-80 md:border-r md:border-b-0' : ''}">
		{#if project.image}
			<img
				src={project.image}
				alt="Tampilan {project.title}"
				width="1185"
				height="667"
				loading="lazy"
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		{:else}
			<div class="blueprint flex h-full items-center justify-center p-4 text-center font-mono text-xs text-muted">
				Foto proyek menyusul
			</div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col gap-4 p-5 {project.featured ? 'md:p-8' : ''}">
		<div class="flex items-baseline justify-between gap-3">
			<h3 class="font-display font-semibold {project.featured ? 'text-3xl' : 'text-2xl'}">{project.title}</h3>
			<span class="font-mono text-sm text-muted">{project.year}</span>
		</div>
		<p class="text-muted">{project.description}</p>
		<ul class="flex flex-wrap gap-2" aria-label="Teknologi">
			{#each stack as item (item)}
				<li class="border border-line px-2 py-0.5 font-mono text-xs">{item}</li>
			{:else}
				<li class="font-mono text-xs text-muted">Teknologi menyusul</li>
			{/each}
		</ul>
		{#if hasActions}
			<div class="mt-auto flex flex-wrap gap-3 pt-2">
				{#if project.href}
					<a class="btn btn-primary" href={project.href} target="_blank" rel="noopener noreferrer">Live Demo</a>
				{/if}
				{#if project.download}
					<a class="btn btn-ghost" href={project.download} download>Unduh Game</a>
				{/if}
				{#if project.gallery}
					<button type="button" class="btn btn-primary" onclick={() => (open = true)}>Lihat Foto Lainnya</button>
				{/if}
				{#if project.repo}
					<a class="btn btn-ghost" href={project.repo} target="_blank" rel="noopener noreferrer">Source Code</a>
				{/if}
			</div>
		{/if}
	</div>
	{#if project.gallery}
		<PhotoGallery photos={project.gallery} title={project.title} bind:open />
	{/if}
</article>
