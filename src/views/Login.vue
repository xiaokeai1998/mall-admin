<template>
  <div class="login_grow">
      <div class="container">
      <img class="avatar" src="../assets/logo.png" alt=""/>
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          label-width="100px"
        >
          <el-form-item  style="width:100%" prop="username">
            <el-input clearable placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item  style="width:100%" prop="password">
            <el-input clearable @keyup.enter.native='loginSubmit' prefix-icon="el-icon-unlock" placeholder="请输入密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-button class="login_bott"  type="primary" @click="loginSubmit">登录</el-button>
        </el-form>
      </div>

  </div>
</template>
<script>
import { login } from '@/api/user_api.js'
export default {
  data () {
    return {
      // 登录数据参数
      loginForm: {
        username: 'admin',
        password: '12345678'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          login(this.loginForm)
            .then(res => {
              console.log(res)
              if (res.data.meta.status === 400) {
                // 将token存储到本地
                // localStorage.setItem('heima_manager_token', res.data.data.token)
                // 跳转页面
                this.$router.push({ name: 'home' })
              }
            })
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        } else {
          this.$message.error('登录失败')
        }
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_grow {
  background: #2d3f4e;
  height: 100%;
  width: 100%;
  position:fixed;
  .container{
    background:#ffffff;
    top:10px;
    right:0;
    padding:20px 40px;
    margin:200px auto;
    width:400px;
     .avatar{
    position:relative;
    left:50%;
    width:120px;
    height:120px;
    margin-left:-60px;
    margin-top:-120px;
    box-sizing:border-box;
    border-radius:50%;
    border:10px solid #ffffff;
    box-shadow:0 1px 5px #ccc;
    overflow:hidden;
  }
  .login_bott{
    width:100%;
  }
  }
}
</style>
