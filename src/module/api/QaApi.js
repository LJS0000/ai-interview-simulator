import API_ENDPOINT from '../../configs/apiConfig.js';
import qaData from '../../constants/qaData.js';
import spinner from '../../components/common/spinner.js';
import { sectionContainer } from '../../app.js';

export default function QaApi() {
  // 로컬 스토리지에서 채팅 데이터를 가져오며
  // 새로고침 시에도 데이터를 유지할 수 있습니다.
  const storedChatList = localStorage.getItem('qaChatList');
  const qaChatList = storedChatList ? JSON.parse(storedChatList) : [];

  // 채팅 누적을 위해 싱글톤패턴을 적용합니다.
  if (QaApi.instance) {
    return QaApi.instance;
  }
  QaApi.instance = this;

  // 로컬스토리지에 화면에 그려질 데이터를 저장합니다.
  const saveQaChatList = () => {
    localStorage.setItem('qaChatList', JSON.stringify(qaChatList));
  };

  // input을 받아서 API body값으로 보낼 데이터를 추가합니다.
  const updateQaData = (userContent) => {
    qaData.push({
      role: 'user',
      content: userContent,
    });
    fetchRequest(userContent);
  };

  // 학습용 qaData 데이터를 fetch 합니다.
  const fetchRequest = (userContent) => {
    // 로딩 화면 표시
    sectionContainer.appendChild(spinner());

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(qaData),
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
        qaChatList.push(chat);

        // 로딩 화면 제거
        sectionContainer.removeChild(document.querySelector('.spinner'));
      })
      .then(async () => {
        saveQaChatList();
        await location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('Error: 연결에 실패했습니다.');
      });
  };
}
