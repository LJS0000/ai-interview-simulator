import Header from './components/headers/Header';

class App {
  constructor() {
    this.header = new Header();
  }

  initialize() {
    this.header.addMenuItem('Home', '/');
    this.header.addMenuItem('About', '/about');
    this.header.addMenuItem('Contact', '/contact');
    this.header.render(document.getElementById('header-container'));
  }
}

const app = new App();
app.initialize();
