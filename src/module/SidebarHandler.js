export default function SidebarHandler() {
  const sidebar = document.querySelector('#sidebar-container');

  // eventHandler로 호출했기 때문에
  // this의 스코프를 유지하기 위해 화살표함수를 사용합니다.
  const toggleElem = () => {
    sidebar.classList.toggle('show');
    document.body.classList.toggle('reduce');
  };

  return {
    toggleElem,
  };
}
