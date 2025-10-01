const mainSlide = new Swiper(".main-slide", {
  slidesPerView: 1,
  spaceBetween: 12,
  slidesOffsetBefore: 0,
  pagination: {
    el: ".main-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".main-prev",
    nextEl: ".main-next",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.321,
      spaceBetween: 24,
      slidesOffsetBefore: 230,
      loop: true,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesOffsetBefore: 0,
    },
  },
});

const mainBanner = new Swiper(".main-banner", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// news.js에서 관리하므로 .news-section은 제외
// 다른 섹션만 초기화 (예: .news-sectionB, .news-sectionC 등)
document
  .querySelectorAll(".news-sectionB, .news-sectionC")
  .forEach((section, index) => {
    const swiperEl = section.querySelector(".swiper");
    const nextBtn = section.querySelector(
      ".next-btn button, .next-btnB button"
    );
    const prevBtn = section.querySelector(
      ".prev-btn button, .prev-btnB button"
    );

    new Swiper(swiperEl, {
      slidesPerView: 2,
      spaceBetween: 12,
      loop: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  });

document
  .querySelectorAll(".news-table .menu ul.select-tab li > .radio-box > ul > li")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      // 부모 li를 찾아서 blur 처리
      const parentLi = e.target.closest("li[tabindex]");
      if (parentLi) {
        parentLi.blur(); // focus 해제 → radio-box 닫힘
      }
    });
  });

const profileList = new Swiper(".profile-list", {
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
    breakpoints: {
    1024: {
      slidesPerView: 5.295,
      spaceBetween: 24,
      loop: true,
      centeredSlides: false,
    },
    767: {
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: false,
    },
  },
});
const subSlide = new Swiper(".sub-slide", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  navigation: {
    prevEl: ".sub-prev-btn",
    nextEl: ".sub-next-btn",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
