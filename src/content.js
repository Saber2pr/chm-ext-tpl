let x = 0
let y = 0

window.addEventListener('mousemove', event => {
  x = event.clientX
  y = event.clientY
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