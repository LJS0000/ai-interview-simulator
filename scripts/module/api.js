const dotenv = require('../module/dotenv.js');

// .env 파일에서 환경변수 로드
dotenv.loadEnv();

// API ENDPOINT
const api = process.env.API_ENDPOINT;
