const express = require('express');
const path = require('path');
const app = express();

// 1. 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// 2. 기본 라우트('/'): public/index.html 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. 서버 포트 지정 (Cloudtype 환경변수 또는 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
