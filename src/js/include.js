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
        let prefix = "";

        const pathSegments = currentPath.split("/").filter(segment => segment.length > 0);

        const isMainPage =
          pathSegments.length <= 2 &&
          (pathSegments.length === 0 ||
            pathSegments[pathSegments.length - 1].toLowerCase().endsWith("index.html"));

        if (!isMainPage) {
          const depth = pathSegments.length - 2;
          if (depth > 0) {
            prefix = "../".repeat(depth);
          }
        }

        if (prefix) {
          element.querySelectorAll("img, a, link, script").forEach((el) => {
            ["src", "href"].forEach((attr) => {
              if (el.hasAttribute(attr)) {
                const val = el.getAttribute(attr);

                if (
                  val &&
                  !val.startsWith("http") &&
                  !val.startsWith("#") &&
                  !val.startsWith("/") &&
                  !val.startsWith("mailto:") &&
                  !val.startsWith("tel:") &&
                  !val.startsWith("data:") &&
                  !val.startsWith("../")
                ) {
                  el.setAttribute(attr, prefix + val);
                }
              }
            });
          });
        }
        // === 경로 자동 보정 끝 ===

        // ✅ 중요: layout.js에서 이벤트를 받을 수 있도록 document에 이벤트 발송
        document.dispatchEvent(new Event("includeLoaded"));
      })
      .catch((error) => {
        console.error("Error loading file:", filePath, error);
        element.innerHTML = "<p>콘텐츠를 불러올 수 없습니다.</p>";
      });
  });
});
