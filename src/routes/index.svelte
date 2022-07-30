<script>
	import { getPosts } from '$lib/clova'
	import { experimentID, nickname, temperature } from '$lib/store'
	import Switch from '$lib/misc/toggle.svelte';
    import RangeSlider from "svelte-range-slider-pips";
	import { onMount } from "svelte";
	
	let isSharing = true;
	var today = new Date();

	$: range = [$temperature]
	$: temperature.set(range[0])
	
	function logout() {
		$experimentID = 0;
		$nickname = "";
	}
	function changeName() {
		let person = prompt("변경할 이름을 입력해주세요:", $nickname);
		if (person == "") {
			alert("최소 1자 이상으로 입력해주세요");
		} else if (person != null) {
			$nickname = person;
		}
	}

	onMount(async () => {
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#await getPosts("코딩 조까타")}
	<h2>Loading...</h2>
	{:then items1}
	{items1}
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
						<p class="text-sm">by {$nickname} <button on:click={changeName}><img class="w-4 h-4" style="margin-bottom: -.2rem !important" src="./pencil.png"></button> - {String(today.getMonth() + 1)}월 {String(today.getDate()).padStart(2, '0')}일</p>
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
							<RangeSlider bind:values={range} pips first='label' last='label' formatter={ v => "" } />
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
							<button class="tag">시간이 없다는것은 항상 아쉬운 일이다.</button>
							<button class="tag">시간이 없다는것은 항상 아쉬운 일이다.</button>
							<button class="tag">시간이 없다는것은 항상 아쉬운 일이다.</button>
							<button class="tag">시간이 없다는것은 항상 아쉬운 일이다.</button>
							<button class="tag">시간이 없다는것은 항상 아쉬운 일이다.</button>
						<div class="text-center">
							<button class="mt-4 hover:bg-gray-200 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow inline-flex items-center justify-center">
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
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 400;
    	line-height: 1.25rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		display: inline-block;	
		margin-bottom: 0.25rem !important;
	}
	.tag:hover {
		background-color: #ddd;
		font-weight: 700;
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