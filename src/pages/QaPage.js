import { section } from '../../index.js';

export default function QaPage() {
  const qaContainer = document.createElement('main');
  qaContainer.classList.add('qa-container');

  const initChatScreen = (data) => {
    const qaChatList = JSON.parse(data);
    const chatContainer = document.createElement('ul');
    chatContainer.classList.add('chat-container');

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
        chatContainer.appendChild(chatWrapper);
      }
    }

    qaContainer.appendChild(chatContainer);
  };

  const initGuideScreen = () => {
    const guideContainer = document.createElement('div');
    const guideText = document.createElement('p');

    guideContainer.classList.add('guide-container');
    guideText.classList.add('guide-text');

    guideText.innerHTML =
      '안녕하세요! AI 인터뷰 시뮬레이터입니다. 면접에 대해 궁금한 점이 있으신가요? 자유롭게 질문해 보세요.';

    guideContainer.appendChild(guideText);
    qaContainer.appendChild(guideContainer);
  };

  const render = () => {
    // 로컬스토리지에 기존 데이터가 있으면 chat 화면을
    // 없다면 신규 사용자를 위한 화면을 렌더합니다.
    const data = localStorage.getItem('qaChatList');
    if (data) {
      initChatScreen(data);
    } else {
      initGuideScreen();
    }

    section.appendChild(qaContainer);
  };

  return {
    render,
  };
}
