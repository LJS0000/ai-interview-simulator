const express = require('express');
const app = express();
const port = 3000;

// 루트 경로로 요청이 들어왔을 때 "index.html" 파일을 보냅니다.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 웹 서버를 시작합니다.
app.listen(port, () => {
  console.log(
    `로컬호스트에서 웹 페이지가 실행 중입니다: http://localhost:${port}`
  );
});
