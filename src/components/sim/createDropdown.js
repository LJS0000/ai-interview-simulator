import options from '../../constants/dropdownOptions.js';

export default function createDropdown() {
  const dropdown = document.createElement('select');
  dropdown.classList.add('dropdown');

  for (const optionText of options) {
    const option = document.createElement('option');
    option.value = optionText;
    option.text = optionText;
    dropdown.appendChild(option);
  }

  return dropdown;
}
