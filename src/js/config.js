// config.js
const CONFIG = {
  // GitHub Pages repository 이름 (username.github.io인 경우 '' 사용)
  BASE_URL: "/your-repo-name", // 또는 ''

  // 이미지 경로 생성 헬퍼 함수
  img: function (path) {
    return `${this.BASE_URL}/${path}`;
  },
};
