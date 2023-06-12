import API_ENDPOINT from '../../configs/apiConfig.js';
import simData from '../../constants/simData.js';
import SimPage from '../../pages/SimPage.js';

export default function SimApi() {
  const fetchRequest = (simData) => {
    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(simData),
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        const questions = res.choices[0].message.content;
        localStorage.setItem('questions', questions);
        return questions;
      })
      .then(() => {
        const simPage = new SimPage();
        simPage.progress();
      })
      .catch((err) => {
        console.log(err);
        alert('Error: 연결에 실패했습니다.');
      });
  };

  // 드롭다운에서 선택한 options을
  // API body값으로 보낼 데이터를 추가합니다.
  this.updateSimData = (userOption) => {
    simData.push({
      role: 'user',
      content: `user의 관심 분야는 ${userOption} 직군입니다.`,
    });
    fetchRequest(simData);
  };
}
