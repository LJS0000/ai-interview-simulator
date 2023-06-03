export default class Footer {
  constructor() {
    this.footerContainer = document.createElement('div');
    this.footerText = document.createElement('p');
    this.footerText.textContent =
      'Copyright 2023. 이지수 All pictures cannot be copied without permission';

    this.init();
  }

  init() {
    this.footerContainer.appendChild(this.footerText);
  }

  render(parentElement) {
    parentElement.appendChild(this.footerContainer);
  }
}
