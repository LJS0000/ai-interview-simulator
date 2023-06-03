import Router from './router/Router.js';
import Header from './components/header.js';
import Qna from './pages/qna.js';
import Simulation from './pages/simulation.js';
import Input from './components/Input.js';

export default class App {
  constructor() {
    this.router = new Router();
    this.header = new Header();
    this.input = new Input();
  }

  initialize() {
    // 경로와 라우터를 생성합니다.
    this.router.addRoute('/', () => {
      const qna = new Qna();
      qna.render();
    });
    this.router.addRoute('/simulation', () => {
      const simulation = new Simulation();
      simulation.render();
    });
    this.router.navigate();

    // 네브바 메뉴를 생성합니다.
    this.header.addMenuItem('질문하기', '/');
    this.header.addMenuItem('모의면접', '/simulation');
    this.header.render(document.getElementById('header-container'));

    // input을 생성합니다.
  }
}
