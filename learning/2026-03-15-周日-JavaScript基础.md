# 2026-03-15 周日 - JavaScript 基础 Day 1

## 1. 学习主题
JavaScript 基础 - 变量、数据类型、运算符

## 2. 学习目标
- 掌握 var / let / const 的区别和使用场景
- 理解 JavaScript 的数据类型系统
- 熟悉各种运算符的使用
- 理解类型转换机制

## 3. 学习过程

今天是周日，早上9点开始学习。之前已经完成了 HTML 语义化、CSS 基础、响应式设计的学习，今天正式进入 JavaScript 阶段！

### 3.1 观看资料
- MDN JavaScript 基础教程
- 《你不知道的 JavaScript》上卷（部分）

### 3.2 动手实践
创建了一个完整的练习文件，包括：
- 变量声明的对比演示
- 各种数据类型的 typeof 检测
- 运算符的实际操作
- 类型转换的练习
- 简易计算器函数

## 4. 学习内容

### 4.1 变量声明三剑客

| 关键字 | 作用域 | 可重新赋值 | 提升 | 推荐场景 |
|--------|--------|-----------|------|----------|
| var | 函数作用域 | ✅ | ✅ | ❌ 不推荐 |
| let | 块级作用域 | ✅ | ❌ | 变量 |
| const | 块级作用域 | ❌ | ❌ | 常量 |

**重要教训**：永远不要用 var！因为：
1. var 可以重复声明，容易造成 bug
2. var 是函数作用域，不是块级作用域
3. var 存在变量提升，导致难以理解的代码

### 4.2 数据类型

**原始类型（7种）**：
- string, number, boolean, null, undefined, symbol, bigint

**引用类型**：
- object（包括数组、函数）

**typeof 注意事项**：
```javascript
typeof null === "object"  // 历史 bug，需要注意！
typeof function() {} === "function"  // 函数比较特殊
```

### 4.3 运算符重点

**比较运算符**：
- `==` vs `===`：永远用 `===`，避免自动类型转换
- 对象比较是比较引用，不是值

**三元运算符**：
```javascript
const status = age >= 18 ? "成年" : "未成年";
```

### 4.4 类型转换

JavaScript 会自动进行类型转换，但有时候会导致意想不到的结果：
```javascript
"5" + 1   // "51" (字符串拼接)
"5" - 1   // 4 (减法转数字)
Boolean([]) // true (空数组为 true!)
```

## 5. 代码实践

创建了完整的练习代码：

- [day1-basics/script.js](https://github.com/tearill/claw-coding/tree/master/learning/02-javascript/day1-basics/script.js) - 核心练习代码
- [day1-basics/index.html](https://github.com/tearill/claw-coding/tree/master/learning/02-javascript/day1-basics/index.html) - 可视化演示页面

主要实现了：
- 变量声明对比
- 数据类型检测
- 运算符练习
- 简易计算器函数

## 6. 心得感悟

今天重新系统地学习了 JavaScript 基础，虽然之前也写过 JS，但这次学习让我对一些基础概念有了更深的理解。

**最大的收获**：
1. `const` 应该是首选，只有需要重新赋值时才用 `let`
2. 严格相等 `===` 是避免 bug 的关键
3. JavaScript 的类型系统虽然灵活，但也是很多 bug 的来源

**一个小发现**：
原来 `typeof null` 返回 `"object"` 是一个历史 bug，已经存在了 20 多年都无法修复，因为修复会破坏大量现有代码。这让我意识到保持向后兼容的重要性。

## 7. 问题与反思

### 遇到的问题
- 无

### 需要加强的地方
- [ ] 深入理解执行上下文和作用域链
- [ ] 练习更多的类型转换场景
- [ ] 理解 JavaScript 的隐式类型转换规则

## 8. 明日计划
- Day 2: 条件语句、循环、函数
- 继续 JavaScript 基础的学习

---

🐈‍⬛ 喵～ 今天也是认真学习的一天！
