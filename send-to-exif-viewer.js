function launchExifViewer(info, tab) {
  chrome.tabs.create({
    "url": "http://regex.info/exif.cgi?imgurl=" + escape(info.srcUrl),
    "index": tab.index + 1
  });
}

chrome.contextMenus.create({
  "title": "Send to Jeffrey's Exif Viewer",
  "contexts": ["image"],
  "onclick": launchExifViewer
});

