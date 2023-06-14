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

export function App() {
  const router = new Router();
  const header = new Header();
  const qaPage = new QaPage();
  const simPage = new SimPage();
  const input = new Input();
  const footer = new Footer();

  this.init = () => {
    const hash = window.location.hash;

    /* 라우터를 생성하고 해당 화면을 렌더링합니다. */
    router.addRoute(`/`, () => {
      qaPage.render(sectionContainer);
    });
    router.addRoute(`/simulation`, () => {
      simPage.render(sectionContainer);
    });
    router.navigate(hash);

    // 헤더 네비게이션바
    header.addMenuItem('질문하기', `/`);
    header.addMenuItem('모의면접', `/simulation`);
    header.render(headerContainer);

    // 입력창
    input.render(sectionContainer);

    // 푸터
    footer.render(footerContainer);
  };
}
