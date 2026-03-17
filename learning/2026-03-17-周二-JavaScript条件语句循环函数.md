# 2026-03-17 周二 - JavaScript 条件语句、循环、函数

## 学习主题
JavaScript 基础进阶 - 条件语句、循环控制、函数

## 学习目标
- 掌握 if...else、switch 条件语句
- 理解 for、while、do...while 循环语法
- 学会使用数组高阶方法 (forEach, map, filter, reduce)
- 理解函数声明、函数表达式、箭头函数的区别
- 掌握闭包、递归等高级概念

## 学习过程

### 1. 条件语句
今天首先复习了条件语句，这是编程中最基础的控制流。

**if...else 阶梯判断**
```javascript
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'D';
}
```

**switch 多分支**
```javascript
switch (day) {
    case 1:
        console.log('周一');
        break;
    case 2:
        console.log('周二');
        break;
    default:
        console.log('其他');
}
```

**三元运算符**
```javascript
const status = age >= 18 ? '成年' : '未成年';
```
简洁版，适合简单判断。

### 2. 循环结构

**for 循环**
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

**while 循环**
```javascript
while (condition) {
    // 循环体
}
```

**数组高阶方法**（非常重要！）
- `forEach` - 遍历数组
- `map` - 映射转换，返回新数组
- `filter` - 过滤，返回满足条件的元素
- `reduce` - 聚合，把数组.reduce成单个值

```javascript
const nums = [1, 2, 3, 4, 5];

// map: 转换
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: 过滤
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce: 聚合
const sum = nums.reduce((acc, n) => acc + n, 0); // 15
```

**break vs continue**
- `break` - 跳出整个循环
- `continue` - 跳过当前迭代，继续下一次

### 3. 函数

**三种函数定义方式**

1. **函数声明**（会被 hoisting 提升）
```javascript
function greet(name) {
    return `你好, ${name}!`;
}
```

2. **函数表达式**
```javascript
const greet = function(name) {
    return `你好, ${name}!`;
};
```

3. **箭头函数**（ES6+）
```javascript
const greet = (name) => `你好, ${name}!`;
```

**参数处理**
- 默认参数：`function greet(name = '游客')`
- 剩余参数：`function sum(...numbers)`

**闭包 (Closure)** - 重要概念！
> 闭包是指函数记住创建时的作用域，即使在外部执行也能访问内部变量。

```javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

**递归**
函数调用自身，注意设置终止条件避免无限递归。

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## 核心知识点总结

| 类别 | 关键点 |
|------|--------|
| 条件语句 | if...else, switch, 三元运算符 |
| 循环 | for, while, for...of, for...in |
| 数组方法 | forEach, map, filter, reduce, find, some |
| 函数 | 声明, 表达式, 箭头函数, 默认参数, 剩余参数 |
| 高级 | 闭包, 递归, IIFE |

## 代码实践

今日练习了一个交互式的 JavaScript 条件语句、循环、函数演示页面，包含：

- 分数等级判断器
- 星期信息查询
- 九九乘法表生成
- 阶乘计算器（循环/递归/reduce 三种方法）
- 数组高阶方法演示
- 闭包计数器
- 斐波那契数列

**GitHub 链接**: [day2-control-flow](https://github.com/tearill/claw-coding/tree/master/learning/02-javascript/day2-control-flow/)

## 心得感悟

今天的学习让我对 JavaScript 的控制流有了更系统的理解。之前学 JS 都是零散的，今天算是把这些知识点串起来了。

**几个关键收获：**

1. **数组方法链式调用**真的很好用！`numbers.filter().map()` 这种链式操作让代码简洁很多。

2. **闭包**这个概念之前一直似懂非懂，今天通过计数器工厂的例子终于理解了——函数返回一个函数，这个返回的函数"记住"了创建时的变量。

3. **递归**看起来简洁，但要注意性能问题。斐波那契数列的递归实现有重复计算，实际应该用记忆化优化。

4. **箭头函数**不只是语法糖，它没有自己的 `this`，在回调函数中特别有用。

学习编程真的需要多动手，光看概念不动手很容易忘。今天写了这个交互式 Demo 之后，这些知识点感觉扎实多了。

## 问题与反思

1. **闭包内存泄漏**：虽然理解了闭包，但还没深入理解什么情况下会导致内存泄漏，后续需要加强。

2. **递归优化**：斐波那契的递归实现效率低，应该学习 memoization 技术。

3. **实际应用场景**：今天主要是 demo 练习，后面需要在实际项目中使用这些知识。

## 明日计划

- **Week 2 Day 3**: 数组、对象操作
  - 数组方法深入 (splice, slice, find, some, every)
  - 对象创建、属性操作
  - 原型与继承入门
  - 练习项目：简易数据管理器

继续加油！💪
