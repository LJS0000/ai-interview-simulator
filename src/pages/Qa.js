export default class Qa {
  constructor() {
    this.mainContainer = document.createElement('main');
    this.chatContainer = document.createElement('ul');
    this.chatWrapper = document.createElement('li');
    this.chatText = document.createElement('p');

    this.init();
  }

  init() {
    this.mainContainer.classList.add('main-container');

    // 전체 채팅
    this.chatContainer.classList.add('chat-container');
    // 말풍선
    this.chatWrapper.classList.add('chat-wrapper');
    // 채팅 텍스트
    this.chatText.classList.add('chat-text');
    this.chatText.value = '테스트입니다';

    this.chatWrapper.appendChild(this.chatText);
    this.chatContainer.appendChild(this.chatWrapper);
    this.mainContainer.appendChild(this.chatContainer);
  }

  render() {
    const section = document.querySelector('#content-container');
    console.log(section);
    section.appendChild(this.mainContainer);
  }
}
