export default class Footer {
  constructor() {
    this.footerContainer = document.createElement('div');
    this.footerText = document.createElement('p');

    this.init();
  }

  init() {
    this.footerContainer.classList.add('footer-container');

    this.footerText.classList.add('footer-text');
    this.footerText.textContent =
      'Copyright 2023. 이지수 All pictures cannot be copied without permission';

    this.footerContainer.appendChild(this.footerText);
  }

  render(parentElement) {
    parentElement.appendChild(this.footerContainer);
  }
}
