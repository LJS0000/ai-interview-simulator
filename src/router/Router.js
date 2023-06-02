class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;
  }

  addRoute(path, callback) {
    this.routes.push({ path, callback });
  }

  navigate() {
    const currentPath = window.location.pathname;

    for (const route of this.routes) {
      if (route.path === currentPath) {
        route.callback();
        return;
      }
    }

    alert('404 - Page not found');
  }
}

export default Router;
