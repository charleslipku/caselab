export const isCopy = () => {
  // 状态控制，修改为true，忽略此函数
  const state = false
  if (state) {
    return false
  }
  console.log(window.getSelection().toString())
  if (window.getSelection().toString()) {
    return true
  }
}
