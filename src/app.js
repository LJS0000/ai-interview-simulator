import Router from './router/Router.js';
import Header from './components/header.js';
import Qa from './pages/Qa.js';
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
      const qa = new Qa();
      qa.render();
    });
    this.router.addRoute('/simulation', () => {
      const simulation = new Simulation();
      simulation.render();
    });
    this.router.navigate();

    // 네비게이션바
    this.header.addMenuItem('질문하기', '/');
    this.header.addMenuItem('모의면접', '/simulation');
    this.header.render(document.getElementById('header-container'));

    // 입력창
    this.input.render(document.getElementById('main-container'));
  }
}
