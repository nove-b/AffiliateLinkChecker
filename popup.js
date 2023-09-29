window.onload = function () {

  document.getElementById('githubLink').addEventListener('click', () => {
    chrome.tabs.create({ active: true, url: "https://github.com/nove-b/AffiliateLinkChecker" });
  })
}