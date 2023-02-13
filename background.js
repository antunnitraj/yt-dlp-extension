chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, {
        code: 'document.location.href = "yt-dlp://" + location.href'
    })
})
