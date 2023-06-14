/* -- components -- */
import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default function SimPage(mainContainer) {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  this.progress = () => {
    init();
    simMiddleScreen.render();
  };

  this.render = () => {
    init();
    simStartScreen.render();
  };
}
