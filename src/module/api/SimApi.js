import API_ENDPOINT from '../../configs/apiConfig.js';

export default class simApi {
  constructor() {
    // AI 학습용 데이터
    this.simData = [
      {
        role: 'system',
        content: 'assistant는 면접관입니다.',
      },
      {
        role: 'user',
        content: '모든 답변은 한글로 해주세요.',
      },
      {
        role: 'user',
        content:
          '다른 설명 없이 user 관심 분야의 예상 면접 질문 3개를 추천해주세요.',
      },
    ];
  }

  // 드롭다운에서 선택한 options을
  // API body값으로 보낼 데이터를 추가합니다.
  updateSimData(userOption) {
    this.simData.push({
      role: 'user',
      content: `user의 관심 분야는 ${userOption} 직군입니다.`,
    });
    this.fetchRequest(this.simData);
  }

  fetchRequest(simData) {
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
        console.log(res);
        const questions = res.choices[0].message.content;
        localStorage.setItem('questions', questions);
        return questions;
      })
      .then((questions) => {
        // 다음 화면으로 넘어갑니다.
      })
      .catch((err) => {
        console.log(err);
        alert('Error: 연결에 실패했습니다.');
      });
  }
}
