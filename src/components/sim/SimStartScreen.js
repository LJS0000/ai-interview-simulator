/* - querySelector 변수 - */
import { sectionContainer } from '../../app.js';
/* ----- api ----- */
import simAPI from '../../module/api/simAPI.js';
/* -- components -- */
import createDropdown from './createDropdown.js';

export default function SimStartScreen() {
  const mainContainer = document.createElement('main');
  const clockIcon = document.createElement('img');
  const simStartText = document.createElement('p');
  const simStartForm = document.createElement('form');
  const dropdown = createDropdown();
  const simStartBtn = document.createElement('button');

  const init = () => {
    mainContainer.classList.add('main-sim-container');
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

    btnHandler();
    submitHandler();
  };

  /* 유저가 option을 선택하지 않았을 때 button을 disabled 합니다. */
  const btnHandler = () => {
    simStartForm.addEventListener('input', (e) => {
      if (dropdown.value === '' || dropdown.value === '--선택--') {
        simStartBtn.disabled = true;
      } else {
        simStartBtn.disabled = false;
      }
    });
  };

  /* api 모듈에 데이터를 보냅니다. */
  const submitHandler = () => {
    simStartForm.addEventListener('submit', (e) => {
      e.preventDefault();
      simAPI(dropdown.value);
    });
  };

  this.render = () => {
    sectionContainer.prepend(mainContainer);
  };

  init();
}
