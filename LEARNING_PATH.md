# 从 0 到 1 前端 + 全栈 (Node.js) 学习路径

> 基于 roadmap.sh 和业界最佳实践整合

---

## 阶段一：基础入门 (2-3 周)

### 1.1 HTML + CSS 基础
- [x] HTML 文档结构、常用标签
- [x] CSS 选择器、盒模型、布局 (Flexbox + Grid)
- [x] 响应式设计基础
- [x] **实践**：个人介绍页面

### 1.2 JavaScript 基础
- [x] 变量、数据类型、运算符
- [x] 条件语句、循环、函数
- [x] 数组、对象操作
- [x] DOM 操作基础
- [x] 事件处理
- [x] 异步编程：Promise、async/await、Event Loop
- [x] **实践**：Todo List 网页应用

### 1.3 开发工具
- [ ] VS Code 安装与配置
- [ ] Chrome DevTools 使用
- [ ] Git 基础命令
- [ ] npm / yarn 包管理器

---

## 阶段二：前端进阶 (3-4 周)

### 2.1 ES6+ 新特性
- [x] let/const、解构赋值、模板字符串
- [x] Promise、async/await
- [x] 模块化 (import/export)
- [x] 箭头函数、展开运算符

### 2.2 异步编程
- [x] 回调函数、Promise 链式调用
- [x] async/await 异步语法
- [x] Fetch API 网络请求
- [x] **实践**：天气查询小应用

### 2.3 CSS 进阶
- [ ] CSS 变量 (Custom Properties)
- [ ] CSS 动画与过渡
- [ ] SCSS/Sass 预处理器 (可选)
- [ ] CSS Framework 入门 (TailwindCSS)

---

## 阶段三：前端框架 (4-6 周)

### 3.1 React 入门
- [ ] JSX 语法
- [ ] 组件化开发
- [ ] Props 与 State
- [ ] 事件处理
- [ ] 条件渲染与列表渲染
- [ ] **实践**：天气预报 React 版

### 3.2 React 进阶
- [ ] Hooks (useState, useEffect, useContext)
- [ ] 自定义 Hook
- [ ] 组件通信
- [ ] 路由 React Router
- [ ] 状态管理 (Zustand / Redux Toolkit)
- [ ] **实践**：博客系统前台

### 3.3 Vue 3 (可选双框架)
- [x] Vue 3 Composition API
- [x] 响应式系统原理
- [x] 组件化开发 (v-if/v-for/v-model)
- [x] Pinia 状态管理
- [x] Vue Router 基础（动态路由、导航守卫）
- [x] 插槽 (Slots) 基础与作用域插槽
- [x] **Teleport 传送门**（模态框、下拉菜单等场景）
- [x] **Suspense 异步组件**（实验性 API）
- [x] **Vue 3 动画与过渡**（Transition、TransitionGroup）

---

## 阶段四：框架原理与设计 (3-4 周) 🔥

### 4.1 JavaScript 引擎与运行机制
- [ ] V8 引擎原理 (编译、解释、执行)
- [x] 事件循环 (Event Loop) 与执行栈（已学习基础）
- [ ] 垃圾回收机制
- [ ] 内存泄漏与优化

### 4.2 框架核心原理
- [ ] **虚拟 DOM**：是什么、为什么、如何工作
- [ ] **Diff 算法**：React/Vue 如何高效更新 DOM
- [ ] **响应式系统**：
  - Vue 3 Proxy 响应式原理
  - React 状态管理与更新机制
- [ ] **组件化设计**：组件通信与生命周期

### 4.3 手动实现框架 (手撕框架 🔥)
- [ ] **实现 Virtual DOM**：理解 JSX 编译过程
- [ ] **实现极简 React**：useState + 渲染
- [ ] **实现极简 Vue**：响应式数据 + 模板编译
- [ ] **理解 JSX 编译**：Babel 插件原理

### 4.4 前端设计模式
- [ ] 发布订阅模式
- [ ] 观察者模式
- [ ] 工厂模式
- [ ] 装饰器模式

---

## 阶段五：Node.js 后端 (4-5 周)

### 5.1 Node.js 基础
- [ ] Node.js 简介与运行机制
- [ ] 模块系统 (CommonJS / ES Modules)
- [ ] 文件系统操作 (fs)
- [ ] HTTP 服务器搭建
- [ ] npm 包发布

### 5.2 Express 框架
- [ ] Express 路由
- [ ] 中间件 (Middleware)
- [ ] 请求参数处理
- [ ] 静态文件服务
- [ ] 模板引擎 (EJS / Pug)

### 5.3 数据库
- [ ] MySQL 基础与 CRUD
- [ ] MongoDB (Mongoose)
- [ ] Redis 缓存
- [x] **实践**：RESTful API 设计

