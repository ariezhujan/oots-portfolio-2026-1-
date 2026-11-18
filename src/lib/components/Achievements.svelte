<script lang="ts">
	import Section from './Section.svelte';
	import type { Achievement } from '$lib/data';
	let { items }: { items: Achievement[] } = $props();
</script>

<Section
	id="achievements"
	label="PERJALANAN DAN PENCAPAIAN"
	title="Setiap Pengalaman Adalah Bagian dari Proses."
	intro="Beberapa pencapaian dan pengalaman yang menjadi bagian dari perjalanan saya dalam belajar, berkarya, dan mengembangkan diri."
>
	<div class="space-y-5">
		{#each items as a (a.title + a.competition)}
			<article class="grid border border-line bg-panel md:grid-cols-[minmax(0,26rem)_1fr]">
				<div class="border-b border-line bg-bg md:border-r md:border-b-0">
					{#if a.certificate}
						<img src={a.certificate} alt="Piagam {a.title} {a.competition}" width="680" height="615" loading="lazy" class="h-full w-full object-cover" />
					{:else}
						<div class="blueprint flex aspect-[4/3] items-center justify-center p-4 text-center font-mono text-xs text-muted">
							Foto sertifikat menyusul
						</div>
					{/if}
				</div>
				<div class="p-5 md:p-8">
					<div class="flex items-baseline justify-between gap-3">
						<h3 class="font-display text-2xl font-semibold">{a.title}</h3>
						<span class="font-mono text-sm text-muted">{a.year}</span>
					</div>
					<p class="mt-1 text-lg font-medium">{a.competition}</p>
					<p class="font-mono text-sm text-muted">{a.category}{#if a.level} · {a.level}{/if}</p>
					<p class="mt-4 text-muted">{a.description}</p>
				</div>
			</article>
		{:else}
			<p class="border border-dashed border-line p-6 text-muted">Belum ada pencapaian yang ditambahkan.</p>
		{/each}
		<p class="border border-dashed border-line p-5 text-sm text-muted">
			Pencapaian dan pengalaman lain akan ditambahkan di sini seiring perjalanan saya.
		</p>
	</div>
</Section>
