import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由导航
// router.beforeEach((to, from, next) => {
//   if (token || to.path === '/login') {
//     next()
//   } else if (!token && to.path !== '/login') {
//     next({ name: 'login' })
//   }
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
