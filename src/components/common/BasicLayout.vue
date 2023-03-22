<template>
  <div class="container">
    <el-container>
      <!--侧栏-->
      <el-aside width="auto">
        <aside-layout></aside-layout>
      </el-aside>
      <el-container>
        <!--头部-->
        <el-header>
          <header-layout></header-layout>
        </el-header>
        <!--内容-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideLayout from "../common/AsideLayout";
import HeaderLayout from "./HeaderLayout.vue";
export default {
  name: "BasicLayout",
  components: {
    AsideLayout,
    HeaderLayout
  },

  data() {
  }
}
</script>

<style scoped>
.el-header {
  padding: 0
}
</style>
