<template>
  <div class="aside">
    <el-col :span="12">
      <el-menu
        background-color="#0c1120"
        text-color="#fff"
        unique-opened
        router
        :collapse="isCollapse"
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <a href="/" class="logo">
          <img src="@/assets/logo.png" alt="" />
          <h1 v-if="!isCollapse">后台管理系统</h1>
        </a>
        <!--无子菜单-->
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <!--有子菜单-->
        <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.label }}</span>
          </template>
            <el-menu-item v-for="subItem in item.children" :key="subItem.name" :index="subItem.path">
              {{ subItem.label }}
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "AsideLayout",
  data() {
    return {
      activeIndex: this.$route.path,
      menuList: [
        {
          path: "/home",
          name: "main",
          label: "首页",
          icon: 's-home',
          url: "Home/Home"
        },
        {
          label: "系统管理",
          icon: "user",
          name: "system",
          children: [
            {
              path: "/systemUser",
              name: "systemUser",
              label: "用户管理",
              icon: 's-home',
              url: "system/systemUser"
            },
            {
              path: "/systemRole",
              name: "systemRole",
              label: "角色管理",
              icon: 's-home',
              url: "system/systemRole"
            }
          ]
        },
        {
          label: "日志管理",
          icon: "log",
          name: "log",
          children: [
            {
              path: "/systemLoginLog",
              name: "loginLog",
              label: "登录日志",
              icon: 's-home',
              url: "system/systemUser"
            },
            {
              path: "/systemOperationLog",
              name: "operationLog",
              label: "操作日志",
              icon: 's-home',
              url: "system/systemRole"
            }
          ]
        }
      ]
    }
  },
  watch: { 
    '$route' (to, from) {
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      this.activeIndex = to.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    hasChildren() {
      return this.menuList.filter(item => item.children)
    },
    noChildren() {
      return this.menuList.filter(item => !item.children)
    },
    isCollapse() {
      return this.$store.state.collapse.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  img {
    width: 36px;
  }
}
.el-menu {
  width: 200px;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.el-menu--collapse {
    width: 64px;
  }
.el-menu-item-group {
  .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
