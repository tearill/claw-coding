# 2026-03-18 周三 - JavaScript 数组与对象操作

> 今日学习主题：A股复盘（暂停）+ JavaScript 数组与对象操作复习

## 🎯 今日目标

1. 理解 JavaScript 数组的核心方法
2. 掌握对象创建、操作与原型链
3. 能够熟练使用 map/filter/reduce 处理数据

---

## 📚 学习内容

### 1. 数组方法详解

JavaScript 数组提供了丰富的方法来处理数据，主要分为以下几类：

#### 🔄 遍历方法
- `forEach()` - 遍历每个元素，无返回值
- `map()` - 映射每个元素，**返回新数组**
- `filter()` - 过滤元素，**返回新数组**
- `reduce()` - 累积计算，**返回单个值**

#### 🔍 查询方法
- `find()` - 查找第一个满足条件的元素
- `findIndex()` - 查找第一个满足条件的元素索引
- `some()` - 检查是否存在满足条件的元素（返回 boolean）
- `every()` - 检查是否所有元素都满足条件（返回 boolean）

#### 🔧 修改方法
- `push()` / `pop()` - 末尾添加/删除
- `shift()` / `unshift()` - 开头删除/添加
- `splice()` - 任意位置插入/删除/替换
- `slice()` - 截取数组片段（返回新数组）

#### ⚡ 高级方法
- `flat()` / `flatMap()` - 扁平化数组
- `sort()` - 排序（会修改原数组）
- `reverse()` - 反转数组

### 2. 对象操作

#### 📦 对象创建
```javascript
// 字面量
const obj = { name: 'Horace', age: 18 }

// 构造函数
const obj2 = new Object()

// Object.create()
const obj3 = Object.create(null) // 创建无原型对象
```

#### 🔑 属性操作
- `Object.keys()` - 获取所有键
- `Object.values()` - 获取所有值
- `Object.entries()` - 获取所有键值对
- `Object.hasOwn()` - 检查自有属性
- `Object.assign()` - 合并对象

#### 🔗 原型链
- `Object.getPrototypeOf()` - 获取原型
- `Object.setPrototypeOf()` - 设置原型
- `obj.hasOwnProperty()` - 检查自身属性
- `obj.isPrototypeOf()` - 检查是否是原型

### 3. 数据处理实战

#### 示例：处理用户列表
```javascript
const users = [
  { name: 'Alice', age: 25, score: 85 },
  { name: 'Bob', age: 30, score: 92 },
  { name: 'Charlie', age: 22, score: 78 }
];

// 提取所有名字
const names = users.map(u => u.name);

// 过滤不及格的
const failed = users.filter(u => u.score < 60);

// 计算平均分
const avgScore = users.reduce((sum, u) => sum + u.score, 0) / users.length;

// 找出最高分
const topStudent = users.reduce((top, u) => u.score > top.score ? u : top);
```

---

## 💻 练习代码

详细代码见：[day4-array-object](https://github.com/tearill/claw-coding/tree/master/learning/02-javascript/day4-array-object/)

### 练习项目：数据处理工具库

实现了以下功能：
- 数组去重
- 数组分块
- 数组扁平化
- 对象深拷贝
- 对象合并
- 条件筛选

---

## ✅ 今日完成

- [x] JavaScript 数组核心方法学习
- [x] JavaScript 对象操作复习
- [x] 编写练习代码
- [x] 创建学习笔记

---

## 💡 心得感悟

今天重新复习了 JavaScript 数组和对象操作，感觉这些基础方法真的非常强大。之前在写代码的时候经常会用 for 循环来处理数据，今天学习后发现 `map/filter/reduce` 组合起来可以实现更优雅、更易读的代码。

尤其印象深刻的是 `reduce` 的强大之处 - 它不仅仅是求和，还可以实现 map 和 filter 的功能。但需要注意的是，`reduce` 的复杂度较高，代码可读性有时不如直接用 map/filter 组合。

另外，对象的原型链部分之前一直有点模糊，今天通过几个例子总算是搞清楚了 `__proto__` 和 `prototype` 的区别。

**今日收获**：基础不牢，地动山摇。这些看似简单的方法才是日常开发中最常用的，必须达到熟练使用的程度。

---

## ❓ 问题与反思

1. **问题**：flatMap 在实际项目中用得不多，是不是因为兼容性？
   - 反思：其实 flatMap 很实用，可以替代 map + flat 的组合，只是需要注意它会按深度为1展开

2. **问题**：深拷贝在面试中经常被问到，但实际开发中用得少
   - 反思：可能需要深入理解 JSON.parse(JSON.stringify()) 的局限性，以及 lodash cloneDeep 的原理

3. **需要加强**：后续需要多练习实际的业务场景，比如数据格式化、列表筛选等

---

## 🔜 明日计划

1. 继续 JavaScript 基础 - DOM 操作基础
2. 练习实现一个简单的 Todo List
3. 开始接触事件处理

---

## 📅 复习说明

今天是周三，按照学习计划应该是「A股复盘 + 前端复习」。由于网络限制无法获取实时A股数据，临时调整为纯前端复习。

金融分析学习后续会继续进行。
