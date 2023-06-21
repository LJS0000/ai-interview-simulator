export default function Timer() {
  const timerContainer = document.createElement('div');
  const timerIcon = document.createElement('img');
  const timerText = document.createElement('p');
  let timerId;
  let seconds = 80;
  let milliseconds = 0;

  const init = () => {
    timerContainer.classList.add('timer-container');
    timerIcon.classList.add('timer-icon');
    timerText.classList.add('timer-text');

    timerIcon.src = 'src/assets/images/icon-timer.svg';
    timerText.textContent = '80:00';

    timerContainer.append(timerIcon, timerText);
  };

  const decreaseTime = () => {
    if (seconds <= 0 && milliseconds <= 0) {
      clearInterval(timerId);
    } else {
      milliseconds -= 1;
      if (milliseconds < 0) {
        seconds -= 1;
        milliseconds = 99;
      }
      timerText.textContent = `${seconds
        .toString()
        .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    }
  };

  this.start = () => {
    seconds = 80;
    milliseconds = 0;
    timerId = setInterval(decreaseTime, 10);
  };

  this.stop = () => {
    clearInterval(timerId);
  };

  this.render = (parentElement) => {
    parentElement.prepend(timerContainer);
  };

  init();
}
