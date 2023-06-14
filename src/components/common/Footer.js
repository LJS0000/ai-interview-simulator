export default function Footer() {
  const footerContainer = document.createElement('div');
  const footerText = document.createElement('p');

  this.init = () => {
    footerContainer.classList.add('footer-container');

    footerText.classList.add('footer-text');
    footerText.textContent =
      'Copyright 2023. 이지수 All pictures cannot be copied without permission';

    footerContainer.appendChild(footerText);
  };

  this.render = (parentElement) => {
    parentElement.appendChild(footerContainer);
  };

  this.init();
}
