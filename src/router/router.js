import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/welcome.vue'
import User from '@/views/user/index.vue'
Vue.use(VueRouter)

// 创建动态路由
var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      redirect: { path: '/wel' },
      // 嵌套路由
      children: [
        {
          path: '/wel',
          component: Welcome
        },
        {
          name: 'user',
          path: '/home/user',
          component: User
        }
      ]
    }
  ]
})

export default router
