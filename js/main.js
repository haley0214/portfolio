// ハンバーガーメニューの動作
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".header_toggle");
  const menu = document.querySelector(".header_list");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("is-active"); 
    menu.classList.toggle("is-active");   
  });
});

// スクロールでヘッダー背景色変更
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// aboutセクションのアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".about_content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden");
      } else {
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



document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header_item a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetText = link.textContent.trim().toLowerCase(); // works, about...
      let selector;

      if (targetText === 'works') selector = '.work_wrapper';
      if (targetText === 'about') selector = '.about_wrapper';
      if (targetText === 'service') selector = '.service_wrapper';
      if (targetText === 'contact') selector = '.contact_wrapper';

      // 今のページが index.html かどうかを判定
      const onIndex = location.pathname.endsWith('index.html') || location.pathname === '/';

      if (onIndex) {
        // index.html ならその場でスクロール
        const targetSection = document.querySelector(selector);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // 下層ページなら index.html に移動（ハッシュを利用）
        window.location.href = `index.html#${targetText}`;
      }
    });
  });

  // index.html に来たとき、ハッシュがあればスクロール
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const targetSection = document.querySelector(`.${hash}_wrapper`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});


