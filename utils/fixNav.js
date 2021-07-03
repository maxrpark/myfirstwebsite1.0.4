// FIX NAV

const fixNav = window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.nav');
  let scrolling = window.pageYOffset;

  if (scrolling > 100) {
    navbar.classList.add('nav-fix');
  }
  if (scrolling === 0) {
    navbar.classList.remove('nav-fix');
  }
});

export default fixNav;
