// Date

function dispayYear() {
  const getYear = document.querySelector('.date');
  const year = new Date().getFullYear();
  getYear.innerHTML = year;
}
dispayYear();

export default dispayYear;
