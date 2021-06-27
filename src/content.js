let x = 0
let y = 0

window.addEventListener('contextmenu', event => {
  x = event.clientX
  y = event.clientY
})

window.addEventListener('error', event => {
  const filename = event.filename
  if (filename.startsWith('chrome-extension://')) {
    alert(event.error)
  }
})

/**
 * @returns {HTMLElement}
 */
const getClickElement = () => document.elementFromPoint(x, y)

onMessage(data => {
  // 获取右键点击的元素
  const element = getClickElement()
  console.log('click', element)
})