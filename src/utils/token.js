// 设置本地存储
export function setToken(key, value) {
  localStorage.setItem(key, value)
}
// 获取本地存储
export function getToken(key) {
  return localStorage.getItem(key)
}
// 删除本地存储
export function removToken(key) {
  localStorage.removeItem(key)
}
// 清空本地存储
export function clearToken(key) {
  localStorage.clear(key)
}