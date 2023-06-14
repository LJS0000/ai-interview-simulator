import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';
import { sectionContainer } from '../App.js';

export default function SimPage() {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  this.render = () => {
    simStartScreen.render(sectionContainer);
  };

  this.progress = () => {
    sectionContainer.removeChild(section.firstChild);
    simMiddleScreen.render(sectionContainer);
  };
}
