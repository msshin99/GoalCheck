// 경로 prefix 결정 함수
function getImagePathPrefix() {
  const path = window.location.pathname;
  // sub 폴더 안에 있거나, 루트가 아닌 깊은 경로인 경우
  const isSubPage =
    path.includes("/sub/") ||
    (path.split("/").filter((p) => p).length > 1 &&
      !path.endsWith("index.html"));
  return isSubPage ? "../" : "";
}

// 뉴스 데이터 배열
const newsData = [
  {
    img: "img/news-img/342x192/img-01.jpg",
    player: "라민 야말",
    time: "방금전",
    title:
      "FC 바르셀로나의 '에이스' 라민 야말이 부상으로 팀 훈련에서 제외됐다.",
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "데이비드 온스테인",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.01.21",
    view: "122",
    suggest: "151",
  },
  {
    img: "img/news-img/342x192/img-02.jpg",
    player: "킬리안 음바페",
    time: "10분 전",
    title:
      "킬리안 음바페가 파리 생제르맹과 작별한다. 이번에야말로 레알 마드리드에 입성할 가능성이 점쳐지고 있다.",
    reporterImg: "img/profile-img/face/face-10.png",
    reporter: "댄 쉘던",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2024.03.22",
    view: "126",
    suggest: "278",
  },
  {
    img: "img/news-img/342x192/img-03.jpg",
    player: "엘링 홀란드",
    time: "15분 전",
    title:
      "홀란드는 2034년 여름까지 에티하드 스타디움에 머물 수 있는 새 계약을 체결한다. 맨체스터 시티에 헌신할 예정",
    reporterImg: "img/profile-img/face/face-04.png",
    reporter: "마이클 콕스",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2023.08.21",
    view: "932",
    suggest: "365",
  },
  {
    img: "img/news-img/342x192/img-04.jpg",
    player: "벤자민 세슈코",
    time: "30분 전",
    title:
      "맨유가 세슈코 영입에 가까워졌다. 맨유는 세슈코를 두고 뉴캐슬과 경쟁하고 있고, 두 팀 모두 제안을 제출했다.",
    reporterImg: "img/profile-img/face/face-05.png",
    reporter: "닉 밀러",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2022.02.21",
    view: "151",
    suggest: "416",
  },
  {
    img: "img/news-img/342x192/img-05.jpg",
    player: "콜 파머",
    time: "20분 전",
    title:
      "첼시, '부상 연쇄 부상' 악몽…콜 파머 결장 확정, 1군 전력 10명 이상 이탈 충격",
    reporterImg: "img/profile-img/face/face-12.png",
    reporter: "제임스 피어스",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2024.01.11",
    view: "415",
    suggest: "5",
  },
  {
    img: "img/news-img/342x192/img-06.jpg",
    player: "모하메드 살라",
    time: "15분 전",
    title:
      "모하메드 살라, 번리전 극장골→PL 통산 188골...단독 4위 등극 '루니와 20골 차'",
    reporterImg: "img/profile-img/face/face-17.png",
    reporter: "리암 투데이",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.11.01",
    view: "441",
    suggest: "6",
  },
  {
    img: "img/news-img/342x192/img-07.jpg",
    player: "필 포든",
    time: "15분 전",
    title:
      "포든이 돌아왔다! 홀란 대기록에 가려진 '기회 창출 8회' 맹활약… 지난 시즌 부진 완전히 잊었다",
    reporterImg: "img/profile-img/face/face-40.png",
    reporter: "필 헤이",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.01.05",
    view: "314",
    suggest: "715",
  },
  {
    img: "img/news-img/342x192/img-08.jpg",
    player: "해리 케인",
    time: "30분 전",
    title: "손흥민과 미국서 재회할까.. 케인, 은퇴 후 NFL 도전 가능성 다시 화제",
    reporterImg: "img/profile-img/face/face-37.png",
    reporter: "피터 루출러",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.08.01",
    view: "14",
    suggest: "821",
  },
  {
    img: "img/news-img/342x192/img-09.jpg",
    player: "부카요 사카",
    time: "10분 전",
    title:
      "아스널 십년감수! '리즈전 부상 OUT' 외데고르·사카, 장기 결장 피했다… 리버풀전은 불투명",
    reporterImg: "img/profile-img/face/face-26.png",
    reporter: "그랙 오키프",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.03.23",
    view: "148",
    suggest: "911",
  },
  {
    img: "img/news-img/342x192/img-10.jpg",
    player: "오마르 마르무쉬",
    time: "10분 전",
    title: "'맨시티 한숨' 마르무쉬 대표팀서 부상, 맨체스터 더비 결장",
    reporterImg: "img/profile-img/face/face-22.png",
    reporter: "마리오 코르테가나",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2024.05.12",
    view: "215",
    suggest: "161",
  },
  {
    img: "img/news-img/342x192/img-11.jpg",
    player: "데클란 라이스",
    time: "15분 전",
    title: "무려 2025억 제안했는데…파리 생제르맹 '퇴짜' 맞았다",
    reporterImg: "img/profile-img/face/face-18.png",
    reporter: "에이미 로렌스",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2023.08.21",
    view: "344",
    suggest: "111",
  },
  {
    img: "img/news-img/342x192/img-12.jpg",
    player: "주드 벨링엄",
    time: "30분 전",
    title: "레알 마드리드 '공격 핵심' 벨링엄, 어깨수술로 최대 3개월 결장",
    reporterImg: "img/profile-img/face/face-14.png",
    reporter: "사이먼 휴즈",
    trust: 100,
    link: "insights/viewpage.html",
    date: "2025.11.12",
    view: "465",
    suggest: "963",
  },
];

