// 2025-26 프리미어리그 시즌 데이터 (2025년 9월 말 기준 추정)
const leagueData = [
  {
    rank: 1,
    status: "up",
    logo: "../img/team-logo/ManchesterCity.png",
    name: "맨체스터 시티",
    mp: 6,
    w: 5,
    d: 1,
    l: 0,
    gf: 16,
    ga: 5,
    gd: 11,
    next: "../img/team-logo/Arsenal.png",
    form: ["win", "win", "draw", "win", "win"],
    pts: 16,
  },
  {
    rank: 2,
    status: "same",
    logo: "../img/team-logo/Arsenal.png",
    name: "아스날",
    mp: 6,
    w: 4,
    d: 2,
    l: 0,
    gf: 14,
    ga: 5,
    gd: 9,
    next: "../img/team-logo/ManchesterCity.png",
    form: ["win", "draw", "win", "win", "draw"],
    pts: 14,
  },
  {
    rank: 3,
    status: "up",
    logo: "../img/team-logo/Liverpool.png",
    name: "리버풀",
    mp: 6,
    w: 4,
    d: 2,
    l: 0,
    gf: 13,
    ga: 6,
    gd: 7,
    next: "../img/team-logo/Chelsea.png",
    form: ["win", "draw", "win", "draw", "win"],
    pts: 14,
  },
  {
    rank: 4,
    status: "down",
    logo: "../img/team-logo/Chelsea.png",
    name: "첼시",
    mp: 6,
    w: 4,
    d: 1,
    l: 1,
    gf: 13,
    ga: 8,
    gd: 5,
    next: "../img/team-logo/Liverpool.png",
    form: ["win", "lose", "win", "draw", "win"],
    pts: 13,
  },
  {
    rank: 5,
    status: "up",
    logo: "../img/team-logo/Newcastle.png",
    name: "뉴캐슬",
    mp: 6,
    w: 4,
    d: 1,
    l: 1,
    gf: 12,
    ga: 7,
    gd: 5,
    next: "../img/team-logo/Tottenham.png",
    form: ["win", "win", "lose", "draw", "win"],
    pts: 13,
  },
  {
    rank: 6,
    status: "down",
    logo: "../img/team-logo/Tottenham.png",
    name: "토트넘",
    mp: 6,
    w: 3,
    d: 2,
    l: 1,
    gf: 14,
    ga: 8,
    gd: 6,
    next: "../img/team-logo/Newcastle.png",
    form: ["win", "draw", "lose", "win", "draw"],
    pts: 11,
  },
  {
    rank: 7,
    status: "same",
    logo: "../img/team-logo/Aston.png",
    name: "아스톤 빌라",
    mp: 6,
    w: 3,
    d: 2,
    l: 1,
    gf: 10,
    ga: 7,
    gd: 3,
    next: "../img/team-logo/Brighton.png",
    form: ["draw", "win", "lose", "win", "draw"],
    pts: 11,
  },
  {
    rank: 8,
    status: "up",
    logo: "../img/team-logo/Brighton.png",
    name: "브라이튼",
    mp: 6,
    w: 3,
    d: 2,
    l: 1,
    gf: 11,
    ga: 9,
    gd: 2,
    next: "../img/team-logo/Aston.png",
    form: ["win", "draw", "win", "lose", "draw"],
    pts: 11,
  },
  {
    rank: 9,
    status: "down",
    logo: "../img/team-logo/ManchesterUnited.png",
    name: "맨체스터 유나이티드",
    mp: 6,
    w: 3,
    d: 1,
    l: 2,
    gf: 9,
    ga: 8,
    gd: 1,
    next: "../img/team-logo/WestHam.png",
    form: ["lose", "win", "draw", "win", "lose"],
    pts: 10,
  },
  {
    rank: 10,
    status: "up",
    logo: "../img/team-logo/Nottingham.png",
    name: "노팅엄 포레스트",
    mp: 6,
    w: 3,
    d: 1,
    l: 2,
    gf: 8,
    ga: 7,
    gd: 1,
    next: "../img/team-logo/Fulham.png",
    form: ["win", "lose", "draw", "win", "lose"],
    pts: 10,
  },
  {
    rank: 11,
    status: "down",
    logo: "../img/team-logo/Fulham.png",
    name: "풀럼",
    mp: 6,
    w: 2,
    d: 3,
    l: 1,
    gf: 9,
    ga: 8,
    gd: 1,
    next: "../img/team-logo/Nottingham.png",
    form: ["draw", "win", "lose", "draw", "draw"],
    pts: 9,
  },
  {
    rank: 12,
    status: "same",
    logo: "../img/team-logo/Bournemouth.png",
    name: "본머스",
    mp: 6,
    w: 2,
    d: 3,
    l: 1,
    gf: 10,
    ga: 9,
    gd: 1,
    next: "../img/team-logo/Brentford.png",
    form: ["draw", "win", "draw", "lose", "draw"],
    pts: 9,
  },
  {
    rank: 13,
    status: "up",
    logo: "../img/team-logo/WestHam.png",
    name: "웨스트햄",
    mp: 6,
    w: 2,
    d: 2,
    l: 2,
    gf: 9,
    ga: 10,
    gd: -1,
    next: "../img/team-logo/ManchesterUnited.png",
    form: ["lose", "draw", "win", "win", "lose"],
    pts: 8,
  },
  {
    rank: 14,
    status: "down",
    logo: "../img/team-logo/Brentford.png",
    name: "브렌트포드",
    mp: 6,
    w: 2,
    d: 2,
    l: 2,
    gf: 11,
    ga: 12,
    gd: -1,
    next: "../img/team-logo/Bournemouth.png",
    form: ["win", "lose", "draw", "win", "lose"],
    pts: 8,
  },
  {
    rank: 15,
    status: "up",
    logo: "../img/team-logo/Leeds.png",
    name: "리즈 유나이티드",
    mp: 6,
    w: 2,
    d: 1,
    l: 3,
    gf: 8,
    ga: 11,
    gd: -3,
    next: "../img/team-logo/Everton.png",
    form: ["lose", "win", "lose", "draw", "win"],
    pts: 7,
  },
  {
    rank: 16,
    status: "down",
    logo: "../img/team-logo/Everton.png",
    name: "에버튼",
    mp: 6,
    w: 1,
    d: 3,
    l: 2,
    gf: 7,
    ga: 10,
    gd: -3,
    next: "../img/team-logo/Leeds.png",
    form: ["lose", "draw", "draw", "lose", "draw"],
    pts: 6,
  },
  {
    rank: 17,
    status: "same",
    logo: "../img/team-logo/Crystal.png",
    name: "크리스탈 팰리스",
    mp: 6,
    w: 1,
    d: 3,
    l: 2,
    gf: 6,
    ga: 9,
    gd: -3,
    next: "../img/team-logo/Burnley.png",
    form: ["draw", "lose", "draw", "draw", "lose"],
    pts: 6,
  },
  {
    rank: 18,
    status: "up",
    logo: "../img/team-logo/Burnley.png",
    name: "번리",
    mp: 6,
    w: 1,
    d: 2,
    l: 3,
    gf: 7,
    ga: 12,
    gd: -5,
    next: "../img/team-logo/Crystal.png",
    form: ["lose", "draw", "lose", "win", "lose"],
    pts: 5,
  },
  {
    rank: 19,
    status: "down",
    logo: "../img/team-logo/Wolverhampton.png",
    name: "울버햄튼",
    mp: 6,
    w: 1,
    d: 1,
    l: 4,
    gf: 8,
    ga: 15,
    gd: -7,
    next: "../img/team-logo/Sunderland.png",
    form: ["lose", "draw", "lose", "win", "lose"],
    pts: 4,
  },
  {
    rank: 20,
    status: "same",
    logo: "../img/team-logo/Sunderland.png",
    name: "선덜랜드",
    mp: 6,
    w: 0,
    d: 3,
    l: 3,
    gf: 5,
    ga: 11,
    gd: -6,
    next: "../img/team-logo/Wolverhampton.png",
    form: ["draw", "lose", "draw", "lose", "draw"],
    pts: 3,
  },
];

