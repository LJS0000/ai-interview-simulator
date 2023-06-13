import timer from './timer.js';
import Progressbar from './Progressbar.js';

export default function SimMiddleScreen() {
  const progressbar = new Progressbar();
  const step = 1;
  const simContainer = document.createElement('main');
  const simTimerContainer = document.createElement('div');
  const simTimerIcon = document.createElement('img');
  const simTimer = document.createElement('p');
  const simQuestionText = document.createElement('p');

  this.init = () => {
    simContainer.classList.add('sim-middle-container');
    simTimerContainer.classList.add('sim-timer-container');
    simTimerIcon.classList.add('sim-timer-icon');
    simTimer.classList.add('sim-timer');
    simQuestionText.classList.add('sim-question-text');

    simTimerIcon.src = 'src/assets/images/icon-timer.svg';
    simTimer.textContent = '80:00';

    progressbar.updateProgress(step);
    simTimerContainer.append(simTimerIcon, simTimer);
    progressbar.render(simContainer);
    simContainer.append(simTimerContainer, simQuestionText);
  };

  this.updateQuestion = () => {
    const input = document.querySelector('.input-field');
    const userContent = input ? input.value : '';
    const timerId = timer(simTimer);

    if (userContent.trim() !== '') {
      clearTimeout(timerId);
      step += 1;
      progressbar.updateProgress(step);
    }
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
    parentElement.prepend(simContainer);
  };

  this.init();
  this.updateQuestion();
  this.autoUpdateQuestion();
}
