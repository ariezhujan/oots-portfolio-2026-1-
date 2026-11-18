<script lang="ts">
	import { onMount } from 'svelte';
	import { profile } from '$lib/data';

	const links = [
		{ id: 'home', label: 'Beranda' },
		{ id: 'about', label: 'Tentang' },
		{ id: 'skills', label: 'Keahlian' },
		{ id: 'projects', label: 'Proyek' },
		{ id: 'achievements', label: 'Prestasi' },
		{ id: 'contact', label: 'Kontak' }
	];

	let active = $state('home');
	let open = $state(false);
	let dark = $state(true);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) active = e.target.id;
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		for (const l of links) {
			const el = document.getElementById(l.id);
			if (el) io.observe(el);
		}
		return () => io.disconnect();
	});

	function toggleTheme() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			/* storage blocked: theme still changes for this visit */
		}
	}
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5" aria-label="Utama">
		<a href="#home" class="min-w-0 truncate font-display text-base font-semibold tracking-tight sm:text-xl">{profile.name}</a>

		<ul class="hidden items-center gap-1 md:flex">
			{#each links as l (l.id)}
				<li>
					<a
						href="#{l.id}"
						aria-current={active === l.id ? 'true' : undefined}
						class="block border-b-2 px-3 py-2 text-sm transition-colors {active === l.id
							? 'border-accent text-fg'
							: 'border-transparent text-muted hover:text-fg'}">{l.label}</a
					>
				</li>
			{/each}
		</ul>

		<div class="flex shrink-0 items-center gap-2">
			<button
				type="button"
				onclick={toggleTheme}
				class="border border-line px-3 py-1.5 font-mono text-xs transition-colors hover:border-accent"
				aria-label="Ganti ke tema {dark ? 'terang' : 'gelap'}">{dark ? 'Terang' : 'Gelap'}</button
			>
			<button
				type="button"
				class="border border-line px-3 py-1.5 text-sm md:hidden"
				aria-expanded={open}
				aria-controls="mobile-nav"
				onclick={() => (open = !open)}>{open ? 'Tutup' : 'Menu'}</button
			>
		</div>
	</nav>

	{#if open}
		<ul id="mobile-nav" class="border-t border-line bg-bg px-5 py-2 md:hidden">
			{#each links as l (l.id)}
				<li>
					<a
						href="#{l.id}"
						onclick={() => (open = false)}
						aria-current={active === l.id ? 'true' : undefined}
						class="block border-l-2 py-3 pl-3 {active === l.id ? 'border-accent text-fg' : 'border-transparent text-muted'}"
						>{l.label}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</header>
