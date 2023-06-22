/* - querySelector 변수 - */
import { sectionContainer } from '../../app.js';
/* -- components -- */
import Progressbar from './Progressbar.js';
import Timer from './Timer.js';

export default function SimMiddleScreen() {
  const progressbar = new Progressbar();
  const timer = new Timer();

  let step = 0;

  const mainContainer = document.createElement('main');
  const questionText = document.createElement('p');

  const init = () => {
    mainContainer.classList.add('main-sim-container');
    questionText.classList.add('question-text');

    questionText.textContent = '면접을 시작하겠습니다.';
    progressbar.updateProgress(step);

    progressbar.render(mainContainer);
    timer.render(mainContainer);
    mainContainer.append(questionText);
  };

  /**
   * 불러온 질문을 화면에 모두 리렌더링하고, 타이머를 종료합니다.
   * @param {object} simQuestionList
   */
  this.updateQuestion = (simQuestionList) => {
    if (step > simQuestionList.length - 1) {
      // 모든 질문을 마친 경우에 대한 처리
      timer.stop();
      questionText.textContent = '수고하셨습니다.';
      this.render();
      return;
    } else {
      questionText.textContent = simQuestionList[step];
      this.render();
    }

    timer.start();
    step += 1;
    progressbar.updateProgress(step);

    /* 타이머 시간 + 0.5초로 질문을 업데이트합니다. */
    setTimeout(() => {
      this.updateQuestion(simQuestionList);
    }, 80500); // 80.5초의 지연
  };

  this.render = () => {
    sectionContainer.removeChild(sectionContainer.firstChild);
    sectionContainer.prepend(mainContainer);
  };

  init();
}
