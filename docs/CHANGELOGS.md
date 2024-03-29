# Update logs of Uke-admin-web-scaffold

## v1.2.0

- 使用 version-helper 渲染版本信息
- 升级 UI 库，把 Alert 换成 Alert

## v1.1.0

- 优化 ActionAgent，加入 type props 检查
- 优化 RecordTemplate 的实现
- 依赖最新的 UI 库
- 整理开发环境，移除 babel 配置

## v1.0.0

### 新特性

- 支持 Typescript
- 配合新的 UI 库的 Table 参数传入，将 keyMapper 重命名为 columns

-------------

## v0.22.0

- 升级 `basic-helper` 和 `uke-request`，并支持最新的 api

## v0.21.7

- 完善国际化，完善路由解析

## v0.21.6

- 优化登陆框的样式

## v0.21.5

- 修改快捷键说明

## v0.21.4

- 修复国际化赋值的问题

## v0.21.3

- 新增错误打印

## v0.21.2

- 修复内部国际化文件的问题

## v0.21.1

- 修复国际化的问题

## v0.21.0

- 优化国际化策略

## v0.20.4

- 调整表格模版引擎的按钮样式
- 调整 LoginPanel 的按钮的样式

## v0.20.3

- 修复登陆框的样式问题

## v0.20.2

- 新增通用的登陆验证选择器

## v0.20.1

- 优化国际化按钮的显示问题

## v0.20.0

- 升级到最新 UI 库，同步 DropdownWrapper 的用法
- statusbarConfig 的配置改变: children -> overlay

## v0.19.1

- 优化样式

## v0.19.0

- 升级到 basic-helper v2.0
- 新增可以收起展开查询条件的功能

## v0.18.9

- 调整 Dashboard 的结构

## v0.18.8

- 调整样式

## v0.18.7

- 导航菜单新增 pureIcon 支持

## v0.18.6

- 修改默认路由标识符
- 导航支持 url 形式
- 优化主题的样式

## v0.18.5

- 新增可以更改 url 标识符的接口

## v0.18.4

- 调整 closeBtn 的样式

## v0.18.3

- 修复国际化语言包初始化加载失败的问题

## v0.18.2

- 修复按钮权限的判断

## v0.18.1

- 调整路由策略为参数形式
- 调整导航菜单的默认 icon

### 重命名

- GeneralReportRender -> HOCReportRender

## v0.18.0

### API 调整

1. actionBtnConfig -> recordActionBtns
2. getActionBtn -> getRecordBtns

### API 优化

- recordActionBtns 新增一个 enable 的接口，用于判断是否显示

```js
const recordActionBtns = [
  {
    ...options,
    enable: (str, item, mapper, idx) => {
      // 根据返回值控制是否显示
      return boolean;
    }
  }
]
```

### 问题修复

- 让 API 接口名字更符合阅读习惯
- 避免操作按钮过滤时返回 undefined 导致不可控结果

-------------

## v0.17.9

- 修复一些问题

## v0.17.8

- 修复 ReportRender 的作用域问题

## v0.17.7

- 优化浮动模式下的导航菜单的背景

## v0.17.6

- 修复表格内置按钮的样式问题

## v0.17.5

- 修复一些问题

## v0.17.4

- 调整不同主题下的 btn 的样式

## v0.17.3

- 调整黑夜模式的导航菜单

## v0.17.2

- 调整导航菜单

## v0.17.1

- 调整样式

## v0.17.0

- 全新的主题选择
- 黑夜模式选择
- 新增 download 助手

## v0.16.32

- 删除多余 console

## v0.16.31

- 修复一些问题

## v0.16.30

- 完善 state 的缓存机制

## v0.16.29

- 完善导航机制

## v0.16.28

- 新增删除全部 Tab 的接口

## v0.16.27

- 调整样式

## v0.16.26

- 优化布局，优化顶部的标签导航

## v0.16.25

- 调整 UI 的样式

## v0.16.24

- 新增 propsForTable 的 props，用于统一给 Table 传入 props 的方式
- 去除内置的 table 样式

## v0.16.23

- 调整 uke-status-bar 的最小高度

## v0.16.22

- 优化版本信息以及交互

## v0.16.21

- 升级 UI 库，完善表头的选择器的改变缓存

## v0.16.20

- 添加回车提交查询

## v0.16.19

- 修复传参情况下pageName匹配问题

## v0.16.18

- 修复自动刷新的错误

## v0.16.17

- 添加声音提示

## v0.16.16

- 调整表格生成器的按钮过滤机制

## v0.16.15

- 添加了自动刷新的机制

## v0.16.14

- 添加可配置清除按钮的 props

## v0.16.13

- 添加了清空搜索条件的功能

## v0.16.12

- 优化 ActionAgent 的写法，避免潜在的内存泄漏问题

## v0.16.11

- 修复 mini nav 的 key 的警告

## v0.16.10

- 完善 Statusbar 的配置

## v0.16.9

- 状态栏新增分割线

## v0.16.8

- 优化状态栏的实现

## v0.16.7

- 调整导航栏的样式

