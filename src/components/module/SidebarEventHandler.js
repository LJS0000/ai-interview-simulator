export default class SidebarEventHandler {
  constructor() {
    this.sidebar = document.querySelector('#sidebar-container');
    // 바디 css 수정하는 코드 넣기
  }

  // this 때문에 화살표 함수 사용 => 나중에 정리하기
  toggle = () => {
    console.log('toggle');

    this.sidebar.classList.toggle('show');
    this.mainContainer.classList.toggle('reduce');
    this.footerContainer.classList.toggle('reduce');
  };
}
