<script>
	import Switch from '$lib/misc/toggle.svelte';
	import { onMount } from "svelte";
	
	let checked = true;

	let cal;

	onMount(async () => {
    	var myCalendar = jsCalendar.new(cal);	
	});
</script>

<svelte:head>
	<title>Home</title>
	
	<script src="./calendar/calendar.js"></script>
	<script type="text/javascript" src="./calendar/calendar.ko.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.css" integrity="sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w" crossorigin="anonymous">
</svelte:head>

<section>
	<div class="flex h-screen divide-x divide-slate-200">
		<div class="w-1/3 h-full divide-y divide-slate-200">
			<div class="h-1/6 text-center flex justify-center items-center">
				<div>
					<p class="text-sm pb-1">인공지능과 함께 나에대해 알아보기</p>
					<p class="text-3xl font-medium" style="font-family: 'Gentium Book Plus' !important">Algorithm diary</p>
				</div>
			</div>
			<div class="px-4 py-2 text-center">
				<div bind:this={cal} class="inline-block" data-language="ko"></div>
			</div>
			<div class="h-2/5 bg-slate-50 p-4">
				<div class="flex">
					<div>
						<p class="text-xl pb-3">10월 21일</p>
					</div>
					<div class="ml-auto">
						<button type="button" class="hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 py-2 text-center inline-flex items-center">
							<svg version="1.1" class="w-5 h-5" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								viewBox="0 0 242.133 242.133" style="enable-background:new 0 0 242.133 242.133;" xml:space="preserve">
							<path id="XMLID_15_" d="M227.133,83.033c8.283,0,15-6.716,15-15V15c0-8.284-6.717-15-15-15H174.1c-8.284,0-15,6.716-15,15
								s6.716,15,15,15h16.82l-69.854,69.854L51.213,30h16.82c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.717,0,0,6.716,0,15v53.033
								c0,8.284,6.717,15,15,15c8.285,0,15-6.716,15-15v-16.82l69.854,69.854L30,190.92V174.1c0-8.284-6.715-15-15-15
								c-8.283,0-15,6.716-15,15v53.033c0,8.284,6.717,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82
								l69.854-69.854l69.854,69.854H174.1c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.033c8.283,0,15-6.716,15-15V174.1
								c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15v16.82l-69.854-69.854l69.854-69.854v16.82
								C212.133,76.317,218.848,83.033,227.133,83.033z"/>
							</svg>
						  </button>
					</div>
				</div>
				<p class="text-sm pt-2">기존에 쓰던 메모장 앱을 버리고 에버노트로 옮기는 중이다. 집을 이사하는 것 만큼 품이 많이 들지만 행복하다. 프리미엄 서비스를 결재하고도 외려 너무 싼 거 아닌가 하는 생각이 들 정도다. 이용자들의 입에서 고맙다는 말이 나오면 이미 성공한 서비스 아닐까?</p>
			</div>
		</div>

		<div class="w-1/3 divide-y divide-slate-200">
			<div class="h-1/6 text-center flex justify-center items-center">
				<div>
					<p class="text-3xl pb-2">선배와 산책을 함</p>
					<p class="text-sm">by 신동훈 - 10월 21일</p>
				</div>
			</div>
			<div class="h-3/5 p-4">
				<p class="text-sm">
					내가 좋아하는 선배와 점심을 먹었다. 선배는 날이 좋다며 갑자기 나를 차에 태우더니 회사 근처 하늘공원으로 향했다. 그리고 차에 대린 눈 앞에 이렇게나 아름다운 길이 펼쳐졌다. 
					<br><br>
					바로 근처 노을공원에서 결혼사진을 찍을 정도로 이곳을 좋아하고 많이 왔었다고 생각했는데 여기에 이렇게 아름다운 곳이 있는 줄 몰랐다. 끝없이 펼쳐진 나무 길을 무작정 걷고 또 걸었다. 만약 시간이 더 있었다면 끝없이 걷고 싶은 길이었다..
					<br><br>
					시간이 항상 부족하지만, 그 안에서 어떻게든  방법을 찾아야 하는것이 직장인의 삶인가보다.
				</p>
			</div>
			<div class="h-1/5 p-4 text-center flex justify-center items-center">
				<div>
					<div class="flex justify-center items-center space-x-3 pb-4">
						<p class="text-sm">이 글을 연구진과 공유합니다</p>
						<Switch bind:checked={checked}></Switch>
					</div>
					<div class="flex justify-center items-center">
						<button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
							저장하기
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="w-1/3 h-full divide-y divide-slate-200">
			<div class="h-1/6 text-center flex justify-center items-center">
				<div>
					<p class="text-lg font-medium pb-2">인공지능과 함께하기</p>
					<img src="./robot.png" class="w-2/3 m-auto">
				</div>
			</div>
			<div class="h-4/5 p-4">
				<div>
					<p class="text-lg text-left pb-2">다음 문장을 부탁해</p>
					<div class="border border-gray-400 rounded p-3 shadow">
						<p class="text-sm">
							시간이 없다는것은 항상 아쉬운 일이다.
							<br><br>
							나에게 시간은 항상 부족하기만 한 것이였다. 
							<br><br>
							걷는데에는 항상 시간이 부족하다는 것을 많이 느낀다.
							<br><br>
							시간이 항상 부족하지만, 그 안에서 어떻게든  방법을 찾아야 하는것이 직장인의 삶인가보다.
							<br><br>
							짧게라도 걷는것은 나의 정신건강에 도움이 많이 된다.
						</p>
					</div>
				</div>
				<div class="pt-6 text-center">
					<p class="text-lg text-left pb-2">인공지능에게 부탁해</p>
					<div class="border border-gray-400 bg-gray-100 rounded p-2 shadow">
						<textarea
						class="
							form-control
							w-full
							text-base
							font-normal
							text-gray-700
							bg-clip-padding
							bg-transparent
							transition
							ease-in-out
							m-0
						"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="여기에 메시지를 적어주세요"
						></textarea>
					</div>
					<button class="bg-white w-1/2 mt-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center justify-center">
						<p class="text-sm">요청하기</p>
					</button>
				</div>
				<div class="pt-6 text-center">
					<p class="text-lg text-left pb-2">글 전체의 감정 알아보기</p>
					<button class="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center justify-center mb-2">
						<p class="text-sm">확인하기</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
