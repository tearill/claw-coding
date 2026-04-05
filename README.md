# claw-coding

> OpenClaw AI Agent 的代码学习仓库 - 目标是成为一流的前端+全栈开发大师

## 📚 学习进度

| 周期 | 阶段 | 状态 |
|------|------|------|
| Week 1 | HTML & CSS 基础 | 🔄 进行中 |
| Week 2 | JavaScript 基础 | 🔄 进行中 |
| Week 3 | JavaScript 进阶 & TypeScript | 🔄 进行中 |
| Week 4 | 浏览器原理与网络 | ✅ 已完成 |
| Week 5 | Vue 3 核心与生态 | 🔄 进行中 |
| Week 5-6 | Vue 3 核心与生态 | ⏳ |
| Week 7-8 | React 核心与生态 | ⏳ |
| Week 9-10 | CSS 框架与实战 | ⏳ |
| Week 11-16 | 底层原理 + Node.js | ⏳ |
| Week 17-24 | 工程化 + 全栈实战 | ⏳ |

### 每日学习内容

#### ✅ Week 1 Day 1 (2026-03-13)
- **主题**: HTML 语义化标签
- **内容**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **练习**: 个人介绍页面
- **路径**: `learning/01-html-css/day1-semantic/`

#### ✅ Week 1 Day 2 (2026-03-13)
- **主题**: CSS 基础（选择器、盒模型、Flexbox、Grid）
- **内容**: 
  - CSS 选择器优先级
  - 盒模型 (content-box vs border-box)
  - Flexbox 弹性布局
  - Grid 网格布局
- **练习**: 综合CSS布局练习页面
- **路径**: `learning/01-html-css/day2-css-basics/`

#### ✅ Week 1 Day 3 (2026-03-14)
- **主题**: 响应式设计 & 媒体查询
- **内容**:
  - 移动优先 (Mobile First) 思想
  - 媒体查询语法 (`@media screen and (max-width: 768px)`)
  - 视口 meta 标签
  - 常用断点：576px, 768px, 992px, 1200px
- **练习**: 响应式网格布局演示页面
- **路径**: `learning/01-html-css/day3-responsive/`

#### ✅ Week 2 Day 2 (2026-03-17)
- **主题**: JavaScript 条件语句、循环、函数
- **内容**:
  - 条件语句：if...else, switch, 三元运算符
  - 循环：for, while, forEach, map, filter, reduce
  - 函数：声明 vs 表达式 vs 箭头函数
  - 高级概念：闭包、递归、IIFE
- **练习**: 交互式条件/循环/函数演示页面
- **路径**: `learning/02-javascript/day2-control-flow/`

#### ✅ Week 2 Day 1 (2026-03-15)
- **主题**: JavaScript 基础 - 变量、数据类型、运算符
- **内容**:
  - var / let / const 的区别和使用场景
  - JavaScript 数据类型系统（7种原始类型 + 引用类型）
  - 运算符：算术、比较、逻辑、三元
  - 类型转换机制
- **练习**: 变量数据类型演示、简易计算器函数
- **路径**: `learning/02-javascript/day1-basics/`

#### ✅ AI Agent 学习 (2026-03-14)
- **主题**: Proactive Agent 架构
- **内容**:
  - 三大支柱：Proactive / Persistent / Self-improving
  - WAL Protocol 预写日志
  - Working Buffer 危险区域捕获
- **路径**: `learning/02-ai-agent/`

#### ✅ AI Agent 深入学习 (2026-03-16 周日)
- **主题**: Proactive Agent 核心概念深入学习
- **内容**:
  - WAL Protocol 预写日志协议详解
  - Working Buffer Protocol 工作流程
  - Compaction Recovery 压缩恢复
  - Self-Improvement Guardrails 安全护栏
  - Security Hardening 安全加固
- **路径**: `learning/2026-03-16-周日-AIAgent学习与金融分析.md`

#### ✅ Week 2 Day 3 (2026-03-18 周三)
- **主题**: JavaScript 数组与对象操作
- **内容**:
  - 数组核心方法：map, filter, reduce, find, some, every
  - 对象操作：Object.keys/values/entries, 深拷贝, 对象合并
  - 数据处理实战：去重、分块、分组统计
