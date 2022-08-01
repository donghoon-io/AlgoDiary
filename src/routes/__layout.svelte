<script>
	import { experimentID, nickname } from '$lib/store';
	import Login from '$lib/Login.svelte';
	import '../app.css';
  	import Notifications from 'svelte-notifications';
</script>






<Notifications>
	<main>
		{#if $experimentID != 0 && $nickname != "" }
		<slot />
		{:else}
		<Login />
		{/if}
	</main>
</Notifications>


<style>
	footer {
		margin: 1rem !important;
	}

	:global(rect.chart-grid-backdrop) {
		fill: rgba(250,250,250, 0) !important;
	}
</style>