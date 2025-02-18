<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>가장 핫한 우리동네(모달 연결)</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50">
    <!-- Header (JSP 인클루드) -->
    <jsp:include page="components/header.html" />

    <!-- 모달 HTML (정적 인클루드) -->
    <jsp:include page="modal/modal.html" />

    <!-- 전체 컨테이너 -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 mt-10">
      <!-- 가장 핫한 우리동네 섹션 -->
      <section class="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 mb-12">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">가장 핫한 우리동네</h2>
        <div id="hotNeighborhoodBoxes" class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
      </section>

      <!-- 슬라이드 영역 -->
      <section class="relative w-full max-w-screen-lg mx-auto overflow-hidden border border-gray-300 rounded-lg mt-8 px-4 mb-9">
        <div id="sliderContainer" class="flex transition-transform duration-500 h-48 items-center"></div>
        <button
          id="prevBtn"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-[9999]"
        >
          &lt;
        </button>
        <button
          id="nextBtn"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 transition z-[9999]"
        >
          &gt;
        </button>
      </section>

      <!-- 추천 가게 섹션 -->
      <section class="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">추천 가게</h2>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <!-- 좌측 이미지 박스: 만화 이미지 -->
          <div class="lg:col-span-1 flex flex-col gap-6 h-full">
            <div class="flex-1 overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x400?text=만화1"
                alt="만화 이미지 상단"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x400?text=만화2"
                alt="만화 이미지 하단"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- 오른쪽 광고 리스트 -->
          <div id="recommendedStoreContainer" class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
        </div>
      </section>
    </div>

    <!-- Footer (JSP 인클루드) -->
    <jsp:include page="components/footer.html" />

    <!-- 모달 JS (정적 포함) -->
    <script src="modal/modal.js"></script>

    <!-- 광고 및 모달 로직 -->
    <script>
      // 1) 광고 데이터 (예시)
      const hotNeighborhoodAds = [
        { title: "우리동네 카페", category: "카페", phone: "010-1111-2222", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 식당", category: "식당", phone: "010-2222-3333", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 치킨", category: "치킨", phone: "010-3333-4444", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 베이커리", category: "베이커리", phone: "010-4444-5555", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 패스트푸드", category: "패스트푸드", phone: "010-5555-6666", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 커피", category: "카페", phone: "010-6666-7777", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 레스토랑", category: "식당", phone: "010-7777-8888", img: "https://via.placeholder.com/300x200", link: "#" },
        { title: "우리동네 바", category: "바", phone: "010-8888-9999", img: "https://via.placeholder.com/300x200", link: "#" }
      ];

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

      // 2) 광고 카드 생성 함수
      function createAdCard(ad) {
        const adBox = document.createElement("div");
        adBox.className = "ad-card bg-white shadow-lg rounded-lg p-6 flex flex-col border-2 border-gray-300 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl";
        adBox.dataset.title = ad.title;
        adBox.dataset.phone = ad.phone;
        adBox.dataset.img = ad.img;
        adBox.dataset.events = ad.events || "";
        adBox.dataset.facilities = ad.facilities || "";
        adBox.dataset.parking = ad.parking || "";
        adBox.dataset.category = ad.category;
        adBox.innerHTML = `
          <img src="${ad.img}" alt="${ad.title}" class="h-40 w-full object-cover rounded mb-4">
          <h2 class="text-2xl font-bold text-center mb-2">${ad.title}</h2>
          <h3 class="text-xl font-semibold text-center text-gray-700">${ad.category}</h3>
          <p class="text-lg text-gray-500 text-center">${ad.phone}</p>
          <a href="${ad.link}" class="open-modal mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center shadow-lg hover:bg-blue-600 transition">바로가기</a>
        `;
        return adBox;
      }

      // 3) 광고 박스 생성 함수
      function renderAdBoxes(containerId, ads, itemsPerBox = 2) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        for (let i = 0; i < ads.length; i += itemsPerBox) {
          const box = document.createElement("div");
          box.className = "bg-gray-50 border-2 border-gray-300 rounded-lg p-4 flex flex-col md:flex-row gap-4";
          for (let j = i; j < i + itemsPerBox && j < ads.length; j++) {
            const adCard = createAdCard(ads[j]);
            adCard.classList.add("flex-1");
            box.appendChild(adCard);
          }
          container.appendChild(box);
        }
      }

      // 4) 광고 렌더링 함수 (추천 가게 섹션)
      function renderAds(containerId, ads) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        ads.forEach((ad) => {
          container.appendChild(createAdCard(ad));
        });
      }

      // 5) 모달 열기 함수
      function openModalWithData(data) {
        console.log("openModalWithData 함수 호출됨", data);
        if (window.populateModal) {
          window.populateModal(data);
          const overlay = document.getElementById("modalOverlay");
          const modal = document.getElementById("commonModal");
          if (overlay && modal) {
            overlay.classList.remove("hidden");
            modal.classList.remove("hidden");
            console.log("모달 표시됨");
          } else {
            console.error("모달 요소를 찾을 수 없습니다.");
          }
        } else {
          console.error("populateModal 함수가 로드되지 않았습니다.");
        }
      }

      // 6) "가장 핫한 우리동네" 광고 카드의 제목 클릭 시 모달 열기
      function openHotModal(adData) {
        console.log("openHotModal 호출됨", adData);
        // 데이터 전달 후 모달 오픈
        openModalWithData(adData);
      }

      document.addEventListener("DOMContentLoaded", () => {
        // "가장 핫한 우리동네" 8개 광고 렌더링
        renderAdBoxes("hotNeighborhoodBoxes", hotNeighborhoodAds);

        // 추천 가게 8개 광고 렌더링
        renderAds("recommendedStoreContainer", recommendedStoreAds);

        // 슬라이드 셋업 (병원 페이지와 동일 방식)
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

        // 광고 카드 클릭 이벤트: open-modal 클래스 (모달 연결)
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
            console.log("광고 카드 클릭, data:", data);
            openModalWithData(data);
          });
        });

        // "가장 핫한 우리동네" 카드 제목 클릭 시 모달
        const cards = document.querySelectorAll("#hotNeighborhoodBoxes h2");
        cards.forEach((h2) => {
          const card = h2.parentElement;
          card.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() === "a") return;
            const adTitle = h2.textContent;
            const adData = { title: adTitle };
            openHotModal(adData);
          });
        });
      });
    </script>
  </body>
</html>
