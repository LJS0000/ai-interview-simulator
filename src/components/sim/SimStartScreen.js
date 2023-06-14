/* ----- api ----- */
import simAPI from '../../module/api/simAPI.js';
/* -- components -- */
import SimPage from '../../pages/SimPage.js';
import createDropdown from './createDropdown.js';

export default function SimStartScreen() {
  const mainContainer = document.createElement('main');
  const clockIcon = document.createElement('img');
  const simStartText = document.createElement('p');
  const simStartForm = document.createElement('form');
  const dropdown = createDropdown();
  const simStartBtn = document.createElement('button');

  this.init = () => {
    mainContainer.classList.add('main-container');
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
    mainContainer.append(clockIcon, simStartText, simStartForm);
  };

  /* 유저가 option을 선택하지 않았을 때 button을 disabled 합니다. */
  this.btnHandler = () => {
    simStartForm.addEventListener('input', (e) => {
      if (dropdown.value === '' || dropdown.value === '--선택--') {
        simStartBtn.disabled = true;
      } else {
        simStartBtn.disabled = false;
      }
    });
  };

  // api 모듈에 데이터를 보냅니다.
  this.submitHandler = () => {
    simStartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const simPage = new SimPage();
      simAPI(dropdown.value);
      simPage.progress();
    });
  };

  this.render = (parentElement) => {
    parentElement.append(mainContainer);
  };

  this.init();
  this.btnHandler();
  this.submitHandler();
}
