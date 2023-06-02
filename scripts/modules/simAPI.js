import API_ENDPOINT from '../configs/apiConfigs';

export default function simAPI() {
  simData = [
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
      content: 'user의 관심 분야는 개발 직군입니다.',
    },
    {
      role: 'user',
      content:
        '다른 설명 없이 user 관심 분야의 예상 면접 질문 3개를 추천해주세요.',
    },
  ];

  console.log(simData);

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
      console.log(res.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
