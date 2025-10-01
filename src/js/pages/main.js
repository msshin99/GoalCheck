// --------------메뉴--------------

const tbody = document.querySelector(".table-wrap.trust .tbody");
const tabs = document.querySelectorAll(".tab-list button");

// 모든 .menu 요소를 찾음 (탭 그룹 단위)
const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  const tabs = menu.querySelectorAll(".tab-list button");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 현재 menu 안의 탭 버튼들에서만 .on 제거
      tabs.forEach((b) => b.classList.remove("on"));

      // 클릭한 버튼에 .on 추가
      btn.classList.add("on");

      // 버튼 텍스트 (= id 값) 가져오기
      const selectedId = btn.textContent.trim();

      // 해당 menu와 연결된 테이블만 업데이트 (필요 시)
      renderTable(selectedId, menu);
    });
  });
});
