export default class QaPage {
  constructor() {
    this.mainContainer = document.createElement('main');
    this.mainContainer.classList.add('main-container');
  }

  initChatScreen(data) {
    this.chatContainer = document.createElement('ul');
    this.chatContainer.classList.add('chat-container');

    const qaChatList = JSON.parse(data);
    console.log(qaChatList);

    for (const i of qaChatList) {
      for (const chat of i) {
        const { role, content } = chat;

        const chatWrapper = document.createElement('li');
        const chatText = document.createElement('p');
        chatWrapper.classList.add('chat-wrapper');
        chatText.classList.add('chat-text');
        chatText.textContent = content;

        if (role === 'user') {
          chatWrapper.classList.add('user-chat');
        } else if (role === 'system') {
          chatWrapper.classList.add('system-chat');
        }

        chatWrapper.appendChild(chatText);
        this.chatContainer.appendChild(chatWrapper);
      }
    }

    this.mainContainer.appendChild(this.chatContainer);
  }

  // 주석 처리한 기능은(샘플 질문 버튼) 후반부에 작업 예정입니다.
  initGuideScreen() {
    const guideContainer = document.createElement('div');
    const guideTitle = document.createElement('h1');
    const guideText = document.createElement('p');
    // const guideSampleContainer = document.createElement('div');
    // const guideSampleBtn = document.createElement('button');

    guideContainer.classList.add('guide-container');
    guideTitle.classList.add('guide-title');
    guideText.classList.add('guide-text');
    // guideSampleContainer.classList.add('guide-sample-container');
    // guideSampleBtn.classList.add('guide-sample-btn');

    guideTitle.innerHTML = `안녕하세요!<br>AI 인터뷰 시뮬레이터입니다.`;
    guideText.innerHTML = `면접에 대해 궁금한 점이 있으신가요?<br>자유롭게 질문해 보세요.`;
    // guideSampleBtn.textContent = '텍스트가 들어갑니다';

    // guideSampleContainer.appendChild(guideSampleBtn);
    // guideContainer.appendChild(guideSampleContainer);
    guideContainer.append(guideTitle, guideText);
    this.mainContainer.appendChild(guideContainer);
  }

  render() {
    const section = document.querySelector('#content-container');

    // 로컬스토리지에 기존 데이터가 있으면 chat 화면을
    // 없다면 신규 사용자를 위한 화면을 렌더합니다.
    const data = localStorage.getItem('qaChatList');
    if (data) {
      this.initChatScreen(data);
    } else {
      this.initGuideScreen();
    }

    section.appendChild(this.mainContainer);
  }
}
