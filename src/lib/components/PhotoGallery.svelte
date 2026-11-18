<script lang="ts">
	import type { Photo } from '$lib/data';
	let { photos, title, open = $bindable(false) }: { photos: Photo[]; title: string; open?: boolean } = $props();

	let dialog = $state<HTMLDialogElement>();
	let current = $state<number | null>(null);

	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		else if (!open && dialog.open) dialog.close();
	});

	function step(d: number) {
		if (current !== null) current = (current + d + photos.length) % photos.length;
	}
	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	aria-label="Galeri {title}"
	{onkeydown}
	onclose={() => {
		open = false;
		current = null;
	}}
	onclick={(e) => {
		if (e.target === dialog) dialog?.close();
	}}
	class="m-auto max-h-[92vh] w-[min(64rem,94vw)] overflow-y-auto border border-line-strong bg-bg p-0 text-fg backdrop:bg-black/75"
>
	<div class="flex items-center justify-between gap-3 border-b border-line p-4">
		<h3 class="font-display text-xl font-semibold">
			{title}{#if current !== null}<span class="font-mono text-sm text-muted"> · {current + 1}/{photos.length}</span>{/if}
		</h3>
		<button type="button" class="btn btn-ghost" onclick={() => dialog?.close()}>Tutup</button>
	</div>

	{#if current === null}
		<ul class="grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
			{#each photos as photo, i (photo.src)}
				<li>
					<button
						type="button"
						class="block aspect-[4/3] w-full overflow-hidden border border-line transition-colors hover:border-accent"
						aria-label="Buka foto: {photo.alt}"
						onclick={() => (current = i)}
					>
						<img src={photo.thumb} alt={photo.alt} width="640" height="425" loading="lazy" class="h-full w-full object-cover" />
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="p-4">
			<img src={photos[current].src} alt={photos[current].alt} width="1600" height="1063" class="max-h-[68vh] w-full object-contain" />
			<p class="mt-3 text-sm text-muted">{photos[current].alt}</p>
			<div class="mt-4 flex flex-wrap gap-3">
				<button type="button" class="btn btn-ghost" onclick={() => step(-1)}>Sebelumnya</button>
				<button type="button" class="btn btn-ghost" onclick={() => step(1)}>Berikutnya</button>
				<button type="button" class="btn btn-ghost" onclick={() => (current = null)}>Semua Foto</button>
			</div>
		</div>
	{/if}
</dialog>
