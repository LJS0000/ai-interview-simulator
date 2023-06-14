import Progressbar from './Progressbar.js';
import Timer from './Timer.js';

export default function SimMiddleScreen() {
  const progressbar = new Progressbar();
  const timer = new Timer();
  let step = 0;

  const simContainer = document.createElement('main');
  const questionText = document.createElement('p');

  this.init = () => {
    simContainer.classList.add('sim-container');
    questionText.classList.add('question-text');

    progressbar.updateProgress(step);

    progressbar.render(simContainer);
    timer.render(simContainer);
    simContainer.append(questionText);
  };

  this.updateQuestion = () => {
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

  this.render = (parentElement) => {
    parentElement.prepend(simContainer);
  };

  this.init();
  this.updateQuestion();
}
