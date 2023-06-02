export default class Router {
  constructor() {
    this.routes = [];
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
  }
}
