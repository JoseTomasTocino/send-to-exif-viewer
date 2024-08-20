chrome.contextMenus.create({
  "title": "Send to image metadata viewer",
  "contexts": ["image"],
  "id": "send-to-metadata-viewer",
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "send-to-metadata-viewer") {
        chrome.tabs.create({
            "url": "https://image-metadata-viewer.onrender.com/?img=" + escape(info.srcUrl),
            "index": tab.index + 1
        });
    }
});
