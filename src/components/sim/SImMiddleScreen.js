import timer from './timer.js';
export default class SimMiddleScreen {
  constructor() {
    this.simMiddleContainer = document.createElement('div');
    this.simQuestionBubble = document.createElement('div');
    this.simQuestionText = document.createElement('p');
    this.simImg = document.createElement('img');
    this.simTimerContainer = document.createElement('div');
    this.simTimerIcon = document.createElement('img');
    this.simTimer = document.createElement('p');

    this.init();
    this.updateQuestion();
    this.autoUpdateQuestion();
  }

  init() {
    this.simMiddleContainer.classList.add('sim-middle-container');
    this.simQuestionBubble.classList.add('sim-question-bubble');
    this.simQuestionText.classList.add('sim-question-text');
    this.simImg.classList.add('sim-img');
    this.simTimerContainer.classList.add('sim-timer-container');
    this.simTimerIcon.classList.add('sim-timer-icon');
    this.simTimer.classList.add('sim-timer');

    this.simImg.src = 'src/assets/images/interviewers.png';
    this.simImg.alt = 'interviwer image';
    this.simTimerIcon.src = 'src/assets/images/icon-timer.svg';
    this.simTimer.textContent = '남은 시간: 80초';

    this.simTimerContainer.append(this.simTimerIcon, this.simTimer);
    this.simQuestionBubble.appendChild(this.simQuestionText);
    this.simMiddleContainer.append(
      this.simQuestionBubble,
      this.simImg,
      this.simTimerContainer
    );
  }

  updateQuestion() {
    const input = document.querySelector('.input-field');
    const userContent = input ? input.value : '';
    if (userContent.trim() !== '') {
      clearTimeout(this.timerId);
    }

    // 질문 업데이트 시 타이머 시작
    timer(this.simTimer);
  }

  autoUpdateQuestion() {
    const res = localStorage.getItem('questions');
    const questions = res
      ?.split('\n')
      .map((line) => line.replace(/^\d+\.\s*/, ''));

    if (!questions) {
      this.simQuestionText.textContent = '면접을 시작하겠습니다.'; // 기본 질문 설정
      return;
    }

    let currentIndex = 0;
    this.simQuestionText.textContent = questions[currentIndex]; // 초기 질문 설정

    const updateTime = 8000; // 업데이트 간격 (80초) 테스트는 8초
    this.simTimer.textContent = `남은 시간: ${updateTime / 1000}초`; // 시간을 화면에 표시

    const timerId = setInterval(() => {
      currentIndex = (currentIndex + 1) % questions.length; // 인덱스를 순환하도록 설정
      this.simQuestionText.textContent = questions[currentIndex]; // 질문 업데이트
    }, updateTime); // 업데이트 간격으로 설정

    this.timerId = timerId; // timerId를 인스턴스 변수로 저장

    timer(this.simTimer); // 타이머 시작
  }

  render(parentElement) {
    parentElement.append(this.simMiddleContainer);
  }
}
