const projects = document.querySelectorAll('.li-projects');
const loadMoreButton = document.querySelector('.load-more');
let currentIndex = 3;

export function showProjects(start, end) {
  for (let i = start; i < end && i < projects.length; i += 1) {
    projects[i].style.display = 'block';
  }
}

projects.forEach((project, index) => {
  if (index >= currentIndex) {
    project.style.display = 'none';
  }
});

showProjects(0, currentIndex);

loadMoreButton.addEventListener('click', function () {
  showProjects(currentIndex, currentIndex + 3);
  currentIndex += 3;

  if (currentIndex >= projects.length) {
    loadMoreButton.style.display = 'none';
  }

  window.scrollTo({
    top: window.scrollY + 700,
    behavior: 'smooth',
  });
});