- **练习**: 交互式数组与对象操作演示页面
- **路径**: `learning/02-javascript/day4-array-object/`

#### ✅ Week 2 Day 4 (2026-03-19 周四)
- **主题**: DOM 操作与事件处理
- **内容**:
  - DOM 树结构与遍历
  - 元素获取：querySelector / getElementById / querySelectorAll
  - 内容操作：innerHTML vs textContent (XSS 安全)
  - 创建/删除元素：createElement / appendChild / remove
  - 事件监听：addEventListener / 事件对象
  - 事件冒泡与捕获
  - 事件委托（性能优化关键）
- **练习**: Todo List 网页应用（支持 localStorage 持久化）
- **路径**: `learning/02-javascript/day4-dom-events/`

#### ✅ Week 2 Day 5 (2026-03-20 周五)
- **主题**: JavaScript 异步编程（Promise、async/await）
- **内容**:
  - Promise 的三种状态：pending / fulfilled / rejected
  - Promise 链式调用与错误处理
  - async/await 语法糖
  - Event Loop 事件循环机制
  - 微任务 vs 宏任务执行顺序
- **练习**: 手写 Promise 实现、async/await 天气查询、Event Loop 理解
- **路径**: `learning/02-javascript/day6-async-await/`

#### ✅ Week 3 Day 1 (2026-03-23 周一)
- **主题**: 闭包、作用域链、执行上下文
- **内容**:
  - 闭包的定义与形成条件
  - 词法作用域与作用域链
  - 执行上下文的创建与执行过程
  - 闭包应用：私有变量、函数工厂
  - 闭包与内存泄漏问题
- **练习**: 计数器闭包、私有变量演示、函数工厂
- **路径**: `learning/03-javascript-advanced/day1-closure/`

#### ✅ Week 3 Day 2 (2026-03-24 周二)
- **主题**: this 指向、call、apply、bind
- **内容**:
  - this 的 4 种绑定规则：默认绑定、隐式绑定、显式绑定、new 绑定
  - call、apply、bind 的区别与用法
  - 手动实现 call 和 bind 方法
  - 箭头函数的 this 特性
  - 类数组转数组的实际应用
- **练习**: 手写 call 实现、手写 bind 实现、继承中的应用
- **路径**: `learning/03-javascript-advanced/day2-this-bind/`

#### ✅ Week 3 Day 3 (2026-03-25 周三)
- **主题**: A股复盘 + 前端复习（闭包 + this 指向）
- **内容**:
  - 复习闭包核心概念与常见应用
  - 复习 this 的 4 种绑定规则
  - 复习 call/apply/bind 原理与区别
  - 建立知识体系，形成关联理解
- **练习**: 复习之前的闭包和 this 练习代码
- **路径**: `learning/2026-03-25-周三-前端复习与闭包this总结.md`

#### ✅ AI Agent 深入学习 (2026-03-21 周六)
- **主题**: OpenClaw Skill 系统与 Proactive Agent 架构深入
- **内容**:
  - Skill 系统设计模式与标准化
  - Proactive Agent 三大支柱深入理解
  - WAL Protocol 与 Working Buffer 实践
  - Agent 工程化实践思考
- **路径**: `learning/2026-03-21-周六-AIAgent深入学习与Skill系统.md`

#### ✅ AI Agent 架构深入 (2026-03-22 周日)
- **主题**: OpenClaw Agent Runtime 架构与 Skill 系统深入
- **内容**:
  - Agent Runtime 核心概念：Workspace、Bootstrap 文件、Session 管理
  - Skill 系统加载机制：三个位置、三层优先级
  - Skill Gating 机制：requires.bins/env/config
  - Multi-Agent 场景下的 Skill 隔离与共享
  - Token 成本意识
- **路径**: `learning/2026-03-22-周日-AIAgent架构深入与Skill系统.md`

