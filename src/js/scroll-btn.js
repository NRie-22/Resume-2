const elScrollBtn = document.querySelector('.scroll-btn');

let lastScrollTop = 0;
let switchScroll = true;

window.addEventListener('scroll', function () {
  let currentScrollTop = window.pageYOffset;

  if (currentScrollTop < lastScrollTop && switchScroll) {
    elScrollBtn.classList.add('is-active-scroll');
    switchScroll = false;
  } else if (currentScrollTop > lastScrollTop && !switchScroll) {
    elScrollBtn.classList.remove('is-active-scroll');
    switchScroll = true;
  } else if (currentScrollTop === 0) {
    elScrollBtn.classList.remove('is-active-scroll');
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

elScrollBtn.addEventListener('click', () => {
  elScrollBtn.classList.add('rocket-launch');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  elScrollBtn.classList.remove('is-active-scroll');

  setTimeout(() => {
    elScrollBtn.classList.remove('rocket-launch');
  }, 1000);
});
