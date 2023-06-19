import { sectionContainer } from '../../app.js';
import Progressbar from './Progressbar.js';
import Timer from './Timer.js';
import button from '../common/button.js';
import Modal from '../common/Modal.js';
import toggleHandler from '../../module/event-handler/toggleHandler.js';

export default function SimMiddleScreen() {
  const progressbar = new Progressbar();
  const timer = new Timer();
  const modal = new Modal();

  let step = 0;

  const mainContainer = document.createElement('main');
  const questionText = document.createElement('p');

  const init = () => {
    mainContainer.classList.add('main-container');
    questionText.classList.add('question-text');

    questionText.textContent = '면접을 시작하겠습니다.';
    progressbar.updateProgress(step);

    progressbar.render(mainContainer);
    timer.render(mainContainer);
    mainContainer.append(questionText);
  };

  const renderButtons = () => {
    const answerButton = button('내 답변 보기', 'click', toggleHandler);
    const restartButton = button('다시하기', 'click', toggleHandler);

    mainContainer.append(answerButton, restartButton);
  };

  this.updateQuestion = (simQuestionList) => {
    console.log(simQuestionList);

    if (step > simQuestionList.length - 1) {
      // 모든 질문을 마친 경우에 대한 처리
      timer.stop();
      questionText.textContent = '수고하셨습니다.';
      renderButtons();
      this.render();
      return;
    } else {
      questionText.textContent = simQuestionList[step];
      this.render();
    }

    timer.start();
    step += 1;
    progressbar.updateProgress(step);
    setTimeout(() => {
      this.updateQuestion(simQuestionList);
    }, 5500); // 5.5초의 지연
  };

  this.render = () => {
    sectionContainer.removeChild(sectionContainer.firstChild);
    sectionContainer.prepend(mainContainer);
  };

  init();
}
