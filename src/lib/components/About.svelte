<script lang="ts">
	import Section from './Section.svelte';
	let { name, school }: { name: string; school: string } = $props();
</script>

<Section id="about" label="MENGENAL LEBIH DEKAT" title="Rasa Ingin Tahu Adalah Awal dari Segalanya.">
	<div class="grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
		<div class="max-w-prose space-y-5 text-lg leading-relaxed">
			<p>
				Saya {name}, siswa {school} yang mengambil jurusan Teknik Jaringan Komputer dan Telekomunikasi
				(TJKT).
			</p>
			<p>
				Ketertarikan saya terhadap teknologi berawal dari rasa ingin tahu tentang bagaimana komputer, jaringan,
				dan berbagai sistem digital bekerja. Seiring waktu, ketertarikan tersebut berkembang ke bidang
				pengembangan website, pembuatan aplikasi, dan eksplorasi teknologi kreatif.
			</p>
			<p>
				Saya senang belajar melalui eksperimen dan praktik langsung. Mulai dari melakukan simulasi jaringan
				komputer, mengembangkan website interaktif, hingga membuat berbagai proyek digital.
			</p>
			<p>
				Di luar dunia teknologi, saya juga memiliki ketertarikan pada fotografi dan musik tradisional. Keduanya
				menjadi ruang bagi saya untuk mengeksplorasi kreativitas dan melihat sesuatu dari perspektif yang
				berbeda.
			</p>
			<p class="text-muted">
				Bagi saya, belajar bukan hanya tentang memahami bagaimana sesuatu bekerja, tetapi juga tentang keberanian
				untuk mencoba dan menciptakan sesuatu.
			</p>
		</div>
		<dl class="h-fit divide-y divide-line border border-line bg-panel font-mono text-sm">
			<div class="px-4 py-3"><dt class="text-muted">Sekolah</dt><dd>{school}</dd></div>
			<div class="px-4 py-3"><dt class="text-muted">Jurusan</dt><dd>TJKT</dd></div>
			<div class="px-4 py-3"><dt class="text-muted">Minat</dt><dd>Teknologi, jaringan, fotografi, musik tradisional</dd></div>
		</dl>
	</div>
</Section>