## v0.16.6

- 调整总体的样式

## v0.16.5

- 新增 Footer 插件，可以自定义右下角的内容
- 优化新版本的提示交互

## v0.16.4

- 优化左菜单的样式

## v0.16.3

- 完善 StatusbarConfig

## v0.16.2

- 脚手架添加是否 tab 在 statusbar 的选项: tabInStatusbar

## v0.16.1

- 调整 tab 的样式

## v0.16.0

- 调整顶级的 Tab 的样式和实现方式

## v0.15.40

- 调整 statusbar 的位置

## v0.15.39

- 优化导航栏的样式，添加导航栏配置

## v0.15.38

- 去除没有定义按钮时的警告

## v0.15.37

- 修复表格的问题

## v0.15.36

- 调整模版引擎传入 Table 的 props 的方式

## v0.15.35

- 删除多余样式

## v0.15.34

- 升级版本号，与 2.13.10，因为 npm 的 bug

## v0.15.33

- 调整表格的操作按钮，可以添加颜色

## v0.15.32

- 优化 handleQueryData 接口

## v0.15.31

- 修复一些问题

## v0.15.30

- 提供 DashBoard 完整的 props 参数

## v0.15.29

- PluginComponent 传入 onNavigate

## v0.15.28

- 增强高阶模版的使用方式，增加一个新的参数

## v0.15.27

- 修复一些问题

## v0.15.26

- 脚手架新增 pageProps 参数，可以从外层传入参数给所有的 props

## v0.15.25

- 调整左菜单的 icon 样式
- 调整搜索框的实现，使用 ClickAway 的方式
- 调整 UI 库组件的引用方式

## v0.15.23

- 添加每个 Tab 页是否激活状态的

## v0.15.22

- 调整表格模版 didMountQuery 的策略

## v0.15.21

- 表格模版新增 refreshData 接口
- 表格模版新增 calculateHeight props 接口，用于标记是否需要自动计算表格高度
- 调整表格模版的高度调整策略，如果该页面被隐藏，则在下一次 update 的时候更新此高度，保证高度的正确性

## v0.15.20

- 添加 Link 的 onClick 接口
- 修复渲染模版的问题

## v0.15.19

- 完善 onChangeCondition 接口

## v0.15.18

- 完善 onChangeCondition 接口

## v0.15.17

- 新增一个 onChangeCondition 接口

## v0.15.16

- 修复左菜单错位的问题

## v0.15.15

- 调整版本号的位置和结构
- 调整左菜单的样式，以及收缩的效果

## v0.15.14

- 优化自动表格引擎的高度设置机制

## v0.15.13

- 优化查询的操作，默认跳转到第一页
- 优化表格的高度设置

## v0.15.12

- 调整脚手架的样式
- 新增可以设置最大可打开 Tab 的接口
- 优化表格模版引擎

## v0.15.11

- 调整分页

## v0.15.10

- 添加分页配置

## v0.15.9

- 去除 login 的 scss

## v0.15.8

- 完善左菜单的样式

## v0.15.7

- 调整 status-bar 的命名

## v0.15.6

- 调整菜单的写法，避免错误
- 优化插件的写法

## v0.15.5

- 调整样式

## v0.15.4

- 调整部署的显示字段
- 调整 UI 风格

## v0.15.3

- 完善背景机制

## v0.15.2

- 调整背景，抽离成配置

## v0.15.1

- 调整菜单样式

## v0.15.0

### 新功能

- 新增部署路径配置

### 调整

- 重做系统的外层样式，使用亮色主题

------------

## v0.14.10

- 去除 console log

## v0.14.9

- 添加内置的退出登录按钮，调整接口的名称

## v0.14.8

- 完善 ActionAgent 的 state 管理

## v0.14.7

- 优化 hideCondition 的样式

## v0.14.6

- 修复一些问题

## v0.14.5

- 修复发布模块创建项目时的错误

## v0.14.4

- 完善系统的提示

## v0.14.3

- 支持按钮 ID，用于标记所有按钮，便于分配权限

## v0.14.2

- actionAgent 中的 after 现在支持异步函数

## v0.14.0

- 优化路由机制
- 新增 DashBoard 组件，当所有页面关闭是出现
- 依赖最新的 UI 库，调整了相关组件的引用

## v0.13.14

- 修复 history state 的引用问题

## v0.13.12

- 新增表格的按钮扩展接口

## v0.13.9

- 调整快捷键
- 优化标签页的行为，优化关闭的机制

## v0.13.8

- 调整功能图标，使用 ToolTip
- 调整版本组件的样式

## v0.13.5

- 优化菜单是否激活的判定
- 优化样式

## v0.13.2

- 升级 UI 库
- 修复一些引用问题

## v0.13.0

- 新增表格模版高阶组件的引用，业务组件可以通过 this.ReportRef 引用
- 表格组件提供一个删除所有已选择项的接口，通过 this.clearCheckeds() 调用
- 修复 report 的已选项引用错误问题，现在可以通过 this.checkedItems 引用
- 使用最新 UI 库 2.6.1 和 basic-helper 1.4.4
