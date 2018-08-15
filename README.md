# test1

> demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 简介
本项目是基于Vue.js，搭配使用[Element](https://github.com/ElemeFE/elemen) UI组件库形成的一套后台集成解决方案.

## 功能

- 登录/登出
- 权限管理
    - 权限切换
- 组件
    - 城市级联
    - 文件上传
    - 分页
- 表格
    - 普通表格
    - 可编辑表格
    - 表格导出数据
        - 导出为Xls文件
- 错误页面
    - 403页面
    - 404页面
    - 500页面


## 文件结构
```shell

├── build  项目构建配置
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    ├── api  AJAX请求
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  业务组件
    ├── config  项目运行配置
    ├── directive  自定义指令
    ├── filters  自定义过滤器
    ├── mock  mock模拟数据
    ├── router  路由配置
    ├── styles  封装样式
    ├── utils  封装js
    ├── store  Vuex配置
    └── view  页面文件
```


## 规范

1.文件夹命名全部小写,如果多个单词用下划线（-）间隔
2.文件，骆驼命名法（如果一个单词直接小写，多个单词第一个小写，后面首字母大写）。eg：login、addUser
3.js
    常量：用const声明，命名全部大写，多个单词用“_”,即下划线分割。 eg:const AGE=18; const = MAX_VALUE=100;
    变量：用let声明，小骆驼命名法，前缀用名词开头。 eg:let maxCount = 10; let name="张三";
    函数：小骆驼命名法，前缀用动词开头。 eg:getList  canRead  getName  isRead  hasNmber
    （注意：可以使用数字、字母、下划线、$来命名，但是数字不能作为名字的开始，也不支持中杠（-），不能使用关键字和保留字命名）

4.css
    文件分类：
        全局样式：global.css；
        框架布局：layout.css；
        字体样式：font.css；
        链接样式：link.css；
        打印样式：print.css；
   全局样式以g-开头

    
4.样式，公用的放在styles文件里面,单独页面的样式放在vue里面

备注：骆驼式命名法（又称驼峰命名法）
     小驼峰:第一个单词是全部小写，后面的单词首字母大写，例如：myFirstName、myLastName
     大驼峰:相比小驼峰法，大驼峰法把第一个单词的首字母也大写了，例如：FirstName、LastName


vue里面包括template、js、css






## 效果展示
- 响应式布局首页
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/home.gif)

- 标签导航
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/page-tags.gif)

- 图片预览编辑
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/image-editor.gif)

- 文件上传
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/upload.gif)

- 可拖拽表格
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/dragable-table.gif)

- 可编辑表格
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/editable-table.gif)

- 表格导出数据
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/exportable-table.gif)

- 表格转图片
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/table2image.gif)

- 错误页面
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/error-page.gif)

