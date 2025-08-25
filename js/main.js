window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;
  const threshold = 550; 

  if (scrollPosition > threshold) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  };
});