import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default function SimPage() {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  const section = document.querySelector('#content-container');

  this.render = () => {
    simStartScreen.render(section);
  };

  this.progress = () => {
    section.removeChild(section.firstChild);
    simMiddleScreen.render(section);
  };
}
