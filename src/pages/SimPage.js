/* -- components -- */
import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default function SimPage() {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  /* 기존에 있던 화면을 지웁니다 */
  const init = () => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.innerHTML = '';
    }
  };

  /* 시뮬레이션이 시작됐을 때 화면 */
  this.progress = () => {
    init();
    simMiddleScreen.render();
  };

  /* 시뮬레이션이 시작 전 화면 */
  this.render = () => {
    init();
    simStartScreen.render();
  };
}
