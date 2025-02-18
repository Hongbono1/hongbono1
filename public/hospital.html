<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>광고 홈페이지 - 병원 (SSR+CSR 혼합 예시)</title>
    <!-- Tailwind CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <style>
      .header-content {
        gap: 1rem;
      }
      .nav-links a {
        transition: color 0.3s ease;
      }
      footer p {
        font-size: 0.875rem;
      }
    </style>
  </head>
  <body class="bg-gray-50">
    <!-- 헤더 (JSP 인클루드로 불러옴) -->
    <jsp:include page="components/header.html" />

    <!-- 기존 모달 코드 삭제 (모달 인클루드는 제거) -->
    <!-- 모달 컨테이너: 동적으로 모달 HTML과 JS를 로드할 영역 -->
    <div id="modal-container"></div>

    <!-- 메인 콘텐츠 -->
    <main class="w-full max-w-screen-xl mx-auto px-4 sm:px-8 mt-8">
      <!-- 상단 섹션: 병원 배경/타이틀 -->
      <section class="bg-gradient-to-r from-gray-800 to-blue-500 text-white p-6 rounded-lg shadow mb-8">
        <h1 class="text-4xl sm:text-5xl font-bold mb-2">병원</h1>
        <p class="text-lg sm:text-xl">우리동네 병원을 소개합니다</p>
      </section>

      <!-- 스크롤 버튼 (카테고리 선택 영역) -->
      <section id="categorySelection" class="bg-white p-4 rounded-lg shadow border border-gray-300 mt-8 mb-8">
        <div class="bg-blue-100 p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-6">스크롤 선택</h2>
          <div class="flex overflow-x-auto space-x-3 py-3">
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="응급실">응급실</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="종합병원">종합병원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="병원">병원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="의원">의원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="한방병원">한방병원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="요양병원">요양병원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="치과">치과</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="한의원">한의원</button>
            <button class="category-btn bg-white text-[#2C3E50] font-medium px-5 py-2 text-lg rounded-full border border-[#748CAB] shadow-md hover:bg-[#7F9BBF] transition" data-category="건강검진">건강검진</button>
          </div>
        </div>
      </section>

      <!-- 파워 광고 (SSR 시뮬레이션) - 4개 광고 박스 -->
      <section id="powerAdsSection" class="bg-yellow-50 border-4 border-yellow-400 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4">파워 광고 (SSR)</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="ad-card relative bg-yellow-50 border-4 border-yellow-400 shadow-lg rounded-lg p-6 flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            data-title="파워 광고 1" data-phone="010-1111-2222" data-category="병원"
            data-img="https://via.placeholder.com/300x200/111111" data-events="신규 할인" data-facilities="휠체어 접근 가능"
            data-parking="무료 주차">
            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">파워광고</div>
            <img src="https://via.placeholder.com/300x200/111111" alt="파워 광고 1" class="h-40 w-full object-cover rounded mb-4" />
            <h2 class="text-2xl font-bold text-center mb-2">파워 광고 1</h2>
            <h3 class="text-xl font-semibold text-center text-gray-700">병원</h3>
            <p class="text-lg text-gray-500 text-center">010-1111-2222</p>
            <a href="#" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600">바로가기</a>
          </div>
          <div class="ad-card relative bg-yellow-50 border-4 border-yellow-400 shadow-lg rounded-lg p-6 flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            data-title="파워 광고 2" data-phone="010-2222-3333" data-category="병원"
            data-img="https://via.placeholder.com/300x200/222222" data-events="이벤트 중" data-facilities="없음"
            data-parking="유료 주차">
            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">파워광고</div>
            <img src="https://via.placeholder.com/300x200/222222" alt="파워 광고 2" class="h-40 w-full object-cover rounded mb-4" />
            <h2 class="text-2xl font-bold text-center mb-2">파워 광고 2</h2>
            <h3 class="text-xl font-semibold text-center text-gray-700">병원</h3>
            <p class="text-lg text-gray-500 text-center">010-2222-3333</p>
            <a href="#" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600">바로가기</a>
          </div>
          <div class="ad-card relative bg-yellow-50 border-4 border-yellow-400 shadow-lg rounded-lg p-6 flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            data-title="파워 광고 3" data-phone="010-3333-4444" data-category="병원"
            data-img="https://via.placeholder.com/300x200/333333" data-events="시즌 할인" data-facilities="휠체어 리프트 있음"
            data-parking="무료 주차">
            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">파워광고</div>
            <img src="https://via.placeholder.com/300x200/333333" alt="파워 광고 3" class="h-40 w-full object-cover rounded mb-4" />
            <h2 class="text-2xl font-bold text-center mb-2">파워 광고 3</h2>
            <h3 class="text-xl font-semibold text-center text-gray-700">병원</h3>
            <p class="text-lg text-gray-500 text-center">010-3333-4444</p>
            <a href="#" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600">바로가기</a>
          </div>
          <div class="ad-card relative bg-yellow-50 border-4 border-yellow-400 shadow-lg rounded-lg p-6 flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            data-title="파워 광고 4" data-phone="010-4444-5555" data-category="병원"
            data-img="https://via.placeholder.com/300x200/444444" data-events="특가 행사" data-facilities="없음"
            data-parking="유료 주차">
            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">파워광고</div>
            <img src="https://via.placeholder.com/300x200/444444" alt="파워 광고 4" class="h-40 w-full object-cover rounded mb-4" />
            <h2 class="text-2xl font-bold text-center mb-2">파워 광고 4</h2>
            <h3 class="text-xl font-semibold text-center text-gray-700">병원</h3>
            <p class="text-lg text-gray-500 text-center">010-4444-5555</p>
            <a href="#" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600">바로가기</a>
          </div>
        </div>
      </section>
      
      <!-- CSR 광고 섹션 예시 (각 카테고리별) -->
      <!-- 응급실 -->
      <section id="emergencyAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">응급실 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_emergency.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="emergencyAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 종합병원 -->
      <section id="generalhospitalAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">종합병원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_generalhospital.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="generalhospitalAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 병원 -->
      <section id="hospitalAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">병원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_hospital.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="hospitalAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 의원 -->
      <section id="clinicAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">의원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_clinic.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="clinicAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 한방병원 -->
      <section id="orientalmedicineAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">한방병원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_orientalmedicine.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="orientalmedicineAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 요양병원 -->
      <section id="nursingAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">요양병원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_nursing.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="nursingAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 치과 -->
      <section id="dentistryAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">치과 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_dentistry.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="dentistryAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 한의원 -->
      <section id="orientalAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">한의원 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_dentistry.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="orientalAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
      
      <!-- 건강검진 -->
      <section id="healthcheckupAdsSection" class="mt-8 border-2 border-gray-300 rounded-lg p-6 mb-16">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">건강검진 (CSR)</h2>
          <div class="flex items-center space-x-6">
            <a href="#" class="home-link text-blue-500 hover:underline font-bold text-lg">🏠 홈</a>
            <a href="detail_streetfood.html" class="more-link text-blue-500 hover:underline font-bold text-lg">+더보기</a>
          </div>
        </div>
        <div id="healthcheckupAdsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
    </main>

    <!-- 푸터 (JSP 인클루드로 불러옴) -->
    <jsp:include page="components/footer.html" />

    <!-- 모달 관련 기존 코드 삭제 및 새로운 모달 HTML/JS 동적 로드 -->
    <script>
      // 기존 모달이 존재하면 삭제
      const existingModal = document.querySelector("#commonModal");
      if (existingModal) {
        existingModal.remove();
        console.log("기존 모달 삭제 완료");
      }
      // 동적으로 모달 HTML과 JS 로드
      fetch("modal/modal.html")
        .then(response => response.text())
        .then(html => {
          const modalContainer = document.createElement("div");
          modalContainer.id = "modal-container";
          modalContainer.innerHTML = html;
          document.body.appendChild(modalContainer);
          const script = document.createElement("script");
          script.src = "modal/modal.js";
          script.onload = function() {
            console.log("modal.js 로드 완료");
            if (window.populateModal) {
              console.log("populateModal 함수 정상 로드");
            } else {
              console.error("populateModal 함수 로드 실패");
            }
          };
          document.body.appendChild(script);
        })
        .catch(error => console.error("modal.html 로드 실패:", error));
    </script>

    <!-- 광고 및 모달 렌더링 관련 스크립트 -->
    <script>
      // 광고 데이터 (예시)
      const generalAdsData = [
        { title: "대학병원", category: "응급실", phone: "010-1234-5678", img: "https://via.placeholder.com/300x200/111111", events: "신규 할인", facilities: "휠체어 접근 가능", parking: "무료 주차" },
        { title: "영한병원", category: "응급실", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/aaaaaa", events: "이벤트 중", facilities: "없음", parking: "유료 주차" },
        { title: "서울대병원", category: "응급실", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/bbbbbb", events: "시즌 할인", facilities: "휠체어 리프트 있음", parking: "무료 주차" },
        { title: "지역병원", category: "응급실", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/cccccc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "한국병원", category: "응급실", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/dddddd", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "제병원원", category: "응급실", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/eeeeee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "한세병원", category: "응급실", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/ffffff", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "병원병원", category: "응급실", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/999999", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "대학병원", category: "종합병원", phone: "010-8901-2345", img: "https://via.placeholder.com/300x200/ccffff", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "한샘병원", category: "종합병원", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/cccccc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "칠성병원", category: "종합병원", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/dddddd", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "오두기병원", category: "종합병원", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/eeeeee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "파도병원", category: "종합병원", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/ffffff", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "천하병원", category: "종합병원", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/999999", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "병원병원", category: "종합병원", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/888888", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "세상병원", category: "종합병원", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/777777", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "우리병원", category: "병원", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/eeeeee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "너네병원", category: "병원", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/ffffff", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "최고병원", category: "병원", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/999999", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "일류병원", category: "병원", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/888888", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "가우스병원", category: "병원", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/777777", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "닌자병원", category: "병원", phone: "010-0000-1111", img: "https://via.placeholder.com/300x200/666666", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "냠냠병원", category: "병원", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/555555", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "울랄라병원", category: "병원", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/444444", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "야옹의원", category: "의원", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/888888", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "밥심의원", category: "의원", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/777777", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "슉슉의원", category: "의원", phone: "010-0000-1111", img: "https://via.placeholder.com/300x200/666666", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "김냠냠의원", category: "의원", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/555555", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "일진의원", category: "의원", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/444444", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "멍멍의원", category: "의원", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/333333", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "최고의원", category: "의원", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/222222", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "히히히의원", category: "의원", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/111111", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "제이한방", category: "한방병원", phone: "010-0000-1111", img: "https://via.placeholder.com/300x200/666666", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "수일한방병원", category: "한방병원", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/555555", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "일세한방병원", category: "한방병원", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/444444", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "제삼한방병원", category: "한방병원", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/333333", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "이히힝한방병원", category: "한방병원", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/222222", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "글로벌한방병원", category: "한방병원", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/111111", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "마징가한방병원", category: "한방병원", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/000000", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "우하하한방병원", category: "한방병원", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/aaaaaa", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "BBQ 요양병원", category: "요양병원", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/444444", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "네네요양병원", category: "요양병원", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/333333", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "교촌요양병원", category: "요양병원", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/222222", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "BBQ", category: "요양병원", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/111111", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "푸라닭", category: "요양병원", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/000000", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "굽네요양병원", category: "요양병원", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/cccccc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "멕시칸요양병원", category: "요양병원", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/bbbbbb", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "순살요양병원", category: "요양병원", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/aaaaaa", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "스타벅스치과", category: "치과", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200/222222", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "이디야치과", category: "치과", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200/111111", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "투썸플레이스치과", category: "치과", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/000000", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "엔제리너스치과", category: "치과", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/aaaaaa", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "빽다방치과", category: "치과", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/bbbbbb", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "커피빈치과", category: "치과", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/cccccc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "할리스치과", category: "치과", phone: "010-0000-1111", img: "https://via.placeholder.com/300x200/dddddd", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "파스쿠찌치과", category: "치과", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/eeeeee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "타코벨", category: "한의원", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200/123456", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "핫도그", category: "한의원", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200/654321", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "떡볶이", category: "한의원", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200/abcdef", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "순대", category: "한의원", phone: "010-9999-0000", img: "https://via.placeholder.com/300x200/fedcba", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "오뎅", category: "한의원", phone: "010-0000-1111", img: "https://via.placeholder.com/300x200/111111", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "붕어빵", category: "한의원", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200/222222", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "호떡", category: "한의원", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200/333333", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "군밤", category: "한의원", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200/444444", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "건강검진나라", category: "건강검진", phone: "010-1234-0001", img: "https://via.placeholder.com/300x200/ffcccc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "떡볶이명가", category: "건강검진", phone: "010-1234-0002", img: "https://via.placeholder.com/300x200/ffdddd", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "김밥천국 건강검진", category: "건강검진", phone: "010-1234-0003", img: "https://via.placeholder.com/300x200/ffeeee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "건강검진집", category: "건강검진", phone: "010-1234-0004", img: "https://via.placeholder.com/300x200/ffeecc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "건강검진 스낵", category: "건강검진", phone: "010-1234-0005", img: "https://via.placeholder.com/300x200/ffccdd", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "오뎅건강검진", category: "건강검진", phone: "010-1234-0006", img: "https://via.placeholder.com/300x200/ffddee", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "튀김건강검진", category: "건강검진", phone: "010-1234-0007", img: "https://via.placeholder.com/300x200/ffeedc", events: "특가 행사", facilities: "없음", parking: "유료 주차" },
        { title: "건강검진포차", category: "건강검진", phone: "010-1234-0008", img: "https://via.placeholder.com/300x200/ffeedd", events: "특가 행사", facilities: "없음", parking: "유료 주차" }
      ];

      // 광고 카드 생성 함수 (공통)
      function createAdCard(ad) {
        const adBox = document.createElement("div");
        adBox.className = "ad-card bg-white shadow-lg rounded-lg p-6 flex flex-col border-2 border-gray-300 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl";
        adBox.dataset.title = ad.title;
        adBox.dataset.phone = ad.phone;
        adBox.dataset.img = ad.img;
        adBox.dataset.events = ad.events;
        adBox.dataset.facilities = ad.facilities;
        adBox.dataset.parking = ad.parking;
        adBox.dataset.category = ad.category;
        adBox.innerHTML = `
          <img src="${ad.img}" alt="${ad.title}" class="h-40 w-full object-cover rounded mb-4" />
          <h2 class="text-2xl font-bold text-center mb-2">${ad.title}</h2>
          <h3 class="text-xl font-semibold text-center text-gray-700">${ad.category}</h3>
          <p class="text-lg text-gray-500 text-center">${ad.phone}</p>
          <a href="#" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600">바로가기</a>
        `;
        return adBox;
      }

      // 광고 렌더링 함수 (각 카테고리별 최대 8개)
      function renderAds(category, containerId) {
        const filtered = generalAdsData.filter((ad) => ad.category === category);
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        filtered.slice(0, 8).forEach((ad) => {
          container.appendChild(createAdCard(ad));
        });
      }

      // 함수: 모달 열기 (데이터 전달 후 모달 표시)
      function openModalWithData(data) {
        if (window.populateModal) {
          window.populateModal(data);
          document.getElementById("modalOverlay").classList.remove("hidden");
          document.getElementById("commonModal").classList.remove("hidden");
        } else {
          console.error("populateModal 함수가 로드되지 않았습니다.");
        }
      }

      // 초기화: 각 카테고리별 광고 섹션 렌더링 및 이벤트 처리
      document.addEventListener("DOMContentLoaded", () => {
        renderAds("응급실", "emergencyAdsContainer");
        renderAds("종합병원", "generalhospitalAdsContainer");
        renderAds("병원", "hospitalAdsContainer");
        renderAds("의원", "clinicAdsContainer");
        renderAds("한방병원", "orientalmedicineAdsContainer");
        renderAds("요양병원", "nursingAdsContainer");
        renderAds("치과", "dentistryAdsContainer");
        renderAds("한의원", "orientalAdsContainer");
        renderAds("건강검진", "healthcheckupAdsContainer");

        const categorySectionMap = {
          응급실: "emergencyAdsSection",
          종합병원: "generalhospitalAdsSection",
          병원: "hospitalAdsSection",
          의원: "clinicAdsSection",
          한방병원: "orientalmedicineAdsSection",
          요양병원: "nursingAdsSection",
          치과: "dentistryAdsSection",
          한의원: "orientalAdsContainer",
          건강검진: "healthcheckupAdsContainer",
        };

        document.querySelectorAll(".category-btn").forEach((button) => {
          button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            const sectionId = categorySectionMap[category];
            if (sectionId) {
              const section = document.getElementById(sectionId);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                console.warn("섹션 id '" + sectionId + "'가 존재하지 않습니다.");
              }
            }
          });
        });

        document.querySelectorAll(".home-link").forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("categorySelection").scrollIntoView({ behavior: "smooth" });
          });
        });

        // 광고 카드 클릭 시 모달 열기 이벤트 처리
        document.querySelectorAll(".open-modal").forEach((button) => {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            const adCard = button.parentElement;
            if (!adCard) return;
            const data = {
              title: adCard.dataset.title,
              phone: adCard.dataset.phone,
              image: adCard.dataset.img,
              address: "주소 미정",
              category: adCard.dataset.category,
              delivery: "정보 없음",
              hours: "정보 없음",
              serviceItems: "정보 없음",
              events: [adCard.dataset.events, ""],
              facilities: adCard.dataset.facilities,
              pets: "정보 없음",
              parking: adCard.dataset.parking,
              sliderImages: [adCard.dataset.img]
            };
            openModalWithData(data);
          });
        });
      });
    </script>
  </body>
</html>
