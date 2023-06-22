export default function Progressbar() {
  const progressContainer = document.createElement('div');
  const progressbar = document.createElement('div');
  const progressText = document.createElement('p');
  const progress = document.createElement('div');

  this.init = () => {
    progressContainer.classList.add('progressbar-container');
    progressText.classList.add('progress-text');
    progressbar.classList.add('progressbar');
    progress.classList.add('progress');

    progressbar.appendChild(progress);
    progressContainer.append(progressText, progressbar);
  };

  /**
   * 3단계 프로그래스바
   * @param {int} step
   */
  this.updateProgress = (step) => {
    progressText.textContent = `${step}/3`;

    const status = (step / 3) * 100;
    progress.style.width = `${status}%`;
  };

  this.render = (parentElement) => {
    parentElement.appendChild(progressContainer);
  };

  this.init();
}
