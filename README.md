# uniapp-template

### 介绍
微信小程序项目基础模版，会持续更新。。。

### 安装教程

使用微信开发者工具打开

### 项目结构

``` bash
├── components                          // 公共组件
│   └── demo.vue                            // 组件模版
├── pages                               // 项目页面
│   ├── index                            
│   ├── └── index.js                        
│   ├── └── index.json                      
│   ├── └── index.wxml                     
│   ├── └── index.wxss                      
│   ├── logs   
│   ├── └── logs.js                        
│   ├── └── logs.json                      
│   ├── └── logs.wxml                     
│   └── └── logs.wxss   
├── services                              // 网络服务
│   ├── api                                 // 存放项目api
│   ├── └── user.js                            // 引入api
│	├── url                                 // 存放项目接口url
│   ├── └── user.js                            // 引入url
│   └── request.js                          // wx.request封装
├── static                              // 公共资源
│   ├── images                              // 图片 
├── style                               // 样式目录
│   ├── common.wxss                         // 公共样式
│   ├── iconfont.wxss                       // 字体图标样式
│   └── weui.wxss                           // ui库
├── utils                               // 工具目录
│   ├── utils.js                          // 工具文件 
│   └── goToPage.js                       // 封装的页面跳转
├── app.js
├── app.json
├── app.wxss                      		 
└── README.md                           // 项目介绍文件
```


### End