import API_ENDPOINT from '../configs/apiConfigs';

export default function qaAPI() {
  qaData = [
    {
      role: 'system',
      content: 'assistant는 친절한 답변가입니다.',
    },
    {
      role: 'user',
      content: 'user가 취업 면접에 관해 질문을 하면 답변해 주세요.',
    },
  ];

  console.log(qaData);

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
      console.log(res);
      console.log(res.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
