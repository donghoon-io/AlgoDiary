<script>
	import { experimentID, nickname } from '$lib/store'
	import Switch from '$lib/misc/toggle.svelte';
    import RangeSlider from "svelte-range-slider-pips";
	import { onMount } from "svelte";
	
	let isSharing = true;
	var today = new Date();

	const startString = "전형적이지만,\n\n높은 완성도";
	const endString = "완성도가 낮더라도<br/>다양한 문장";

	var request_data = {
		'text': '일기 내용에 대해 공감과 응원을 해주는 글을 적어줍니다. \n \n### \n일기: 진짜 오랜만에 회사에서 집으로 가는 길에 자전거 타고 돌아온 날. 카카오 바이크를 타고 집까지 온 거는 처음이라 광교 호수의 오르막길도 전기 자전거와 함께하니 수월하다는 걸 새삼 깨달음 \n공감: 자전거를 탔다니 재밌었겠다. 그래 삶도 비슷하게, 수월할 수 있어. 내일도 힘내보자 \n### \n일기: 이번 주간이 유난히 행복한 일이 가득했었던 듯. 수요일은 지방선거투표도 있어서 공휴일. 회사 안 가는 날. 뜻밖의 행궁동 데이트도 하고 코노도 가고 자건거도 타고. \n공감: 오 오늘은 지방선거투표가 있었구나. 행복한일이 가득했다니 나까지 기분이 좋아지네. 내일도 화이팅이야! \n### \n일기: 오늘은 기분이 그렇게 좋지 않다. 사기를 당했기 때문이다. 나한테는 왜 이런일만 생기는 걸까?\n공감: 사기를 당했다니. 너무 힘들었겠어. 그래도 힘내보자! 좋은일이 생길거야.\n###\n일기: 오늘은 마트에서 장을 보고 왔다. 장을 보는데, 오랜만에 초등학교 동창을 만났다. 그때는 참 재밌고 걱정이 없었는데. 요즘은 너무 행복하지 않은 것 같다.\n공감: 나도 그 마음 알아. 너처럼 옛날에는 고민없이 즐거웠는데 지금은 그렇지 않아. 하지만 언젠가 너도 다시 즐거운 순간이 올거야. 힘내고 우리 같이 파이팅하자!\n###\n일기:',
		'maxTokens': 138,
		'temperature': 0.74,
		'topK': 0,
		'topP': 0.8,
		'repeatPenalty': 7.0,
		'start': '\n공감:',
		'restart': '\n###\n일기:',
		'stopBefore': ['###', '###\n', '질문:', '대답:'],
		'includeTokens': 1,
		'includeAiFilters': true
	};
	
	var result;

	function getPosts() {
		return fetch('https://clovastudio.apigw.ntruss.com/testapp/v1/completions/LK-D', {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': 'https://algodiary.vercel.app/',
				'Content-Type': 'application/json; charset=utf-8',
				'X-NCP-CLOVASTUDIO-API-KEY': 'NTA0MjU2MWZlZTcxNDJiY3GNcS9m1HRyKoZrs+mFP7VLWjzx7JNmASdadhmRy2QLaqt4JXSzStoefNVW1yieINTpEjC2kBT1wCxMfm3NIKhfHd8vqh7B1eo5P7mrcOZWnK9ZH+gRKTCOIbORrgJc550FwFOOmdtm4k1MAh1+9B9rCfOl5g/9V/2oq5ahGgNx',
				'X-NCP-APIGW-API-KEY': 'g5kDgJQ0gkeEBgngjxwux6d8ahz977ybwZ7a22KV',
				'X-NCP-CLOVASTUDIO-REQUEST-ID': '798e023bb4f442ed99a14e849210ae7d'
			},
			body: JSON.stringify(request_data)})
		.then(response => result = response);
	}
	
	function logout() {
		$experimentID = 0;
		$nickname = "";
	}

	onMount(async () => {
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#await getPosts()}
	<h2>Loading...</h2>
	{:then result}
	{result}
	{/await}
	<div class="flex h-screen divide-x divide-slate-200 bg-zinc-50">
		<div class="w-1/3 h-full divide-y divide-slate-200">
			<div class="h-1/5 text-center flex justify-center items-center">
				<div>
					<p class="text-sm pb-1">인공지능과 함께 나에대해 알아보기</p>
					<p class="text-3xl font-medium" style="font-family: 'Gentium Book Plus' !important">Algorithm diary</p>
					<button class="mt-3 hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow inline-flex items-center justify-center">
						<p on:click={logout} class="text-sm">로그아웃</p>
					</button>
				</div>
			</div>
			<div class="h-1/3 px-6 py-4 text-center overflow-scroll">
				<table class="table">
					<caption>표 제목</caption>
					<tr class="text-sm" style="border-bottom: 2px solid #999;"><th>일기 쓴 날짜</th><th>제목</th></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
					<tr class="text-sm"><td>8/12 (화)</td><td>선배와 산책을 함</td></tr>
				</table>    
			</div>
			<div class="p-4">
				<div class="flex">
					<div>
						<p class="text-xl pb-3">7월 6일</p>
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
				<p class="text-sm pt-2 pb-2">기존에 쓰던 메모장 앱을 버리고 에버노트로 옮기는 중이다. 집을 이사하는 것 만큼 품이 많이 들지만 행복하다. 프리미엄 서비스를 결제하고도 외려 너무 싼 거 아닌가 하는 생각이 들 정도다. 이용자들의 입에서 고맙다는 말이 나오면 이미 성공한 서비스 아닐까?</p>
				<div class="pt-8 flex items-center">	
					<img src="./robot_1.png" class="h-10 ml-2 mr-2">
					<blockquote class="mx-8">
					<p class="text-sm">오늘 시험때문에 정말 많이 힘들었겠다 ㅠㅠ 나도 그러면 진짜 힘들던데.. 그래도 다음번에는 더 잘 할 수 있을꺼야. 너의 내일을 응원해!</p>
					</blockquote>     
				</div>
			</div>
		</div>
		<div class="flex w-2/3 divide-x border-2 border-gray-200 mr-6 my-3 bg-white">
			<div class="w-1/2 divide-y divide-slate-200">
				<div class="h-1/6 text-center flex justify-center items-center">
					<div>
						<textarea class="
							form-control
							w-full
							font-normal
							text-center
							text-gray-700
							bg-clip-padding
							px-3
							py-2
							transition
							ease-in-out
							text-2xl
						"
						id="titleArea"
						rows="1"
						placeholder="제목을 입력해주세요"
						></textarea>
						<p class="text-sm">by {$nickname} - {String(today.getMonth() + 1)}월 {String(today.getDate()).padStart(2, '0')}일</p>
					</div>
				</div>
				<div class="h-3/5 p-4">
					<textarea
						class="
							form-control
							w-full
							h-full
							font-normal
							text-gray-700
							bg-clip-padding
							bg-transparent
							transition
							ease-in-out
							m-0
							text-sm
						"
						id="diaryTextArea"
						placeholder="여기에 일기를 적어주세요"
						></textarea>
				</div>
				<div class="h-1/5 px-4 pt-4 text-center flex justify-center items-center">
					<div>
						<div class="flex justify-center items-center space-x-3 pb-3">
							<p class="text-sm">이 글을 연구진과 공유합니다</p>
							<Switch bind:checked={isSharing}></Switch>
						</div>
						<div class="flex justify-center items-center ml-8">
							<button class="bg-white mt-1 hover:bg-gray-100 text-gray-800 font-medium py-2 px-3 border border-gray-400 rounded shadow inline-flex items-center justify-center">
								<p class="text-sm">저장하고 공감받기</p>
							</button>
							<button class="bg-white mt-1 bg-blue-400 hover:bg-gray-600 text-gray-800 font-medium ml-6 p-2 rounded-full drop-shadow-lg inline-flex items-center justify-center">
								<img src="./photo.png" class="h-6">
							</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="w-1/2 h-full divide-slate-200">
				<div class="p-4">
					<div class="text-center flex justify-center items-center mt-2 mb-5">	
						<img src="./robot.png" class="h-8 mr-4">
						<p class="text-md font-medium">인공지능에게 부탁하기</p>
					</div>
					<div class="text-center">
						<div class="flex justify-center mt-3">
							<img src="./surprise.png" class="w-1/6 px-2 pt-2">
						</div>
						<div class="px-5 pb-5">
							<RangeSlider values={[50]} pips first='label' last='label' formatter={ v => "" } />
						</div>
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
						id="exampleFormControlTextarea1"
						rows="1"
						placeholder="(선택사항) #키워드1, #키워드2, #키워드3, ..."
						></textarea>
						<button class="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-medium py-1 border border-gray-400 rounded shadow inline-flex items-center justify-center w-full">
							<img src="./next_line.png" class="w-6 p-1 mr-2"><p class="text-sm">다음 문장을 부탁하기</p>
						</button>
					</div>
				</div>
				<div class="h-1/2 p-4">
					<div class=" bg-gray-100 p-4 rounded-lg drop-shadow-lg">
						<div class="text-center flex justify-center items-center mt-2 mb-6">	
							<img src="./robot_1.png" class="h-8 mr-4">
							<p class="text-md font-medium">내가 한번 제안해볼게</p>
						</div>
						<div class="text-left">
							<a class="tag">시간이 없다는것은 항상 아쉬운 일이다.</a>
							<a class="tag">나에게 시간은 항상 부족하기만 한 것이였다. </a>
							<a class="tag">걷는데에는 항상 시간이 부족하다는 것을 많이 느낀다.</a>
							<a class="tag">시간이 항상 부족하지만, 그 안에서 어떻게든 방법을 찾아야 하는것이 직장인의 삶인가보다.</a>
							<a class="tag">짧게라도 걷는것은 나의 정신건강에 도움이 많이 된다.</a>
						</div>
						<div class="text-center">
							<button class="mt-4 hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow inline-flex items-center justify-center">
								<p class="text-sm">다시 제안받기</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.tag {
		border: 1px solid #999;
		border-radius: 15px;
		font-size: 0.75rem;
		font-weight: 400;
    	line-height: 1.25rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		display: inline-block;	
		margin-bottom: 0.25rem;
	}
	.tag:last-of-type {
		margin-bottom: 0 !important;
	}
	.tag-emotion {
		border: 1px solid #999;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
    	line-height: 1.25rem;
		padding-top: 0.125rem;
		padding-bottom: 0.25rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		margin-bottom: 0.25rem;
	}
	.tag-emotion:last-of-type {
		margin-bottom: 0 !important;
	}
	:global(.jsCalendar table) {
		background-color: transparent !important;
	}
	:global(.jsCalendar-current) {
		color: #333 !important;
		background-color: rgb(218, 218, 218) !important;
	}
	:global(.pip.first) {
		font-size: .7rem !important;
	}
	:global(.pip.last) {
		font-size: .7rem !important;
	}
	:global(.pip.first > .pipVal:after) {
  		content: '전형적이지만,\A높은 완성도' !important;
		white-space: pre !important;
	}
	:global(.pip.last > .pipVal:after) {
  		content: '완성도가 낮더라도,\A다양한 문장' !important;
		white-space: pre !important;
	}

    .table {
      border-collapse: collapse;
      border-top: 0 !important;
	  border-bottom: 0 !important;
	  width: 100% !important
    }  
    .table th {
		border-top: 0 !important;
      color: #333;
      text-align: center;
    }
    .table th, .table td {
      padding: 10px;
      border: 1px solid #ddd;
	  border-bottom: 0 !important
    }
    .table th:first-child, .table td:first-child {
      border-left: 0;
	  width: 25% !important
    }
    .table th:last-child, .table td:last-child {
      border-right: 0;
    }
    .table tr td:first-child{
      text-align: center;
    }
    .table caption{caption-side: bottom; display: none;}
	blockquote {
    position: relative;
    /* background: #ddd; */
}
blockquote {
    position: relative;
    /* background: #ddd; */
}

blockquote:before {
  position: absolute;
  content: open-quote;
  font-size: 2em;
  margin-left: -0.6em;
  margin-top: -0.4em;
  
}
blockquote:after {
  position: absolute;
  content: close-quote;
  font-size: 2em;
  bottom: 0;
  right: 0;
  margin-right: -0.6em;
  margin-bottom: -0.8em;
}
blockquote p {
  display: inline;
  font-style: italic;
}
  </style>