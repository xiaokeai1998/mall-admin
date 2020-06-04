import axios from '@/api/common.js'
// 实现用户登陆
export const login = (data) => {
  return axios({
    method: 'post',
    url: 'login',
    data
  })
}
// 用户列表接口
export const userList = (pa) => {
  return axios({
    method: 'get',
    url: 'users',
    params: pa
  })
}
