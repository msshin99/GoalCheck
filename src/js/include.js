// include.js - HTML 파일을 동적으로 로드하는 스크립트
document.addEventListener("DOMContentLoaded", function () {
  const includeElements = document.querySelectorAll("[data-include-file]");

  includeElements.forEach(function (element) {
    const filePath = element.getAttribute("data-include-file");

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        element.innerHTML = html;

        // === 경로 자동 보정 시작 ===
        const currentPath = window.location.pathname;
        // 예: "/" 또는 "/index.html" → 메인
        // 예: "/insights/gridpage.html" → 서브

        let prefix = "";

        // 메인(index.html)인지 체크
        if (
          currentPath === "/" || // 루트 (예: localhost:3000/ )
          currentPath.endsWith("/index.html") // index.html 직접 접근
        ) {
          prefix = ""; // 메인은 보정 안 함
        } else {
          // 서브페이지 → ../ 반복 계산
          const depth = currentPath.split("/").length - 2;
          prefix = "../".repeat(depth);
        }

        if (prefix) {
          element.querySelectorAll("img, a, link, script").forEach((el) => {
            ["src", "href"].forEach((attr) => {
              if (el.hasAttribute(attr)) {
                const val = el.getAttribute(attr);

                // 외부 링크나 앵커 같은 건 제외
                if (
                  val &&
                  !val.startsWith("http") &&
                  !val.startsWith("#") &&
                  !val.startsWith("mailto:") &&
                  !val.startsWith("../")
                ) {
                  el.setAttribute(attr, prefix + val);
                }
              }
            });
          });
        }
        // === 경로 자동 보정 끝 ===

        element.dispatchEvent(new Event("includeLoaded"));
      })
      .catch((error) => {
        console.error("Error loading file:", filePath, error);
        element.innerHTML = "<p>콘텐츠를 불러올 수 없습니다.</p>";
      });
  });
});
