<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>



<main>
	<slot />
</main>


<style>
	footer {
		margin: 1rem !important;
	}

	:global(rect.chart-grid-backdrop) {
		fill: rgba(250,250,250, 0) !important;
	}
</style>