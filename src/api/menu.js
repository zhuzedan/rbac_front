import request from '@/utils/request'

// 侧栏菜单列表
export const getMeunList = () => {
  return request({
    method: 'GET',
    url: '/api/systemMenu/queryAsideMenus'
  })
}