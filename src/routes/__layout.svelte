<script>
	import { experimentID, nickname } from '$lib/store';
	import Login from '$lib/Login.svelte';
	import '../app.css';
  	import Notifications from 'svelte-notifications';
	import { initializeApp } from "firebase/app";
	
	const firebaseConfig = {
		apiKey: "AIzaSyDXrBAmKOdBb5y8uhn0a98nawGpmzG1KyU",
		authDomain: "chi2023-algodiary.firebaseapp.com",
		projectId: "chi2023-algodiary",
		storageBucket: "chi2023-algodiary.appspot.com",
		messagingSenderId: "654033465705",
		appId: "1:654033465705:web:c2d956475a6472b5c78df8"
	};

	const app = initializeApp(firebaseConfig);
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