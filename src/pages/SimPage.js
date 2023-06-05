import SimStartScreen from '../components/sim/SimStartScreen.js';
export default class SimPage {
  constructor() {
    this.mainContainer = document.createElement('main');
    this.simStartScreen = new SimStartScreen();

    this.init();
  }

  init() {
    this.mainContainer.classList.add('main-container');
    this.simStartScreen.render(this.mainContainer);
  }

  render() {
    const section = document.querySelector('#content-container');
    section.appendChild(this.mainContainer);
  }
}
