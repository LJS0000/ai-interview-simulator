export default class SidebarEventHandler {
  constructor() {
    this.sidebar = document.querySelector('#sidebar-container');
    this.body = document.body;
  }

  // eventHandler로 호출했기 때문에
  // this의 스코프를 유지하기 위해 화살표함수를 사용합니다.
  toggle = () => {
    console.log('toggle');

    this.sidebar.classList.toggle('show');
    this.body.classList.toggle('reduce');
  };
}
