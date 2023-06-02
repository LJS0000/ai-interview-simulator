import Router from './router/Router.js';
import Header from './components/Header.js';
import Qna from './pages/qna.js';
import Simulation from './pages/simulation.js';

export default class App {
  constructor() {
    this.router = new Router();
    this.header = new Header();
  }

  initialize() {
    // path에 따라 메인 컨텐츠 렌더링
    this.router.addRoute('/', () => {
      const qna = new Qna();
      qna.render();
    });
    this.router.addRoute('/simulation', () => {
      const simulation = new Simulation();
      simulation.render();
    });
    this.router.navigate();

    this.header.addMenuItem('질문하기', '/');
    this.header.addMenuItem('모의면접', '/simulation');
    this.header.render(document.getElementById('header-container'));
  }
}
