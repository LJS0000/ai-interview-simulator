import createDropdown from './createDropdown.js';
import SimPage from '../../pages/SimPage.js';
import SimApi from '../../module/api/SimApi.js';

export default function SimStartScreen() {
  const simStartContainer = document.createElement('div');
  const clockIcon = document.createElement('img');
  const simStartText = document.createElement('p');
  const simStartForm = document.createElement('form');
  const dropdown = createDropdown();
  const simStartBtn = document.createElement('button');

  const init = () => {
    simStartContainer.classList.add('sim-start-container');
    clockIcon.classList.add('clock-icon');
    simStartText.classList.add('sim-start-text');
    simStartForm.classList.add('sim-start-form');
    dropdown.classList.add('sim-start-dropdown');
    simStartBtn.classList.add('sim-start-btn');

    clockIcon.src = 'src/assets/images/icon-timer.svg';
    simStartText.textContent = '80초 안에 답변하세요!';
    simStartBtn.textContent = 'START';
    simStartBtn.disabled = true;

    simStartForm.append(dropdown, simStartBtn);
    simStartContainer.append(clockIcon, simStartText, simStartForm);
  };

  // 유저가 옵션을 선택하지 않았을 때는 button을 disabled 합니다.
  const btnHandler = () => {
    simStartForm.addEventListener('input', (e) => {
      if (dropdown.value === '' || dropdown.value === '--선택--') {
        simStartBtn.disabled = true;
      } else {
        simStartBtn.disabled = false;
      }
    });
  };

  // api 모듈에 데이터를 보냅니다.
  const submitHandler = () => {
    simStartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const simApi = new SimApi();
      const simPage = new SimPage();
      simApi.updateSimData(dropdown.value);
      simPage.progress();
    });
  };

  this.render = (parentElement) => {
    parentElement.append(simStartContainer);
  };

  init();
  btnHandler();
  submitHandler();
}
