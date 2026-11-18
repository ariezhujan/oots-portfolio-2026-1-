<script lang="ts">
	let { name, photo, school, location }: { name: string; photo: string; school: string; location: string } =
		$props();

	// Reactive input (materi Hari 1): sapaan berubah langsung saat mengetik.
	let visitor = $state('');
	const greeting = $derived(visitor.trim() ? `Halo ${visitor.trim()}, saya Aldo.` : 'Halo, saya Aldo.');

	const facts = $derived<[string, string][]>([
		['Nama', name],
		['Jurusan', 'TJKT'],
		['Sekolah', school],
		['Lokasi', location]
	]);
</script>

<section id="home" class="blueprint border-b border-line">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 pt-28 pb-16 md:pt-32 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pt-36 lg:pb-24">
		<div>
			<p class="rise font-mono text-xs text-muted">PELAJAR · TECH ENTHUSIAST · CREATIVE EXPLORER</p>
			<h1 class="rise mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight break-words sm:text-5xl xl:text-6xl" style="animation-delay: 0.05s">
				Membangun Ide,<br />Melalui Teknologi dan Kreativitas.
			</h1>
			<div class="rise mt-6 max-w-xl space-y-4 text-lg text-muted" style="animation-delay: 0.12s">
				<p>
					Halo, saya {name}. Seorang siswa Teknik Jaringan Komputer dan Telekomunikasi yang memiliki
					ketertarikan pada pengembangan web, jaringan komputer, dan teknologi digital.
				</p>
				<p>Saya senang mengeksplorasi hal baru, bereksperimen, serta mengubah ide menjadi karya dan proyek nyata.</p>
			</div>
			<div class="rise mt-8 flex flex-wrap gap-3" style="animation-delay: 0.2s">
				<a href="#projects" class="btn btn-primary">Jelajahi Proyek</a>
				<a href="#contact" class="btn btn-ghost">Hubungi Saya</a>
			</div>
		</div>

		<aside class="rise border border-line bg-panel" style="animation-delay: 0.3s">
			<div class="aspect-[4/3] border-b border-line bg-bg">
				{#if photo}
					<img src={photo} alt="Foto {name}" width="640" height="480" fetchpriority="high" class="h-full w-full object-cover" />
				{:else}
					<div class="blueprint flex h-full items-center justify-center p-4 text-center font-mono text-xs text-muted">
						Foto profil menyusul
					</div>
				{/if}
			</div>
			<dl class="divide-y divide-line font-mono text-sm">
				{#each facts as [k, v] (k)}
					<div class="grid grid-cols-[5rem_1fr] gap-3 px-4 py-2.5">
						<dt class="text-muted">{k}</dt>
						<dd>{v}</dd>
					</div>
				{/each}
			</dl>
			<div class="border-t border-line p-4">
				<label for="visitor-name" class="font-mono text-sm text-muted">Coba ketik namamu</label>
				<input
					id="visitor-name"
					type="text"
					bind:value={visitor}
					placeholder="Namamu..."
					class="mt-2 w-full border border-line-strong bg-bg px-3 py-2 outline-none focus-visible:border-accent"
				/>
				<p class="mt-3 font-display text-xl break-words" aria-live="polite">{greeting}</p>
			</div>
		</aside>
	</div>
</section>