### 5.4 认证与安全
- [ ] JWT 认证
- [ ] Cookie / Session
- [ ] 密码加密 (bcrypt)
- [ ] XSS / CSRF 防护

---

## 阶段六：构建工具与工程化 (3-4 周) 🔥

### 6.1 构建工具原理
- [ ] **Bundleless vs Bundled**：理解构建目的
- [ ] **Webpack**：
  - 核心概念 (Entry/Output/Loader/Plugin)
  - 热更新 (HMR) 原理
  - 代码分割 (Code Splitting)
  - Tree Shaking 原理
- [ ] **Vite**：
  - Dev Server原理 (ESM + 原生 ESM)
  - Rollup 构建
  - 为什么 Vite 这么快

### 6.2 编译与转译
- [ ] **Babel**：JavaScript 编译器
  - 插件与预设
  - AST 抽象语法树基础
- [x] **TypeScript** 入门：
  - 类型系统
  - 泛型
  - 类型守卫

### 6.3 性能优化
- [ ] 性能指标 (LCP/FID/CLS)
- [ ] 代码分割与懒加载
- [ ] 缓存策略
- [ ] 首屏渲染优化 (SSR/SSG)

### 6.4 测试
- [ ] 单元测试 (Jest/Vitest)
- [ ] E2E 测试 (Playwright/Cypress)
- [ ] 覆盖率

---

## 阶段七：DevOps 与 CI/CD (2-3 周) 🔥

### 7.1 持续集成/持续部署
- [ ] CI/CD 概念与流程
- [ ] **GitHub Actions**：
  - Workflow 配置
  - 触发条件
  - 部署到 Vercel/Netlify
- [ ] **Docker** 入门：
  - 镜像与容器
  - Dockerfile 编写
  - Docker Compose

### 7.2 部署与监控
- [ ] 云服务器基础 (阿里云/腾讯云)
- [ ] Nginx 配置
- [ ] PM2 进程管理
- [ ] 日志与监控

### 7.3 工程化最佳实践
- [ ] Monorepo 架构 (pnpm workspaces / Turborepo)
- [ ] 代码规范 (ESLint + Prettier + Husky)
- [ ] Git 工作流 (Git Flow / trunk-based)

---

## 阶段八：全栈实战 (4-6 周)

### 8.1 项目实战
- [ ] 博客系统 (React + Express + MongoDB)
- [ ] 任务管理工具
- [ ] 电商小程序 (可选)

### 8.2 AI Coding 实践
- [ ] Cursor / Trae 使用技巧
- [ ] AI 辅助编程工作流
- [ ] 代码审查与优化

---

## 额外学习：AI Agent 开发

### Proactive Agent 架构
- [x] Proactive / Persistent / Self-improving 三大支柱
- [x] WAL Protocol 预写日志协议
- [x] Working Buffer Protocol 工作流程
- [x] Compaction Recovery 压缩恢复
- [x] Self-Improvement Guardrails 安全护栏
- [x] Security Hardening 安全加固
- [x] OpenClaw Skill 系统设计模式
- [x] OpenClaw Agent Runtime 架构（Workspace、Bootstrap、Session）
- [x] Skill 加载机制与优先级规则
- [x] Skill Gating 机制（requires.bins/env/config）
- [x] Autonomous vs Prompted Crons 定时任务新模式
- [x] Verify Implementation, Not Intent 实现验证原则
- [x] ADL Protocol 与 VFM Protocol 安全护栏
- [x] 深入实践：在项目中应用 Proactive Agent 架构

---

## 学习资源推荐

| 类别 | 资源 |
|------|------|
| HTML/CSS | MDN Web Docs |
| JavaScript | 《JavaScript 高级程序设计》|
| JavaScript 原理 | 《你不知道的 JavaScript》|
| React | React 官方文档 |
| React 原理 | React 源码解析 |
| Vue | Vue 3 官方文档 |
| Vue 原理 | Vue 3 设计与实现 |
| 构建工具 |Webpack/Vite 官方文档 |
| Node.js | 《Node.js 实战》|
| 综合 | roadmap.sh |

---

## 项目产出计划

| 周次 | 项目 |
|------|------|
| 1-2 | 个人介绍页面 |
| 3 | Todo List |
| 4-5 | 天气查询应用 |
| 7-9 | 博客前台 |
| 10-13 | RESTful API |
| 14-17 | 框架原理 (手撕框架) |
| 18-20 | 构建工具与工程化 |
| 21-23 | DevOps 实践 |
| 24-28 | 全栈博客系统 + 部署 |

---

## 重点标记说明

- 🔥 **阶段四 (框架原理)**：理解框架底层，手撕简化版框架
- 🔥 **阶段六 (构建工具)**：掌握 Webpack/Vite 原理
- 🔥 **阶段七 (CI/CD)**：工程化最后一环

---

*此路径为建议学习顺序，可根据实际情况调整*
