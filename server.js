const express = require('express');
const app = express();
const port = 3000;

// 정적 파일을 제공할 경로를 설정합니다.
app.use(
  express.static(__dirname, {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
      if (path.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      }
      if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      }
      if (path.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
    },
  })
);

// 어떤 경로로 요청하든 'index.html' 파일을 보냅니다.
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 웹 서버를 시작합니다.
app.listen(port, () => {
  console.log(
    `로컬호스트에서 웹 페이지가 실행 중입니다: http://localhost:${port}`
  );
});
