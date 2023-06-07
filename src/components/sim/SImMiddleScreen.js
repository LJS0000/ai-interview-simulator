import SimApi from '../../module/api/SimApi.js';

export default class SimMiddleScreen {
  constructor() {
    this.simStartContainer = document.createElement('div');
    this.clockIcon = document.createElement('img');
    this.simStartText = document.createElement('p');
    this.simStartForm = document.createElement('form');
    this.dropdown = createDropdown();
    this.simStartBtn = document.createElement('button');

    this.init();
  }

  init() {}

  render(parentElement) {
    parentElement.append(this.simStartContainer);
  }
}
