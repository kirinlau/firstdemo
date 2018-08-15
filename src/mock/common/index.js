exports.init = function (app) {
    // 省
    app.get('/net/area/find-province', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok",
        "data": {
          '110000': {
            "id": 110000,
            "pid": 0,
            "name": "北京市",
            "areaType": 1
          },
          '120000': {
            "id": 120000,
            "pid": 0,
            "name": "天津市",
            "areaType": 1
          },
          '130000': {
            "id": 130000,
            "pid": 0,
            "name": "河北省",
            "areaType": 1
          },
          '140000': {
            "id": 140000,
            "pid": 0,
            "name": "山西省",
            "areaType": 1
          },
          '150000': {
            "id": 150000,
            "pid": 0,
            "name": "内蒙古自治区",
            "areaType": 1
          },
          '210000': {
            "id": 210000,
            "pid": 0,
            "name": "辽宁省",
            "areaType": 1
          },
          '220000': {
            "id": 220000,
            "pid": 0,
            "name": "吉林省",
            "areaType": 1
          },
          '230000': {
            "id": 230000,
            "pid": 0,
            "name": "黑龙江省",
            "areaType": 1
          },
          '310000': {
            "id": 310000,
            "pid": 0,
            "name": "上海市",
            "areaType": 1
          },
          '320000': {
            "id": 320000,
            "pid": 0,
            "name": "江苏省",
            "areaType": 1
          },
          '330000': {
            "id": 330000,
            "pid": 0,
            "name": "浙江省",
            "areaType": 1
          },
          '340000': {
            "id": 340000,
            "pid": 0,
            "name": "安徽省",
            "areaType": 1
          },
          '350000': {
            "id": 350000,
            "pid": 0,
            "name": "福建省",
            "areaType": 1
          },
          '360000': {
            "id": 360000,
            "pid": 0,
            "name": "江西省",
            "areaType": 1
          },
          '370000': {
            "id": 370000,
            "pid": 0,
            "name": "山东省",
            "areaType": 1
          },
          '410000': {
            "id": 410000,
            "pid": 0,
            "name": "河南省",
            "areaType": 1
          },
          '420000': {
            "id": 420000,
            "pid": 0,
            "name": "湖北省",
            "areaType": 1
          },
          '430000': {
            "id": 430000,
            "pid": 0,
            "name": "湖南省",
            "areaType": 1
          },
          '440000': {
            "id": 440000,
            "pid": 0,
            "name": "广东省",
            "areaType": 1
          },
          '450000': {
            "id": 450000,
            "pid": 0,
            "name": "广西壮族自治区",
            "areaType": 1
          },
          '460000': {
            "id": 460000,
            "pid": 0,
            "name": "海南省",
            "areaType": 1
          },
          '500000': {
            "id": 500000,
            "pid": 0,
            "name": "重庆市",
            "areaType": 1
          },
          '510000': {
            "id": 510000,
            "pid": 0,
            "name": "四川省",
            "areaType": 1
          },
          '520000': {
            "id": 520000,
            "pid": 0,
            "name": "贵州省",
            "areaType": 1
          },
          '530000': {
            "id": 530000,
            "pid": 0,
            "name": "云南省",
            "areaType": 1
          },
          '540000': {
            "id": 540000,
            "pid": 0,
            "name": "西藏自治区",
            "areaType": 1
          },
          '610000': {
            "id": 610000,
            "pid": 0,
            "name": "陕西省",
            "areaType": 1
          },
          '620000': {
            "id": 620000,
            "pid": 0,
            "name": "甘肃省",
            "areaType": 1
          },
          '630000': {
            "id": 630000,
            "pid": 0,
            "name": "青海省",
            "areaType": 1
          },
          '640000': {
            "id": 640000,
            "pid": 0,
            "name": "宁夏回族自治区",
            "areaType": 1
          },
          '650000': {
            "id": 650000,
            "pid": 0,
            "name": "新疆维吾尔自治区",
            "areaType": 1
          },
          '710000': {
            "id": 710000,
            "pid": 0,
            "name": "台湾省",
            "areaType": 1
          },
          '810000': {
            "id": 810000,
            "pid": 0,
            "name": "香港特别行政区",
            "areaType": 1
          },
          '820000': {
            "id": 820000,
            "pid": 0,
            "name": "澳门特别行政区",
            "areaType": 1
          }
        }
      });
    });
    // 市
    app.get('/net/area/find-city', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok",
        "data": {
          '440100': {
            "id": 440100,
            "pid": 440000,
            "name": "广州市",
            "areaType": 2
          },
          '440200': {
            "id": 440200,
            "pid": 440000,
            "name": "韶关市",
            "areaType": 2
          },
          '440300': {
            "id": 440300,
            "pid": 440000,
            "name": "深圳市",
            "areaType": 2
          },
          '440400': {
            "id": 440400,
            "pid": 440000,
            "name": "珠海市",
            "areaType": 2
          },
          '440500': {
            "id": 440500,
            "pid": 440000,
            "name": "汕头市",
            "areaType": 2
          },
          '440600': {
            "id": 440600,
            "pid": 440000,
            "name": "佛山市",
            "areaType": 2
          },
          '440700': {
            "id": 440700,
            "pid": 440000,
            "name": "江门市",
            "areaType": 2
          },
          '440800': {
            "id": 440800,
            "pid": 440000,
            "name": "湛江市",
            "areaType": 2
          },
          '440900': {
            "id": 440900,
            "pid": 440000,
            "name": "茂名市",
            "areaType": 2
          },
          '441200': {
            "id": 441200,
            "pid": 440000,
            "name": "肇庆市",
            "areaType": 2
          },
          '441300': {
            "id": 441300,
            "pid": 440000,
            "name": "惠州市",
            "areaType": 2
          },
          '441400': {
            "id": 441400,
            "pid": 440000,
            "name": "梅州市",
            "areaType": 2
          },
          '441500': {
            "id": 441500,
            "pid": 440000,
            "name": "汕尾市",
            "areaType": 2
          },
          '441600': {
            "id": 441600,
            "pid": 440000,
            "name": "河源市",
            "areaType": 2
          },
          '441700': {
            "id": 441700,
            "pid": 440000,
            "name": "阳江市",
            "areaType": 2
          },
          '441800': {
            "id": 441800,
            "pid": 440000,
            "name": "清远市",
            "areaType": 2
          },
          '441900': {
            "id": 441900,
            "pid": 440000,
            "name": "东莞市",
            "areaType": 2
          },
          '442000': {
            "id": 442000,
            "pid": 440000,
            "name": "中山市",
            "areaType": 2
          },
          '445100': {
            "id": 445100,
            "pid": 440000,
            "name": "潮州市",
            "areaType": 2
          },
          '445200': {
            "id": 445200,
            "pid": 440000,
            "name": "揭阳市",
            "areaType": 2
          },
          '445300': {
            "id": 445300,
            "pid": 440000,
            "name": "云浮市",
            "areaType": 2
          }
        }
      });
    });
    // 区
    app.get('/net/area/find-county', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok",
        "data": {
          '440301': {
            "id": 440301,
            "pid": 440300,
            "name": "市辖区",
            "areaType": 3
          },
          '440303': {
            "id": 440303,
            "pid": 440300,
            "name": "罗湖区",
            "areaType": 3
          },
          '440304': {
            "id": 440304,
            "pid": 440300,
            "name": "福田区",
            "areaType": 3
          },
          '440305': {
            "id": 440305,
            "pid": 440300,
            "name": "南山区",
            "areaType": 3
          },
          '440306': {
            "id": 440306,
            "pid": 440300,
            "name": "宝安区",
            "areaType": 3
          },
          '440307': {
            "id": 440307,
            "pid": 440300,
            "name": "龙岗区",
            "areaType": 3
          },
          '440308': {
            "id": 440308,
            "pid": 440300,
            "name": "盐田区",
            "areaType": 3
          }
        }
      });
    });
  
    // 权限
    app.get('/net/admin/get', function (req, res) {
      res.send({"errcode":"0","errmsg":"ok","data":{"id":4,"mobile":"15168831289","merchantId":1,"pid":0,"remark":null,"netsOffset":0,"nets":[{"id":17,"merchantId":1,"netAdminId":4,"netName":"唐","netType":"school","netId":1,"created":null,"modified":1523180462,"netMenu":"","checkList":[]}]}});
    });
  
    // 管理员的权限列表
    app.post('/net/admin/list', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok",
        "data": [{
          "id": 79,
          "merchantId": 1,
          "mobile": "1363236536503",
          "remark": "教务处A1",
          "nets": [{
            "netAdminId": 79,
            "netType": "school",
            "netId": 1,
            "netMenu": [{
              name: '首页',
              routeName: 'index'
            }, {
              name: '缴费管理',
              routeName: 'payProject'
            }, {
              name: '新增缴费项目',
              routeName: 'addProject'
            }, {
              name: '设置',
              routeName: 'basicSet'
            }]
          }]
        }, {
          "id": 79,
          "merchantId": 1,
          "mobile": "1363236536501",
          "remark": "教务处A",
          "nets": [{
            "netAdminId": 79,
            "netType": "school",
            "netId": 1,
            "netMenu": [{
              name: '首页',
              routeName: 'index'
            }, {
              name: '缴费管理',
              routeName: 'payProject'
            }, {
              name: '新增缴费项目',
              routeName: 'addProject'
            }, {
              name: '设置',
              routeName: 'basicSet'
            }]
          }]
        }]
      });
    });
  
    // 添加用户
    app.post('/net/admin/add', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok"
      });
    });
  
    // 修改用户
    app.post('/net/admin/update', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok"
      });
    });
  
    // 用户详情
    app.get('/net/admin/detail', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok",
        "data": {
          "id": 79,
          "merchantId": 1,
          "mobile": "1516883128901",
          "remark": "教务处A",
          "nets": [{
            "netAdminId": 79,
            "netType": "school",
            "netId": 1,
            checkList: [1, 2],
            "netMenu": [{
              name: '首页',
              routeName: 'index'
            }, {
              name: '缴费管理',
              routeName: 'payProject'
            }, {
              name: '新增缴费项目',
              routeName: 'addProject'
            }, {
              name: '设置',
              routeName: 'basicSet'
            }]
          }]
        }
      });
    });
  
    // 修改密码
    app.post('/net/admin/set-pass', function (req, res) {
      res.send({
        "errcode": "0",
        "errmsg": "ok"
      });
    });
  }
  