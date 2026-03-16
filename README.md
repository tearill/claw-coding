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
