<script lang="ts">
	let { name, location, socials }: { name: string; location: string; socials: { label: string; href: string }[] } =
		$props();
	let y = $state(0);
	const year = new Date().getFullYear();
	const links = [
		{ href: '#home', label: 'Beranda' },
		{ href: '#about', label: 'Tentang Saya' },
		{ href: '#projects', label: 'Proyek' },
		{ href: '#contact', label: 'Kontak' }
	];
</script>

<svelte:window bind:scrollY={y} />

<footer class="py-12">
	<div class="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-end">
		<div>
			<p class="font-display text-2xl font-semibold uppercase">{name}</p>
			<p class="mt-2 max-w-md text-muted">Terus belajar, mengeksplorasi teknologi, dan mewujudkan ide menjadi karya.</p>
			<p class="mt-1 font-mono text-sm text-muted">{location}</p>
		</div>
		<nav aria-label="Footer">
			<ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
				{#each links as l (l.href)}
					<li><a href={l.href} class="text-muted hover:text-accent">{l.label}</a></li>
				{/each}
				{#each socials as s (s.href)}
					<li><a href={s.href} target="_blank" rel="noopener noreferrer" class="text-muted hover:text-accent">{s.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	<p class="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted">&copy; {year} {name}. Hak cipta dilindungi.</p>
</footer>

{#if y > 600}
	<a
		href="#home"
		aria-label="Kembali ke atas"
		class="fixed right-4 bottom-4 z-40 flex h-10 w-10 items-center justify-center border border-line-strong bg-panel transition-colors hover:border-accent hover:text-accent"
	>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 10l5-5 5 5" /></svg>
	</a>
{/if}
