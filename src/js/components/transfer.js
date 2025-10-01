// 뉴스 데이터 배열
const newsData = [
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-01.jpg",
    player: "알렉산더르 이삭",
    time: "5분 전",
    title:
      "리버풀은 알렉산더 이삭의 이적을 위해 뉴캐슬 유나이티드와 2400억에 영국 기록적인 이적료에 합의",
    trust: 100,
    reporterImg: "img/profile-logo/liv.svg",
    reporter: "리버풀 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-02.jpg",
    player: "주앙 패드루",
    time: "5분 전",
    title:
      "첼시가 공격수 주앙 페드루를 영입했다. 계약 기간은2033년까지 이며, 이적료는 약 1113억 원이다.",
    trust: 100,
    reporterImg: "img/profile-logo/che.svg",
    reporter: "첼시 공식 홈페이지",
  },

  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-03.jpg",
    player: "플로리안 비르츠",
    time: "10분 전",
    title: "이적료 2152억 원' 비르츠, 리버풀 도착 후 곧바로 메디컬 테스트 진행",
    trust: 100,
    reporterImg: "img/profile-logo/liv.svg",
    reporter: "리버풀 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-04.jpg",
    player: "티자니 라인더르스",
    time: "20분 전",
    title:
      "레인더르스는 맨시티 합류에 합의. 총액 약 1090억원에 달하는 이적료로 결정됐다.",
    trust: 100,
    reporterImg: "img/profile-logo/mac.svg",
    reporter: "멘체스터시티 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-05.jpg",
    player: "리얀 셰르키",
    time: "20분 전",
    title:
      "맨체스터 시티 초대박 소식! 'HERE WE GO' 더 브라위너 공백 메웠다...'540억' 지불 결단→5년 계약 합의",
    trust: 100,
    reporterImg: "img/profile-logo/mac.svg",
    reporter: "멘체스터시티 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-06.jpg",
    player: "제이미 기튼스",
    time: "20분 전",
    title:
      "특급 윙어 기튼스, 마침내 첼시 입단완료 많은것을 배우고 시험해보고 싶어한다",
    trust: 100,
    reporterImg: "img/profile-logo/che.svg",
    reporter: "첼시 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-07.jpg",
    player: "알레한드로 가르나초",
    time: "20분 전",
    title: "역대급 금쪽이' 가르나초, 맨유→첼시 완료! 이적료 752억+7년 계약완료",
    trust: 100,
    reporterImg: "img/profile-logo/che.svg",
    reporter: "첼시 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-08.jpg",
    player: "에베레치 에제",
    time: "20분 전",
    title: "아스날, 진짜 미쳤다! 에제까지 영입 추진→'1130억' 사비뉴와 별개 딜",
    trust: 100,
    reporterImg: "img/profile-logo/ars.svg",
    reporter: "아스날 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-09.jpg",
    player: "사비 시몬스",
    time: "20분 전",
    title: "사비 시몬스, 토트넘 이적 확정…등번호는 손흥민이 달았던 7번",
    trust: 100,
    reporterImg: "img/profile-logo/tot.svg",
    reporter: "토트넘 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-10.jpg",
    player: "위고 에키티케",
    time: "20분 전",
    title: "레리버풀, 공격수 에키티케 영입…6년 계약+이적료 총액 1465억 원",
    trust: 100,
    reporterImg: "img/profile-logo/liv.svg",
    reporter: "리버풀 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-11.jpg",
    player: "마테우스 쿠냐",
    time: "20분 전",
    title:
      "쿠냐, 1천160억에 맨유 이적 임박···“바이아웃 발동, 이적 마무리 단계”",
    trust: 100,
    reporterImg: "img/profile-logo/mau.svg",
    reporter: "멘체스터 유나이티드 공식 홈페이지",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-12.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 100,
    reporterImg: "img/profile-logo/liv.svg",
    reporter: "리버풀 공식 홈페이지",
  },

  // ----------- 거피셜 ----------

  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-01.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-02.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-03.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-04.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-05.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-05.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-06.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 60,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-07.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 60,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/un-img-08.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },

  // -------긴급속보-----------

  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-01.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-02.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 60,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-03.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-04.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-05.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 20,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-06.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 60,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-07.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 20,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-08.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/em-img-09.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 80,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },

  // ---------------루머---------------

  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-01.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-02.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 20,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-03.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 40,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-04.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 20,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-05.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 20,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },

  {
    id: "루머",
    img: "img/transfer-img/342x192/ru-img-06.jpg",
    player: "다르윈 누녜스",
    time: "20분 전",
    title:
      " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
    trust: 60,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테안",
  },
];

// 스와이퍼 인스턴스를 저장할 변수
let transferSwiperInstance = null;

