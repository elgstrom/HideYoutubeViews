function hideViews() {
    const views = document.querySelectorAll('span.view-count');
    views.forEach((view) => {
      view.style.display = 'none';
    });
  }
  
  chrome.runtime.onMessage.addListener((message) => {
    if (message === 'hideViews') {
      hideViews();
    }
  });
  
  hideViews();
  