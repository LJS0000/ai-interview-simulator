import Header from './components/header.js';

class App {
  constructor() {
    this.header = new Header();
  }

  initialize() {
    this.header.addMenuItem('질문하기', '/');
    this.header.addMenuItem('모의면접', '/simulation');
    this.header.render(document.getElementById('header-container'));
  }
}

const app = new App();
app.initialize();
