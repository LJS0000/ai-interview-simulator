export default function Router() {
  // 등록된 경로와 해당하는 콜백 함수를 저장합니다.
  const routes = [];

  // 히스토리 변경 작업이 실행되면, handleRouteChange를 실행합니다.
  const init = () => {
    window.addEventListener('popstate', () => {
      handleRouteChange();
    });
  };

  // 등록된 경로(routes)와 현재 경로(currentPath)를 비교하여 섹션을 렌더링합니다.
  const handleRouteChange = () => {
    const currentPath = window.location.pathname;
    for (const route of routes) {
      if (route.path === currentPath) {
        route.callback();
        return;
      }
    }
  };

  // 경로와 페이지 렌더 함수를 받아 routes에 추가합니다.
  this.addRoute = (path, callback) => {
    routes.push({ path, callback });
  };

  // 주어진 경로로 URL을 변경하고, handleRouteChange를 실행합니다.
  this.navigate = (path) => {
    history.replaceState(null, null, path);
    handleRouteChange();
  };

  init();
}
