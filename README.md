# vue3-vite-admin-template

## 介绍
- 一个非常简洁的后台模板,目标任何组件都可以自由组织
- 如果你不想使用本项目的组件，你大可以删除。
- 只用来当一个初始项目模板也可以的。
- 演示: [http://licheng1013.gitee.io/vue3-vite-admin-template/#/](http://licheng1013.gitee.io/vue3-vite-admin-template/#/)

### 示例
- 如果你要开发一个博客网站，那么可能这里面的组件可能都没有适合的。所以可以全部删除掉。
- 需要注意的是: 有些东西你可得留个默认配置吧。例如: router 根页面。


##  项目理念
- 尽可能项目组件随意组装。
- 尽可能的减少css的全局配置。
- 尽可能的使用最新技术。
- 尽可能的减少模板使用难度。
- 尽可能的解除各组件的依赖。
- 尽可能的轻量级配置。

## 技术栈
- Vue3
- VueRouter
- Pinia
- Sass
- ElementPlus
- Animate.css

## 贡献
- 如果你有更好的办法或者更棒的想法可以随时PR。尽可能符合项目理念

## 内部组件
### Edit.vue
- 编辑组件,支持修改与回调

### Loading.vue
- 一个简单的加载组件，你可以随意修改

### Pagination.vue
- 分页组件，进一步封装el的组件

### Table.vue
- 表格组件, 进一步封装el的组件
- 集成了基本的增删改封装，支持名称插槽。
- 1：根据对象的属性和值生成表格描述。2：根据对象属性生成创建编辑选项

### Navigation.vue
- 导航组件,也可以选择使用

## 开发
### 安装依赖
```sh
npm install
```
### 运行
```sh
npm run dev
```
### 打包
```sh
npm run build
```
