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

    updateQuestion();
  };

  const updateQuestion = () => {
    const storedQuestions = localStorage.getItem('questions');
    const questions = storedQuestions
      ?.split('\n')
      .map((i) => i.replace(/^\d+\.\s*/, ''));

    if (!questions) {
      questionText.textContent = '면접을 시작하겠습니다.';
    } else {
      questionText.textContent = questions[step];
      timer.start();
      step += 1;
    }
  };

  this.render = () => {
    sectionContainer.prepend(mainContainer);
  };

  init();
}
