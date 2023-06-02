export default class Header {
  constructor() {
    this.navbar = document.createElement('nav');
    this.sidebarBtn = document.createElement('div');
    this.logo = document.createElement('a');
    this.menu = document.createElement('ul');
    this.menuItems = [];

    this.init();
  }

  init() {
    this.navbar.classList.add('navbar');
    this.sidebarBtn.classList.add('sidebar-btn');
    this.logo.classList.add('logo');
    this.menu.classList.add('menu');

    // 사이드바 토글을 위한 햄버거 메뉴
    const drawerIcon = document.createElement('img');
    drawerIcon.src = './src/assets/images/icon-drawer.svg';
    this.sidebarBtn.appendChild(drawerIcon);

    // 로고 겸 홈페이지 이동 버튼
    const logoImg = document.createElement('img');
    logoImg.src = './src/assets/images/logo.svg';
    logoImg.alt = 'AI Interview Simulator';
    this.logo.appendChild(logoImg);

    this.navbar.appendChild(this.sidebarBtn);
    this.navbar.appendChild(this.menu);
    this.navbar.appendChild(this.logo);
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
