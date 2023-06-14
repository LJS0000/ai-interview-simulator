/* -- components -- */
import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default function SimPage() {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  const init = () => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.innerHTML = '';
    }
  };

  this.progress = () => {
    init();
    simMiddleScreen.render();
  };

  this.render = () => {
    init();
    simStartScreen.render();
  };
}
