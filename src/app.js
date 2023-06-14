import Router from './router/Router.js';
import Header from './components/common/Header.js';
import QaPage from './pages/QaPage.js';
import SimPage from './pages/SimPage.js';
import Input from './components/common/Input.js';
import Footer from './components/common/Footer.js';

export default function app() {
  const router = new Router();
  const header = new Header();
  const qaPage = new QaPage();
  const simPage = new SimPage();
  const input = new Input();
  const footer = new Footer();

  const init = () => {
    const path = window.location.pathname;

    // 경로와 라우터를 생성합니다.
    router.addRoute(`/ai-interview-simulator/#/`, () => {
      qaPage.render(document.getElementById('content-container'));
    });
    router.addRoute(`/ai-interview-simulator/#/simulation`, () => {
      simPage.render(document.getElementById('content-container'));
    });
    router.navigate(path);

    // 헤더 네비게이션바
    header.addMenuItem('질문하기', `/ai-interview-simulator/#/`);
    header.addMenuItem('모의면접', `/ai-interview-simulator/#/simulation`);
    header.render(document.getElementById('header-container'));

    // 입력창
    input.render(document.getElementById('content-container'));

    // 푸터
    footer.render(document.getElementById('footer-container'));
  };

  return init();
}
