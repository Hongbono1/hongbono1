<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>공지사항</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex flex-col min-h-screen bg-gray-100">
  <!-- (A) 헤더를 불러올 영역 -->
  <div id="header-container"></div>

  <!-- 
    (B) 메인 섹션
    - flex-grow: 본문이 남은 공간을 차지 → 스티키 푸터
    - max-w-screen-xl: (약 1280px)로 넓게
    - w-full : 폭 100%
    - min-h-[600px] : 내용이 짧아도 최소 600px 높이
    - mb-12 : 푸터와 간격 추가 
  -->
  <main class="flex-grow w-full max-w-screen-xl min-h-[600px] mx-auto px-4 py-6 mb-12 bg-white rounded shadow">
    <h1 class="text-2xl font-bold text-center mb-6">공지사항</h1>

    <!-- (B-1) 검색 섹션 -->
    <section class="p-4 mb-6 border-b border-gray-200">
      <form id="search-form" aria-label="공지사항 검색 폼"
            class="flex flex-col gap-4 md:flex-row md:items-end md:justify-center">
        <div class="flex flex-col">
          <label for="start-date" class="mb-1 font-semibold text-blue-900">검색기간 시작:</label>
          <input 
            type="date" 
            id="start-date" 
            name="start-date" 
            aria-required="true"
            class="border border-gray-300 rounded px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div class="flex flex-col">
          <label for="end-date" class="mb-1 font-semibold text-blue-900">검색기간 종료:</label>
          <input 
            type="date" 
            id="end-date" 
            name="end-date" 
            aria-required="true"
            class="border border-gray-300 rounded px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          aria-label="공지사항 검색 버튼"
          class="bg-blue-600 text-white px-4 py-2 rounded shadow
                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          검색
        </button>
      </form>
    </section>

    <!-- (B-2) 공지사항 목록 -->
    <section aria-labelledby="notice-list-heading">
      <h2 id="notice-list-heading" class="sr-only">공지사항 목록</h2>
      <!-- 가로 스크롤 가능 -->
      <div class="overflow-x-auto">
        <!-- 
          세로선(Vertical lines) 구현:
          1) table에 border-collapse와 전체 테두리(border border-gray-300)
          2) thead > th, tbody > td에도 border border-gray-300
        -->
        <table aria-describedby="notice-list-heading"
               class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-blue-800 text-white">
              <th scope="col" tabindex="0" onclick="sortTable(0)" aria-sort="none"
                  class="p-3 cursor-pointer border border-gray-300">
                번호
              </th>
              <th scope="col" tabindex="0" onclick="sortTable(1)" aria-sort="none"
                  class="p-3 cursor-pointer border border-gray-300">
                제목
              </th>
              <th scope="col" tabindex="0" onclick="sortTable(2)" aria-sort="none"
                  class="p-3 cursor-pointer border border-gray-300">
                부서명
              </th>
              <th scope="col" tabindex="0" onclick="sortTable(3)" aria-sort="none"
                  class="p-3 cursor-pointer border border-gray-300">
                작성일
              </th>
            </tr>
          </thead>
          <tbody id="notice-body">
            <!-- JavaScript로 공지사항 데이터가 동적으로 렌더링됩니다. -->
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <!-- (C) 푸터를 불러올 영역 -->
  <div id="footer-container"></div>

  <script>
    // ===================================
    // [1] 헤더/푸터 동적 로드
    // ===================================
    document.addEventListener('DOMContentLoaded', () => {
      fetch('./components/header.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById('header-container').innerHTML = data;
        })
        .catch(err => console.error('header.html 로드 실패:', err));

      fetch('./components/footer.html')
        .then(res => res.text())
        .then(data => {
          document.getElementById('footer-container').innerHTML = data;
        })
        .catch(err => console.error('footer.html 로드 실패:', err));
    });

    // ===================================
    // [2] 공지사항 데이터
    // ===================================
    let notices = [
      { 번호: 1,  제목: "2024년 해외봉사단 모집 공고", 부서명: "해외봉사과", 작성일: "2024-10-01" },
      { 번호: 2,  제목: "국제 에너지 포럼 참가자 모집", 부서명: "국제협력과", 작성일: "2024-09-25" },
      { 번호: 3,  제목: "신규 직원 채용 공고",       부서명: "인사과",     작성일: "2024-09-20" },
      { 번호: 4,  제목: "2024년 학술 세미나 일정",   부서명: "연구개발과", 작성일: "2024-10-10" },
      { 번호: 5,  제목: "내부 시스템 업그레이드 안내", 부서명: "IT지원팀",   작성일: "2024-10-15" },
      { 번호: 6,  제목: "국내 봉사단 지원 안내",     부서명: "봉사팀",     작성일: "2024-10-18" },
      { 번호: 7,  제목: "프로젝트 일정 안내",         부서명: "PMO",        작성일: "2024-11-01" },
      { 번호: 8,  제목: "연말 회식 일정 공지",         부서명: "총무부",     작성일: "2024-11-10" },
      { 번호: 9,  제목: "신규 기술 세미나 안내",       부서명: "IT지원팀",   작성일: "2024-11-15" },
      { 번호: 10, 제목: "2025년 예산 계획 설명회",     부서명: "재무팀",     작성일: "2024-11-20" },
      { 번호: 11, 제목: "부서 이동 공지",              부서명: "인사과",     작성일: "2024-11-25" },
      { 번호: 12, 제목: "송년회 행사 안내",            부서명: "총무부",     작성일: "2024-12-05" }
    ];

    // ===================================
    // [3] 공지사항 테이블 렌더링
    // ===================================
    function renderNotices(noticeArray) {
      const tbody = document.getElementById('notice-body');
      tbody.innerHTML = '';

      if (noticeArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="p-4 text-center border border-gray-300">검색 결과가 없습니다.</td></tr>';
        return;
      }

      noticeArray.forEach(notice => {
        const row = document.createElement('tr');
        // 각 셀(td)에도 border 추가 → 세로줄 구현
        row.innerHTML = `
          <td class="p-3 text-center border border-gray-300">${notice.번호}</td>
          <td class="p-3 text-center border border-gray-300">
            <a 
              href="#"
              aria-label="공지사항 제목: ${notice.제목}"
              class="text-blue-600 hover:underline"
            >
              ${notice.제목}
            </a>
          </td>
          <td class="p-3 text-center border border-gray-300">${notice.부서명}</td>
          <td class="p-3 text-center border border-gray-300">${notice.작성일}</td>
        `;
        tbody.appendChild(row);
      });
    }

    // ===================================
    // [4] 초기 페이지 로드 시 렌더링
    // ===================================
    document.addEventListener('DOMContentLoaded', () => {
      renderNotices(notices);
    });

    // ===================================
    // [5] 검색 기능
    // ===================================
    document.getElementById('search-form').addEventListener('submit', event => {
      event.preventDefault();

      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;

      if (!startDate || !endDate) {
        alert("검색 기간을 입력해주세요.");
        return;
      }
      if (new Date(startDate) > new Date(endDate)) {
        alert("검색 시작 날짜가 종료 날짜보다 늦을 수 없습니다.");
        return;
      }

      const filtered = notices.filter(n => {
        const noticeDate = new Date(n.작성일);
        return noticeDate >= new Date(startDate) && noticeDate <= new Date(endDate);
      });

      renderNotices(filtered);
    });

    // ===================================
    // [6] 테이블 정렬 기능
    // ===================================
    let sortDirections = [true, true, true, true]; 
    function sortTable(columnIndex) {
      const sortedNotices = [...notices].sort((a, b) => {
        let valA = Object.values(a)[columnIndex];
        let valB = Object.values(b)[columnIndex];

        // 작성일(인덱스 3)인 경우 Date 객체 비교
        if (columnIndex === 3) {
          valA = new Date(valA);
          valB = new Date(valB);
        }

        if (valA < valB) return sortDirections[columnIndex] ? -1 : 1;
        if (valA > valB) return sortDirections[columnIndex] ? 1 : -1;
        return 0;
      });

      sortDirections[columnIndex] = !sortDirections[columnIndex];
      renderNotices(sortedNotices);
      updateAriaSort(columnIndex);
    }

    function updateAriaSort(columnIndex) {
      const headers = document.querySelectorAll('th');
      headers.forEach((header, idx) => {
        if (idx === columnIndex) {
          header.setAttribute('aria-sort', sortDirections[columnIndex] ? 'ascending' : 'descending');
        } else {
          header.setAttribute('aria-sort', 'none');
        }
      });
    }
  </script>
</body>
</html>
