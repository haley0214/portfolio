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

// スクロールでヘッダー表示・非表示

// const c_header = document.querySelector('.c_header');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;

//   if (currentScroll > lastScroll) {
//     // 下にスクロール → ヘッダーを上に隠す
//     header.style.transform = 'translateY(-100%)';
//   } else {
//     // 上にスクロール → ヘッダーを表示
//     header.style.transform = 'translateY(0)';
//   }

//   lastScroll = currentScroll;
// });





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
  // ナビゲーションリンクと対象セクションの対応
  const links = document.querySelectorAll('.header_item a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // デフォルトのリンク動作を無効化

      // リンクテキストで対象セクションを判別
      const targetText = link.textContent.trim().toLowerCase(); // works, about, service, contact
      let targetSection;

      if (targetText === 'works') targetSection = document.querySelector('.work_wrapper');
      if (targetText === 'about') targetSection = document.querySelector('.about_wrapper');
      if (targetText === 'service') targetSection = document.querySelector('.service_wrapper');
      if (targetText === 'contact') targetSection = document.querySelector('.contact_wrapper');

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


