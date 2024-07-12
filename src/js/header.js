const refs = {
  mobileMenu: document.querySelector('.js-menu'),
  closeBtn: document.querySelector('.js-close-menu'),
  openBtn: document.querySelector('.js-open-menu'),

};
refs.closeBtn.addEventListener('click', toggleMenu);
refs.openBtn.addEventListener('click', toggleMenu);

export function toggleMenu() {
  refs.mobileMenu.classList.toggle('visually-hidden');
}

export function closeMenuOnClick() {
  const closeOnClickEls= document.querySelectorAll('.mobile-item')
    closeOnClickEls.forEach( element=> {
    element.addEventListener('click', () =>{
      refs.mobileMenu.classList.add('visually-hidden')
      
    });
  })
}

export function manageTheme() {
  const themeSwitch = document.getElementById('themeSwitch');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
}
