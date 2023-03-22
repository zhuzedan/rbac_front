export default {
  state: {
    // 控制菜单栏状态
    isCollapse: false
  },
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}