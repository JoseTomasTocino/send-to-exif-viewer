function launchExifViewer(info, tab) {
  chrome.tabs.create({
    "url": "https://metadataviewer.herokuapp.com/?img=" + escape(info.srcUrl),
    "index": tab.index + 1
  });
}

chrome.contextMenus.create({
  "title": "Send to image metadata viewer",
  "contexts": ["image"],
  "onclick": launchExifViewer
});

