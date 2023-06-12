# 👔 AI Interview Simulator V1.0.0

이 프로젝트는 사용자가 모의면접을 진행하거나 면접 관련 질문을 할 수 있는 웹 서비스입니다!
라이브러리나 프레임워크 없이 Vanilla JavaScript, pure CSS, HTML을 사용해 구현했습니다.

### [📌 AI Interview Simulator 경험하기](https://ljs0000.github.io/ai-interview-simulator/)

### [📌 프로젝트 Notion](https://www.notion.so/career-ljs-develope/HTML-CSS-JavaScript-chatGPT-a56b424edd44470c9946553dd86d8269)

## 1. 기술스택:

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logoColor=white">

## 2. 기능:

- 질문에 대답하여 면접 시뮬레이션을 수행할 수 있습니다.
- 답변은 제주코딩베이스캠프에서 제공한 API endpoint에서 fetch합니다.
- 사용자의 응답은 localstorage에 저장됩니다.
- 미니멀하고 직관적인 사용자 인터페이스를 제공합니다.

## 3. 화면:

## 4. 폴더 구조:

프로젝트의 폴더 구조는 다음과 같습니다.

## 6. 코드컨벤션:

- 함수명: 카멜케이스를 사용합니다.
  - 예: `myComponent()`
- 변수명: 카멜케이스를 사용합니다.
  - 예: `orderCount, customerName`
- 약어: 다음 항목은 약어를 사용합니다.
  - response > `res`
  - error > `err`
  - button > `btn`
  - image > `img`
  - simulation > `sim`
- 컴포넌트 선언: 함수 선언식을 사용합니다.
  - 예:

```js
function myComponent() {
  // ...
}
```

- 컴포넌트 내부 함수: 화살표함수를 사용합니다.
  - 예:

```js
function component() {
  const innerFunc = () => {
    // ...
  };
}
```

- 단일 함수 export: 파일명은 해당 함수와 동일하게 설정합니다.
  - 예: `myComponent.js` 파일은 `myComponent` 함수만을 export합니다.
- 폴더명: 케밥 케이스를 사용합니다.
  - 예: `module, my-folder`

## 7. 사용 방법:

다음 주소에 접속합니다.

- https://ljs0000.github.io/ai-interview-simulator/

로컬 환경에서 프로젝트를 사용하려면...

1. 현재 리포지토리를 클론하거나 프로젝트 파일을 다운로드합니다.
2. `$ npm run dev` 로컬 서버 실행 명령어를 입력합니다.
3. 사용자의 응답은 로컬 스토리지에 저장됩니다.

## 8. 참고:

- [와이어프레임](https://www.figma.com/file/yPERhU87MgpDX1OraeOBUP/AI-Interview-Simulator?type=design&node-id=0-1&t=wz4Yphp5InF07tRE-0)
