import SidebarHandler from '../../module/SidebarHandler.js';

export default function Header() {
  const sidebarHandler = new SidebarHandler();
  const navbar = document.createElement('nav');
  const sidebarBtn = document.createElement('button');
  const logo = document.createElement('div');
  const menu = document.createElement('ul');
  const menuItems = [];

  const init = () => {
    navbar.classList.add('navbar');
    // 사이드바 햄버거 메뉴
    sidebarBtn.classList.add('sidebar-btn');
    const drawerIcon = document.createElement('img');
    drawerIcon.src = './src/assets/images/icon-drawer.svg';
    sidebarBtn.appendChild(drawerIcon);
    // 사이드바 토글 이벤트
    sidebarBtn.addEventListener('click', sidebarHandler.toggleElem);
    // 헤더 로고
    logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = './src/assets/images/logo.svg';
    logoImg.alt = 'AI Interview Simulator';
    logo.appendChild(logoImg);
    // 헤더 메뉴
    menu.classList.add('menu');

    navbar.append(sidebarBtn, menu, logo);
  };

  // 네브바에 메뉴를 추가합니다.
  this.addMenuItem = (label, url) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    const link = document.createElement('a');
    link.textContent = label;
    link.href = url;

    menuItem.appendChild(link);
    menu.appendChild(menuItem);

    menuItems.push(menuItem);
  };

  this.render = (parentElement) => {
    parentElement.appendChild(navbar);
  };

  init();
}
