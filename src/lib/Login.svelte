<script>
	import { experimentID, nickname } from '$lib/store'
	import { onMount } from "svelte";
	import { getNotificationsContext } from 'svelte-notifications';
	import { id_pw } from '$lib/credential'

	const { addNotification } = getNotificationsContext();

	var tempID;
	var pw = "";
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
		if (pw == "") {
			addNotification({
				text: '패스워드를 입력해주세요',
				type: 'danger',
				position: 'top-center',
				removeAfter: 3000,
			})
		}
		if (tempNickname != "" && !isNaN(tempID)) {
			if (id_pw.hasOwnProperty(tempID) && id_pw[tempID] == pw){
				$experimentID = tempID;
				$nickname = tempNickname;
			}
			else {
				addNotification({
					text: '사용자 정보가 정확하지 않습니다',
					type: 'danger',
					position: 'top-center',
					removeAfter: 3000,
				})
			}
		}
	}

	export let timeout = 1000;
	export let loadingHidden = false;
	export let loginHidden = true;

	onMount(() => {
		setTimeout(() => {
			loadingHidden = true;
			loginHidden = false;
		}, timeout);
	});
</script>

<svelte:head>
	<title>Login - AlgoDiary</title>
</svelte:head>


<section class:loadingHidden>
	<div class="flex items-center justify-center h-screen">
		<div class="flex items-center justify-center w-1/2 h-2/3 text-center">
			<div class="text-center">
				<p class="text-2xl pb-6 mb-6">로딩 중...</p>
				<div class="loader-1 mx-auto"><span></span></div>
			</div>
		</div>
	</div>
</section>

<section class:loginHidden>
	<div class="flex items-center justify-center h-screen">
		<div class="flex items-center justify-center w-1/2 bg-zinc-100 text-center border border-gray-100 rounded drop-shadow-lg">
			<div class="py-8 my-8">
				<p class="text-sm pb-2">인공지능과 함께 나에대해 알아보기</p>
				<p class="text-4xl font-medium" style="font-family: 'Gentium Book Plus' !important">Algorithm diary</p>

				<form class="w-full max-w-sm mt-6 px-6 pt-6">
					<div class="flex items-center border-b border-gray-400 py-2">
						<input bind:value={tempID} class="appearance-none bg-transparent border-none w-full text-md text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ID 입력" aria-label="Experiment ID">
					</div>
				</form>
				<form class="w-full max-w-sm px-6">
					<div class="flex items-center border-b border-gray-400 py-2">
						<input bind:value={pw} class="appearance-none bg-transparent border-none w-full text-md text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="패스워드 입력" aria-label="
						Password">
					</div>
				</form>
				<form class="w-full max-w-sm px-6 mt-6 pt-6 pb-6">
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
	.loadingHidden {
		display: none;
	}
	.loginHidden {
		display: none;
	}
	.loader-1 {
		height: 32px;
		width: 32px;
		-webkit-animation: loader-1-1 4.8s linear infinite;
				animation: loader-1-1 4.8s linear infinite;
	}
	@-webkit-keyframes loader-1-1 {
		0%   { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes loader-1-1 {
		0%   { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	.loader-1 span {
		display: block;
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		margin: auto;
		height: 32px;
		width: 32px;
		clip: rect(0, 32px, 32px, 16px);
		-webkit-animation: loader-1-2 1.2s linear infinite;
				animation: loader-1-2 1.2s linear infinite;
	}
	@-webkit-keyframes loader-1-2 {
		0%   { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(220deg); }
	}
	@keyframes loader-1-2 {
		0%   { transform: rotate(0deg); }
		100% { transform: rotate(220deg); }
	}
	.loader-1 span::after {
		content: "";
		position: absolute;
		top: 0; left: 0;
		bottom: 0; right: 0;
		margin: auto;
		height: 32px;
		width: 32px;
		clip: rect(0, 32px, 32px, 16px);
		border: 3px solid #000;
		border-radius: 50%;
		-webkit-animation: loader-1-3 1.2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
				animation: loader-1-3 1.2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	}
	@-webkit-keyframes loader-1-3 {
		0%   { -webkit-transform: rotate(-140deg); }
		50%  { -webkit-transform: rotate(-160deg); }
		100% { -webkit-transform: rotate(140deg); }
	}
	@keyframes loader-1-3 {
		0%   { transform: rotate(-140deg); }
		50%  { transform: rotate(-160deg); }
		100% { transform: rotate(140deg); }
	}
</style>