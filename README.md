# vue-ssr

## 配置

- ecosystem.json
- config.js

## 构建

``` bash
# 安装包依赖
npm install # or yarn

# 开发环境，监听localhost:8000
npm run dev

# 生产环境 build
npm run build

# 生产环境启动
pm2 start ecosystem.json
```

## 说明

该项目使用 vue 服务端渲染实现，主要是用了 [vue](https://cn.vuejs.org/index.html)、[ssr](https://ssr.vuejs.org/zh/)、[express](https://expressjs.com/)。

```
|--build: webpack 配置文件
|--dist: 编译后文件目录
|--log: 日志目录
|--node_modules: npm 包
|--public: 公共文件目录
|--src: 项目开发目录
    |--api: api 目录
    |--assets: 资源目录，图片，css等
    |--components: 公共组件
    |--router: 路由
    |--store: vuex 状态管理
    |--util: 公共方法
    |--views: 各目录对应各个页面
|--.babelrc: babel 配置
|--eslintrc.js: eslint 配置
|--ecosystem.js: pm2 配置文件
|--package.json: npm 包配置
|--postcss.config.js: postcss 配置
|--config.js: 配置文件
|--server.js: node 服务
```