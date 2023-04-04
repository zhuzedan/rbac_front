<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>
<script>
import { removToken } from './utils/token';
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {
    window.onload = function () {
      console.log(window.sessionStorage["ISlogin"]);
      if (!window.sessionStorage["ISlogin"]) {
        // 关闭浏览器
        window.localStorage.removeItem("tokenInfo");
      } else {
        // 刷新
      }
    };
    window.onunload = function () {
      window.sessionStorage["ISlogin"] = true;
    };
    window.onbeforeunload = function () {
      window.sessionStorage["ISlogin"] = true;
    };
  },
  methods: {

  },
}
</script>
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
</style>
