import toggleHandler from '../../module/event-handler/toggleHandler.js';

export default function Header() {
  const navbar = document.createElement('nav');
  const sidebarBtn = document.createElement('button');
  const drawerIcon = document.createElement('img');
  const navContainer = document.createElement('div');
  const menu = document.createElement('ul');
  const logo = document.createElement('div');
  const logoImg = document.createElement('img');
  const menuItems = [];

  this.init = () => {
    navbar.classList.add('navbar');
    sidebarBtn.classList.add('sidebar-btn');
    navContainer.classList.add('nav-container');
    menu.classList.add('menu');
    logo.classList.add('logo');

    sidebarBtn.addEventListener('click', toggleHandler);
    drawerIcon.src = './src/assets/images/icon-drawer.svg';
    logoImg.src = './src/assets/images/logo.svg';
    logoImg.alt = 'AI Interview Simulator';

    sidebarBtn.appendChild(drawerIcon);
    logo.appendChild(logoImg);
    navContainer.append(menu, logo);
    navbar.append(sidebarBtn, navContainer);
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

  this.init();
}
