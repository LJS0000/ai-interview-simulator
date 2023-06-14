import { sectionContainer } from '../../App.js';
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

    progressbar.updateProgress(step);

    progressbar.render(mainContainer);
    timer.render(mainContainer);
    mainContainer.append(questionText);

    updateQuestions();
  };

  const updateQuestions = () => {
    step += 1;
    console.log(step);
    const storedQuestions = localStorage.getItem('simQuestionList');
    const simQuestionList = storedQuestions
      ?.split('\n')
      .map((i) => i.replace(/^\d+\.\s*/, ''));

    if (!simQuestionList) {
      questionText.textContent = '면접을 시작하겠습니다.';
    } else {
      if (step < simQuestionList.length - 1) {
        questionText.textContent = simQuestionList[step];
        timer.start();
      } else {
        // 모든 질문을 마친 경우에 대한 처리
        timer.stop();
        questionText.textContent = '수고하셨습니다.';
      }
    }
  };

  this.render = () => {
    sectionContainer.prepend(mainContainer);
  };

  init();
}
