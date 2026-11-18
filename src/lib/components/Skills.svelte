<script lang="ts">
	import Section from './Section.svelte';
	import type { SkillGroup } from '$lib/data';
	let { groups }: { groups: SkillGroup[] } = $props();
</script>

<Section
	id="skills"
	label="APA YANG SAYA PELAJARI"
	title="Keahlian & Eksplorasi."
	intro="Berbagai bidang, teknologi, dan perangkat yang terus saya pelajari dan kembangkan."
>
	<dl class="divide-y divide-line border-y border-line">
		{#each groups as group (group.name)}
			<div class="grid gap-3 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
				<dt class="font-display text-xl font-semibold">{group.name}</dt>
				<dd>
					<ul class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
						{#each group.items as item (item)}
							<li class="flex items-center gap-2">
								<span class="h-1.5 w-1.5 bg-accent" aria-hidden="true"></span>{item}
							</li>
						{/each}
					</ul>
				</dd>
			</div>
		{/each}
	</dl>
</Section>
