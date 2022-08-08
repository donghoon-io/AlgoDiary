<script>
	import { closeModal } from 'svelte-modals'
	import { experimentID, nickname, temperature } from '$lib/store'
	import { doc, updateDoc, collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
	import { getNotificationsContext } from 'svelte-notifications';
  
	// provided by Modals
	export let isOpen
	export let diaryTitle
	export let diaryContent
	
	const { addNotification } = getNotificationsContext();
	
	let db = getFirestore();


	let selected = [];
	var firstText = "";
	var secondText = "";

	let reasons = [
		"일기 다시 읽어보기",
		"키워드로 부탁하기",
		"다음문장 부탁하기",
		"오늘의 일기쓰기 완료",
		"전반적인 과정",
		"기타"
	];

	function complete() {

		addDoc(collection(db, "data", String($experimentID), "capture_event"), {"timestamp": Timestamp.fromDate(new Date()), "existing_title": diaryTitle, "existing_content": diaryContent, "reasons": selected, "first_text": firstText, "second_text": secondText}).then(doc => {
			closeModal();

			addNotification({
				text: '저장되었습니다',
    			type: 'success',
				position: 'top-center',
				removeAfter: 3000,
			})
		});
	}
  </script>
  
  {#if isOpen}
  <div role="dialog" class="modal">
	<div class="contents">
		<div class="flex justify-center items-center">
			<h2>캡쳐 버튼을 누르셨네요!</h2>
		</div>
	<div>
		<p class="mt-2 mb-3 text-sm">캡쳐한 이유는 무엇인가요?</p>
		<div class="flex mb-6 pb-2">
			{#each reasons as reason}
				<label class="text-xs flex-auto">
					<input type=checkbox bind:group={selected} name="reasons" value={reason}>
					{reason}
				</label>
			{/each}
		</div>
		<p class="mb-3 text-sm">인공지능이 어떤 점에서 인상깊었는지 적어주세요.</p>
		<textarea class="
			form-control
			w-full
			font-normal
			text-gray-700
			bg-clip-padding
			bg-gray-100
			p-3
			transition
			ease-in-out
			m-0
			mb-4
			text-xs
		"
		id="exampleFormControlTextarea1"
		rows="2"
		placeholder="입력해주세요"
		bind:value={firstText}
		></textarea>
		<p class="mt-2 mb-3 text-sm">혹시 인공지능이 원하는대로 동작하지 않았거나 바라는 점이 있나요? 인공지능이 어떻게 동작했으면 좋겠나요?</p>
		<textarea class="
			form-control
			w-full
			font-normal
			text-gray-700
			bg-clip-padding
			bg-gray-100
			p-3
			transition
			ease-in-out
			m-0
			text-xs
		"
		id="exampleFormControlTextarea2"
		rows="2"
		placeholder="입력해주세요"
		bind:value={secondText}
		></textarea>
		<div class="actions">
			<button class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-3 border border-gray-400 rounded shadow inline-flex items-center justify-center">
				<p class="text-sm" on:click={complete}>저장하기</p>
			</button>
		</div>
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
	  padding: 2rem;
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
  
	.actions {
	  margin-top: 32px;
	  display: flex;
	  column-gap: 3rem;
	  justify-content: center;
	}
  </style>