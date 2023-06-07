import SimStartScreen from '../components/sim/SimStartScreen.js';
import SimMiddleScreen from '../components/sim/SImMiddleScreen.js';

export default class SimPage {
  constructor() {
    this.mainContainer = document.createElement('main');
    this.mainContainer.classList.add('main-container');

    this.simStartScreen = new SimStartScreen();
    this.simMiddleScreen = new SimMiddleScreen();
  }

  init() {
    this.simStartScreen.render(this.mainContainer);
  }

  progress() {
    const section = document.querySelector('#content-container');
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    this.simMiddleScreen.render(this.mainContainer);
    section.append(this.mainContainer);
  }

  render() {
    this.init();

    const section = document.querySelector('#content-container');
    section.append(this.mainContainer);
  }
}
