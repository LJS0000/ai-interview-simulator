import createDropdown from './createDropdown.js';
import SimPage from '../../pages/SimPage.js';
import SimApi from '../../module/api/SimApi.js';

export default class SimStartScreen {
  constructor() {
    this.simStartContainer = document.createElement('div');
    this.clockIcon = document.createElement('img');
    this.simStartText = document.createElement('p');
    this.simStartForm = document.createElement('form');
    this.dropdown = createDropdown();
    this.simStartBtn = document.createElement('button');

    this.init();
    this.btnHandler();
    this.submitHandler();
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
    this.simStartBtn.disabled = true;

    this.simStartForm.append(this.dropdown, this.simStartBtn);
    this.simStartContainer.append(
      this.clockIcon,
      this.simStartText,
      this.simStartForm
    );
  }

  // 유저가 옵션을 선택하지 않았을 때는 button을 disabled 합니다.
  btnHandler() {
    this.simStartForm.addEventListener('input', (e) => {
      if (this.dropdown.value === '' || this.dropdown.value === '--선택--') {
        this.simStartBtn.disabled = true;
      } else {
        this.simStartBtn.disabled = false;
      }
    });
  }

  // api 모듈에 데이터를 보냅니다.
  submitHandler() {
    this.simStartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const simApi = new SimApi();
      const simPage = new SimPage();
      simApi.updateSimData(this.dropdown.value);
      simPage.progress();
    });
  }

  render(parentElement) {
    parentElement.append(this.simStartContainer);
  }
}
