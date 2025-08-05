const nameInputElem = document.querySelector('#name-input');
const nameOutputElem = document.querySelector('#name-output');

nameInputElem.addEventListener('input', () => {
    const valueName = nameInputElem.value;
    const trimmedName = valueName.trim();
    
    if (valueName !== trimmedName) {
    nameInputElem.value = trimmedName;
  }

  nameOutputElem.textContent = trimmedName || 'Anonymous';
});