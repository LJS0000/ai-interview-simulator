/* -- components -- */
import button from './button.js';

export default function Sidebar() {
  const sidebarText = document.createElement('p');
  /* 로컬스토리지에 저장된 데이터를 지우고, 리로드합니다. */
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
