const COM_QRCODE = 'My Chrome Extension'

chrome.contextMenus.create({
  id: COM_QRCODE,
  title: 'My Chrome Extension',
  contexts: ['all']
})

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === COM_QRCODE) {
    sendMessage(info)
  }
})