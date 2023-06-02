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

    // 사이드바 햄버거 메뉴
    this.sidebarBtn.classList.add('sidebar-btn');
    const drawerIcon = document.createElement('img');
    drawerIcon.src = './src/assets/images/icon-drawer.svg';
    this.sidebarBtn.appendChild(drawerIcon);
    // 헤더 로고
    this.logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = './src/assets/images/logo.svg';
    logoImg.alt = 'AI Interview Simulator';
    this.logo.appendChild(logoImg);
    // 헤더 메뉴
    this.menu.classList.add('menu');

    this.navbar.appendChild(this.sidebarBtn);
    this.navbar.appendChild(this.menu);
    this.navbar.appendChild(this.logo);
  }

  addMenuItem(label, url) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    const link = document.createElement('a');
    link.textContent = label;
    link.href = url;

    // static한 페이지를 만듭니다.
    link.addEventListener('click', (e) => {
      e.preventDefault();

      if (window.location.pathname === url) return;

      // 클릭이벤트가 발생했을 때 주소를 변경하기 위한 코드
      window.history.pushState(null, null, url);

      this.render();
    });

    menuItem.appendChild(link);
    this.menu.appendChild(menuItem);

    this.menuItems.push(menuItem);
  }

  render(parentElement) {
    parentElement.appendChild(this.navbar);
  }
}
