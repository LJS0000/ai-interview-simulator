export default class Header {
  constructor() {
    this.navbar = document.createElement('nav');
    this.logo = document.createElement('a');
    this.menu = document.createElement('ul');
    this.menuItems = [];

    this.init();
  }

  init() {
    this.navbar.classList.add('navbar');
    this.logo.classList.add('logo');
    this.menu.classList.add('menu');

    this.logo.textContent = 'Logo';
    this.navbar.appendChild(this.logo);
    this.navbar.appendChild(this.menu);
  }

  addMenuItem(label, url) {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');

    menuItem.classList.add('menu-item');
    link.textContent = label;
    link.href = url;
    menuItem.appendChild(link);
    this.menu.appendChild(menuItem);
    this.menuItems.push(menuItem);
  }

  render(parentElement) {
    parentElement.appendChild(this.navbar);
  }
}
