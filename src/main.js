//<<<<<<< HEAD
import { initializeSwiper } from './js/reviews.js';
initializeSwiper();
//=======

//<<<<<<< HEAD

//>>>>>>> header
import { toggleMenu } from './js/header.js';
toggleMenu();
import { closeMenuOnClick } from './js/header.js';
closeMenuOnClick();
//>>>>>>> header

//>>>>>>> main

//<<<<<<< My-project
import { showProjects } from './js/my-projects';
showProjects();
//=======
//=======

import { initAccardionFaq } from './js/faq.js';

initAccardionFaq();
//>>>>>>> main

import { manageModal } from './js/work-together.js';
manageModal();

// scroll

import './js/scroll-btn.js';

// switch
import { manageTheme } from './js/header.js';

document.addEventListener("DOMContentLoaded", function() {
  manageTheme();
});