console.log(process.env.API_ENDPOINT);

let $input = document.querySelector('input');
let $button = document.querySelector('button');

let data = [
  {
    role: 'system',
    content: 'assistant는 제주 여행 전문가이다.',
  },
];

$button.addEventListener('click', (e) => {
  e.preventDefault();
  userInputData = $input.value;
  $input.value = '';

  data.push({
    role: 'user',
    content: userInputData,
  });

  chatGptAPI();
});

function chatGptAPI() {
  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    redirect: 'follow',
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      // console.log(res.choices[0].message.content)
      document.querySelector('#contents').innerText =
        res.choices[0].message.content;
    });
  // 아래 코드는 fetch 성공, 실패, 통신 중 여부와 상관없이 실행됩니다. 비동기에요.
  console.log('hello world');
}
