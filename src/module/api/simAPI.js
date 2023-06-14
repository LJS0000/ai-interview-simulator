/* -- constants -- */
import API_ENDPOINT from '../../configs/apiConfig.js';
import simPrompt from '../../constants/simPrompt.js';
import { sectionContainer } from '../../App.js';
/* -- components -- */
import SimPage from '../../pages/SimPage.js';
import spinner from '../../components/common/spinner.js';

export default function simAPI(userOption) {
  /**
   * 유저가 선택한 option을 simPrompt에 추가합니다.
   * @param {string} userOption
   */
  const updateSimPrompt = (userOption) => {
    simPrompt.push({
      role: 'user',
      content: `user의 관심 분야는 ${userOption} 직군입니다.`,
    });
    fetchRequest(simPrompt);
  };

  /**
   * 기존 대화에 새로운 input값을 추가해 fetch 합니다.
   * @param {object} qaChatList
   */
  const fetchRequest = (simPrompt) => {
    /* pending 상태일 때 spinner를 띄웁니다. */
    sectionContainer.appendChild(spinner());

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(simPrompt),
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        /* 예상 질문을 한 번에 받아서 로컬스토리지에 저장합니다. */
        const simPage = new SimPage();
        const simQuestionList = res.choices[0].message.content;
        localStorage.setItem('simQuestionList', simQuestionList);
        simPage.progress();
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

  updateSimPrompt(userOption);
}
