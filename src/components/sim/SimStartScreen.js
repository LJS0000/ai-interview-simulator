import createDropdown from './createDropdown.js';

export default class SimStartScreen {
  constructor() {
    this.simStartContainer = document.createElement('div');
    this.clockIcon = document.createElement('img');
    this.simStartText = document.createElement('p');
    this.simStartForm = document.createElement('form');
    this.dropdown = createDropdown();
    this.simStartBtn = document.createElement('button');

    this.init();
  }

  init() {
    this.simStartContainer.classList.add('sim-start-container');
    this.clockIcon.classList.add('clock-icon');
    this.simStartText.classList.add('sim-start-text');
    this.simStartForm.classList.add('sim-start-form');
    this.dropdown.classList.add('sim-start-dropdown');
    this.simStartBtn.classList.add('sim-start-btn');

    this.clockIcon.src = 'src/assets/images/icon-timer.svg';
    this.simStartText.textContent = '80초 안에 답변하세요!';
    this.simStartBtn.textContent = 'START';

    this.simStartForm.append(this.dropdown, this.simStartBtn);
    this.simStartContainer.append(
      this.clockIcon,
      this.simStartText,
      this.simStartForm
    );
  }

  render(parentElement) {
    parentElement.append(this.simStartContainer);
  }
}
