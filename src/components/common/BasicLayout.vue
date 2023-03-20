<template>
  <div class="container">
    <el-container>
      <!--侧栏-->
      <el-aside width="auto">
        <aside-layout></aside-layout>
      </el-aside>
      <el-container>
        <!--头部-->
        <el-header>Header</el-header>
        <!--内容-->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideLayout from "../common/AsideLayout";
export default {
  name: "BasicLayout",
  components: {
    AsideLayout
  },

  data() {
  }
}
</script>

<style scoped>
</style>
