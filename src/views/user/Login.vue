<template>
  <div class="login">
    <!-- 粒子背景 -->
    <div class="vue-particles">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        style="height: 100%"
      ></vue-particles>
    </div>
    <!-- 表单 -->
    <el-form
      ref="loginForm"
      :model="formData"
      :rules="myRoles"
    >
      <h2>系统登录</h2>
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/api/login'
import { setToken } from '@/utils/token'
export default {
  data () {
    return {
      // 表单数据
      formData: {
        username: 'admin',
        password: 'admin'
      },
      myRoles: {
        username: [
          {
            required: true,
            message: '用户名必填',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      },
      // 是否请求中
      isLoading: false
    }
  },
  components: {},
  mounted () {},
  methods: {
    onSubmit () {
      this.isLoading = true
      this.$refs.loginForm
        .validate()
        .then(() => {
          return login(this.formData)
        })
        .then((res) => {
          if(res.success) {
            this.$message.success(res.message)
            setToken('tokenInfo',JSON.stringify(res.data))
            this.$router.push(this.$route.query.redirect || '/')
          }else {
            this.$message.error(res.message)
          }
        })
        .catch(() => {
          this.$message.error('验证失败')
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
<style scoped lang='scss'>
.login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .vue-particles {
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.el-form {
  h2{
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  z-index: 2;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 10px;
  background: #fff;
  width: 350px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 16px;
}
</style>
