export default class Qna {
  constructor() {
    // 필요한 초기화 작업 수행
  }

  render() {
    const qnaContainer = document.createElement('div');
    qnaContainer.textContent = '질문 페이지';
    document.getElementById('main-container').appendChild(qnaContainer);
  }
}
