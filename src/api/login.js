import request from '@/utils/request'

// 登录
export const login = (formData) => {
  return request({
    method: 'POST',
    url: '/api/systemUser/loginCaptcha',
    data: formData
  })
}

// 获取验证码
export const captcha = () => {
  return request({
    method: 'GET',
    url: '/api/systemUser/captcha',
  })
}