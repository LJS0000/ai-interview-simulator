import QaApi from '../../module/api/QaApi.js';

export default function Input() {
  const inputContainer = document.createElement('div');
  const form = document.createElement('form');
  const inputField = document.createElement('input');
  const submitBtn = document.createElement('button');

  this.init = () => {
    inputContainer.classList.add('input-container');

    // Input 입력창
    inputField.classList.add('input-field');
    inputField.type = 'text';
    // Input 입력 버튼
    submitBtn.classList.add('submit-btn');
    const submitIcon = document.createElement('img');
    submitIcon.src = './src/assets/images/icon-submit.svg';
    submitBtn.appendChild(submitIcon);
    // form 태그
    form.appendChild(inputField);
    form.appendChild(submitBtn);

    inputContainer.appendChild(form);
  };

  // api 모듈에 데이터를 보냅니다.
  this.submitHandler = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const userContent = inputField.value.trim();

      // 빈 값을 제출하면 help text를 띄우고 제출을 막습니다.
      if (userContent === '') {
        this.inputHelpText();

        // qna페이지에서는 request 요청을 보냅니다.
      } else if (window.location.pathname === '/') {
        const qaApi = new QaApi();
        qaApi.updateQaData(userContent);

        inputField.value = '';

        // simulation 페이지에서는 로컬스토리지에 값을 저장합니다.
      } else if (window.location.pathname === '/simulation') {
        const storedAnswers = localStorage.getItem('answers');
        const answers = storedAnswers ? JSON.parse(storedAnswers) : [];
        answers.push(userContent);
        localStorage.setItem('answers', JSON.stringify(answers));
        inputField.value = '';
      }
    });
  };

  // help text
  this.inputHelpText = () => {
    const isExistHelpText = inputContainer.querySelector('.help-text');
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
