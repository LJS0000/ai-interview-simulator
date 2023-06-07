export default class SimMiddleScreen {
  constructor() {
    this.simMiddleContainer = document.createElement('div');
    this.simQuestionBubble = document.createElement('div');
    this.simQuestionText = document.createElement('p');
    this.simImg = document.createElement('img');
    this.simTimerContainer = document.createElement('div');
    this.simTimerIcon = document.createElement('div');
    this.simTimer = document.createElement('div');

    this.init();
  }

  init() {
    this.simMiddleContainer.classList.add('sim-middle-container');
    this.simQuestionBubble.classList.add('sim-question-bubble');
    this.simQuestionText.classList.add('sim-question-text');
    this.simImg.classList.add('sim-img');
    this.simTimerContainer.classList.add('sim-timer-container');

    this.simQuestionText.textContent = '면접을 시작하겠습니다.';
    this.simImg = '../../assets/images/interviewers.png';

    this.simQuestionBubble.appendChild(this.simQuestionText);
    this.simMiddleContainer.append(
      this.simQuestionBubble,
      this.simQuestionText,
      this.simTimerContainer
    );
  }

  render(parentElement) {
    parentElement.append(this.simMiddleContainer);
  }
}
