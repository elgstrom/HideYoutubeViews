
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (window.location.href === "https://www.youtube.com/") {
          var viewCounts = document.querySelectorAll("#metadata-line > span:nth-child(3)");
          if (viewCounts.length > 0) {
            for (var i = 0; i < viewCounts.length; i++) {
              viewCounts[i].style.display = "none";
            }
          }
        } else {
        var viewCount = document.querySelector("#info > span:nth-child(1)");
        if (viewCount) {
            viewCount.style.display = "none";
            observer.disconnect();
        }
      }
    });
  });
  observer.observe(document, { subtree: true, childList: true });