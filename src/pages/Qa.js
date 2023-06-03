export default class Qa {
  constructor() {
    // 필요한 초기화 작업 수행
  }

  render() {
    const qaContainer = document.createElement('div');
    qaContainer.textContent = '질문 페이지';
    document.getElementById('main-container').appendChild(qaContainer);
  }
}
