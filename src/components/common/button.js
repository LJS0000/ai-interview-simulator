export default function simBtn(text, event, callback) {
  const simBtn = document.createElement('button');

  const init = () => {
    simBtn.classList.add('sim-btn');
    simBtn.textContent = `${text}`;
    simBtn.addEventListener(event, callback);
  };

  return simBtn;
}
