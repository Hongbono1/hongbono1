<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🏍️ 배달 라이더 광고</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col items-center">

  <!-- Header 로드 -->
  <div id="header" class="w-full mb-6"></div>

  <section class="text-center mb-8">
    <h2 class="text-4xl font-extrabold text-green-700">🏍️ 배달 라이더 광고</h2>
    <p class="text-lg text-gray-600 mt-2">라이더가 제공하는 배달 서비스를 확인하세요!</p>
  </section>

  <!-- 배달 라이더 섹션 (전체 영역) -->
  <section id="riderSection" class="bg-white border-2 border-gray-300 rounded-lg p-6 mt-8 shadow relative w-full max-w-6xl px-4">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold">가장 핫한 배달 라이더</h2>
      <a href="#" class="text-blue-500 text-lg font-semibold hover:underline transition">+더보기</a>
    </div>
    <!-- 광고박스들을 감쌀 컨테이너 -->
    <div id="riderList"></div>
  </section>

  <!-- Footer 로드 -->
  <div id="footer" class="w-full mt-20"></div>

  <!-- 모달을 로드할 컨테이너 -->
  <div id="modal-container"></div>

  <script>
    /***************** Header & Footer 로드 *****************/
    fetch("components/header.html")
      .then(response => response.text())
      .then(data => { document.getElementById("header").innerHTML = data; })
      .catch(error => console.error("Header 로드 실패:", error));

    fetch("components/footer.html")
      .then(response => response.text())
      .then(data => { document.getElementById("footer").innerHTML = data; })
      .catch(error => console.error("Footer 로드 실패:", error));

    /***************** 기존 모달 삭제 (충돌 방지) *****************/
    const existingModal = document.querySelector("#commonModal");
    if (existingModal) {
      existingModal.remove();
      console.log("기존 모달 삭제 완료 ✅");
    }

    /***************** 모달 HTML & JS 로드 *****************/
    // deliveryrider.html에서 모달은 public/modal 폴더에 있으므로,
    // 상대경로 "modal/modal.html"과 "modal/modal.js"를 사용
    fetch("modal/modal.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("modal-container").innerHTML = html;
        const script = document.createElement("script");
        script.src = "modal/modal.js";
        script.onload = function() {
          console.log("modal.js 로드 완료 ✅");
          if (window.populateModal) {
            console.log("populateModal 함수 정상 로드 ✅");
          } else {
            console.error("populateModal 함수 로드 실패 ❌");
          }
        };
        document.body.appendChild(script);
      })
      .catch(error => console.error("modal.html 로드 실패:", error));

    /***************** 배달 라이더 데이터 생성 *****************/
    const riders = Array.from({ length: 8 }, (_, i) => ({
      name: `🏍️ Rider ${i + 1}`,
      phone: `010-0000-000${i + 1}`,
      location: `대한민국 주소 ${i + 1}`,
      service: "비밀 트로트 배달 | 탑배 서비스",
      promotion: "🎉 초기 이용 10% 할인!",
      image: "https://via.placeholder.com/300x200"
    }));

    /***************** 광고 박스 생성 함수 *****************/
    function createAdBox(rider) {
      const box = document.createElement("div");
      box.className = "flex-1 bg-white border-2 border-gray-300 p-4 rounded-lg shadow-lg text-center transform transition hover:scale-105 flex flex-col justify-between cursor-pointer";
      box.innerHTML = `
        <img class="w-full h-40 object-cover rounded-t-lg" src="${rider.image}" alt="${rider.name}">
        <div class="p-4 flex flex-col flex-grow">
          <p class="text-gray-800 font-bold text-lg">${rider.name}</p>
          <p class="text-gray-500 mt-2">${rider.phone}</p>
          <p class="text-gray-400 mt-2">${rider.location}</p>
        </div>
      `;
      // 광고 박스를 클릭하면 openRiderModal 함수 호출
      box.addEventListener("click", () => openRiderModal(rider));
      return box;
    }

    /***************** 그룹 박스 생성 함수 *****************/
    function createGroupBox(groupRiders) {
      const groupBox = document.createElement("div");
      groupBox.className = "bg-gray-200 p-4 rounded-lg mb-6 flex-1";
      const topRow = document.createElement("div");
      topRow.className = "flex flex-row gap-6 mb-4";
      topRow.appendChild(createAdBox(groupRiders[0]));
      topRow.appendChild(createAdBox(groupRiders[1]));
      const bottomRow = document.createElement("div");
      bottomRow.className = "flex flex-row gap-6";
      bottomRow.appendChild(createAdBox(groupRiders[2]));
      bottomRow.appendChild(createAdBox(groupRiders[3]));
      groupBox.appendChild(topRow);
      groupBox.appendChild(bottomRow);
      return groupBox;
    }

    /***************** 그룹 데이터 분할 및 배치 *****************/
    const topRiders = riders.slice(0, 4);     // 상단 4명
    const bottomRiders = riders.slice(4, 8);    // 하단 4명
    const groupLeft = [ topRiders[0], topRiders[1], bottomRiders[0], bottomRiders[1] ];
    const groupRight = [ topRiders[2], topRiders[3], bottomRiders[2], bottomRiders[3] ];

    const groupContainer = document.createElement("div");
    groupContainer.className = "flex flex-row gap-6 w-full";
    groupContainer.appendChild(createGroupBox(groupLeft));
    groupContainer.appendChild(createGroupBox(groupRight));
    document.getElementById("riderList").appendChild(groupContainer);

    /***************** 모달 열기 함수 *****************/
    function openRiderModal(rider) {
      setTimeout(() => {
        if (window.populateModal) {
          window.populateModal({
            title: rider.name,
            phone: rider.phone,
            image: rider.image,
            address: rider.location,
            category: "배달 라이더",
            delivery: "가능",
            hours: "24시간",
            serviceItems: rider.service,
            events: [rider.promotion, ""],
            facilities: "안전 헬멧 제공",
            pets: "불가능",
            parking: "무료 주차"
          });
          // 모달이 숨겨져 있다면 hidden 클래스 제거하여 보이게 함
          document.getElementById("modalOverlay").classList.remove("hidden");
          document.getElementById("commonModal").classList.remove("hidden");
        } else {
          console.error("populateModal 함수가 로드되지 않았습니다.");
        }
      }, 100);
    }

    /***************** 모달 닫기 함수 *****************/
    function closeRiderModal() {
      document.getElementById("modalOverlay").classList.add("hidden");
      document.getElementById("commonModal").classList.add("hidden");
    }

    // 모달 닫기 이벤트 등록 (모달 요소가 로드된 후)
    setTimeout(() => {
      const modalOverlay = document.getElementById("modalOverlay");
      const closeModalBtn = document.getElementById("closeModalBtn");
      if (modalOverlay && closeModalBtn) {
        modalOverlay.addEventListener("click", closeRiderModal);
        closeModalBtn.addEventListener("click", closeRiderModal);
      }
    }, 300);
  </script>
</body>
</html>
