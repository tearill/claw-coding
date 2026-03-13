# Day 2: CSS 基础 - 学习笔记

## 1. CSS 选择器

### 选择器优先级（从高到低）

| 优先级 | 选择器 | 示例 |
|--------|--------|------|
| 1 | `!important` | `color: red !important;` |
| 2 | 行内样式 | `<div style="...">` |
| 3 | ID 选择器 | `#id` |
| 4 | 类/属性/伪类 | `.class`, `[type]`, `:hover` |
| 5 | 标签选择器 | `div`, `p` |
| 6 | 通配符 | `*` |

### 常用选择器类型

```css
/* 基础选择器 */
h1 { }           /* 标签选择器 */
.highlight { }   /* 类选择器 */
#header { }      /* ID选择器 */

/* 属性选择器 */
input[type="text"] { }

/* 后代选择器 */
.container .box { }

/* 子选择器 */
.parent > .child { }

/* 伪类 */
a:hover { }
li:first-child { }
```

---

## 2. 盒模型 (Box Model)

### 组成结构

```
┌─────────────────────────────────────┐
│             margin (外边距)          │
│  ┌─────────────────────────────────┐│
│  │         border (边框)            ││
│  │  ┌─────────────────────────────┐││
│  │  │      padding (内边距)        │││
│  │  │  ┌─────────────────────────┐ │││
│  │  │  │    content (内容)       │ │││
│  │  │  └─────────────────────────┘ │││
│  │  └─────────────────────────────┘ ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### box-sizing 属性

- **`content-box`（默认）**：width/height 只包含内容
  - 实际宽度 = width + padding + border
  
- **`border-box`**：width/height 包含 padding 和 border
  - 实际宽度 = width（推荐使用）

### 最佳实践

```css
/* 全局重置 */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

---

## 3. Flexbox 弹性布局

### 核心概念

- **主轴 (Main Axis)**：默认水平方向
- **交叉轴 (Cross Axis)**：默认垂直方向

### 常用属性

```css
.container {
    display: flex;
    
    /* 主轴对齐 */
    justify-content: flex-start | flex-end | center | space-between | space-around;
    
    /* 交叉轴对齐 */
    align-items: stretch | flex-start | flex-end | center | baseline;
    
    /* 换行 */
    flex-wrap: nowrap | wrap | wrap-reverse;
    
    /* 简写 */
    gap: 20px;
}

.item {
    /* 放大比例 */
    flex-grow: 1;
    /* 缩小比例 */
    flex-shrink: 0;
    /* 基础宽度 */
    flex-basis: 100px;
    /* 顺序 */
    order: -1;
}
```

---

## 4. Grid 网格布局

### 常用属性

```css
.container {
    display: grid;
    
    /* 定义列和行 */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
    
    /* 简写 */
    gap: 20px;
    
    /* 命名区域 */
    grid-template-areas: 
        "header header"
        "sidebar content";
}

.item {
    /* 跨列/行 */
    grid-column: span 2;
    grid-row: span 2;
}
```

---

## 今日练习

创建了一个综合练习页面 (`index.html`)：

- ✅ CSS 选择器演示（基础、类、ID、属性、后代、子、伪类）
- ✅ 盒模型对比（content-box vs border-box）
- ✅ Flexbox 布局演示
- ✅ Grid 布局演示

---

## 明日计划

- Day 3: 响应式设计、媒体查询
- Day 4: JavaScript 基础
- 开始进入 JavaScript 阶段的学习
