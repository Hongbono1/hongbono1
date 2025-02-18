<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎁 선물함</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col items-center py-10">
    
    <div id="header" class="mb-6"></div>
    
    <!-- 선물함 제목 -->
    <section class="text-center mb-8">
        <h2 class="text-4xl font-extrabold text-pink-700">🎁 내 선물함</h2>
        <p class="text-lg text-gray-600 mt-2">받은 쿠폰과 선물을 확인하세요!</p>
    </section>
    
    <!-- 선물함 탭 -->
    <div id="new-gift-alert" class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 max-w-lg text-center" role="alert">
        <p class="font-bold">📢 새로운 선물이 도착했어요!</p>
        <p>지금 확인해보세요!</p>
    </div>
    
    <!-- 선물 사용 통계 -->
    <div class="bg-white shadow-lg rounded-lg p-4 mb-6 text-center max-w-md">
        <h3 class="text-lg font-semibold text-gray-800">🎯 선물 사용 현황</h3>
        <p class="text-gray-600 mt-2">사용한 쿠폰: <span id="used-coupons" class="font-bold text-pink-600">2</span>개 / 남은 쿠폰: <span id="remaining-coupons" class="font-bold text-green-600">3</span>개</p>
    </div>
    
    <!-- 최근 받은 선물 알림 -->
    <div id="new-gift-alert" class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 max-w-lg hidden" role="alert">
        <p class="font-bold">📢 새로운 선물이 도착했어요!</p>
        <p>지금 확인해보세요!</p>
    </div>
    
    <!-- 선물 리스트 -->
    <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center animate-fade-in h-full flex justify-between">
            <div class="w-16 h-16 bg-yellow-300 text-white flex items-center justify-center rounded-full text-3xl">🎟️</div>
            <h3 class="text-xl font-semibold mt-4 text-gray-800">10% 할인 쿠폰</h3>
            <p class="text-gray-500 mt-2">유효기간: 2025-06-30</p>
            <p class="text-sm text-gray-400">🎁 친구가 보냈어요!</p>
            <button class="mt-auto bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition use-button">사용하기</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center animate-fade-in">
            <div class="w-16 h-16 bg-blue-300 text-white flex items-center justify-center rounded-full text-3xl">🎫</div>
            <h3 class="text-xl font-semibold mt-4 text-gray-800">VIP 초대권</h3>
            <p class="text-gray-500 mt-2">유효기간: 2025-07-15</p>
            <button class="mt-4 bg-gray-300 text-gray-600 px-4 py-2 rounded-full shadow-md cursor-not-allowed">사용 완료</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center animate-fade-in">
            <div class="w-16 h-16 bg-green-300 text-white flex items-center justify-center rounded-full text-3xl">💳</div>
            <h3 class="text-xl font-semibold mt-4 text-gray-800">무료 음료 쿠폰</h3>
            <p class="text-gray-500 mt-2">유효기간: 2025-08-01</p>
            <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition use-button">사용하기</button>
        </div>
    </div>
    
    <div id="footer" class="mt-20 pb-10 w-full"></div>
    
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            let usedCoupons = document.querySelectorAll('.bg-gray-300.cursor-not-allowed').length;
            let remainingCoupons = document.querySelectorAll('.use-button').length;
            
            const updateCounter = () => {
                document.getElementById("used-coupons").innerText = usedCoupons;
                document.getElementById("remaining-coupons").innerText = remainingCoupons;
            };
            
            const gifts = document.querySelectorAll(".use-button");
            gifts.forEach(button => {
                button.addEventListener("click", function () {
                    if (!this.disabled) {
                        this.innerText = "사용 완료";
                        this.classList.remove("bg-pink-500", "hover:bg-pink-600");
                        this.classList.add("bg-gray-300", "text-gray-600", "cursor-not-allowed");
                        this.disabled = true;
                        
                        // 부모 요소 배경을 변경하여 VIP 초대권과 동일하게 설정
                        const parentCard = this.closest(".bg-white");
                        if (parentCard) {
                            parentCard.classList.remove("bg-white");
                            parentCard.classList.add("bg-gray-100");
                        }
                        
                        // 카운터 업데이트
                        usedCoupons++;
                        remainingCoupons--;
                        updateCounter();
            console.log(`사용한 쿠폰: ${usedCoupons}, 남은 쿠폰: ${remainingCoupons}`);
                    }
                });
            });
            
            const newGiftAlert = document.getElementById("new-gift-alert");
            const hasNewGifts = true; // API 데이터로 변경 가능
            if (hasNewGifts) {
                newGiftAlert.classList.remove("hidden");
            }
            
            updateCounter();
        });
        document.addEventListener("DOMContentLoaded", function () {
            const gifts = document.querySelectorAll(".use-button");
            gifts.forEach(button => {
                button.addEventListener("click", function () {
                    this.innerText = "사용 완료";
                    this.classList.remove("bg-pink-500", "hover:bg-pink-600");
                    this.classList.add("bg-gray-300", "text-gray-600", "cursor-not-allowed");
                    this.disabled = true;
                    
                    // 부모 요소 배경을 변경하여 VIP 초대권과 동일하게 설정
                    const parentCard = this.closest(".bg-white");
                    if (parentCard) {
                        parentCard.classList.remove("bg-white");
                        parentCard.classList.add("bg-gray-100");
                    }
                });
            });
            
            const newGiftAlert = document.getElementById("new-gift-alert");
            const hasNewGifts = true; // API 데이터로 변경 가능
            if (hasNewGifts) {
                newGiftAlert.classList.remove("hidden");
            }
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
