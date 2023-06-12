import Router from './router/Router.js';
import Header from './components/common/Header.js';
import QaPage from './pages/QaPage.js';
import SimPage from './pages/SimPage.js';
import Input from './components/common/Input.js';
import Footer from './components/common/Footer.js';

export default function App() {
  const router = new Router();
  const header = new Header();
  const input = new Input();
  const footer = new Footer();

  const init = () => {
    const path = window.location.pathname;

    // 경로와 라우터를 생성합니다.
    router.addRoute(`/`, () => {
      const qaPage = new QaPage();
      qaPage.render();
    });
    router.addRoute(`/simulation`, () => {
      const simPage = new SimPage();
      simPage.render();
    });
    router.navigate(path);

    // 헤더 네비게이션바
    header.addMenuItem('질문하기', `/`);
    header.addMenuItem('모의면접', `/simulation`);
    header.render(document.getElementById('header-container'));

    // 입력창
    input.render(document.getElementById('content-container'));

    // 푸터
    footer.render(document.getElementById('footer-container'));
  };

  return init();
}
