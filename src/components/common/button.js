export default function button(text, event, callback) {
  const simBtn = document.createElement('button');
  simBtn.classList.add('sim-btn');
  simBtn.textContent = `${text}`;
  simBtn.addEventListener(event, callback);

  return simBtn;
}
