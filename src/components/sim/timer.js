export default function timer(simTimer) {
  let remainingTime = parseInt(simTimer.textContent.split(' ')[2]);

  const timerId = setInterval(() => {
    remainingTime -= 1;
    simTimer.textContent = `남은 시간: ${remainingTime}초`;

    if (remainingTime <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
}
