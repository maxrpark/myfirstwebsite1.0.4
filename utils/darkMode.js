// DARK MODE

const checkbox = document.getElementById('checkbox');

const darkMode = checkbox.addEventListener('click', () =>
  document.body.classList.toggle('dark-mode')
);

export default darkMode;
