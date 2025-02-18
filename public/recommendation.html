<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>광고 페이지</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50">

  <!-- Header 영역 (외부 파일 불러오기) -->
  <div id="header"></div>

  <!-- 전체 컨테이너 -->
  <div class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-10">

    <!-- 🔥 우리가게 추천 합니다 섹션 (왼쪽 이미지 박스 제거, 광고 박스를 그룹화하여 큰 네모 안에 각 2개씩 표시) -->
    <section class="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 mb-12">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">우리가게 추천 합니다</h2>
      <!-- 새 컨테이너 (자바스크립트가 광고 박스(각 박스 안에 광고 2개씩)를 추가) -->
      <div id="hotNeighborhoodBoxes" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- JS에서 광고 박스 생성 -->
      </div>
    </section>

    <!-- 슬라이드 영역 (변경 없음) -->
    <section
      class="relative w-full max-w-screen-lg mx-auto overflow-hidden border border-gray-300 rounded-lg mt-8 px-4 mb-9">
      <!-- 슬라이드 전체 컨테이너 -->
      <div id="sliderContainer" class="flex transition-transform duration-500 h-48 items-center">
        <!-- 슬라이드 내부 아이템이 동적으로 추가됩니다 -->
      </div>

      <!-- 이전/다음 버튼 -->
      <button id="prevBtn"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-10">&lt;</button>
      <button id="nextBtn"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-10">&gt;</button>
    </section>

    <!-- ⭐ 추천 가게 섹션 (순수 이미지, 만화) -->
    <section class="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">금주의 추천 가게</h2>
      <!-- grid에 items-stretch를 추가하여 좌측/우측 셀의 높이를 동일하게 맞춤 -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        <!-- 좌측 이미지 박스: 순수하게 만화 이미지만 올림 -->
        <div class="lg:col-span-1 flex flex-col gap-6 h-full">
          <!-- 상단 만화 이미지 -->
          <div class="flex-1 overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300x400?text=만화1" alt="만화 이미지 상단" class="w-full h-full object-cover">
          </div>
          <!-- 하단 만화 이미지 -->
          <div class="flex-1 overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300x400?text=만화2" alt="만화 이미지 하단" class="w-full h-full object-cover">
          </div>
        </div>
        <!-- 오른쪽 광고 리스트 (JS로 광고 카드 추가 - 기존 코드 유지) -->
        <div id="recommendedStoreContainer" class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- JS에서 광고 카드 생성 -->
        </div>
      </div>
    </section>
  </div>

  <!-- 푸터와 추천 가게 사이 여백 추가 -->
  <div class="mt-16"></div>

  <!-- Footer 영역 (외부 파일 불러오기) -->
  <div id="footer"></div>

  <!-- ★★ 여기부터 추가된 모달 HTML ★★ -->
  <!-- 광고 모달 오버레이 -->
  <div id="adDetailOverlay" class="fixed inset-0 bg-black bg-opacity-40 z-40 hidden"></div>
  <!-- 광고 모달 박스 -->
  <div id="adDetailModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
    <div class="bg-white w-11/12 md:w-[80%] h-[90vh] max-h-screen max-w-5xl p-5 rounded-lg shadow-lg overflow-y-auto">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-2xl font-bold" id="adModalTitle">광고 상세 정보</h2>
        <button id="closeAdModalBtn" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">✕</button>
      </div>
      <!-- 이미지 섹션 -->
      <div class="w-full flex justify-center">
        <div class="flex flex-col items-center">
          <div class="overflow-y-auto border" style="width: 600px; height: 400px;">
            <img id="adMainImage" src="" alt="광고 상세 이미지" class="w-[600px] h-[200px] object-cover">
          </div>
          <!-- 썸네일 (3장 가정) -->
          <div class="mt-4 flex justify-center gap-2">
            <img id="adThumb1" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-orange-500 rounded">
            <img id="adThumb2" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-orange-500 rounded">
            <img id="adThumb3" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-orange-500 rounded">
          </div>
        </div>
      </div>
      <!-- 정보 섹션 -->
      <div class="mt-4 text-lg">
        <p><strong>위치:</strong> <a id="adModalLocation" href="https://map.kakao.com/" target="_blank" class="underline text-blue-500">위치 보기</a></p>
        <p><strong>오픈일:</strong> <span id="adModalOpenDate"></span></p>
        <p><strong>업종:</strong> <span id="adModalBiz"></span></p>
        <p><strong>전화번호:</strong> <span id="adModalPhone"></span></p>
        <p><strong>배달:</strong> <span id="adModalDelivery"></span></p>
        <p><strong>이벤트:</strong> <span id="adModalEvents"></span></p>
        <p><strong>장애인 편의 시설:</strong> <span id="adModalFacilities"></span></p>
      </div>
      <!-- 추가 정보 섹션 (토글) -->
      <div id="adDetailHiddenFields" class="hidden mt-4">
        <p class="font-bold text-lg mb-1">추가 정보:</p>
        <p id="adModalAdditionalInfo" class="text-gray-700">
          여기에 추가 정보가 있습니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit in vestibulum interdum,
          libero sapien facilisis magna, in molestie metus mauris nec turpis.
          <br><br>
          Morbi malesuada, nisi vitae faucibus cursus, nunc mauris faucibus mauris, at vehicula elit libero ac dui.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis, lectus sed facilisis porttitor,
          urna massa consectetur odio, sed tincidunt neque lacus sed urna.
          <br><br>
          Donec in consequat lorem. Nam sed laoreet sapien. Suspendisse potenti. Integer fermentum velit eu eros feugiat, et porta libero tempus.
        </p>
      </div>
      <div class="mt-4 flex justify-center gap-4">
        <button id="adDetailToggleBtn"
          class="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition">
          더보기
        </button>
        <button id="adDetailToggleBtn2"
          class="hidden bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition">
          이전
        </button>
      </div>
    </div>
  </div>
  <!-- ★★ 여기까지 모달 HTML 추가 ★★ -->

  <!-- 기존 스크립트 -->
  <script>
    // header.html 불러오기
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error('헤더 로딩 실패:', error));

    // footer.html 불러오기
    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => console.error('푸터 로딩 실패:', error));

    // "가장 핫한 우리동네" 광고 데이터 (8개)
    const hotNeighborhoodAds = [
      { title: "스타벅스", category: "카페", phone: "010-1234-5678", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "김밥천국", category: "식당", phone: "010-2345-6789", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "BBQ 치킨", category: "치킨", phone: "010-3456-7890", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "이디야 커피", category: "카페", phone: "010-4567-8901", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "공화춘", category: "중식", phone: "010-5678-9012", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "맥도날드", category: "패스트푸드", phone: "010-6789-0123", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "교촌치킨", category: "치킨", phone: "010-7890-1234", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "빽다방", category: "카페", phone: "010-8901-2345", img: "https://via.placeholder.com/300x200", link: "#" }
    ];

    // "추천 가게" 광고 데이터 (8개)
    const recommendedStoreAds = [
      { title: "미스터피자", category: "피자", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "도미노피자", category: "피자", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "버거킹", category: "패스트푸드", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "롯데리아", category: "패스트푸드", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "탐앤탐스", category: "카페", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "엔제리너스", category: "카페", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "파리바게뜨", category: "베이커리", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200", link: "#" },
      { title: "뚜레쥬르", category: "베이커리", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200", link: "#" }
    ];

    // 광고 카드 생성 함수 (기존 카드 스타일)
    function createAdCard(ad) {
      const adBox = document.createElement("div");
      adBox.className =
        "bg-white shadow-lg rounded-lg p-6 flex flex-col border-2 border-gray-300 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl";
      adBox.innerHTML = `
          <img src="${ad.img}" alt="${ad.title}" class="h-40 w-full object-cover rounded mb-4">
          <h2 class="text-2xl font-bold text-center mb-2">${ad.title}</h2>
          <h3 class="text-xl font-semibold text-center text-gray-700">${ad.category}</h3>
          <p class="text-lg text-gray-500 text-center">${ad.phone}</p>
          <a href="${ad.link}" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600 transition">바로가기</a>
      `;
      return adBox;
    }

    // 광고 박스를 생성하여 각 박스 내부에 광고 카드 2개씩 배치하는 함수
    function renderAdBoxes(containerId, ads, itemsPerBox = 2) {
      const container = document.getElementById(containerId);
      container.innerHTML = ""; // 기존 내용 제거

      for (let i = 0; i < ads.length; i += itemsPerBox) {
        // 큰 네모 박스 (광고 박스)
        const box = document.createElement("div");
        box.className = "bg-gray-50 border-2 border-gray-300 rounded-lg p-4 flex flex-col md:flex-row gap-4";

        // 그룹 내 광고 카드 2개씩 추가
        for (let j = i; j < i + itemsPerBox && j < ads.length; j++) {
          const adCard = createAdCard(ads[j]);
          adCard.classList.add("flex-1");
          box.appendChild(adCard);
        }
        container.appendChild(box);
      }
    }

    // 기존의 광고 렌더링 함수 (추천 가게 섹션 등)
    function renderAds(containerId, ads) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";
      ads.forEach((ad) => {
        container.appendChild(createAdCard(ad));
      });
    }

    // 페이지 로드 후 광고 렌더링 및 슬라이드 처리
    document.addEventListener("DOMContentLoaded", () => {
      // 1) "가장 핫한 우리동네" 섹션: 광고 박스(각 박스에 2개씩)
      renderAdBoxes("hotNeighborhoodBoxes", hotNeighborhoodAds);

      // 2) "추천 가게" 섹션: 기존 방식으로 광고 렌더링
      renderAds("recommendedStoreContainer", recommendedStoreAds);

      // 3) 슬라이드 셋업 (기존 코드 유지)
      const sliderContainer = document.getElementById("sliderContainer");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      const slideData = [
        "https://via.placeholder.com/300x200/ffcccc?text=1",
        "https://via.placeholder.com/300x200/ffdddd?text=2",
        "https://via.placeholder.com/300x200/ffeeee?text=3",
        "https://via.placeholder.com/300x200/ffeecc?text=4",
        "https://via.placeholder.com/300x200/ffccdd?text=5",
        "https://via.placeholder.com/300x200/ffddee?text=6",
        "https://via.placeholder.com/300x200/ffeedc?text=7"
      ];
      const shuffledSlides = slideData.sort(() => 0.5 - Math.random()).slice(0, 5);
      const slidesCount = shuffledSlides.length;
      const loopSlides = [
        shuffledSlides[slidesCount - 2],
        shuffledSlides[slidesCount - 1],
        ...shuffledSlides,
        shuffledSlides[0],
        shuffledSlides[1]
      ];

      sliderContainer.innerHTML = "";
      loopSlides.forEach((imgSrc, i) => {
        const slide = document.createElement("div");
        slide.className = "flex-shrink-0 w-1/3 px-2 opacity-0";
        slide.innerHTML = `
          <div class="border border-gray-400 bg-white h-44 rounded-lg flex items-center justify-center">
              <img src="${imgSrc}" alt="광고 이미지" class="object-cover h-full w-full rounded-lg">
          </div>
        `;
        sliderContainer.appendChild(slide);
      });

      const slideEls = sliderContainer.querySelectorAll("div.flex-shrink-0");
      slideEls.forEach((elem, idx) => {
        setTimeout(() => {
          elem.style.transition = "opacity 0.7s ease";
          elem.style.opacity = "1";
        }, 120 * idx);
      });

      let currentIndex = 2;
      let slideWidth = sliderContainer.offsetWidth / 3;
      sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

      function moveToIndex(index) {
        sliderContainer.style.transition = "transform 0.7s ease-in-out";
        currentIndex = index;
        sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      }

      function nextSlide() {
        moveToIndex(currentIndex + 1);
        if (currentIndex === loopSlides.length - 2) {
          setTimeout(() => {
            sliderContainer.style.transition = "none";
            currentIndex = 2;
            sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
          }, 700);
        }
      }

      function prevSlide() {
        moveToIndex(currentIndex - 1);
        if (currentIndex <= 1) {
          setTimeout(() => {
            sliderContainer.style.transition = "none";
            currentIndex = slidesCount + 1;
            sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
          }, 700);
        }
      }

      prevBtn.addEventListener("click", prevSlide);
      nextBtn.addEventListener("click", nextSlide);

      let autoSlide = setInterval(nextSlide, 7000);
      sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
      sliderContainer.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, 7000));

      window.addEventListener("resize", () => {
        sliderContainer.style.transition = "none";
        slideWidth = sliderContainer.offsetWidth / 3;
        sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      });
    });
  </script>

  <!-- ★★ 여기부터 추가된 모달 관련 스크립트 (다른 코드는 변경하지 않음) ★★ -->
  <script>
    /***********************
     * 1. Dummy fetch 인터셉터 (서버 없이 동작하도록)
     ***********************/
    (function() {
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if(url.startsWith("/api/hotNeighborhood?title=")) {
          const urlObj = new URL(url, location.origin);
          const title = urlObj.searchParams.get("title");
          const dummyData = {
            title: title + " 상세 정보",
            mainImage: "https://via.placeholder.com/600x200?text=" + encodeURIComponent(title),
            mapUrl: "https://map.kakao.com/",
            openDate: "2025-03-01",
            biz: "예시 업종",
            phone: "010-0000-0000",
            delivery: true,
            events: "예시 이벤트",
            facilities: "예시 시설",
            additionalInfo: "여기에 추가 정보가 있습니다.",
            thumbnails: [
              "https://via.placeholder.com/150x150?text=Thumb1",
              "https://via.placeholder.com/150x150?text=Thumb2",
              "https://via.placeholder.com/150x150?text=Thumb3"
            ]
          };
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                json: () => Promise.resolve(dummyData)
              });
            }, 300);
          });
        }
        return originalFetch(url, options);
      };
    })();

    /***********************
     * 2. 모달 열기/닫기 함수
     ***********************/
    function openHotModal(adData) {
      // fetch를 통해 서버(더미)에서 상세 정보를 받아옴.
      fetch("/api/hotNeighborhood?title=" + encodeURIComponent(adData.title))
        .then(response => response.json())
        .then(data => {
          document.getElementById("adModalTitle").textContent = data.title;
          document.getElementById("adMainImage").src = data.mainImage;
          document.getElementById("adModalLocation").href = data.mapUrl;
          document.getElementById("adModalOpenDate").textContent = data.openDate;
          document.getElementById("adModalBiz").textContent = data.biz;
          document.getElementById("adModalPhone").textContent = data.phone;
          document.getElementById("adModalDelivery").textContent = data.delivery ? "가능" : "불가";
          document.getElementById("adModalEvents").textContent = data.events;
          document.getElementById("adModalFacilities").textContent = data.facilities;
          document.getElementById("adModalAdditionalInfo").textContent = data.additionalInfo;
          const thumbs = [document.getElementById("adThumb1"), document.getElementById("adThumb2"), document.getElementById("adThumb3")];
          data.thumbnails.forEach((src, i) => {
            if (thumbs[i]) {
              thumbs[i].src = src;
              thumbs[i].onclick = () => {
                document.getElementById("adMainImage").src = src;
              };
            }
          });
          document.getElementById("adDetailOverlay").classList.remove("hidden");
          document.getElementById("adDetailModal").classList.remove("hidden");
        })
        .catch(error => {
          console.error("서버 요청 에러:", error);
          document.getElementById("adModalTitle").textContent = "광고 상세 정보";
          document.getElementById("adMainImage").src = "https://via.placeholder.com/600x200?text=Load+Error";
          document.getElementById("adDetailOverlay").classList.remove("hidden");
          document.getElementById("adDetailModal").classList.remove("hidden");
        });
    }

    function closeAdModal() {
      document.getElementById("adDetailOverlay").classList.add("hidden");
      document.getElementById("adDetailModal").classList.add("hidden");
    }

    // 모달 닫기 이벤트 (오버레이, 닫기 버튼)
    document.getElementById("adDetailOverlay").addEventListener("click", closeAdModal);
    document.getElementById("closeAdModalBtn").addEventListener("click", closeAdModal);

    // "더보기"/"이전" 버튼 토글
    document.getElementById("adDetailToggleBtn").addEventListener("click", () => {
      document.getElementById("adDetailHiddenFields").classList.remove("hidden");
      document.getElementById("adDetailToggleBtn").classList.add("hidden");
      document.getElementById("adDetailToggleBtn2").classList.remove("hidden");
    });
    document.getElementById("adDetailToggleBtn2").addEventListener("click", () => {
      document.getElementById("adDetailHiddenFields").classList.add("hidden");
      document.getElementById("adDetailToggleBtn").classList.remove("hidden");
      document.getElementById("adDetailToggleBtn2").classList.add("hidden");
    });

    /***********************
     * 3. "가장 핫한 우리동네" 광고 카드에 모달 이벤트 추가
     * 기존 코드 변경 없이, DOMContentLoaded 이후에 이벤트를 붙입니다.
     ***********************/
    document.addEventListener("DOMContentLoaded", () => {
      // "가장 핫한 우리동네" 섹션 내부의 광고 카드들은 renderAdBoxes()로 생성되었습니다.
      // 각 광고 카드의 내부 h2 태그의 텍스트(제목)를 이용해 모달 fetch 호출 (서버에 title 전달)
      const hotAdCards = document.querySelectorAll("#hotNeighborhoodBoxes .bg-white.shadow-lg.rounded-lg.p-6.flex.flex-col.border-2.border-gray-300");
      // 만약 위 선택자가 작동하지 않으면, 보다 넓게 모든 광고 카드를 선택합니다.
      // (아래 코드는 광고 카드의 h2 태그를 기준으로 합니다)
      const cards = document.querySelectorAll("#hotNeighborhoodBoxes h2");
      cards.forEach(h2 => {
        const card = h2.parentElement;
        card.addEventListener("click", (e) => {
          // a 태그(바로가기) 클릭 시 링크 이동 우선 처리
          if (e.target.tagName.toLowerCase() === "a") return;
          const adTitle = h2.textContent;
          // adData 객체에 제목만 넣어 fetch 시 전달 (서버에서는 title로 상세 정보 반환)
          const adData = { title: adTitle };
          openHotModal(adData);
        });
      });
    });
  </script>
  <!-- ★★ 모달 관련 스크립트 끝 ★★ -->

<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>

</html>
