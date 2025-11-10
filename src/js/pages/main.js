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


document.addEventListener('DOMContentLoaded', () => {
    // Select all the clickable sub-list items
    const radioItems = document.querySelectorAll('.select-tab > li > .radio-box > ul > li');

    radioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the text content of the clicked item
            const selectedText = this.textContent.trim();

            // Find the parent 'li' of the clicked item
            // 1. Get the parent 'ul'
            // 2. Get the parent '.radio-box'
            // 3. Get the parent 'li.select-tab'
            const parentListItem = this.closest('.select-tab > li');

            if (parentListItem) {
                // Find the <p> element within the '.left' div of the parent 'li'
                const paragraph = parentListItem.querySelector('.left p');

                if (paragraph) {
                    // Update the text content of the <p> element
                    paragraph.textContent = selectedText;
                }
            }
        });
    });
});



