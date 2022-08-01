<script>
	import { closeModal } from 'svelte-modals'
  
	// provided by Modals
	export let isOpen
	
	export let message
  </script>
  
  {#if isOpen}
  <div role="dialog" class="modal">
	<div class="contents">
		<div class="flex justify-center items-center">
	  <h2>오일완!</h2>
	  <p> (오늘의 일기쓰기 완료)</p>
	</div>
	  <p>{message}</p>
	  
	  <div class="actions">
		<button on:click="{closeModal}">별로예요</button>
		<button on:click="{closeModal}">마음에 들어요</button>
	  </div>
	</div>
  </div>
  {/if}
  
  <style>
	.modal {
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  right: 0;
	  left: 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  z-index: 1000 !important;
  
	  /* allow click-through to backdrop */
	  pointer-events: none;
	}
  
	.contents {
	  width: 50%;
	  border-radius: 6px;
	  padding: 16px;
	  background: white;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  pointer-events: auto;
	}
  
	h2 {
	  text-align: center;
	  font-size: 24px;
	}
  
	p {
	  text-align: center;
	  margin-top: 16px;
	}
  
	.actions {
	  margin-top: 32px;
	  display: flex;
	  column-gap: 3rem;
	  justify-content: center;
	}
  </style>