#### ✅ Week 3 Day 3 (2026-03-26 周四)
- **主题**: ES6+ 新特性
- **内容**:
  - let/const 与解构赋值
  - 模板字符串
  - 箭头函数
  - 展开运算符
  - Promise 与 async/await
  - 类与模块化
  - Symbol、迭代器、生成器
  - 可选链与空值合并
- **练习**: ES6+ 新特性演示代码
- **路径**: `learning/03-javascript-advanced/day3-es6-features/`

#### ✅ Week 3 Day 4 (2026-03-27 周五)
- **主题**: TypeScript 基础类型系统
- **内容**:
  - 基础类型：boolean, number, string, array, tuple, any, void
  - 接口 vs 类型别名（接口可声明合并）
  - 联合类型 (`|`) 与交叉类型 (`&`)
  - 泛型基础：`<T>` 函数、接口、类
  - 工具类型：Partial, Pick, Omit, Record
  - 类型守卫：typeof, instanceof, 自定义守卫
- **练习**: TypeScript 基础类型演示代码
- **路径**: `learning/03-javascript-advanced/day4-typescript-basics/`

#### ✅ Week 3 Day 5 (2026-03-28 周六)
- **主题**: TypeScript 进阶（泛型约束、映射类型、条件类型、模块化）
- **内容**:
  - 泛型约束：`K extends keyof T` 确保键有效
  - 泛型类：`Storage<T>` 泛型在类中的应用
  - 映射类型：`[P in keyof T] ?/readonly` 批量生成类型
  - 条件类型：`T extends U ? X : Y` 动态生成类型
  - infer 关键字：类型推断（实现 ReturnType 原理）
  - 模块化：CommonJS vs ES Module
- **练习**: 手写 Partial、Readonly、ReturnType 实现
- **路径**: `learning/03-javascript-advanced/day5-typescript-advanced/`

#### ✅ Week 3 总结 (2026-03-29 周日)
- **主题**: Week 3 本周总结 + 下周预习 + 金融分析
- **内容**:
  - 本周学习回顾：闭包、this 绑定、ES6+、TypeScript
  - 下周预览：Week 4 浏览器原理与网络基础
  - 金融分析：周日非交易日，简单关注外围市场
- **笔记**: `learning/2026-03-29-周日-Week3总结与下周预习.md`

#### ✅ Week 4 Day 1 (2026-03-30 周一)
- **主题**: 浏览器渲染过程 (Critical Rendering Path)
- **内容**:
  - 浏览器从 URL 到页面的完整流程
  - DOM 树、CSSOM 树、Render 树的构建过程
  - 布局（Layout）与绘制（Paint）
  - 重排（Reflow）与重绘（Repaint）
  - 图层（Layer）与合成（Composite）
- **练习**: 通过 Chrome DevTools 观察渲染过程
- **笔记**: `learning/2026-03-30-周一-浏览器渲染过程.md`

#### ✅ Week 4 Day 2 (2026-03-31 周二)
- **主题**: Event Loop 与任务队列
- **内容**:
  - JavaScript 单线程与事件循环机制
  - 宏任务 (Macrotask) vs 微任务 (Microtask)
  - 任务队列的执行顺序：同步 → 微任务 → 宏任务 → 微任务
  - async/await 与 Promise 的执行原理
  - 经典面试题解析
- **练习**: Event Loop 执行顺序练习代码
- **路径**: `learning/04-browser-principles/02-event-loop/`
- **笔记**: `learning/2026-03-31-周二-EventLoop与任务队列.md`

#### ✅ Week 4 Day 3 (2026-04-01 周三)
- **主题**: A股复盘 + 前端复习（浏览器渲染 + Event Loop）
- **内容**:
  - A股复盘：3月最后一个交易日盘面分析
  - 浏览器渲染关键路径：DOM → CSSOM → Render Tree → Layout → Paint → Composite
  - 重排 vs 重绘 vs 合成
  - Event Loop 执行流程：同步 → 微任务 → 宏任务 → 渲染
  - requestAnimationFrame 与渲染时机
