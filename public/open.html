<!DOCTYPE html>
<html lang="ko" xmlns:th="http://www.thymeleaf.org">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>오픈예정 - 특정 레이아웃 배치 (10개 카드)</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen w-full">
  <!-- 헤더 -->
  <div id="header-container"></div>

  <!-- 카드 컨테이너 (가운데 정렬) -->
  <div id="cardContainer" class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl w-full mt-10 px-5 mx-auto">
    <!-- 10개 카드가 렌더링될 영역 -->
  </div>

  <!-- 페이지네이션 -->
  <div id="pagination" class="flex gap-2 flex-wrap justify-center my-8"></div>

  <!-- 모달 오버레이 -->
  <div id="detailOverlay" class="fixed inset-0 bg-black bg-opacity-40 z-40 hidden"></div>

  <!-- 모달 창 -->
  <div id="detailModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
    <div class="bg-white w-[80%] h-[90vh] max-w-5xl p-5 rounded-lg shadow-lg overflow-y-auto">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-2xl font-bold" id="modalTitle">상세 정보</h2>
        <button id="closeModalBtn" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">✕</button>
      </div>

      <!-- 이미지 섹션 -->
      <div class="w-full flex justify-center">
        <div class="flex flex-col items-center">
          <div class="overflow-y-auto border" style="width: 600px; height: 400px;">
            <img id="mainImage" src="" alt="상세 이미지" class="w-[600px] h-[200px] object-cover">
          </div>
          <!-- 썸네일 (테스트용) -->
          <div class="mt-4 flex justify-center gap-2">
            <img id="thumb1" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-cyan-500 rounded">
            <img id="thumb2" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-cyan-500 rounded">
            <img id="thumb3" class="w-20 h-20 cursor-pointer border border-gray-200 hover:border-cyan-500 rounded">
          </div>
        </div>
      </div>

      <!-- 정보 섹션 -->
      <div class="mt-4 text-lg">
        <p><strong>위치:</strong> <a id="modalLocation" href="#" target="_blank" class="underline text-blue-500">위치 보기</a>
        </p>
        <p><strong>오픈일:</strong> <span id="modalOpenDate"></span></p>
        <p><strong>업종:</strong> <span id="modalBiz"></span></p>
        <p><strong>전화번호:</strong> <span id="modalPhone"></span></p>
        <p><strong>배달:</strong> <span id="modalDelivery"></span></p>
        <p><strong>이벤트:</strong> <span id="modalEvents"></span></p>
        <p><strong>장애인 편의 시설:</strong> <span id="modalFacilities"></span></p>
      </div>

      <!-- 추가 정보 -->
      <div id="detailHiddenFields" class="hidden mt-4">
        <p class="font-bold text-lg mb-1">추가 정보:</p>
        <p id="modalAdditionalInfo" class="text-gray-700"></p>
      </div>

      <!-- 더보기/이전 버튼 -->
      <div class="mt-4 flex justify-center gap-4">
        <button id="detailToggleBtn"
          class="bg-cyan-500 text-white rounded py-2 px-6 text-base transition duration-300 hover:bg-cyan-600">
          더보기
        </button>
        <button id="detailToggleBtn2"
          class="bg-cyan-500 text-white rounded py-2 px-6 text-base transition duration-300 hover:bg-cyan-600 hidden">
          이전
        </button>
      </div>
    </div>
  </div>

  <!-- 푸터 -->
  <div id="footer-container"></div>

  <!-- 초기 데이터: 10개 -->
  <script>
    window.initialData = [
      {
        name: "상호명1",
        locationLink: "https://map.kakao.com/link/map/주소1",
        openDate: "2025-01-05",
        biz: "식당",
        phone: "010-1111-2222",
        images: [
          "https://via.placeholder.com/600x400?text=Card+1+Image+1"
        ],
        delivery: "배달 가능",
        events: "신메뉴 출시",
        facilities: "휠체어 접근 가능",
        additionalInfo: "상세 설명 1."
      },
      {
        name: "상호명2",
        locationLink: "https://map.kakao.com/link/map/주소2",
        openDate: "2025-02-10",
        biz: "카페",
        phone: "010-2222-3333",
        images: [
          "https://via.placeholder.com/600x400?text=Card+2+Image+1"
        ],
        delivery: "불가능",
        events: "커피 시음 행사",
        facilities: "장애인 화장실",
        additionalInfo: "상세 설명 2."
      },
      {
        name: "상호명3",
        locationLink: "https://map.kakao.com/link/map/주소3",
        openDate: "2025-03-15",
        biz: "편의점",
        phone: "010-3333-4444",
        images: [
          "https://via.placeholder.com/600x400?text=Card+3+Image+1"
        ],
        delivery: "불가능",
        events: "할인 행사",
        facilities: "휠체어 접근 가능",
        additionalInfo: "상세 설명 3."
      },
      {
        name: "상호명4",
        locationLink: "https://map.kakao.com/link/map/주소4",
        openDate: "2025-04-01",
        biz: "헬스장",
        phone: "010-4444-5555",
        images: [
          "https://via.placeholder.com/600x400?text=Card+4+Image+1"
        ],
        delivery: "불가능",
        events: "회원 할인 이벤트",
        facilities: "장애인 운동 기구 제공",
        additionalInfo: "상세 설명 4."
      },
      {
        name: "상호명5",
        locationLink: "https://map.kakao.com/link/map/주소5",
        openDate: "2025-05-05",
        biz: "PC방",
        phone: "010-5555-6666",
        images: [
          "https://via.placeholder.com/600x400?text=Card+5+Image+1"
        ],
        delivery: "불가능",
        events: "게임 토너먼트",
        facilities: "휠체어 접근 가능",
        additionalInfo: "상세 설명 5."
      },
      {
        name: "상호명6",
        locationLink: "https://map.kakao.com/link/map/주소6",
        openDate: "2025-06-15",
        biz: "마트",
        phone: "010-6666-7777",
        images: [
          "https://via.placeholder.com/600x400?text=Card+6+Image+1"
        ],
        delivery: "가능",
        events: "신선식품 할인",
        facilities: "장애인 전용 주차장",
        additionalInfo: "상세 설명 6."
      },
      {
        name: "상호명7",
        locationLink: "https://map.kakao.com/link/map/주소7",
        openDate: "2025-07-20",
        biz: "학원",
        phone: "010-7777-8888",
        images: [
          "https://via.placeholder.com/600x400?text=Card+7+Image+1"
        ],
        delivery: "불가능",
        events: "여름 특강",
        facilities: "휠체어 접근 가능",
        additionalInfo: "상세 설명 7."
      },
      {
        name: "상호명8",
        locationLink: "https://map.kakao.com/link/map/주소8",
        openDate: "2025-08-25",
        biz: "베이커리",
        phone: "010-8888-9999",
        images: [
          "https://via.placeholder.com/600x400?text=Card+8+Image+1"
        ],
        delivery: "가능",
        events: "신제품 베이킹 클래스",
        facilities: "장애인 화장실",
        additionalInfo: "상세 설명 8."
      },
      {
        name: "상호명9",
        locationLink: "https://map.kakao.com/link/map/주소9",
        openDate: "2025-09-10",
        biz: "네일샵",
        phone: "010-9999-0000",
        images: [
          "https://via.placeholder.com/600x400?text=Card+9+Image+1"
        ],
        delivery: "불가능",
        events: "네일 아트 워크숍",
        facilities: "장애인 접근 가능",
        additionalInfo: "상세 설명 9."
      },
      {
        name: "상호명10",
        locationLink: "https://map.kakao.com/link/map/주소10",
        openDate: "2025-10-01",
        biz: "도서관",
        phone: "010-0000-1111",
        images: [
          "https://via.placeholder.com/600x400?text=Card+10+Image+1"
        ],
        delivery: "불가능",
        events: "독서 모임",
        facilities: "장애인 친화적 출입구",
        additionalInfo: "상세 설명 10."
      }
    ];
  </script>

  <script>
    /**
     * (1) 헤더 & 푸터 로드 (fetch)
     * (2) DOMContentLoaded -> init()
     * (3) 10개 카드 + 모달 로직
     */
    async function loadComponent(url, containerId) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('HTTP error! status: ' + response.status);
        }
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
      } catch (error) {
        console.error('Error loading ' + url + ':', error);
      }
    }

    document.addEventListener("DOMContentLoaded", async () => {
      // 헤더/푸터 불러오기
      await loadComponent("components/header.html", "header-container");
      await loadComponent("components/footer.html", "footer-container");
      // 초기화
      init();
    });

    // 페이지당 표시 개수: 10
    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;
    let data = window.initialData || [];
    let totalItems = data.length;
    let totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // DOM
    const cardContainer = document.getElementById("cardContainer");
    const paginationContainer = document.getElementById("pagination");
    const detailOverlay = document.getElementById("detailOverlay");
    const detailModal = document.getElementById("detailModal");

    const modalTitle = document.getElementById("modalTitle");
    const mainImage = document.getElementById("mainImage");
    const modalLocation = document.getElementById("modalLocation");
    const modalOpenDate = document.getElementById("modalOpenDate");
    const modalBiz = document.getElementById("modalBiz");
    const modalPhone = document.getElementById("modalPhone");
    const modalDelivery = document.getElementById("modalDelivery");
    const modalEvents = document.getElementById("modalEvents");
    const modalFacilities = document.getElementById("modalFacilities");
    const modalAdditionalInfo = document.getElementById("modalAdditionalInfo");

    const closeModalBtn = document.getElementById("closeModalBtn");
    const detailToggleBtn = document.getElementById("detailToggleBtn");
    const detailToggleBtn2 = document.getElementById("detailToggleBtn2");
    const detailHiddenFields = document.getElementById("detailHiddenFields");

    // 카드 생성 함수
    function createCard(item, globalIndex) {
      const cardDiv = document.createElement("div");
      cardDiv.className =
        "bg-yellow-100 text-black p-5 rounded-xl shadow-lg relative overflow-hidden flex flex-col md:flex-row transition duration-200 hover:scale-105";

      // 기존: 특정 카드(4번, 8번) 스타일 처리
      if (globalIndex === 3 || globalIndex === 7) {
        cardDiv.classList.add("md:col-span-3", "mx-auto");
        cardDiv.style.width = "50%";
      }

      // 10개 카드일 때 마지막 두 카드(9번, 10번)의 위치 조정
      if (data.length === 10) {
        if (globalIndex === 8) { // 9번 카드 (상호명9)
          // 기본적으로 첫 번째 열에 위치하므로 명시하지 않아도 되지만, 필요하면:
          cardDiv.classList.add("md:col-start-1");
        }
        if (globalIndex === 9) { // 10번 카드 (상호명10)
          // md 화면에서 이 카드를 3열에 배치 (중간은 빈 공간)
          cardDiv.classList.add("md:col-start-3");
        }
      }

      // 이미지 섹션
      const imageSection = `
    <div class="flex-1 md:max-w-[50%] mr-5 flex items-center justify-center h-full">
      <img
        src="${item.images[0] || ''}"
        alt="${item.name} 메인이미지"
        class="w-[600px] h-[200px] object-cover rounded-md"
      />
    </div>
  `;

      // 정보 섹션
      const infoSection = `
    <div class="flex-1 flex flex-col justify-between text-lg relative z-10 text-black">
      <div class="mb-2">
        <span class="text-2xl font-bold">${item.name}</span>
      </div>
      <div class="space-y-2">
        <p class="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/marker.png"
            alt="location"
            class="w-5 h-5 mr-2"
          >
          <a href="${item.locationLink}" target="_blank" class="underline text-black">
            위치(클릭)
          </a>
        </p>
        <p class="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/calendar.png"
            alt="open-date"
            class="w-5 h-5 mr-2"
          >
          <span class="font-bold text-yellow-400">
            오픈일: ${item.openDate.replace(/-/g, ".")}
          </span>
        </p>
        <p class="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/business.png"
            alt="업종"
            class="w-5 h-5 mr-2"
          >
          업종: ${item.biz}
        </p>
        <p class="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/phone.png"
            alt="phone"
            class="w-5 h-5 mr-2"
          >
          ${item.phone}
        </p>
      </div>
    </div>
    <!-- 타원 배경 -->
    <div
      class="absolute bottom-0 right-0 w-1/2 h-full bg-[rgba(240,230,214,0.8)] z-0"
      style="clip-path: ellipse(50% 100% at 100% 100%);"
    ></div>
  `;

      cardDiv.innerHTML = imageSection + infoSection;

      // 카드 클릭 시 상세 모달 표시
      cardDiv.addEventListener("click", () => displayDetail(globalIndex));
      return cardDiv;
    }

    // 페이지 렌더링 (10개 전부 보여줌)
    function renderPage(page) {
      cardContainer.innerHTML = "";
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      // slice로 잘라온 10개 (또는 그 이하)
      const pageData = data.slice(startIndex, endIndex);

      pageData.forEach((item, i) => {
        const globalIndex = startIndex + i;
        const card = createCard(item, globalIndex);
        cardContainer.appendChild(card);
      });
    }

    // 페이지네이션 (현재는 1페이지만 있음)
    function renderPagination() {
      paginationContainer.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = "py-2 px-4 rounded bg-gray-800 text-white text-base hover:bg-gray-700 transition";
        if (i === currentPage) {
          btn.classList.add("bg-cyan-500");
        }
        btn.addEventListener("click", () => {
          currentPage = i;
          renderPage(currentPage);
          renderPagination();
          closeModal();
        });
        paginationContainer.appendChild(btn);
      }
    }

    // 상세 모달
    function displayDetail(index) {
      const item = data[index];
      if (!item) return;

      modalTitle.textContent = item.name;
      mainImage.src = item.images[0] || "";
      modalLocation.href = item.locationLink || "#";
      modalOpenDate.textContent = item.openDate;
      modalBiz.textContent = item.biz;
      modalPhone.textContent = item.phone;
      modalDelivery.textContent = item.delivery;
      modalEvents.textContent = item.events;
      modalFacilities.textContent = item.facilities;
      modalAdditionalInfo.textContent = item.additionalInfo || "";

      detailOverlay.classList.remove("hidden");
      detailModal.classList.remove("hidden");
    }

    // 모달 닫기
    function closeModal() {
      detailOverlay.classList.add("hidden");
      detailModal.classList.add("hidden");
    }

    closeModalBtn.addEventListener("click", closeModal);
    detailOverlay.addEventListener("click", closeModal);

    // 더보기/이전 버튼 -> 추가 정보 토글
    detailToggleBtn.addEventListener("click", () => {
      detailHiddenFields.classList.remove("hidden");
      detailToggleBtn.classList.add("hidden");
      detailToggleBtn2.classList.remove("hidden");
    });
    detailToggleBtn2.addEventListener("click", () => {
      detailHiddenFields.classList.add("hidden");
      detailToggleBtn.classList.remove("hidden");
      detailToggleBtn2.classList.add("hidden");
    });

    // 썸네일 클릭 -> 메인 이미지 변경 (필요시)
    function changeMainImage(imgUrl) {
      const mainImg = document.getElementById("mainImage");
      if (mainImg) {
        mainImg.src = imgUrl;
      }
    }

    // 초기화
    function init() {
      renderPage(currentPage); // 첫 페이지 -> 10개 전부
      renderPagination();      // 페이지네이션 (1페이지만)
    }
  </script>
</body>

</html>