<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>지역 공연 예술 축제</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const eventContainer = document.getElementById("event-container");
            const moreButton = document.getElementById("more-button");

            const events = [
                { title: "뮤지컬 갈라쇼", date: "5월 10일 | 메인 무대", img: "https://source.unsplash.com/400x300/?concert" },
                { title: "전통 무용 공연", date: "5월 11일 | 야외 무대", img: "https://source.unsplash.com/400x300/?theater" },
                { title: "재즈 밴드 라이브", date: "5월 12일 | 음악 광장", img: "https://source.unsplash.com/400x300/?jazz" },
                { title: "심포니 오케스트라", date: "5월 13일 | 메인 스테이지", img: "https://source.unsplash.com/400x300/?orchestra" },
                { title: "락 밴드 공연", date: "5월 14일 | 록 페스티벌 존", img: "https://source.unsplash.com/400x300/?rockband" },
                { title: "힙합 라이브 쇼", date: "5월 15일 | 스트리트 무대", img: "https://source.unsplash.com/400x300/?hiphop" },
                { title: "클래식 콘서트", date: "5월 16일 | 메인 홀", img: "https://source.unsplash.com/400x300/?classical" },
                { title: "K-POP 페스티벌", date: "5월 17일 | 스타디움", img: "https://source.unsplash.com/400x300/?kpop" }
            ];

            function renderEvents(limit) {
                eventContainer.innerHTML = "";
                events.slice(0, limit).forEach(event => {
                    const eventCard = document.createElement("div");
                    eventCard.className = "bg-white border shadow-lg rounded-lg p-4 text-center event-card cursor-pointer";
                    eventCard.innerHTML = `
                        <img class="h-48 w-full object-cover rounded" src="${event.img}" alt="${event.title}">
                        <h4 class="text-xl font-semibold mt-4">${event.title}</h4>
                        <p class="text-gray-600">${event.date}</p>
                    `;
                    eventCard.addEventListener("click", function () {
                        window.location.href = `event-details.html?title=${encodeURIComponent(event.title)}`;
                    });
                    eventContainer.appendChild(eventCard);
                });
            }

            let visibleCount = 6;
            renderEvents(visibleCount);

            moreButton.addEventListener("click", function () {
                visibleCount = events.length;
                renderEvents(visibleCount);
                moreButton.classList.add("hidden");
            });
        });
    </script>
</head>

<body class="bg-gradient-to-r from-blue-50 to-indigo-100"> 
    <!-- 메인 제목 (헤더 역할) -->
    <header class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg text-center">
        <h1 class="text-4xl font-bold">지역 공연 예술 축제</h1>
        <p class="text-lg mt-2">문화와 예술이 함께하는 축제! 즐거운 시간을 보내세요.</p>
    </header>

    <!-- 공연 일정 리스트 -->
    <section class="max-w-7xl mx-auto px-4 py-12">
        <div id="event-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        </div>
        <div class="text-center mt-6">
            <button id="more-button" class="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
                + 더보기
            </button>
        </div>
    </section>

    <!-- 푸터 (외부 파일 연결) -->
    <div id="footer"></div>

    <script>
        // 푸터 로드
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data)
            .catch(error => console.error('푸터 로딩 실패:', error));
    </script>
</body>

</html>
