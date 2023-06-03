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
    submitIcon.src = '../assets/images/icon-submit.svg';
    this.submitBtn.appendChild(submitIcon);
    // form 태그
    this.form.appendChild(this.inputField);
    this.form.appendChild(this.submitBtn);

    this.inputContainer.appendChild(this.inputField);
    this.inputContainer.appendChild(this.submitBtn);
  }

  submitHandler() {
    // form 태그 사용하여 버튼과 Enter로 제출
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitMsg();
    });
  }

  submitMsg() {
    const message = this.inputField.value;
    // 여기에서 fetch를 사용하여 메시지를 전송하는 로직을 구현하면 됩니다.
    console.log('전송되었습니다:', message);

    // input창 비우기
    this.inputField.value = '';
  }

  render(parentElement) {
    parentElement.appendChild(this.inputContainer);
  }
}
