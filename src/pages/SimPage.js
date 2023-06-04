export default class SimPage {
  constructor() {
    this.mainContainer = document.createElement('main');
    this.simContainer = document.createElement('div');
    this.clockIcon = document.createElement('img');

    this.simStartText = document.createElement('p');
    this.simStartForm = document.createElement('form');
    this.simStartInput = document.createElement('select');
    this.simStartBtn = document.createElement('button');

    this.mainContainer.classList.add('main-container');
    this.simContainer.classList.add('sim-container');
    this.clockIcon.classList.add('clock-icon');
    this.simStartText.classList.add('sim-start-text');
    this.simStartForm.classList.add('sim-start-form');
    this.simStartInput.classList.add('sim-start-input');
    this.simStartBtn.classList.add('sim-start-btn');

    this.clockIcon.src = '../assets/images/icon-timer.svg';
    this.clockIcon.alt = 'Timer Icon';
    this.simStartText.textContent = '80초 안에 답변하세요!';
  }

  createDropdown(options) {
    const dropdown = document.createElement('select');
    dropdown.classList.add('dropdown');

    options.forEach((optionText) => {
      const option = document.createElement('option');
      option.value = optionText;
      option.text = optionText;
      dropdown.appendChild(option);
    });

    return dropdown;
  }

  render() {
    const section = document.querySelector('#content-container');

    const options = [
      '개발',
      '경영·비즈니스',
      '마케팅·광고',
      '디자인',
      '영업',
      '고객서비스·리테일',
      '게임 제작',
      '미디어',
      '엔지니어링·설계',
      'HR',
      '금융',
      '제조·생산',
      '물류·무역',
      '의료·제약·바이오',
      '교육',
      '법률·법집행기관',
      '식·음료',
      '건설·시설',
      '공공·복지',
    ];

    const dropdown = this.createDropdown(options);
    this.simStartForm.appendChild(dropdown);

    section.appendChild(this.mainContainer);
  }
}
