import SidebarEventHandler from '../../module/SidebarEventHandler.js';

export default class Header {
  constructor() {
    this.navbar = document.createElement('nav');
    this.sidebarBtn = document.createElement('button');
    this.logo = document.createElement('div');
    this.menu = document.createElement('ul');
    this.menuItems = [];

    this.init();
  }

  init() {
    this.navbar.classList.add('navbar');
    // 사이드바 햄버거 메뉴
    this.sidebarBtn.classList.add('sidebar-btn');
    const drawerIcon = document.createElement('img');
    drawerIcon.src = './src/assets/images/icon-drawer.svg';
    this.sidebarBtn.appendChild(drawerIcon);
    // 사이드바 토글 이벤트
    const sidebarEvent = new SidebarEventHandler();
    this.sidebarBtn.addEventListener('click', sidebarEvent.toggle);
    // 헤더 로고
    this.logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = './src/assets/images/logo.svg';
    logoImg.alt = 'AI Interview Simulator';
    this.logo.appendChild(logoImg);
    // 헤더 메뉴
    this.menu.classList.add('menu');

    this.navbar.append(this.sidebarBtn, this.menu, this.logo);
  }

  // 네브바에 메뉴를 추가합니다.
  addMenuItem(label, url) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    const link = document.createElement('a');
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
