<script lang="ts">
	import './layout.css';
	import '@fontsource-variable/geologica';
	import '@fontsource/ibm-plex-mono/400.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Aldo Ananda Fahujan | Portofolio Siswa TJKT</title>
	<meta
		name="description"
		content="Portofolio Aldo Ananda Fahujan, siswa TJKT SMK Negeri 8 Semarang yang mengeksplorasi jaringan komputer, pengembangan web, dan proyek digital kreatif."
	/>
	<meta property="og:title" content="Aldo Ananda Fahujan | Portofolio" />
	<meta property="og:description" content="Membangun ide melalui teknologi dan kreativitas." />
	<meta property="og:type" content="website" />
</svelte:head>

{@render children()}
