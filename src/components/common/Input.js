import QaApi from '../../module/api/QaApi.js';

export default class Input {
  constructor() {
    this.inputContainer = document.createElement('div');
    this.form = document.createElement('form');
    this.inputField = document.createElement('input');
    this.submitBtn = document.createElement('button');

    this.init();
    this.submitHandler();
  }

  init() {
    this.inputContainer.classList.add('input-container');

    // Input 입력창
    this.inputField.classList.add('input-field');
    this.inputField.type = 'text';
    // Input 입력 버튼
    this.submitBtn.classList.add('submit-btn');
    const submitIcon = document.createElement('img');
    submitIcon.src = './src/assets/images/icon-submit.svg';
    this.submitBtn.appendChild(submitIcon);
    // form 태그
    this.form.appendChild(this.inputField);
    this.form.appendChild(this.submitBtn);

    this.inputContainer.appendChild(this.form);
  }

  // api 모듈에 데이터를 보냅니다.
  submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      const userContent = this.inputField.value.trim();

      // 빈 값을 제출하면 help text를 띄우고 제출을 막습니다.
      if (userContent === '') {
        this.inputHelpText();

        // qna페이지에서는 request 요청을 보냅니다.
      } else if (window.location.pathname === '/') {
        const qaApi = new QaApi();
        qaApi.updateQaData(userContent);

        this.inputField.value = '';

        // simulation 페이지에서는 로컬스토리지에 값을 저장합니다.
      } else if (window.location.pathname === '/simulation') {
        const storedAnswers = localStorage.getItem('answers');
        const answers = storedAnswers ? JSON.parse(storedAnswers) : [];
        answers.push(userContent);
        localStorage.setItem('answers', JSON.stringify(answers));
      }
    });
  }

  // help text
  inputHelpText() {
    const isExistHelpText = this.inputContainer.querySelector('.help-text');
    if (isExistHelpText) {
      return;
    }
    const helpText = document.createElement('p');
    helpText.textContent = '내용을 입력하세요.';
    helpText.classList.add('help-text');
    this.inputContainer.appendChild(helpText);
  }

  render(parentElement) {
    parentElement.appendChild(this.inputContainer);
  }
}