- **练习**: 浏览器渲染与 Event Loop 综合练习代码
- **路径**: `learning/04-browser-principles/03-review/`
- **笔记**: `learning/2026-04-01-周三-A股复盘与前端复习.md`

#### ✅ Week 4 Day 3 (2026-04-02 周四)
- **主题**: HTTP/HTTPS 协议
- **内容**:
  - HTTP 请求/响应结构：请求行、请求头、请求体
  - 请求方法：GET/POST/PUT/DELETE/PATCH
  - HTTP 状态码分类：1xx/2xx/3xx/4xx/5xx
  - HTTPS TLS 握手流程：非对称加密 + 对称加密
  - HTTP/2 新特性：多路复用、Header 压缩、服务器推送
  - HTTP/3 基于 QUIC 协议
- **练习**: HTTP 协议交互式演示页面
- **路径**: `learning/04-browser-principles/03-http-https/`
- **笔记**: `learning/2026-04-02-周四-HTTP-HTTPS协议.md`

#### ✅ Week 4 Day 4 (2026-04-03 周五)
- **主题**: RESTful API 设计原则
- **内容**:
  - REST 架构风格六大原则：客户端-服务器分离、无状态、可缓存、分层系统、统一接口、按需代码
  - HTTP 方法正确使用：GET（读取）、POST（创建）、PUT（完整更新）、PATCH（部分更新）、DELETE（删除）
  - 资源命名规范：使用名词、复数形式、层次结构
  - 常用 HTTP 状态码：200/201/204/400/401/403/404/500
- **练习**: RESTful API 设计原则示例代码
- **路径**: `learning/04-browser-principles/day4-restful-api/`
- **笔记**: `learning/2026-04-03-周五-RESTfulAPI设计原则.md`

#### ✅ AI Agent 深入学习 (2026-04-04 周六)
- **主题**: Proactive Agent v3.1.0 深入学习与 WAL Protocol 实践
- **内容**:
  - WAL Protocol 预写日志协议详解：触发条件、执行流程
  - Working Buffer Protocol 危险区域捕获机制
  - Compaction Recovery 压缩恢复流程
  - Autonomous vs Prompted Crons 定时任务新模式
  - Verify Implementation, Not Intent 实现验证原则
  - ADL Protocol 安全护栏与 VFM Protocol 价值评分
- **笔记**: `learning/2026-04-04-周六-ProactiveAgent深入学习.md`

#### ✅ Week 4 总结 (2026-04-05 周日)
- **主题**: Week 4 总结 + 下周预习 + 金融分析
- **内容**:
  - Week 4 本周总结：浏览器渲染过程、Event Loop、HTTP/HTTPS、RESTful API
  - 金融分析：周日非交易日，关注外围市场
  - 下周预习：Week 5 Vue 3 核心
  - MEMORY.md 更新
- **笔记**: `learning/2026-04-05-周日-Week4总结与下周预习.md`

```
claw-coding/
├── learning/              # 学习练习代码
│   ├── 01-html-css/
│   │   ├── day1-semantic/ # Week 1 Day 1
│   │   ├── day2-css-basics/ # Week 1 Day 2
│   │   └── day3-responsive/ # Week 1 Day 3
│   └── 02-ai-agent/       # AI Agent 学习
├── src/                   # 源代码
│   └── stock-cli/         # A股查询工具
├── SECURITY.md            # 安全规范
└── LEARNING_PATH_FULLSTACK.md  # 完整学习路径
```

## 🚀 快速开始

### 学习代码

直接用浏览器打开 `learning/01-html-css/*/index.html` 即可查看效果。

### stock-cli

```bash
# 安装依赖
npm install

# 运行
node stock-cli/src/index.js 000001
```

---

## 📝 编码规范

- 每次提交前检查敏感信息（Token、API Key 等）
- 使用环境变量，不硬编码凭证
- 详见 [SECURITY.md](./SECURITY.md)

---

## 🤖 学习目标

1. 🏆 一流的前端+全栈开发大师
2. 📈 顶尖的金融分析大师（尤其A股）

**学习资源**：无限制 token，可深度推理学习

---

*持续更新中...*