// Swiper 인스턴스를 저장할 변수
let newsSwiper = null;

// 🔧 뉴스 아이템 HTML 생성 함수 (경로 자동 감지 적용)
function createNewsItem(item) {
  const imgPrefix = getImagePathPrefix();

  return `
    <div class="swiper-slide item" onclick="location.href='${imgPrefix}${item.link}'" >
      <figure>
        <img src="${imgPrefix}${item.img}" alt="${item.player}">
        <span class="icon"></span>
      </figure>
      <div class="txt">
        <p class="info">
          <span>${item.player}</span>
          <span>${item.time}</span>
        </p>
        <h5 class="tit">${item.title}</h5>
        <p class="sub-profile">
          <span class="img"><img src="${imgPrefix}${item.reporterImg}" alt="${item.reporter}"></span>
          <span class="name">${item.reporter}</span>
        </p>
        <div class="chart-wrap">
          <span>공신력</span>
          <div class="bar-bg">
            <div class="bar per-${item.trust}"></div>
          </div>
          <span class="percent">${item.trust}%</span>
        </div>
      </div>
    </div>
  `;
}

// 날짜 문자열을 Date 객체로 변환하는 함수
function parseDate(dateStr) {
  return new Date(dateStr.replace(/\./g, "-"));
}

// 데이터 정렬 함수들
function sortByLatest(data) {
  return [...data].sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

function sortByViews(data) {
  return [...data].sort((a, b) => parseInt(b.view) - parseInt(a.view));
}

function sortBySuggestions(data) {
  return [...data].sort((a, b) => parseInt(b.suggest) - parseInt(a.suggest));
}

// Main.html용 슬라이드 렌더링 함수
function renderMainNews(data) {
  const wrapper = document.getElementById("news-wrapper");
  if (!wrapper) {
    console.error("news-wrapper를 찾을 수 없습니다.");
    return;
  }

  console.log("renderMainNews 호출됨, 데이터 개수:", data.length);

  // Swiper 파괴 (존재하는 경우)
  if (newsSwiper && typeof newsSwiper.destroy === "function") {
    console.log("기존 Swiper 파괴");
    newsSwiper.destroy(true, true);
    newsSwiper = null;
  }

  // 새로운 콘텐츠 렌더링
  wrapper.innerHTML = data.map(createNewsItem).join("");

  // 약간의 지연 후 Swiper 재초기화
  setTimeout(() => {
    initNewsSwiper();
  }, 100);
}

// 🔧 핵심 수정: 뉴스 섹션 Swiper 초기화 함수
function initNewsSwiper() {
  // #news-menu를 포함한 섹션만 찾기
  const newsMenu = document.getElementById("news-menu");
  if (!newsMenu) {
    console.error("news-menu를 찾을 수 없습니다.");
    return;
  }

  const newsSectionSpecific = newsMenu.closest(".news-section");
  if (!newsSectionSpecific) {
    console.error("news-section을 찾을 수 없습니다.");
    return;
  }

  const cardListElement = newsSectionSpecific.querySelector(".card-list");
  if (!cardListElement) {
    console.error("card-list 요소를 찾을 수 없습니다.");
    return;
  }

  const slides = cardListElement.querySelectorAll(".swiper-slide");
  console.log("슬라이드 개수:", slides.length);

  // 해당 섹션 내의 버튼만 선택
  const nextBtn = newsSectionSpecific.querySelector(
    '[data-section="news-main"] button'
  );
  const prevBtn = newsSectionSpecific.querySelector(
    '[data-section="news-main"] button'
  );

  // data-section이 없는 경우를 위한 폴백
  const finalNextBtn =
    nextBtn || newsSectionSpecific.querySelector(".controls .next-btn button");
  const finalPrevBtn =
    prevBtn || newsSectionSpecific.querySelector(".controls .prev-btn button");

  if (!finalNextBtn || !finalPrevBtn) {
    console.error("네비게이션 버튼을 찾을 수 없습니다.");
    return;
  }

  try {
    // 🔧 중요: 특정 섹션의 card-list만 선택하도록 DOM 요소를 직접 전달
    newsSwiper = new Swiper(cardListElement, {
      slidesPerView: 2,
      spaceBetween: 12,
      loop: true,
      navigation: {
        nextEl: finalNextBtn,
        prevEl: finalPrevBtn,
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

    console.log("Swiper 초기화 완료", newsSwiper);
  } catch (error) {
    console.error("Swiper 초기화 오류:", error);
  }
}

// Sub.html용 그리드 렌더링 함수
function renderSubNews(data) {
  const wrapper = document.querySelector(".sub-news-list .card-list");
  if (!wrapper) return;

  wrapper.innerHTML = data.map(createNewsItem).join("");
}

// 탭 버튼 활성화 상태 변경
function setActiveTab(container, activeButton) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("on"));
  activeButton.classList.add("on");
}

// Main.html 이벤트 리스너
function initMainPage() {
  // #news-menu가 있는 섹션만 찾기
  const newsMenu = document.getElementById("news-menu");
  if (!newsMenu) return;

  const mainSection = newsMenu.closest(".news-section");
  if (!mainSection) return;

  const tabButtons = mainSection.querySelectorAll(".tab-list button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent.trim();
      console.log("버튼 클릭:", buttonText);
      let sortedData = [...newsData];

      switch (buttonText) {
        case "최신순":
          sortedData = sortByLatest(newsData);
          break;
        case "조회순":
          sortedData = sortByViews(newsData);
          break;
        case "추천순":
          sortedData = sortBySuggestions(newsData);
          break;
        default:
          sortedData = [...newsData]; // 전체는 기본 순서
      }

      setActiveTab(mainSection.querySelector(".tab-list"), button);
      renderMainNews(sortedData);
    });
  });

  // 초기 렌더링 (전체가 기본 활성화되어 있음)
  const firstButton = mainSection.querySelector(".tab-list button");
  if (firstButton) {
    setActiveTab(mainSection.querySelector(".tab-list"), firstButton);
  }
  renderMainNews(newsData);
}

// Sub.html 이벤트 리스너
function initSubPage() {
  const subSection = document.querySelector(".sub-news-list");
  if (!subSection) return;

  const tabButtons = subSection.querySelectorAll(".tab-list button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent.trim();
      let sortedData = [...newsData];

      switch (buttonText) {
        case "최신순":
          sortedData = sortByLatest(newsData);
          break;
        case "조회순":
          sortedData = sortByViews(newsData);
          break;
        case "추천순":
          sortedData = sortBySuggestions(newsData);
          break;
        default:
          sortedData = [...newsData]; // 전체는 기본 순서
      }

      setActiveTab(subSection.querySelector(".tab-list"), button);
      renderSubNews(sortedData);
    });
  });

  // 초기 렌더링 (전체가 기본 활성화되어 있음)
  const firstButton = subSection.querySelector(".tab-list button");
  if (firstButton) {
    setActiveTab(subSection.querySelector(".tab-list"), firstButton);
  }
  renderSubNews(newsData);
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", () => {
  // #news-menu가 있으면 Main 페이지
  if (document.getElementById("news-menu")) {
    initMainPage();
  }

  if (document.querySelector(".sub-news-list")) {
    initSubPage();
  }
});
