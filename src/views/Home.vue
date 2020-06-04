<template>
  <div class="hom_grow">
    <el-container>
        <el-aside width="200px">
            <div class="logo">
                <img  src="../assets/assets/logo.png" alt=""/>
          <el-menu
                    :unique-opened="true"
                    :router="true"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/user">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>用户列表</span>
                    </template>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                      <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                </template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户1</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="1-4">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
              </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
            </div>
        </el-aside>
        <el-container >
            <el-header style="background:#535b62">
                  <span class="toggle-btn">首页</span>
                  <h1 class="system-title">后台管理系统</h1>
                  <a @click="logout" class="welcome" href="javascript:;">退出</a>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 登录数据参数
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    // 退出登录
    logout () {
      this.$confirm('确认退出吗?退出提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
 .welcome{
    color: white;
  }
    .hom_grow{
        .el-aside{
            background:#535b62;
            height:100%;
            .logo{
                background:#ffffff;
                background-size:cover;
            }
        }
    }
  .system-title{
    font-size: 28px;
    color: white;
  }
     .toggle-btn{
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292CF;
    }
  }
</style>
