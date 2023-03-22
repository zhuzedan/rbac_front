<template>
  <div class="header_container">
    <div class="header_left">
      <div class="change-icon"  @click="toggleCollapse">
        <i :class="iconName"></i>
      </div>
      <span>首页</span>
    </div>
    <div class="header_right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {
      iconName: 'el-icon-s-fold'
    }
  },
  methods: {
    toggleCollapse() {
      this.$store.commit('changeCollapse')
      if (this.$store.state.collapse.isCollapse) {
        this.iconName='el-icon-s-unfold'
      }
      else {
        this.iconName='el-icon-s-fold'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.header_container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header_left {
    display: flex;
    align-items: center;
    .change-icon {
      font-size: 26px;
      color: #191a23;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .header_right {
    margin-right: 16px;
    .el-dropdown-link {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
