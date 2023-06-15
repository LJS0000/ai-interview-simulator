import button from './button.js';

import { sectionContainer } from '../../app.js';

export default function Modal() {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const modalBtn = button('X', 'click', this.close);

  const init = () => {
    modalWrapper.classList.add('modal-wrapper');
    modal.classList.add('modal');
    modalBtn.classList.add('modal-btn');

    modal.appendChild(modalBtn);
    modalWrapper.appendChild(modal);
  };

  this.open = () => {
    modalWrapper.style.display = 'block';
  };

  this.close = () => {
    modalWrapper.style.display = 'none';
  };

  this.render = () => {
    sectionContainer.prepend(modalWrapper);
  };

  init();
}
