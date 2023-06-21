export default function toggleHandler() {
  const sidebar = document.querySelector('#sidebar-container');

  const toggleElem = () => {
    sidebar.classList.toggle('show');
    document.body.classList.toggle('reduce');
  };

  toggleElem();
}
