export default function spinner() {
  const loadingImg = document.createElement('img');
  loadingImg.classList.add('spinner');
  loadingImg.src = './src/assets/images/icon-spinner.gif';

  return loadingImg;
}
