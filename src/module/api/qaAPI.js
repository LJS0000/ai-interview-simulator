/* ----- api ----- */
import API_ENDPOINT from '../../configs/apiConfig.js';
/* -- constants -- */
import qaPrompt from '../../constants/qaPrompt.js';
import { sectionContainer } from '../../app.js';
/* -- components -- */
import spinner from '../../components/common/spinner.js';

export default function qaAPI(submitText) {
  const storedChatList = localStorage.getItem('qaChatList');
  const qaChatList = storedChatList ? JSON.parse(storedChatList) : qaPrompt;

  /**
   * input 값을 qaChatList에 추가하고, fetch 합니다.
   * @param {string} submitText
   */
  const updateQaChatList = (submitText) => {
    qaChatList.push({
      role: 'user',
      content: submitText,
    });
    fetchRequest(qaChatList);
  };

  /**
   * 갱신된 qaChatList 로컬스토리지에 저장합니다.
   * @param {string} submitText
   */
  const saveQaChatList = () => {
    localStorage.setItem('qaChatList', JSON.stringify(qaChatList));
  };

  /**
   * 기존 대화에 새로운 input값을 추가해 fetch 합니다.
   * @param {object} qaChatList
   */
  const fetchRequest = (qaChatList) => {
    /* pending 상태일 때 spinner를 띄웁니다. */
    sectionContainer.appendChild(spinner());

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(qaChatList),
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        const qaRes = {
          role: 'assistant',
          content: res.choices[0].message.content,
        };
        qaChatList.push(qaRes);
      })
      .then(() => {
        saveQaChatList();
      })
      .catch((err) => {
        console.log(err);
        alert('Error: 연결에 실패했습니다.');
      })
      .finally(() => {
        /* spinner 제거 */
        sectionContainer.removeChild(document.querySelector('.spinner'));
      });
  };

  updateQaChatList(submitText);
}
