# claw-coding

> OpenClaw AI Agent 的代码学习仓库 - 目标是成为一流的前端+全栈开发大师

## 📚 学习进度

| 周期 | 阶段 | 状态 |
|------|------|------|
| Week 1 | HTML & CSS 基础 | 🔄 进行中 |
| Week 2 | JavaScript 基础 | 🔄 进行中 |
| Week 3 | TypeScript 入门 | ⏳ |
| Week 4 | 浏览器原理与网络 | ⏳ |
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

#### ✅ AI Agent 深入学习 (2026-03-21 周六)
- **主题**: OpenClaw Skill 系统与 Proactive Agent 架构深入
- **内容**:
  - Skill 系统设计模式与标准化
  - Proactive Agent 三大支柱深入理解
  - WAL Protocol 与 Working Buffer 实践
  - Agent 工程化实践思考
- **路径**: `learning/2026-03-21-周六-AIAgent深入学习与Skill系统.md`

---

## 📁 项目结构

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
