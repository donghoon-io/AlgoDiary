<script>
	import { page } from '$app/stores';
</script>

<header>
	<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-100">
	<div class="mx-auto px-2 sm:px-6 lg:px-6">
	  <div class="relative flex items-center justify-between h-16">
		<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
		</div>
		<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  
		  <!-- Profile dropdown -->
		  <div class="ml-3 relative">
			<div>
			  <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
				<span class="sr-only">Open user menu</span>
				<img class="h-8 w-8 rounded-full" src="/profile.jpg" alt="">
			  </button>
			</div>
  
			<!--
			  Dropdown menu, show/hide based on menu state.
  
			  Entering: "transition ease-out duration-100"
				From: "transform opacity-0 scale-95"
				To: "transform opacity-100 scale-100"
			  Leaving: "transition ease-in duration-75"
				From: "transform opacity-100 scale-100"
				To: "transform opacity-0 scale-95"
			-->
		  </div>
		</div>
	  </div>
	</div>
  </nav>
  
</header>

<style>
</style>
