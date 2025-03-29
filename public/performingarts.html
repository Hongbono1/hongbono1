<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>지역 공연 예술 축제</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gradient-to-r from-blue-50 to-indigo-100">
    <!-- 헤더 -->
    <div id="header"></div>

    <!-- 메인 배너 -->
    <section class="text-center py-12">
        <h2 class="text-5xl font-extrabold text-gray-900">🎭 공연 예술 축제 2025 🎶</h2>
        <p class="text-xl text-gray-700 mt-4">화려한 예술의 향연으로 마음을 채우세요</p>
    </section>

    <!-- 공연 일정 섹션 -->
    <section class="max-w-7xl mx-auto px-4 py-12">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-bold text-gray-900">🎤 공연 일정</h3>
            <a href="event-details.html" class="text-indigo-600 text-lg font-semibold hover:underline">+ 더보기</a>
        </div>
        <div id="event-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
    </section>

    <!-- 예술 섹션 -->
    <section class="max-w-7xl mx-auto px-4 py-12 mt-12">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-bold text-gray-900">🎨 예술 전시 & 체험</h3>
            <a href="art-details.html" class="text-indigo-600 text-lg font-semibold hover:underline">+ 더보기</a>
        </div>
        <div id="art-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
    </section>

    <!-- 길거리 버스커 섹션 -->
    <section class="p-8 max-w-7xl mx-auto mt-12">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-bold text-indigo-600">🎸 길거리 버스커 공연</h3>
            <a href="busker-details.html" class="text-indigo-600 text-lg font-semibold hover:underline">+ 더보기</a>
        </div>
        <div id="busker-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
    </section>

    <!-- 푸터 -->
    <div id="footer"></div>

    <script>
        // 헤더 및 푸터 로드
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data)
            .catch(error => console.error('헤더 로딩 실패:', error));

        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data)
            .catch(error => console.error('푸터 로딩 실패:', error));

        document.addEventListener("DOMContentLoaded", function () {
            const eventContainer = document.getElementById("event-container");
            const artContainer = document.getElementById("art-container");
            const buskerContainer = document.getElementById("busker-container");

            const events = [
                { title: "뮤지컬 갈라쇼", date: "5월 10일 | 메인 무대", img: "https://source.unsplash.com/400x300/?concert" },
                { title: "전통 무용 공연", date: "5월 11일 | 야외 무대", img: "https://source.unsplash.com/400x300/?theater" },
                { title: "재즈 밴드 라이브", date: "5월 12일 | 음악 광장", img: "https://source.unsplash.com/400x300/?jazz" }
            ];

            const arts = [
                { title: "현대 미술 전시", location: "갤러리 A", img: "https://source.unsplash.com/400x300/?art" },
                { title: "공예 체험", location: "문화관 B", img: "https://source.unsplash.com/400x300/?craft" },
                { title: "사진 예술전", location: "포토 갤러리 C", img: "https://source.unsplash.com/400x300/?photography" }
            ];

            const buskers = [
                { title: "버스커 A", type: "어쿠스틱 공연", img: "https://source.unsplash.com/400x300/?guitar" },
                { title: "버스커 B", type: "힙합 공연", img: "https://source.unsplash.com/400x300/?hiphop" },
                { title: "버스커 C", type: "클래식 공연", img: "https://source.unsplash.com/400x300/?violin" }
            ];

            function renderCards(container, data, link) {
                container.innerHTML = "";
                data.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "bg-white border shadow-lg rounded-lg p-4 text-center hover:shadow-2xl transition-transform transform hover:scale-105";
                    card.innerHTML = `
                        <a href="${link}?title=${encodeURIComponent(item.title)}" class="block">
                            <img class="h-48 w-full object-cover rounded" src="${item.img}" alt="${item.title}">
                            <h4 class="text-xl font-semibold mt-4">${item.title}</h4>
                            <p class="text-gray-600">${item.date || item.location || item.type}</p>
                        </a>
                    `;
                    container.appendChild(card);
                });
            }

            renderCards(eventContainer, events, "event-details.html");
            renderCards(artContainer, arts, "art-details.html");
            renderCards(buskerContainer, buskers, "busker-details.html");
        });
    </script>

    <!-- ★★ 모달 HTML (메인페이지와 동일 구조) ★★ -->
    <!-- 모달 오버레이 -->
    <div id="adDetailOverlay" class="fixed inset-0 bg-black bg-opacity-40 z-40 hidden"></div>
    <!-- 모달 박스 -->
    <div id="adDetailModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="bg-white w-11/12 md:w-[80%] h-[90vh] max-h-screen max-w-5xl p-5 rounded-lg shadow-lg overflow-y-auto">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold" id="adModalTitle">상세 정보</h2>
                <button id="closeAdModalBtn" class="text-gray-500 hover:text-gray-800 text-2xl font-bold">✕</button>
            </div>
            <!-- 이미지 섹션 -->
            <div class="w-full flex justify-center">
                <div class="flex flex-col items-center">
                    <div class="overflow-y-auto border" style="width: 600px; height: 400px;">
                        <img id="adMainImage" src="" alt="상세 이미지" class="w-[600px] h-[200px] object-cover">
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
    <!-- ★★ 모달 HTML 끝 ★★ -->

    <!-- ★★ 모달 관련 스크립트 및 Dummy Fetch 인터셉터 ★★ -->
    <script>
        /***********************
         * 1. Dummy fetch 인터셉터 (서버 없이 동작하도록)
         ***********************/
        (function() {
            const originalFetch = window.fetch;
            window.fetch = function(url, options) {
                if (url.startsWith("/api/eventDetails?title=")) {
                    const urlObj = new URL(url, location.origin);
                    const title = urlObj.searchParams.get("title");
                    const dummyData = {
                        title: title + " - 공연 일정 상세",
                        mainImage: "https://via.placeholder.com/600x200?text=" + encodeURIComponent(title),
                        mapUrl: "https://map.kakao.com/",
                        openDate: "2025-05-10",
                        biz: "공연 일정",
                        phone: "010-1111-2222",
                        delivery: false,
                        events: "공연 일정 이벤트 정보",
                        facilities: "장애인 편의 시설 정보",
                        additionalInfo: "공연 일정에 대한 추가 상세 설명입니다.",
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
                } else if (url.startsWith("/api/artDetails?title=")) {
                    const urlObj = new URL(url, location.origin);
                    const title = urlObj.searchParams.get("title");
                    const dummyData = {
                        title: title + " - 예술 전시 상세",
                        mainImage: "https://via.placeholder.com/600x200?text=" + encodeURIComponent(title),
                        mapUrl: "https://map.kakao.com/",
                        openDate: "2025-06-15",
                        biz: "예술 전시",
                        phone: "",
                        delivery: false,
                        events: "전시 일정 및 체험 정보",
                        facilities: "전시회 장소 정보",
                        additionalInfo: "예술 전시 및 체험에 관한 상세 설명입니다.",
                        thumbnails: [
                            "https://via.placeholder.com/150x150?text=ArtThumb1",
                            "https://via.placeholder.com/150x150?text=ArtThumb2",
                            "https://via.placeholder.com/150x150?text=ArtThumb3"
                        ]
                    };
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve({
                                json: () => Promise.resolve(dummyData)
                            });
                        }, 300);
                    });
                } else if (url.startsWith("/api/buskerDetails?title=")) {
                    const urlObj = new URL(url, location.origin);
                    const title = urlObj.searchParams.get("title");
                    const dummyData = {
                        title: title + " - 길거리 버스커 상세",
                        mainImage: "https://via.placeholder.com/600x200?text=" + encodeURIComponent(title),
                        mapUrl: "https://map.kakao.com/",
                        openDate: "2025-07-20",
                        biz: "버스커 공연",
                        phone: "",
                        delivery: false,
                        events: "버스커 공연 정보",
                        facilities: "버스커 공연 장소 정보",
                        additionalInfo: "길거리 버스커 공연에 대한 상세 설명입니다.",
                        thumbnails: [
                            "https://via.placeholder.com/150x150?text=BuskerThumb1",
                            "https://via.placeholder.com/150x150?text=BuskerThumb2",
                            "https://via.placeholder.com/150x150?text=BuskerThumb3"
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
        function openDetailModal(endpoint) {
            fetch(endpoint)
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
                    document.getElementById("adModalTitle").textContent = "상세 정보 불러오기 실패";
                    document.getElementById("adMainImage").src = "https://via.placeholder.com/600x200?text=Load+Error";
                    document.getElementById("adDetailOverlay").classList.remove("hidden");
                    document.getElementById("adDetailModal").classList.remove("hidden");
                });
        }

        function closeDetailModal() {
            document.getElementById("adDetailOverlay").classList.add("hidden");
            document.getElementById("adDetailModal").classList.add("hidden");
        }

        // 모달 닫기 이벤트 (오버레이, 닫기 버튼)
        document.getElementById("adDetailOverlay").addEventListener("click", closeDetailModal);
        document.getElementById("closeAdModalBtn").addEventListener("click", closeDetailModal);

        // "더보기"/"이전" 버튼 토글 이벤트
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
         * 3. "지역 공연 예술 축제" 페이지 내 카드 클릭 시 모달 호출 이벤트 추가
         ***********************/
        document.addEventListener("DOMContentLoaded", () => {
            // 이벤트 섹션
            const eventLinks = document.querySelectorAll("#event-container a");
            eventLinks.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    const href = this.getAttribute("href"); // 예: "event-details.html?title=뮤지컬 갈라쇼"
                    let endpoint = "";
                    if (href.startsWith("event-details.html")) {
                        endpoint = "/api/eventDetails" + href.substring("event-details.html".length);
                    }
                    openDetailModal(endpoint);
                });
            });
            // 예술 섹션
            const artLinks = document.querySelectorAll("#art-container a");
            artLinks.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    const href = this.getAttribute("href"); // 예: "art-details.html?title=현대 미술 전시"
                    let endpoint = "";
                    if (href.startsWith("art-details.html")) {
                        endpoint = "/api/artDetails" + href.substring("art-details.html".length);
                    }
                    openDetailModal(endpoint);
                });
            });
            // 버스커 섹션
            const buskerLinks = document.querySelectorAll("#busker-container a");
            buskerLinks.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    const href = this.getAttribute("href"); // 예: "busker-details.html?title=버스커 A"
                    let endpoint = "";
                    if (href.startsWith("busker-details.html")) {
                        endpoint = "/api/buskerDetails" + href.substring("busker-details.html".length);
                    }
                    openDetailModal(endpoint);
                });
            });
        });
    </script>
    <!-- ★★ 모달 관련 스크립트 끝 ★★ -->
</body>

</html>
