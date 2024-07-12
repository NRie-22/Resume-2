const refs = {
  mobileMenu: document.querySelector('.js-menu'),
  closeBtn: document.querySelector('.js-close-menu'),
  openBtn: document.querySelector('.js-open-menu'),
};
refs.closeBtn.addEventListener('click', toggleMenu);
refs.openBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.mobileMenu.classList.toggle('visually-hidden');
}