function renderLeagueTable(data) {
  const tbody = document.querySelector(".league-ranking .tbody");
  tbody.innerHTML = "";

  data.forEach((team) => {
    const li = document.createElement("li");
    li.className = "team";

    li.innerHTML = `
      <div class="rk" style="width: 7.64%; text-align: left">
        <span>${team.rank}위</span>
        <span class="status">
          ${
            team.status === "up"
              ? `<svg width="12" height="10" ...><path d="..."/></svg>`
              : team.status === "down"
                ? `<svg width="12" height="10" ...><path d="..."/></svg>`
                : `-`
          }
        </span>
      </div>
      <div class="tm">
        <span class="team-logo"><img src="${team.logo}" alt="${team.name}"></span>
        <span class="name">${team.name}</span>
      </div>
      <div class="mp">${team.mp}</div>
      <div class="w">${team.w}</div>
      <div class="d">${team.d}</div>
      <div class="l">${team.l}</div>
      <div class="gf">${team.gf}</div>
      <div class="ga">${team.ga}</div>
      <div class="gd">${team.gd}</div>
      <div class="next"><img src="${team.next}" alt="${team.name}"></div>
      <div class="form">
        ${team.form
          .map((result) => {
            if (result === "win") return `<span class="win">승</span>`;
            if (result === "draw") return `<span class="drow">무</span>`;
            if (result === "lose") return `<span class="lose">패</span>`;
          })
          .join("")}
      </div>
      <div class="pts">${team.pts}</div>
    `;

    tbody.appendChild(li);
  });
}

renderLeagueTable(leagueData);
