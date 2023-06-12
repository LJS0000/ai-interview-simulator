import API_ENDPOINT from '../../configs/apiConfig.js';
import Spinner from '../../components/common/Spinner.js';
export default class QaApi {
  constructor() {
    // 채팅 누적을 위해 싱글톤패턴을 적용합니다.
    if (QaApi.instance) {
      return QaApi.instance;
    }

    // AI 학습용 데이터
    this.qaData = [
      {
        role: 'system',
        content: 'assistant는 친절한 답변가입니다.',
      },
      {
        role: 'user',
        content: 'user가 취업 면접에 관해 질문을 하면 답변해 주세요.',
      },
    ];

    // 로컬 스토리지에서 채팅 데이터를 가져오며
    // 새로고침 시에도 데이터를 유지할 수 있습니다.
    const storedChatList = localStorage.getItem('qaChatList');
    this.qaChatList = storedChatList ? JSON.parse(storedChatList) : [];

    QaApi.instance = this;
  }

  // input을 받아서 API body값으로 보낼 데이터를 추가합니다.
  updateQaData(userContent) {
    this.qaData.push({
      role: 'user',
      content: userContent,
    });
    this.fetchRequest(userContent);
  }

  // 학습용 qaData 데이터를 fetch 합니다.
  fetchRequest(userContent) {
    // 로딩 화면 표시
    const section = document.getElementById('content-container');
    section.appendChild(Spinner());

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.qaData),
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        const chat = [
          {
            role: 'user',
            content: userContent,
          },
          {
            role: 'system',
            content: res.choices[0].message.content,
          },
        ];
        this.qaChatList.push(chat);

        // 로딩 화면 제거
        section.removeChild(document.querySelector('.spinner'));
      })
      .then(async () => {
        this.saveQaChatList();
        await location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('Error: 연결에 실패했습니다.');
      });
  }

  // 로컬스토리지에 화면에 그려질 데이터를 저장합니다.
  saveQaChatList() {
    localStorage.setItem('qaChatList', JSON.stringify(this.qaChatList));
  }
}
