const express = require('express');
const app = express();
const port = 3000;
const baseURL = '/ai-interview-simulator';

// 정적 파일을 제공할 경로를 설정합니다.
app.use(
  baseURL,
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

app.get(`${baseURL}/`, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get(`${baseURL}/simulation`, (req, res) => {
  res.sendFile(__dirname + '/simulation.html');
});

// 웹 서버를 시작합니다.
app.listen(port, () => {
  console.log(
    `로컬호스트에서 웹 페이지가 실행 중입니다: http://localhost:${port}${baseURL}`
  );
});
