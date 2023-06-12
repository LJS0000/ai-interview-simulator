import timer from './timer.js';
export default function SimMiddleScreen() {
  const simMiddleContainer = document.createElement('main');
  const simQuestionBubble = document.createElement('div');
  const simQuestionText = document.createElement('p');
  const simImg = document.createElement('img');
  const simTimerContainer = document.createElement('div');
  const simTimerIcon = document.createElement('img');
  const simTimer = document.createElement('p');

  this.init = () => {
    simMiddleContainer.classList.add('sim-middle-container');
    simQuestionBubble.classList.add('sim-question-bubble');
    simQuestionText.classList.add('sim-question-text');
    simImg.classList.add('sim-img');
    simTimerContainer.classList.add('sim-timer-container');
    simTimerIcon.classList.add('sim-timer-icon');
    simTimer.classList.add('sim-timer');

    simImg.src = 'src/assets/images/interviewers.png';
    simImg.alt = 'interviwer image';
    simTimerIcon.src = 'src/assets/images/icon-timer.svg';
    simTimer.textContent = '남은 시간: 80초';

    simTimerContainer.append(simTimerIcon, simTimer);
    simQuestionBubble.appendChild(simQuestionText);
    simMiddleContainer.append(simQuestionBubble, simImg, simTimerContainer);
  };

  this.updateQuestion = () => {
    const input = document.querySelector('.input-field');
    const userContent = input ? input.value : '';
    if (userContent.trim() !== '') {
      clearTimeout(timerId);
    }

    // 질문 업데이트 시 타이머 시작
    timer(simTimer);
  };

  this.autoUpdateQuestion = () => {
    const res = localStorage.getItem('questions');
    const questions = res
      ?.split('\n')
      .map((line) => line.replace(/^\d+\.\s*/, ''));

    if (!questions) {
      simQuestionText.textContent = '면접을 시작하겠습니다.'; // 기본 질문 설정
      return;
    }

    let currentIndex = 0;
    simQuestionText.textContent = questions[currentIndex]; // 초기 질문 설정

    const updateTime = 8000; // 업데이트 간격 (80초) 테스트는 8초
    simTimer.textContent = `남은 시간: ${updateTime / 1000}초`; // 시간을 화면에 표시

    timer(simTimer); // 타이머 시작
  };

  this.render = (parentElement) => {
    parentElement.prepend(simMiddleContainer);
  };

  this.init();
  this.updateQuestion();
  this.autoUpdateQuestion();
}
