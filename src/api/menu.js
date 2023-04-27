import request from '@/utils/request'

// 登录
export const getMeunList = () => {
  return request({
    method: 'GET',
    url: '/api/systemMenu/queryAsideMenus'
  })
}