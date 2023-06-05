import Router from './router/Router.js';
import Header from './components/common/Header.js';
import QaPage from './pages/QaPage.js';
import SimPage from './pages/SimPage.js';
import Input from './components/common/Input.js';
import Footer from './components/common/Footer.js';

export default class App {
  constructor() {
    this.router = new Router();
    this.header = new Header();
    this.input = new Input();
    this.footer = new Footer();
  }

  initialize() {
    // 경로와 라우터를 생성합니다.
    this.router.addRoute('/ai-interview-simulator/', () => {
      const qaPage = new QaPage();
      qaPage.render();
    });
    this.router.addRoute('/ai-interview-simulator/simulation', () => {
      const simPage = new SimPage();
      simPage.render();
    });
    this.router.navigate();

    // 헤더 네비게이션바
    this.header.addMenuItem('질문하기', '/ai-interview-simulator/');
    this.header.addMenuItem('모의면접', '/ai-interview-simulator/simulation');
    this.header.render(document.getElementById('header-container'));

    // 입력창
    this.input.render(document.getElementById('content-container'));

    // 푸터
    this.footer.render(document.getElementById('footer-container'));
  }
}
