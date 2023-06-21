import button from './button.js';

export default function Sidebar() {
  const sidebarText = document.createElement('p');
  const sidebarDeleteBtn = button('삭제하기', 'click', () => {
    localStorage.removeItem('qaChatList');
    location.reload();
  });

  const init = () => {
    sidebarText.classList.add('sidebar-text');
    sidebarDeleteBtn.classList.add('sidebar-delete-btn');

    sidebarText.textContent = '채팅 기록을 삭제합니다.';
  };

  this.render = (parentElement) => {
    parentElement.append(sidebarText, sidebarDeleteBtn);
  };

  init();
}
