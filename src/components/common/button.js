export default function button(text, event, callback) {
  const btn = document.createElement('button');
  btn.classList.add('sim-btn');
  btn.textContent = `${text}`;
  btn.addEventListener(event, callback);

  return btn;
}
