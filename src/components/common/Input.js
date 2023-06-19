import qaAPI from '../../module/api/qaAPI.js';
import SimMiddleScreen from '../sim/SImMiddleScreen.js';

export default function Input() {
  const simMiddleScreen = new SimMiddleScreen();

  const inputContainer = document.createElement('div');
  const form = document.createElement('form');
  const inputField = document.createElement('input');
  const submitBtn = document.createElement('button');
  const submitIcon = document.createElement('img');
  const userAnswer = [];

  this.init = () => {
    inputContainer.classList.add('input-container');
    inputField.classList.add('input-field');
    submitBtn.classList.add('submit-btn');

    inputField.type = 'text';
    submitBtn.appendChild(submitIcon);
    submitIcon.src = './src/assets/images/icon-submit.svg';

    form.append(inputField, submitBtn);
    inputContainer.appendChild(form);
  };

  // api 모듈에 데이터를 보냅니다.
  this.submitHandler = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitText = inputField.value.trim();
      const path = window.location.pathname;

      // 빈 값을 제출하면 help text를 띄우고 제출을 막습니다.
      if (submitText === '') {
        this.inputHelpText();

        // qna페이지에서는 API 요청을 보냅니다.
      } else if (path === '/ai-interview-simulator/') {
        qaAPI(submitText);
        inputField.value = '';

        // 시뮬레이션페이지에서는 input 값을 변수에 저장합니다.
      } else if (path === '/ai-interview-simulator/simulation') {
        userAnswer.push(submitText);
        console.log(userAnswer);
        inputField.value = '';
        simMiddleScreen.updateQuestion();
        return userAnswer;
      }
    });
  };

  // help text를 추가합니다.
  this.inputHelpText = () => {
    const isExistHelpText = inputContainer.querySelector('.help-text');
    //이미 화면에 help text가 있다면 더 이상 추가하지 않습니다.
    if (isExistHelpText) {
      return;
    }
    const helpText = document.createElement('p');
    helpText.textContent = '내용을 입력하세요.';
    helpText.classList.add('help-text');
    inputContainer.appendChild(helpText);
  };

  this.render = (parentElement) => {
    parentElement.appendChild(inputContainer);
  };

  this.init();
  this.submitHandler();
}
