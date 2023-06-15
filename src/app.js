import Router from './router/Router.js';
import Header from './components/common/Header.js';
import QaPage from './pages/QaPage.js';
import SimPage from './pages/SimPage.js';
import Input from './components/common/Input.js';
import Footer from './components/common/Footer.js';

/* querySelector를 줄이기 위해 export하여 사용합니다. */
export const headerContainer = document.querySelector('#header-container');
export const sectionContainer = document.querySelector('#section-container');
export const footerContainer = document.querySelector('#footer-container');

export function app() {
  const router = new Router();
  const header = new Header();
  const qaPage = new QaPage();
  const simPage = new SimPage();
  const input = new Input();
  const footer = new Footer();

  const init = () => {
    const path = window.location.pathname;

    /* 라우터를 생성하고 해당 화면을 렌더링합니다. */
    router.addRoute(`/ai-interview-simulator/`, () => {
      qaPage.render(sectionContainer);
    });
    router.addRoute(`/ai-interview-simulator/simulation`, () => {
      simPage.render(sectionContainer);
    });
    router.navigate(path);

    // 헤더 네비게이션바
    header.addMenuItem('질문하기', `/ai-interview-simulator/`);
    header.addMenuItem('모의면접', `/ai-interview-simulator/simulation`);
    header.render(headerContainer);

    // 입력창
    input.render(sectionContainer);

    // 푸터
    footer.render(footerContainer);
  };

  init();
}
