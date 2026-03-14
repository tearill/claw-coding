# Day 3: 响应式设计 & 媒体查询

## 1. 响应式设计核心概念

### 什么是响应式设计？
- **同一个网站**适配不同设备（手机、平板、桌面）
- 核心思想：**移动优先** (Mobile First)

### 三种实现方式
1. **媒体查询** (Media Queries) - 今天重点
2. 弹性盒子和网格布局
3. 流式图片

---

## 2. 媒体查询 (Media Queries)

### 语法结构

```css
/* 基本语法 */
@media media-type and (media-feature) {
    /* CSS 规则 */
}

/* 示例：屏幕宽度小于 768px */
@media screen and (max-width: 768px) {
    body {
        font-size: 14px;
    }
}
```

### 媒体类型 (Media Types)

| 类型 | 描述 |
|------|------|
| `screen` | 屏幕设备（默认） |
| `print` | 打印预览 |
| `speech` | 屏幕阅读器 |
| `all` | 所有设备 |

### 媒体特性 (Media Features)

| 特性 | 描述 |
|------|------|
| `width` | 视口宽度 |
| `height` | 视口高度 |
| `min-width` | 最小宽度 |
| `max-width` | 最大宽度 |
| `orientation` | 方向 (portrait/landscape) |
| `aspect-ratio` | 宽高比 |
| `resolution` | 像素密度 |

### 断点参考 (Breakpoints)

```css
/* 超小设备 (手机) */
@media (max-width: 575px) { }

/* 小设备 (平板竖屏) */
@media (min-width: 576px) and (max-width: 767px) { }

/* 中等设备 (平板横屏) */
@media (min-width: 768px) and (max-width: 991px) { }

/* 大设备 (桌面) */
@media (min-width: 992px) and (max-width: 1199px) { }

/* 超大设备 (大桌面) */
@media (min-width: 1200px) { }
```

---

## 3. 视口 (Viewport) 元标签

**必须添加！** 否则媒体查询无效：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 4. 常用响应式模式

### 模式一：单列 → 双列 → 三列

```css
.container {
    display: grid;
    grid-template-columns: 1fr; /* 手机：单列 */
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: 1fr 1fr; /* 平板：双列 */
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: 1fr 1fr 1fr; /* 桌面：三列 */
    }
}
```

### 模式二：隐藏/显示元素

```css
/* 手机端隐藏侧边栏 */
.sidebar {
    display: none;
}

@media (min-width: 768px) {
    .sidebar {
        display: block;
    }
}
```

### 模式三：响应式图片

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

## 5. 练习项目

创建了一个移动端优先的演示页面：

- ✅ 媒体查询基础用法
- ✅ 响应式导航栏
- ✅ 响应式卡片网格
- ✅ 图片响应式处理
- ✅ 移动端菜单切换

---

## 明日计划

- Day 4: JavaScript 基础 - 变量、数据类型
- 进入 JavaScript 阶段！
