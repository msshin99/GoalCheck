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

        // 1. 현재 페이지의 경로(window.location.pathname)를 얻습니다.
        const currentPath = window.location.pathname;

        // 2. 경로 보정을 위한 접두사(`../`, `../../` 등)를 결정합니다.
        let prefix = "";

        // 메인 페이지(루트 또는 index.html)가 아닌 경우만 보정 로직 실행
        const isMainPage = 
          currentPath === "/" || // 깃허브 페이지 루트 (예: https://user.github.io/repo-name/)
          currentPath.endsWith("/index.html") || // index.html 직접 접근
          currentPath.endsWith("/"); // 폴더명으로 접근 (예: https://user.github.io/repo-name/insights/)

        if (!isMainPage) {
          // 서브페이지: 경로의 깊이를 계산하여 `../` 반복 횟수를 구합니다.
          // 예: /insights/gridpage.html → split("/") 하면 ["", "insights", "gridpage.html"] (길이 3)
          // 루트와 파일명을 제외한 폴더 개수 = 길이 - 2
          const pathSegments = currentPath.split("/").filter(segment => segment.length > 0);
          
          // 파일명을 제외한 경로 깊이. (URL이 /repo-name/insights/gridpage.html 일 때, 파일명 앞의 폴더 개수)
          // 깃허브 페이지에서는 `/`가 루트가 아니라 `/repo-name/`이 루트가 될 수 있으므로,
          // 실제 파일 경로를 기준으로 계산해야 합니다.
          // 일반적인 웹서버에서처럼 `/`을 기준으로 서브 페이지의 폴더 깊이만 계산합니다.
          // /insights/gridpage.html → depth = 1 (segments: [insights, gridpage.html])
          const depth = pathSegments.length - 1; 

          if (depth > 0) {
            prefix = "../".repeat(depth);
          }
        }

        // 3. 접두사가 있는 경우 (서브 페이지인 경우)에만 포함된 HTML 요소의 경로를 보정합니다.
        if (prefix) {
          element.querySelectorAll("img, a, link, script").forEach((el) => {
            ["src", "href"].forEach((attr) => {
              if (el.hasAttribute(attr)) {
                const val = el.getAttribute(attr);

                // 4. 절대 경로, 외부 링크, 앵커, 이미 보정된 경로는 제외하고 상대 경로만 보정합니다.
                if (
                  val &&
                  !val.startsWith("http") && // 외부 링크
                  !val.startsWith("#") && // 앵커 링크
                  !val.startsWith("/") && // 절대 경로
                  !val.startsWith("mailto:") &&
                  !val.startsWith("tel:") &&
                  !val.startsWith("data:") &&
                  !val.startsWith("../") // 이미 상대 경로인 경우
                ) {
                  // 보정된 경로를 속성에 다시 설정합니다.
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