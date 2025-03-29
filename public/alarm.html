<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔔 알림</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col items-center py-10">
    
    <div id="header" class="mb-12 py-4 w-full bg-white shadow-md"></div>
    
    <!-- 알림 제목 -->
    <section class="text-center mb-8">
        <h2 class="text-4xl font-extrabold text-blue-700">🔔 내 알림</h2>
        <p class="text-lg text-gray-600 mt-2">최근 받은 알림을 확인하세요.</p>
    </section>
    
    <!-- 알림 리스트 -->
    <div class="max-w-4xl w-full space-y-4 px-4" id="notification-container"></div>
    
    <div id="footer" class="mt-12 py-6 w-full bg-white shadow-md"></div>
    
    <script>
    document.addEventListener("DOMContentLoaded", function () {
        const notificationContainer = document.getElementById("notification-container");

        // 🚀 예제 알림 데이터 (서버에서 받아온다고 가정)
        const notifications = [
            { type: "gift", title: "🎁 새로운 선물이 도착했어요!", description: "지금 확인해보세요.", buttonText: "확인", buttonClass: "bg-blue-500 hover:bg-blue-600" },
            { type: "event", title: "📅 예약한 공연이 곧 시작됩니다!", description: "공연 시간: 2025년 5월 10일 오후 7시", buttonText: "상세 보기", buttonClass: "bg-blue-500 hover:bg-blue-600" },
            { type: "coupon", title: "✅ 쿠폰 사용이 완료되었습니다.", description: "사용한 쿠폰: 10% 할인 쿠폰", buttonText: "확인 완료", buttonClass: "bg-gray-300 cursor-not-allowed", disabled: true }
        ];

        // 📌 알림 추가 함수
        function addNotification(notification) {
            const notificationDiv = document.createElement("div");
            notificationDiv.className = "bg-white p-4 rounded-lg shadow-md flex items-center justify-between";
            
            const buttonDisabled = notification.disabled ? "cursor-not-allowed bg-gray-300 text-gray-700" : notification.buttonClass;
            
            notificationDiv.innerHTML = `
                <div>
                    <p class="text-gray-800 font-semibold">${notification.title}</p>
                    <p class="text-gray-500 text-sm">${notification.description}</p>
                </div>
                <button class="${buttonDisabled} text-white px-4 py-2 rounded-full shadow-md transition">${notification.buttonText}</button>
            `;
            
            const button = notificationDiv.querySelector("button");
            if (!notification.disabled) {
                button.addEventListener("click", function () {
                    button.innerText = "확인 완료";
                    button.classList.remove("bg-blue-500", "hover:bg-blue-600");
                    button.classList.add("bg-gray-300", "text-gray-700", "cursor-not-allowed");
                    button.disabled = true;
                });
            }
            
            notificationContainer.appendChild(notificationDiv);
        }

        // 🚀 새로운 알림 자동 추가
        notifications.forEach(notif => addNotification(notif));
    });
    
    // 헤더 및 푸터 로드
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data)
        .catch(error => console.error('헤더 로딩 실패:', error));
    
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error('푸터 로딩 실패:', error));
    </script>
</body>
</html>
