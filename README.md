# stock-cli

A股命令行查询工具 - 练习 Vue 3 Composables 思想

## 简介

这是一个用 Node.js 实现的命令行工具，用于查询 A股股票数据。

项目目的是练习 Vue 3 的 **Composables** 设计模式，将数据获取和格式化逻辑封装为可复用的组合式函数。

## 使用方法

```bash
# 查询股票（默认平安银行 000001）
node src/index.js

# 查询指定股票
node src/index.js 600519  # 贵州茅台
node src/index.js 300750  # 宁德时代
```

## 项目结构

```
stock-cli/
├── src/
│   ├── index.js              # 入口
│   └── composables/
│       ├── reactivity.js     # 响应式系统 (简化版 ref)
│       ├── useStockData.js  # 股票数据获取
│       └── useDisplay.js    # 格式化输出
└── package.json
```

## 技术栈

- **ES Modules**: import/export
- **Composables 模式**: 参考 Vue 3 Composition API
- **东方财富 API**: 免费股票数据接口

## 学习笔记

本项目用于练习前端框架的核心思想：
- Vue 3 Composition API 的 composables 模式
- React Hooks 的函数式逻辑复用
- 模块化设计原则
