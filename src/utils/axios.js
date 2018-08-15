import axios from 'axios'
import store from 'src/store'
let baseURL = '/net/schooladmin' // 配置基本api
axios.defaults.timeout = 100000 // 请求超时时间
export default function (type = 'get', url, data, isCommonUrl = false) {
  return new Promise((resolve, reject) => {
    if (isCommonUrl === true) {
      baseURL = '/net'
    } else {
      switch (store.getters.getNetType) {
        case 'school': // 学校
          baseURL = '/net/schooladmin'
          break
        case 'social': // 社保
          baseURL = '/net/socialadmin'
          break
        case 'property': // 物业
          baseURL = '/net/estateadmin'
          break
      }
    }
    type = type.toLowerCase()
    let config = {
      method: type,
      headers: {
        'login-key': window.localStorage.loginKey || '',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      url: baseURL + url
    }
    if (type === 'get') {
      config.params = data
    } else if (type === 'post') {
      config.data = data
    }

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) { // 响应数据处理
      if (!response) return reject(response)
      let data = response.data
      switch (Number(data.errcode)) {
        case 401: // 登录超时
          window.$message({
            message: '登录超时',
            type: 'warning',
            duration: 1000,
            onClose: () => {
              window.localStorage.removeItem('loginKey')
              window.location.href = '/login'
            }
          })
          break
        case 0: // 成功
          break
        default:
          window.$message({ message: response.data.errmsg, type: 'warning' })
          break
      }
      return response
    }, 
    
    function (error) {       // 响应错误处理
      window.$message({ message: '错误信息', type: 'warning' })
      return reject(error)
    })
    axios(config).then(res => {
      if (Number(res.data.errcode) === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
