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
          // 서브페이지: 경로의 깊이를 계산합니다.
          
          // 경로를 슬래시로 분리하고 빈 문자열을 제거합니다.
          // 예: /GOALCHECK/insights/gridpage.html → ["GOALCHECK", "insights", "gridpage.html"]
          const pathSegments = currentPath.split("/").filter(segment => segment.length > 0);
          
          // 깃허브 페이지의 URL 구조를 고려하여 깊이를 계산합니다.
          // 보통 URL 구조는 /repository-name/path/to/file.html 입니다.
          // 경로 깊이 = (전체 세그먼트 수) - (리포지토리 이름) - (현재 파일명)
          
          // 'GOALCHECK'가 리포지토리 이름이라고 가정합니다.
          // pathSegments.length는 현재 파일명을 포함한 세그먼트 개수입니다.
          
          let segmentCount = pathSegments.length;
          let depth = 0;
          
          if (segmentCount > 0) {
              // 리포지토리 이름 세그먼트 (예: GOALCHECK) 1개를 제외합니다.
              // 그리고 현재 페이지 파일명 세그먼트 1개를 제외합니다.
              // 남는 것이 서브 폴더의 깊이입니다.
              // 예: /GOALCHECK/insights/gridpage.html (3개) -> 깊이: 3 - 2 = 1
              // 예: /GOALCHECK/index.html (2개) -> 깊이: 2 - 2 = 0 (isMainPage에서 걸러지나 안전장치)
              depth = segmentCount - 2; 
          }

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