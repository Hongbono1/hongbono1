<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>우리동네 전통시장</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-blue-50 to-blue-100">
  <!-- 헤더 (외부 파일 불러오기) -->
  <div id="header"></div>

  <!-- 메인 컨텐츠 -->
  <main class="max-w-7xl mx-auto px-4 py-12">
    <!-- 메인 소개 섹션 -->
    <section class="flex flex-col items-center md:items-start text-center md:text-left">
      <div class="md:w-full flex flex-col">
        <h2 class="text-5xl font-bold text-gray-900 leading-tight tracking-wide">
          전통을 품은 시장, <span class="text-blue-600">그 가치를 잇다</span>
        </h2>
        <p class="text-xl text-gray-700 mt-3">
          오랜 역사를 자랑하는 전통시장에서 현대의 감각을 더해, 특별한 경험을 선사합니다.
        </p>
      </div>
    </section>

    <!-- 전통시장 섹션 -->
    <section class="mt-16 bg-white shadow-2xl p-8 rounded-2xl border-2 border-gray-400">
      <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center tracking-wider">
        우리동네 <span class="text-indigo-600">전통시장</span>
      </h3>
      <!-- 전통시장 카드들이 들어갈 영역 -->
      <div id="market-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8"></div>
      <!-- 더 보기 버튼 -->
      <div class="text-center mt-8">
        <button id="loadMoreBtn" class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-all">
          더 보기
        </button>
      </div>
    </section>
  </main>

  <!-- 푸터 (외부 파일 불러오기) -->
  <div id="footer"></div>

  <!-- ☆ 기준 모달 (시장 상세정보) ☆ -->
  <!-- 모달 오버레이 -->
  <div id="marketModalOverlay" class="fixed inset-0 bg-black bg-opacity-40 z-40 hidden"></div>
  <!-- 모달 창 -->
  <div id="marketModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
    <div class="bg-white w-11/12 md:w-[80%] h-[90vh] max-h-screen max-w-5xl p-5 rounded-lg shadow-lg overflow-y-auto">
      <!-- 모달 헤더 -->
      <div class="flex justify-between items-center mb-2">
        <h2 id="marketModalTitle" class="text-2xl font-bold">시장 상세 정보</h2>
        <button id="closeMarketModalBtn" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">✕</button>
      </div>
      <!-- 메인 이미지 영역 (썸네일 없음) -->
      <div class="w-full flex justify-center">
        <div class="overflow-hidden border w-[600px] h-[400px]">
          <img id="marketModalImage" src="" alt="시장 이미지" class="w-[600px] h-[400px] object-cover">
        </div>
      </div>
      <!-- 상세 정보 영역 -->
      <div class="mt-4 text-lg space-y-2">
        <!-- 위치를 가장 위에 배치: 링크 형식 -->
        <p>
          <strong>위치:</strong>
          <a href="#" id="marketModalLocationLink" target="_blank" class="text-blue-500 hover:underline">위치 보기</a>
        </p>
        <p><strong>전화번호:</strong> <span id="marketModalPhone"></span></p>
        <p><strong>이벤트:</strong> <span id="marketModalEvent"></span></p>
        <p><strong>장애인 편의 시설:</strong> <span id="marketModalAccessibility"></span></p>
        <p><strong>주차장:</strong> <span id="marketModalParking"></span></p>
      </div>
      <!-- 추가 정보 토글 영역 (초기에는 숨김) -->
      <div id="marketModalAdditionalInfo" class="hidden mt-4 text-lg">
        <p class="font-bold">추가 정보:</p>
        <p id="marketModalAdditionalText">여기에 추가 내용을 입력하세요.</p>
      </div>
      <!-- 토글 버튼 영역 -->
      <div class="mt-4 flex justify-center gap-4">
        <button id="marketModalToggleBtn" class="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition">
          더보기
        </button>
        <button id="marketModalToggleBtn2" class="hidden bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition">
          이전
        </button>
      </div>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
    // 헤더 & 푸터 로드 (SSR)
    fetch('components/header.html')
      .then(response => response.text())
      .then(data => { document.getElementById('header').innerHTML = data; })
      .catch(error => console.error('헤더 로딩 실패:', error));

    fetch('components/footer.html')
      .then(response => response.text())
      .then(data => { document.getElementById('footer').innerHTML = data; })
      .catch(error => console.error('푸터 로딩 실패:', error));

    // 전통시장 데이터 (SSR로 초기 렌더링)
    // 실제로는 API 호출을 통해 데이터를 받아올 수 있습니다.
    const traditionalMarkets = [
      { 
        name: "영락시장", 
        address: "서울시 중구 을지로 3가", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=1",
        event: "신규 할인",
        accessibility: "휠체어 접근 가능",
        parking: "무료 주차"
      },
      { 
        name: "도깨비 시장", 
        address: "목포시 용당동 179", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=2",
        event: "이벤트 중",
        accessibility: "없음",
        parking: "유료 주차"
      },
      { 
        name: "동부시장", 
        address: "목포시 용당동", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=3",
        event: "시즌 할인",
        accessibility: "휠체어 리프트 있음",
        parking: "무료 주차"
      },
      { 
        name: "남문시장", 
        address: "대구시 중구 남산동", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=4",
        event: "특가 행사",
        accessibility: "없음",
        parking: "유료 주차"
      },
      { 
        name: "통영중앙시장", 
        address: "경남 통영시 항남동", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=5",
        event: "무료 시식",
        accessibility: "휠체어 접근 가능",
        parking: "무료 주차"
      },
      { 
        name: "부평시장", 
        address: "인천광역시 부평구", 
        phone: "010-3333-4444", 
        img: "https://source.unsplash.com/random/400x300?sig=6",
        event: "특별 할인",
        accessibility: "없음",
        parking: "유료 주차"
      }
    ];

    // 초기 렌더링 개수
    let currentIndex = 4;

    // SSR + CSR: 전통시장 카드 렌더링 함수
    function renderTraditionalMarkets(limit) {
      const container = document.getElementById("market-container");
      container.innerHTML = "";
      traditionalMarkets.slice(0, limit).forEach(market => {
        const card = document.createElement("div");
        card.className = "bg-gradient-to-br from-white to-gray-100 border-2 border-gray-400 shadow-xl rounded-xl overflow-hidden p-6 transform transition-all hover:scale-105 hover:shadow-2xl";
        card.innerHTML = `
          <img class="h-48 w-full object-cover rounded-lg" src="${market.img}" alt="${market.name}">
          <div class="mt-4 text-center">
            <h4 class="text-2xl font-bold text-gray-900">${market.name}</h4>
            <p class="text-gray-700 mt-2">${market.address}</p>
            <p class="text-gray-500 mt-1 font-semibold">☎ ${market.phone}</p>
            <a href="#" class="mt-4 inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-5 rounded-lg shadow-md hover:scale-105 transition">
              자세히 보기
            </a>
          </div>
        `;
        // "자세히 보기" 링크 클릭 시 모달에 데이터 전달 (CSR)
        card.querySelector('a').addEventListener("click", function(e) {
          e.preventDefault();
          openMarketModal(market);
        });
        container.appendChild(card);
      });

      // 모든 데이터가 렌더링되면 "더 보기" 버튼 숨기기
      if (limit >= traditionalMarkets.length) {
        document.getElementById("loadMoreBtn").style.display = "none";
      }
    }

    // 초기 렌더링 (SSR + CSR)
    document.addEventListener("DOMContentLoaded", () => {
      renderTraditionalMarkets(currentIndex);
    });

    // "더 보기" 버튼 이벤트 (CSR)
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      currentIndex += 1;
      renderTraditionalMarkets(currentIndex);
    });

    // ☆ 모달 관련 함수 및 이벤트 (시장 상세정보) ☆

    // 모달 열기: 데이터를 받아 모달 내부에 채워 넣음 (썸네일 제거, 위치 정보 상단 배치)
    function openMarketModal(market) {
      document.getElementById("marketModalTitle").textContent = market.name;
      document.getElementById("marketModalImage").src = market.img;
      // 위치: 주소 대신 "위치 보기" 링크를 표시하며, 클릭 시 지도 링크로 이동
      if (market.address) {
        const encodedAddress = encodeURIComponent(market.address);
        document.getElementById("marketModalLocationLink").textContent = "위치 보기";
        document.getElementById("marketModalLocationLink").href = `https://map.kakao.com/link/map/${encodedAddress}`;
      } else {
        document.getElementById("marketModalLocationLink").textContent = "정보 없음";
        document.getElementById("marketModalLocationLink").href = "#";
      }
      // 전화번호: 기본값은 이미 데이터에 포함되어 있음 (없을 경우 "010-3333-4444" 사용)
      document.getElementById("marketModalPhone").textContent = market.phone || "010-3333-4444";
      // 이벤트, 장애인 편의 시설, 주차장
      document.getElementById("marketModalEvent").textContent = market.event || "정보 없음";
      document.getElementById("marketModalAccessibility").textContent = market.accessibility || "정보 없음";
      document.getElementById("marketModalParking").textContent = market.parking || "정보 없음";

      // 추가 정보 영역 및 토글 버튼 초기화
      document.getElementById("marketModalAdditionalInfo").classList.add("hidden");
      document.getElementById("marketModalToggleBtn").classList.remove("hidden");
      document.getElementById("marketModalToggleBtn2").classList.add("hidden");

      // 모달 보이기
      document.getElementById("marketModalOverlay").classList.remove("hidden");
      document.getElementById("marketModal").classList.remove("hidden");
    }

    // 모달 닫기 함수
    function closeMarketModal() {
      document.getElementById("marketModalOverlay").classList.add("hidden");
      document.getElementById("marketModal").classList.add("hidden");
    }

    // 모달 닫기 이벤트 (오버레이 및 X 버튼)
    document.getElementById("marketModalOverlay").addEventListener("click", closeMarketModal);
    document.getElementById("closeMarketModalBtn").addEventListener("click", closeMarketModal);

    // "더보기" / "이전" 토글 버튼 이벤트
    document.getElementById("marketModalToggleBtn").addEventListener("click", () => {
      document.getElementById("marketModalAdditionalInfo").classList.remove("hidden");
      document.getElementById("marketModalToggleBtn").classList.add("hidden");
      document.getElementById("marketModalToggleBtn2").classList.remove("hidden");
    });
    document.getElementById("marketModalToggleBtn2").addEventListener("click", () => {
      document.getElementById("marketModalAdditionalInfo").classList.add("hidden");
      document.getElementById("marketModalToggleBtn2").classList.add("hidden");
      document.getElementById("marketModalToggleBtn").classList.remove("hidden");
    });
  </script>
</body>
</html>
