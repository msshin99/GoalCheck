// ---------------

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

// ==================== 뉴스 데이터 배열 (여기에 전체 데이터 입력) ====================
const newsData = [
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-30.jpg",
    player: "1인 개발자 노트",
    time: "5분 전",
    title:
      "반복 이메일 응답을 AI로 자동 처리해 CS 업무 시간을 대폭 줄인 실제 사례",
    trust: 100,
    reporterImg: "img/profile-img/face/face-16.png",
    reporter: "ReplyFlow Labs",
    link: "",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-29.jpg",
    player: "솔로 개발자 로그",
    time: "5분 전",
    title:
      "매번 손으로 처리하던 반복 메일을 AI가 대신 응답하도록 구축고객 지원 업무 부담을 크게 줄인 실전 사례",
    trust: 100,
    reporterImg: "img/profile-img/face/face-15.png",
    reporter: "Contentory Studio",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-28.jpg",
    player: "콘텐츠 전략팀",
    time: "5분 전",
    title:
      "엑셀 수식 없이도 가능한 업무 자동화, AI로 데이터 정리를 완전히 바꾼 방법",
    trust: 100,
    reporterImg: "img/profile-img/face/face-14.png",
    reporter: "design AB",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-27.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-14.png",
    reporter: "AdMetric Lab",
    link: "",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-26.jpg",

    player: "개발자 다이어리",
    time: "5분 전",
    title:
      "반복적인 이메일 응답을 자동화 구조로 개선해 운영 부담을 효과적으로 낮춘 실제 사례",
    trust: 100,
    reporterImg: "img/profile-img/face/face-13.png",
    reporter: "ReplyFlow Labs",
    link: "insights/viewpage.html",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-25.jpg",
    player: "솔로 빌더 노트",
    time: "5분 전",
    title:
      "하루에도 수십 통씩 오던 문의 메일을 AI가 대신 처리하 CS 대응 시간을 구조적으로 줄인 경험",
    trust: 100,
    reporterImg: "img/profile-img/face/face-12.png",
    reporter: "Contentory Studio",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-24.jpg",
    player: "콘텐츠 전략팀",
    time: "5분 전",
    title:
      "엑셀 수식 없이도 가능한 업무 자동화, AI로 데이터 정리를 완전히 바꾼 방법",
    trust: 100,
    reporterImg: "img/profile-img/face/face-10.png",
    reporter: "Pentagram",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-23.jpg",
    player: "1인 개발자 스토리",
    time: "5분 전",
    title:
      "반복되는 고객 응대를 AI 자동 답변으로 치환해 운영과 개발에 집중할 수 있게 만든 사례",
    trust: 100,
    reporterImg: "img/profile-img/face/face-09.png",
    reporter: "Studio Axis",
    link: "",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-22.jpg",
    player: "개발자 리포트",
    time: "5분 전",
    title:
      "단순 반복 이메일 응답을 AI 자동 처리로 전환하며 고객 지원 프로세스를 간결하게 만든 실제 기록",
    trust: 100,
    reporterImg: "img/profile-img/face/face-08.png",
    reporter: "Insight Lab",
    link: "",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-21.jpg",
    player: "1인 개발자 메모",
    time: "5분 전",
    title:
      "쌓여가던 반복 문의 메일을 AI 응답 시스템으로 대체해 CS 업무 시간을 눈에 띄게 단축한 경험",
    trust: 100,
    reporterImg: "img/profile-img/face/face-08.png",
    reporter: "ReplyFlow Labs",
    link: "",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-20.jpg",
    player: "1인 개발자 노트",
    time: "5분 전",
    title:
      "반복 이메일 응답을 AI로 자동 처리해 CS 업무 시간을 대폭 줄인 실제 사례",
    trust: 100,
    reporterImg: "img/profile-img/face/face-08.png",
    reporter: "Context Metrics",
    link: "",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-30.jpg",
    player: "AI 업무 자동화 연구소",
    time: "5분 전",
    title: "블로그 기획부터 글 구조 설계까지, AI에게 콘텐츠 전략을 맡겨본 결과",
    trust: 100,
    reporterImg: "img/profile-img/face/face-07.png",
    reporter: "BrandMetric Lab",
    link: "",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-15.jpg",
    player: "AI 업무 자동화 연구소",
    time: "5분 전",
    title: "블로그 기획부터 글 구조 설계까지, AI에게 콘텐츠 전략을 맡겨본 결과",
    trust: 100,
    reporterImg: "img/profile-img/face/face-07.png",
    reporter: "Visual Index",
    link: "",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-16.jpg",
    player: "AI 업무 자동화 연구소",
    time: "5분 전",
    title: "블로그 기획부터 글 구조 설계까지, AI에게 콘텐츠 전략을 맡겨본 결과",
    trust: 100,
    reporterImg: "img/profile-img/face/face-07.png",
    reporter: "Shape & Sense",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-30.jpg",
    player: "콘텐츠 전략팀",
    time: "5분 전",
    title:
      "엑셀 수식 없이도 가능한 업무 자동화, AI로 데이터 정리를 완전히 바꾼 방법",
    trust: 100,
    reporterImg: "img/profile-img/face/face-06.png",
    reporter: "UX Metric Studio",
    link: "",
  },
  {
    id: "오피셜",
    img: "img/transfer-img/342x192/img-12.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-05.png",
    reporter: "Experience Metric",
    link: "",
  },
  {
    id: "거피셜",
    img: "img/transfer-img/342x192/img-13.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-04.png",
    reporter: "Northscale Studio",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-14.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-03.png",
    reporter: "AdMetric Lab",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-26.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-03.png",
    reporter: "AdMetric Lab",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-27.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-03.png",
    reporter: "Studio Axis",
    link: "",
  },
  {
    id: "긴급속보",
    img: "img/transfer-img/342x192/img-15.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-02.png",
    reporter: "Studio Axis",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-16.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "Blue Ratio",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-05.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "Visual Index",
    link: "",
  },
  {
    id: "루머",
    img: "img/transfer-img/342x192/img-04.jpg",
    player: "노코드 실험실",
    time: "5분 전",
    title:
      "전환율이 높은 광고 문장은 무엇이 다를까? AI가 분석한 카피 패턴 정리",
    trust: 100,
    reporterImg: "img/profile-img/face/face-01.png",
    reporter: "Shape & Sense",
    link: "",
  },

  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-01.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "알렉산더르 이삭",
  //   time: "5분 전",
  //   title:
  //     "리버풀은 알렉산더 이삭의 이적을 위해 뉴캐슬 유나이티드와 2400억에 영국 기록적인 이적료에 합의",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/liv.svg",
  //   reporter: "리버풀 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-02.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "주앙 패드루",
  //   time: "5분 전",
  //   title:
  //     "첼시가 공격수 주앙 페드루를 영입했다. 계약 기간은2033년까지 이며, 이적료는 약 1113억 원이다.",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/che.svg",
  //   reporter: "첼시 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },

  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-03.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "플로리안 비르츠",
  //   time: "10분 전",
  //   title: "이적료 2152억 원' 비르츠, 리버풀 도착 후 곧바로 메디컬 테스트 진행",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/liv.svg",
  //   reporter: "리버풀 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-04.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "티자니 라인더르스",
  //   time: "20분 전",
  //   title:
  //     "레인더르스는 맨시티 합류에 합의. 총액 약 1090억원에 달하는 이적료로 결정됐다.",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/mac.svg",
  //   reporter: "멘체스터시티 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-05.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "리얀 셰르키",
  //   time: "20분 전",
  //   title:
  //     "맨체스터 시티 초대박 소식! 'HERE WE GO' 더 브라위너 공백 메웠다...'540억' 지불 결단→5년 계약 합의",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/mac.svg",
  //   reporter: "멘체스터시티 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-06.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "제이미 기튼스",
  //   time: "20분 전",
  //   title:
  //     "특급 윙어 기튼스, 마침내 첼시 입단완료 많은것을 배우고 시험해보고 싶어한다",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/che.svg",
  //   reporter: "첼시 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-07.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "알레한드로 가르나초",
  //   time: "20분 전",
  //   title: "역대급 금쪽이' 가르나초, 맨유→첼시 완료! 이적료 752억+7년 계약완료",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/che.svg",
  //   reporter: "첼시 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-08.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "에베레치 에제",
  //   time: "20분 전",
  //   title: "아스날, 진짜 미쳤다! 에제까지 영입 추진→'1130억' 사비뉴와 별개 딜",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/ars.svg",
  //   reporter: "아스날 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-09.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "사비 시몬스",
  //   time: "20분 전",
  //   title: "사비 시몬스, 토트넘 이적 확정…등번호는 손흥민이 달았던 7번",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/tot.svg",
  //   reporter: "토트넘 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-10.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "위고 에키티케",
  //   time: "20분 전",
  //   title: "레리버풀, 공격수 에키티케 영입…6년 계약+이적료 총액 1465억 원",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/liv.svg",
  //   reporter: "리버풀 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-11.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "마테우스 쿠냐",
  //   time: "20분 전",
  //   title:
  //     "쿠냐, 1천160억에 맨유 이적 임박···“바이아웃 발동, 이적 마무리 단계”",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/mau.svg",
  //   reporter: "멘체스터 유나이티드 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "오피셜",
  //   img: "img/transfer-img/342x192/img-12.jpg",
  //   moon: "img/trust-icon/100.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 100,
  //   reporterImg: "img/profile-logo/liv.svg",
  //   reporter: "리버풀 공식 홈페이지",
  //   link: "insights/viewpage.html",
  // },

  // // ----------- 거피셜 ----------

  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-01.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-02.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-03.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-04.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-05.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-05.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-06.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 60,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-07.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 60,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "거피셜",
  //   img: "img/transfer-img/342x192/un-img-08.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },

  // // -------긴급속보-----------

  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-01.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-02.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 60,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-03.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-04.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-05.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 20,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-06.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 60,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-07.jpg",
  //   moon: "img/trust-icon/20.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 20,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-08.jpg",
  //   moon: "img/trust-icon/40.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "긴급속보",
  //   img: "img/transfer-img/342x192/em-img-09.jpg",
  //   moon: "img/trust-icon/80.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 80,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },

  // // ---------------루머---------------

  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-01.jpg",
  //   moon: "img/trust-icon/40.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-02.jpg",
  //   moon: "img/trust-icon/20.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 20,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-03.jpg",
  //   moon: "img/trust-icon/40.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 40,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-04.jpg",
  //   moon: "img/trust-icon/20.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 20,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-05.jpg",
  //   moon: "img/trust-icon/20.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 20,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },

  // {
  //   id: "루머",
  //   img: "img/transfer-img/342x192/ru-img-06.jpg",
  //   moon: "img/trust-icon/60.svg",
  //   player: "다르윈 누녜스",
  //   time: "20분 전",
  //   title:
  //     " BBC에 따르면 이적료는 5천300만 유로(약 858억원)다. 리버풀로 이적할 때 기록한 7천500만 유로보다 낮다",
  //   trust: 60,
  //   reporterImg: "img/profile-img/face/face-01.png",
  //   reporter: "데이비드 온스테안",
  //   link: "insights/viewpage.html",
  // },
];

// ==================================================================================

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
    ?.closest(".news-section");
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

  const imgPrefix = getImagePathPrefix();
  wrapper.innerHTML = "";

  data.forEach(
    ({
      img,
      player,
      moon,
      time,
      title,
      trust,
      reporterImg,
      reporter,
      link,
    }) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide item";
      slide.innerHTML = `
    <div class="swiper-slide item" onclick="location.href='${imgPrefix}${link}'" >
      <figure>
        <img src="${imgPrefix}${img}" alt="${player}" />
      </figure>
      <div class="txt">
        <p class="info">
          <span>${player}</span>
          <span>${time}</span>
        </p>
        <h5 class="tit">${title}</h5>
        <p class="sub-profile">
          <span class="img"><img src="${imgPrefix}${reporterImg}" alt="${reporter}"></span>
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
    },
  );

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
  document.querySelectorAll(".news-section").forEach((section) => {
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
