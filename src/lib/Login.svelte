<script>
	import { experimentID, nickname } from '$lib/store'
	import { onMount } from "svelte";
	import { getNotificationsContext } from 'svelte-notifications';

	const { addNotification } = getNotificationsContext();

	var tempID;
	var tempNickname = "";

	function login() {
		if (tempNickname == "") {
			addNotification({
				text: '최소 1글자 이상의 닉네임을 입력해주세요',
				type: 'danger',
				position: 'top-center',
				removeAfter: 3000,
			})
		}
		if (isNaN(tempID)) {
			addNotification({
				text: '정확한 참가자 ID를 입력해주세요',
				type: 'danger',
				position: 'top-center',
				removeAfter: 3000,
			})
		}
		if (tempNickname != "" && !isNaN(tempID)) {
			$experimentID = tempID;
			$nickname = tempNickname;
		}
	}
</script>

<svelte:head>
	<title>Login - AlgoDiary</title>
</svelte:head>

<section>
	<div class="flex items-center justify-center h-screen">
		<div class="flex items-center justify-center w-1/2 h-2/3 bg-zinc-100 text-center border border-gray-100 rounded shadow">
			<div>
				<p class="text-sm pb-1">인공지능과 함께 나에대해 알아보기</p>
				<p class="text-4xl font-medium" style="font-family: 'Gentium Book Plus' !important">Algorithm diary</p>

				<form class="w-full max-w-sm mt-6 px-6 pt-6">
					<div class="flex items-center border-b border-gray-400 py-2">
						<input bind:value={tempID} class="appearance-none bg-transparent border-none w-full text-md text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="참가자 ID 입력" aria-label="Experiment ID">
					</div>
				</form>
				<form class="w-full max-w-sm px-6 pt-4 pb-6">
					<div class="flex items-center border-b border-gray-400 py-2">
						<input bind:value={tempNickname} class="appearance-none bg-transparent border-none w-full text-md text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="다이어리에 사용할 닉네임 입력" aria-label="Nickname">
					</div>
				</form>
				<button on:click={login} class="flex-shrink-0 bg-gray-400 hover:bg-gray-500 text-sm text-white py-2 px-4 rounded" type="button">
				등록
				</button>
				<p class="text-xs pt-10">본 인터페이스는 데스크탑에 최적화되어 있습니다.<br><br><br>연구담당자: 김태완 (산업디자인학과 박사과정)<br>휴대전화: 010-9085-2356 / 이메일: taewan@kaist.ac.kr</p>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.notification-content) {
		font-size: .75rem !important
	}
</style>