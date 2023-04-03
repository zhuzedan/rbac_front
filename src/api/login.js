import request from '@/utils/request'

// 登录
export const login = (formData) => {
  return request({
    method: 'POST',
    url: '/api/systemUser/login',
    data: formData
  })
}