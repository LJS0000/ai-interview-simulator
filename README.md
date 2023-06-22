# 👔 AI Interview Simulator

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
![스크린샷 2023-06-22 오후 5 12 37(2)](https://github.com/LJS0000/ai-interview-simulator/assets/108878872/e27de94d-e23d-45b2-a652-b183361db74d)
![ezgif com-video-to-gif](https://github.com/LJS0000/ai-interview-simulator/assets/108878872/b64e8c8b-583e-4144-8544-d9faeb123971)
![ezgif com-video-to-gif](https://github.com/LJS0000/ai-interview-simulator/assets/108878872/bc66dbca-089e-401c-aa61-56ff94e65b39)
![ezgif com-video-to-gif (1)](https://github.com/LJS0000/ai-interview-simulator/assets/108878872/a1553dfc-c1d1-4dae-bf2f-c031798eb53e)
![ezgif com-video-to-gif (2)](https://github.com/LJS0000/ai-interview-simulator/assets/108878872/97c1bc71-9bd4-454f-a169-96ffe660751d)



## 4. 폴더 구조:

프로젝트의 폴더 구조는 다음과 같습니다.
```
.
├── README.md
├── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
├── server.js
├── simulation.html
├── src
│   ├── app.js
│   ├── assets
│   │   └── images
│   │       ├── icon-drawer.svg
│   │       ├── icon-spinner.gif
│   │       ├── icon-submit.svg
│   │       ├── icon-timer.svg
│   │       └── logo.svg
│   ├── components
│   │   ├── common
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Input.js
│   │   │   ├── Sidebar.js
│   │   │   ├── button.js
│   │   │   └── spinner.js
│   │   └── sim
│   │       ├── Progressbar.js
│   │       ├── SImMiddleScreen.js
│   │       ├── SimStartScreen.js
│   │       ├── Timer.js
│   │       └── createDropdown.js
│   ├── configs
│   │   └── apiConfig.js
│   ├── constants
│   │   ├── dropdownOptions.js
│   │   ├── qaPrompt.js
│   │   └── simPrompt.js
│   ├── module
│   │   ├── api
│   │   │   ├── qaAPI.js
│   │   │   └── simAPI.js
│   │   └── event-handler
│   │       └── toggleHandler.js
│   ├── pages
│   │   ├── QaPage.js
│   │   └── SimPage.js
│   └── router
│       └── Router.js
└── style.css
```

## 6. 코드컨벤션:

- 일반함수명: 카멜케이스를 사용합니다.
  - 예: `myComponent()`
- 생성자함수명: 파스칼케이스를 사용합니다.
  - 예: `MyComponent()`
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

## 8. 프로젝트 회고:
### 첫 바닐라JS 프로젝트
> 리액트로는 몇 번 프로젝트를 해봤지만, 바닐라JS는 첫 프로젝트입니다. 자바스크립트에 조금 더 친숙해지는 느낌을 받을 수 있었습니다. 아직 미숙한 점이 너무나 많지만 조금씩 발전해 나간다는 기분이 뿌듯했습니다.
### 자바스크립트 Class와 function
> 그동안 React 프로젝트를 할 때는 100% 함수형으로 작성을 해왔습니다. class에 대한 이해도가 매우 낮았는데, 나중에 주니어가 되면 레거시 코드를 읽거나 수정해야 할 경우를 고려해 class에 대한 이해도를 높이기 위해 class로 프로젝트를 시작했습니다. 현재는 리팩토링하였지만 class는 목적하는 만큼(레거시 코드에 겁먹지 않기) 익숙해진 것 같습니다.
### 프로젝트 완성도에 대한 아쉬움
> 간단한 프로젝트라고 생각하고 시작했는데, 바닐라JS로 기능을 구현하려니 생각보다 작업 시간이 오래 걸렸습니다. 환경변수 모듈도 만들었으나 JS만으로는 구현이 어렵다는 것을 뒤늦게 알았는데, 이런 식으로 낭비한 시간이 꽤 많습니다. 그래도 부딪혀서 배우는 것만큼 소중한 경험은 많이 없으니 앞으로 더 많은 실패를 겪고 성장하고 싶습니다.
### 디자인패턴에 대한 궁금증
> 현재는 리팩토링하여 코드가 없지만 Class 일 때 싱글톤 패턴을 적용했습니다. 그동안은 무작정 프로젝트를 완성하는 것이 목적이었기에 디자인패턴에 대해 무지했는데 앞으로 디자인패턴에 대해 공부하여 체계적이고 퀄리티 좋은 코드를 작성하고 싶습니다.

## 9. 기타:
- [와이어프레임](https://www.figma.com/file/yPERhU87MgpDX1OraeOBUP/AI-Interview-Simulator?type=design&node-id=0-1&t=wz4Yphp5InF07tRE-0)
