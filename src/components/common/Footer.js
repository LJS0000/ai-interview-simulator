export default function Footer() {
  const footerTextWrapper = document.createElement('div');
  const footerText = document.createElement('p');

  this.init = () => {
    footerTextWrapper.classList.add('footer-text-wrapper');
    footerText.classList.add('footer-text');

    footerText.textContent =
      'Copyright 2023. 이지수 All pictures cannot be copied without permission';

    footerTextWrapper.appendChild(footerText);
  };

  this.render = (parentElement) => {
    parentElement.appendChild(footerTextWrapper);
  };

  this.init();
}
