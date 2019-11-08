# uke-admin-web-scaffold

Base on React's Admin Manager Scaffold.

- [在线文档](https://scaffold.ukelli.com/)

## 特性

- 多标签页共存
- 前端路由导航
- 可无限嵌套的导航菜单
- 各种可自定义的插件接口
  - 状态栏 Statusabar
  - 脚注 Footer
- 模版引擎
  - 表格引擎 ReportTemplateEngin
  - 表单引擎 FormTemplateEngin
- 异步请求状态与 React state 的数据绑定封装 (ActionAgent)
- 前端资源发布模块

## 开始

### 新建目录

```bash
mkdir admin-scaffold-tester && cd "$_"
npm init && git init
```

### 安装依赖

> 为了不与实际项目使用的依赖冲突重复，uke-admin-web-scaffold 只指定了依赖，并没有实际安装对应依赖

```shell
# yarn
yarn add react react-dom uke-admin-web-scaffold basic-helper react-transition-group uke-request ukelli-ui unistore

# 使用 uke-scripts 开发环境
yarn add uke-scripts -D

# 或者 npm
npm i react react-dom uke-admin-web-scaffold basic-helper react-transition-group uke-request ukelli-ui unistore --save

npm i uke-scripts --save-dev
```

### 添加 npm scripts

打开 `./pacakges.json`，添加项目运行 `scripts`

```json
"scripts": {
  "start": "PORT=8086 ukectl start",
  "build": "ukectl build"
},
```

### 项目结构

项目参考 https://github.com/SANGET/admin-scaffold-starter

- public
  - index.html
- src
  - app.tsx
  - main.tsx
  - style.scss
- tsconfig.json

#### 1. 添加 /public/index.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Uke admin demo</title>
</head>

<body>
  <div id="Main"></div>
</body>
</html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.2/themes/light.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.3.1/css/all.min.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
```

#### 2. 添加 /src/app.tsx

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';

ReactDOM.render(
  <App/>,
  document.getElementById('Main')
);
```

#### 3. 添加 /src/main.tsx

```js
import React from 'react';
import { AdminWebScaffold, Link } from 'uke-admin-web-scaffold';
import './style.scss'

const VersionInfo = {
  numberVersion: 'v1.0.0'
};

const TestPage = (text = 'Test Page') => () => (
  <div className="p20">
    {text}
    <Link
      params={{
        ID: 'testID',
        data: '123'
      }}
      className="btn theme" to="TEST2">跳转到 TEST2</Link>
  </div>
);

const pageComponents = {
  TestPage: TestPage('TestPage'),
  TestPage2: TestPage('TestPage2'),
};

const menuStore = [
  {
    title: '测试页面',
    icon: 'table',
    code: 'TestPage'
  },
  {
    title: '一级菜单',
    child: [
      {
        title: '测试页面2',
        icon: 'table',
        code: 'TestPage2'
      },
      {
        title: '测试页面2',
        icon: 'table',
        code: 'TestPage3'
      },
    ]
  }
]

const userInfo = {
  username: 'uke-user'
}

const ScaffoldDemo = () => {
  return (
    <AdminWebScaffold
      menuStore={menuStore}
      username={userInfo.username}
      versionInfo={VersionInfo}
      userInfo={userInfo}
      pageComponents={pageComponents}/>
  );
}

export default ScaffoldDemo;
```

#### 4. 添加 /src/style.scss

```scss
// 引入 scss var
@import 'ukelli-ui/style/var.scss';
@import 'uke-admin-web-scaffold/style/var.scss';

// 引入其他样式
@import 'ukelli-ui/style/index.scss';
@import 'ukelli-ui/style/color/set-color.scss';
@import 'uke-admin-web-scaffold/style/index.scss';
@import 'uke-admin-web-scaffold/style/layout/login.scss';
```

#### 5. 添加 /tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "outDir": "./dist",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "noImplicitAny": false,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "module": "ES6",
    "moduleResolution": "node",
    "jsx": "react"
  },
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/test/*",
    "dist",
    "build"
  ]
}

```

### 运行

```bash
yarn start
```

稍等片刻即可

### 相关项目

- [uke-dashboard](https://github.com/SANGET/uke-admin-seed.git) 整合了上述内容的管理系统模版框架，开箱即用。
- [uke-dashboard online](https://admin.ukelli.com/) 在线演示
  - Account: admin
  - PW: 123

## 深入了解

### 通用模版和高阶模版

- 表格模版引擎
- 表单模版引擎

```js
// 通用模版
import { ReportTemplate } from 'uke-admin-web-scaffold/template-engine';

// 高阶模版 HOC
import { FormRender, HOCReportRender } from 'uke-admin-web-scaffold/template-engine';

// 通用模版
const GenernalTMPL = () => {
  const templateOptions = {};
  return (
    <ReportTemplate {...templateOptions} />
  )
}

// 高阶模版 HOC
const HOC_TMPL_REPORT = () => {
  return (
    <HOCReportRender />
  )
}
```

### 请求代理机制 ActionAgent

> 封装了基于 React state 的异步请求管理，制定了异步请求在该页面的生命周期，适用于通用页面

```js
import ActionAgent from 'uke-admin-web-scaffold/action-agent';

// 继承获取 ActionAgent 的 api
class Page extends ActionAgent {
  
}
```

[详情参考](/action-agent)

### 特殊模块说明

- [FormGenerator 表单生成器配置](/G-Desc)
- [FormGenerator 表单生成器](/FormGenerator)
