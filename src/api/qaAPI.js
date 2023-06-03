import API_ENDPOINT from '../config/apiConfigs.js';

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

    // 화면에 그려질 데이터
    this.qaChatList = [];

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
        console.log(this.qaChatList);
      })
      .then(() => {
        this.saveQaChatList();
        // 화면 렌더 메소드 실행
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