// 뉴스 섹션 스와이퍼 초기화 함수
function initNewsSwiper() {
  // 기존 인스턴스가 있으면 제거
  if (transferSwiperInstance) {
    transferSwiperInstance.destroy(true, true);
    transferSwiperInstance = null;
  }

  // transfer 관련 뉴스 섹션 찾기
  const newsSection = document
    .querySelector("#transfer-menu")
    .closest(".news-section");
  if (!newsSection) {
    console.warn("News section not found");
    return;
  }

  const swiperEl = newsSection.querySelector(".swiper");
  if (!swiperEl) {
    console.warn("Swiper element not found");
    return;
  }

  // 스와이퍼 초기화 (기존 설정과 동일하게)
  transferSwiperInstance = new Swiper(swiperEl, {
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: newsSection.querySelector(".next-btn, .next-btnB"),
      prevEl: newsSection.querySelector(".prev-btn, .prev-btnB"),
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
}

// 렌더링 함수
function renderNewsList(data) {
  const wrapper = document.getElementById("transfer-wrapper");
  if (!wrapper) {
    console.error("transfer-wrapper element not found");
    return;
  }

  wrapper.innerHTML = "";

  data.forEach(({ img, player, time, title, trust, reporterImg, reporter }) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide item";
    slide.innerHTML = `
      <figure>
        <img src="${img}" alt="${player}" />
        <span class="icon"></span>
      </figure>
      <div class="txt">
        <p class="info">
          <span>${player}</span>
          <span>${time}</span>
        </p>
        <h5 class="tit">${title}</h5>
        <p class="sub-profile">
          <span class="img"><img src="${reporterImg}" alt="${reporter}"></span>
          <span class="name">${reporter}</span>
        </p>
        <div class="chart-wrap">
          <span>공신력</span>
          <div class="bar-bg">
            <div class="bar per-${trust}"></div>
          </div>
          <span class="percent">${trust}%</span>
        </div>

      </div>
    `;
    wrapper.appendChild(slide);
  });

  // DOM 업데이트가 완료된 후 스와이퍼 재초기화
  requestAnimationFrame(() => {
    initNewsSwiper();
  });
}

// 필터링 함수
function filterNewsByCategory(category) {
  // newsData가 정의되어 있는지 확인
  if (typeof newsData === "undefined") {
    console.error("newsData is not defined");
    return;
  }

  const filteredData = newsData.filter((item) => item.id === category);
  renderNewsList(filteredData);
}

// 탭 버튼 이벤트 처리 함수
function initNewsTabFilter() {
  // main.html과 sub.html 모두 지원하도록 두 가지 선택자 시도
  let newsTabList = document.querySelector(".news-table .tab-list"); // sub.html용

  if (!newsTabList) {
    newsTabList = document.querySelector("#transfer-menu .tab-list"); // main.html용
  }

  if (!newsTabList) {
    console.warn("transfer 관련 tab-list를 찾을 수 없습니다.");
    return;
  }

  const tabButtons = newsTabList.querySelectorAll("button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // 모든 버튼에서 'on' 클래스 제거
      tabButtons.forEach((btn) => btn.classList.remove("on"));

      // 클릭된 버튼에 'on' 클래스 추가
      this.classList.add("on");

      // 버튼 텍스트로 카테고리 필터링
      const category = this.textContent.trim();
      filterNewsByCategory(category);
    });
  });
}

// 기존 뉴스 섹션 스와이퍼들을 초기화하는 함수 (기존 코드 유지)
function initAllNewsSwipers() {
  document.querySelectorAll(".news-section").forEach((section, index) => {
    const swiperEl = section.querySelector(".swiper");

    // transfer 섹션이 아닌 경우에만 초기화 (transfer는 따로 관리)
    if (swiperEl && !section.querySelector("#transfer-menu")) {
      new Swiper(swiperEl, {
        slidesPerView: 2,
        spaceBetween: 12,
        loop: true,
        navigation: {
          nextEl: section.querySelector(".next-btn, .next-btnB"),
          prevEl: section.querySelector(".prev-btn, .prev-btnB"),
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
    }
  });
}

// DOM이 로드되면 실행
document.addEventListener("DOMContentLoaded", function () {
  // 기존 뉴스 섹션들 초기화
  initAllNewsSwipers();

  // newsData가 로드될 때까지 기다리는 함수
  function waitForNewsData() {
    if (typeof newsData !== "undefined") {
      // 초기 렌더링 (오피셜 카테고리로 시작)
      filterNewsByCategory("오피셜");

      // 탭 필터 초기화
      initNewsTabFilter();
    } else {
      // newsData가 아직 로드되지 않았다면 100ms 후에 다시 시도
      setTimeout(waitForNewsData, 100);
    }
  }

  waitForNewsData();
});

// 윈도우 리사이즈 시 스와이퍼 업데이트
window.addEventListener("resize", function () {
  if (transferSwiperInstance) {
    transferSwiperInstance.update();
  }
});
