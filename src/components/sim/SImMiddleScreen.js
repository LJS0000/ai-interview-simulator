import { sectionContainer } from '../../app.js';
import Progressbar from './Progressbar.js';
import Timer from './Timer.js';

export default function SimMiddleScreen() {
  const progressbar = new Progressbar();
  const timer = new Timer();

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

  this.updateQuestion = (simQuestionList) => {
    timer.start();
    console.log(`밖: ${step}`);

    if (step > simQuestionList.length - 1) {
      // 모든 질문을 마친 경우에 대한 처리
      timer.stop();
      questionText.textContent = '수고하셨습니다.';
      this.render();
      return;
    } else {
      console.log(`안: ${step}`);
      questionText.textContent = simQuestionList[step];
      this.render();
    }

    step += 1;
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
