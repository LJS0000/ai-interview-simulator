export default function QaPage() {
  const qaChatList = JSON.parse(localStorage.getItem('qaChatList'));
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');

  /* 기존에 채팅한 데이터가 없을 때 가이드화면을 렌더링합니다. */
  const renderGuideScreen = () => {
    const guideContainer = document.createElement('div');

    guideContainer.classList.add('guide-container');

    guideContainer.innerHTML = `<span>안녕하세요!</span>
      <p>AI 인터뷰 시뮬레이터입니다.</p>
      <p>면접에 대해 궁금한 점이 있으신가요?</p>
      <p>자유롭게 질문해 보세요.</p>`;

    mainContainer.appendChild(guideContainer);
  };

  /**
   * 채팅화면을 렌더링합니다.
   * @param {object} qaChatList
   */
  const renderChatScreen = (qaChatList) => {
    const chatContainer = document.createElement('ul');
    chatContainer.classList.add('chat-container');

    for (let i = 2; i < qaChatList.length; i++) {
      const { role, content } = qaChatList[i];

      const chatWrapper = document.createElement('li');
      const chatText = document.createElement('p');
      chatWrapper.classList.add('chat-wrapper');
      chatText.classList.add('chat-text');
      chatText.textContent = content;

      if (role === 'user') {
        chatWrapper.classList.add('user-chat-wrapper');
      } else if (role === 'assistant') {
        chatWrapper.classList.add('assistant-chat-wrapper');
      }

      chatWrapper.appendChild(chatText);
      chatContainer.appendChild(chatWrapper);
    }
    mainContainer.appendChild(chatContainer);
  };

  /**
   * 로컬스토리지에 qaChatList가 있으면 chat 화면을
   * 없으면 guide 화면을 렌더링합니다.
   * @param {object} qaChatList
   */
  this.render = (parentElement) => {
    mainContainer.innerHTML = '';

    if (qaChatList) {
      renderChatScreen(qaChatList);
    } else {
      renderGuideScreen();
    }

    parentElement.prepend(mainContainer);
  };
}
