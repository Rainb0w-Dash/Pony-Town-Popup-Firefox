browser.browserAction.onClicked.addListener(async () => {
  let win = await browser.windows.create({
    url: "https://pony.town",
    type: "popup",
    width: 800,
    height: 600
  });

  // Listen for focus changes
  function handleFocusChanged(windowId) {
    if (windowId !== win.id) {
      // If the popup window loses focus, close it
      browser.windows.remove(win.id);
      browser.windows.onFocusChanged.removeListener(handleFocusChanged);
    }
  }

  browser.windows.onFocusChanged.addListener(handleFocusChanged);
});