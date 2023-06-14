export default function Router() {
  /* 등록된 경로와 해당하는 콜백 함수를 저장합니다. */
  const routes = [];

  /* 히스토리 변경 작업이 실행되면, handleRouteChange를 실행합니다. */
  const init = () => {
    window.addEventListener('popstate', () => {
      handleRouteChange();
    });
  };

  /* 등록된 경로(routes)와 현재 경로(currentHash)를 비교하여 렌더링합니다. */
  const handleRouteChange = () => {
    const currentHash = window.location.hash;
    for (const route of routes) {
      if (route.hash === currentHash) {
        route.callback();
        return;
      }
    }
  };

  /**
   * 경로와 페이지 렌더 함수를 받아 routes에 추가합니다.
   * @param {string} hash
   * @param {function} callback
   * */
  this.addRoute = (hash, callback) => {
    routes.push({ hash, callback });
  };

  /**
   * 정적 라우팅을 구현합니다.
   * @param {string} hash
   * */
  this.navigate = (hash) => {
    history.replaceState(null, null, hash);
    handleRouteChange();
  };

  init();
}
