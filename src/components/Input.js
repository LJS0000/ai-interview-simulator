import QaApi from '../api/qaAPI.js';

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

  // input 제출
  submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.fetchInput();
    });
  }

  // fetch 실행
  fetchInput() {
    const userContent = this.inputField.value;
    const qaApi = new QaApi();
    qaApi.fetchRequest();
    console.log('전송되었습니다:', userContent);

    // input창 비우기
    this.inputField.value = '';
  }

  render(parentElement) {
    parentElement.appendChild(this.inputContainer);
  }
}
