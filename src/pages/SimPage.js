import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default function SimPage() {
  const simStartScreen = new SimStartScreen();
  const simMiddleScreen = new SimMiddleScreen();

  const mainContainer = document.createElement('main');

  const init = () => {
    mainContainer.classList.add('main-container');
    simStartScreen.render(mainContainer);
  };

  this.progress = () => {
    const section = document.querySelector('#content-container');
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    simMiddleScreen.render(mainContainer);
    section.appendChild(mainContainer);
  };

  this.render = (parentElement) => {
    parentElement.append(mainContainer);
  };

  init();
  this.progress();
}
