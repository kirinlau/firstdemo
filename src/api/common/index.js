import axios from 'src/util/axios'
// 获取省
const getProvince = params => axios('get', '/area/find-province', params, true)

// 获取市
const getCity = params => axios('get', '/area/find-city', params, true)

// 获取区
const getCounty = params => axios('get', '/area/find-county', params, true)

// 权限
const getRoleInfo = params => axios('get', '/admin/get', params, true)

// 管理员的权限列表
const getRoleLists = params => axios('post', '/admin/list', params, true)

// 添加用户
const addRole = params => axios('post', '/admin/add', params, true)

// 修改用户
const modifyRole = params => axios('post', '/admin/update', params, true)

// 用户详情
const getRoleDetail = params => axios('get', '/admin/detail', params, true)

// 获取系统及签约信息
const getBasicInfo = params => axios('get', '/get-school-and-csi', params, true)

// 获取用户基本信息及银行卡信息
const getUserInfo = params => axios('get', '/admin/get-net-info', params, true)

export {
  getProvince,
  getCity,
  getCounty,
  getRoleInfo,
  getRoleLists,
  addRole,
  modifyRole,
  getRoleDetail,
  getBasicInfo,
  setPassword,
  getUserInfo,
  getCode,
  getAppletInfo
}
