import XLSX from 'xlsx'
let fileSaver = require('file-saver')

const setTitle = (title) => { // 设置页面title
  document.title = title
}

let params = string => { // 获取url参数值
  let reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r) return decodeURI(r[2])
  return false
}

let timeFormat = (val, fmt) => {
  let data = new Date(val * 1000)
  let o = {
    'M+': data.getMonth() + 1, // 月份
    'd+': data.getDate(), // 日
    'h+': data.getHours(), // 小时
    'm+': data.getMinutes(), // 分
    's+': data.getSeconds(), // 秒
    'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
    'S': data.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

let add = (arg1, arg2) => {
  let r1
  let r2
  let m
  let c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}

let sub = (arg1, arg2) => {
  let r1
  let r2
  let m
  let n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}

let mul = (arg1, arg2) => {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) { }
  try {
    m += s2.split('.')[1].length
  } catch (e) { }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

let div = (arg1, arg2) => {
  let t1 = 0
  let t2 = 0
  let r1
  let r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) { }
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) { }
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

let testCardId = (sId) => {
  let aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  let iSum = 0
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    return false
  }
  sId = sId.replace(/x$/i, 'a')
  if (!aCity[sId.substr(0, 2)]) {
    return false
  }
  let sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))
  let d = new Date(sBirthday.replace(/-/g, '/'))
  if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
    return false
  }
  for (let i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
  }
  if (iSum % 11 !== 1) {
    return false
  }
  return true
}

let testCardIdEasy = (cardId) => {
  return /^\d{17}(\d|X|x)$/.test(cardId)
}

const headerForExcel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
let exportExcel = (wscols, excelName, firstCol, list, attr) => {
  let header = headerForExcel.slice(0, firstCol.length)
  let json = []
  let fistColData = {}
  for (let k in header) {
    fistColData[header[k]] = firstCol[k]
  }
  json.push(fistColData)
  for (let k in list) {
    let res = {}
    for (let i in header) {
      res[header[i]] = list[k][attr[i]]
    }
    json.push(res)
  }
  let wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
  // generate workbook object from table 使用xlsx插件写表格
  wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(json, { header: header, skipHeader: true, cellStyles: true })
  wb.Sheets['Sheet1']['!cols'] = wscols
  /* get binary string as output */
  let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' }) // 转转化为二进制文件
  /* force a download */
  fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), excelName + '.xlsx') // 使用fileSaver插件生成xlsx文件
}

let isRepeat = (arr) => { // 判断是否有重复数据
  var hash = {}
  for (var i in arr) {
    if (hash[arr[i]]) {
      return true
    }
    hash[arr[i]] = true
  }
  return false
}

let copyObj = (obj) => { // 拷贝一份数据
  var val = JSON.parse(JSON.stringify(obj))
  return val
}

let downloadImg = (url, name) => {
  var $a = document.createElement('a')
  $a.setAttribute('href', url)
  $a.setAttribute('download', name)
  var evObj = document.createEvent('MouseEvents')
  evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  $a.dispatchEvent(evObj)
}

export default {
  setTitle,
  params,
  timeFormat,
  testCardId,
  testCardIdEasy,
  isRepeat,
  copyObj,
  add,
  sub,
  mul,
  div,
  exportExcel,
  downloadImg
}
