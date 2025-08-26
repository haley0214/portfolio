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

// aboutセクションのアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".about_content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったら show
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden");
      } else {
        // 画面から出たら hidden
        entry.target.classList.remove("show");
        entry.target.classList.add("hidden");
      }
    });
  }, {
    threshold: 0.2 
  });

  targets.forEach(target => {
    target.classList.add("hidden"); 
    observer.observe(target);
  });
});
