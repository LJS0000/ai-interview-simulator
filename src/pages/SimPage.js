export default class SimPage {
  constructor() {
    // 필요한 초기화 작업 수행
  }

  render() {
    const simulationContainer = document.createElement('div');
    simulationContainer.textContent = '모의면접 페이지';
    document.getElementById('main-container').appendChild(simulationContainer);
  }
}
