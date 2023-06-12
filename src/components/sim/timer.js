export default function timer(simTimer) {
  let remainingTime = parseInt(simTimer.textContent.split(' ')[2]);
  let seconds = remainingTime;
  let milliseconds = 99;

  const timerId = setInterval(() => {
    milliseconds -= 1;
    if (milliseconds < 0) {
      seconds -= 1;
      milliseconds = 99;
    }

    simTimer.textContent = `${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

    if (seconds <= 0 && milliseconds <= 0) {
      clearInterval(timerId);
    }
  }, 100);
}
