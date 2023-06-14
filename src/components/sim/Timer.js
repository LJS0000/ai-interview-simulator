export default function Timer() {
  const timerContainer = document.createElement('div');
  const timerIcon = document.createElement('img');
  const timerText = document.createElement('p');
  let timerId;
  let seconds = 80;
  let milliseconds = 0;

  this.init = () => {
    timerContainer.classList.add('timer-container');
    timerIcon.classList.add('timer-icon');
    timerText.classList.add('timer-text');

    timerIcon.src = 'src/assets/images/icon-timer.svg';
    timerText.textContent = '80:00';

    timerContainer.append(timerIcon, timerText);
  };

  this.decreaseTime = () => {
    milliseconds -= 1;
    if (milliseconds < 0) {
      seconds -= 1;
      milliseconds = 99;
    }

    timerText.textContent = `${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

    if (seconds <= 0 && milliseconds <= 0) {
      clearInterval(timerId);
    }
  };

  this.start = () => {
    timerId = setInterval(this.decreaseTime, 10);
  };

  this.stop = () => {
    clearInterval(timerId);
  };

  this.render = (parentElement) => {
    parentElement.prepend(timerContainer);
  };

  this.init();
}
