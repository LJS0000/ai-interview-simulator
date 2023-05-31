const fs = require('fs');
const path = require('path');

// .env 파일 process.env에 할당하기
function loadEnv() {
  const dotenvPath = path.resolve(__dirname, '../../.env');
  const envVariables = fs.readFileSync(dotenvPath, 'utf-8').split('\n');

  for (let i of envVariables) {
    const [key, value] = i.split('=');
    process.env[key] = value;
  }
}

module.exports = {
  loadEnv,
};
