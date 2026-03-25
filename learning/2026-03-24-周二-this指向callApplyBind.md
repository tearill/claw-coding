# 📅 2026-03-24 周二 - this 指向 / call / apply / bind

> **Week 3 Day 2** | JavaScript 进阶

---

## 🎯 今日目标

- [x] 理解 JavaScript 中 this 的指向规则
- [x] 掌握 call、apply、bind 的用法和区别
- [x] 手动实现 call、apply、bind 方法
- [x] 理解箭头函数的 this 特性

---

## 📚 学习内容

### 1. this 指向问题

JavaScript 中的 this 指向是一个让很多人头疼的问题。今天系统学习了 this 的绑定规则：

#### this 绑定的 4 种规则

| 绑定方式 | 场景 | this 指向 |
|----------|------|----------|
| 默认绑定 | 独立函数调用 | 全局对象（strict 模式下 undefined） |
| 隐式绑定 | 对象方法调用 | 调用的对象 |
| 显式绑定 | call/apply/bind | 指定的第一个参数 |
| new 绑定 | 构造函数 | 新创建的对象 |

#### 常见问题场景

```javascript
// 隐式绑定丢失
const obj = {
  name: 'Horace',
  greet: function() {
    console.log(this.name);
  }
};
const greet = obj.greet;
greet(); // undefined - 丢失了 obj 上下文

// 回调函数中的 this
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log(this); // btn 元素
});
```

### 2. 箭头函数的 this

箭头函数没有自己的 this，它会捕获定义时外层作用域的 this。

```javascript
const obj = {
  name: 'Horace',
  greet: () => {
    console.log(this.name); // this 来自定义时的全局作用域
  }
};
```

### 3. call / apply / bind 详解

这三个方法都是 Function.prototype 上的方法，用来改变函数执行时的 this 指向。

#### call 方法
- 语法：`fn.call(thisArg, arg1, arg2, ...)`
- 立即执行函数
- 参数逐个传递

#### apply 方法
- 语法：`fn.apply(thisArg, [argsArray])`
- 立即执行函数
- 参数以数组形式传递

#### bind 方法
- 语法：`fn.bind(thisArg, arg1, arg2, ...)`
- **不立即执行**，返回一个新的绑定函数
- 可以预设部分参数（偏函数）

---

## 💻 练习项目

### 练习 1：手动实现 call

[day2-this-bind/call-implementation](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day2-this-bind/call-implementation)

```javascript
Function.prototype.myCall = function(context, ...args) {
  // 关键点：将函数设置为 context 的临时方法
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
```

### 练习 2：手动实现 bind

[day2-this-bind/bind-implementation](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day2-this-bind/bind-implementation)

```javascript
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};
```

### 练习 3：应用场景练习

[day2-this-bind/usage-scenarios](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day2-this-bind/usage-scenarios)

- 数组方法借用（类数组转数组）
- 继承实现
- 函数柯里化

---

## ✅ 完成度

- [x] 理解 this 的 4 种绑定规则
- [x] 掌握 call/apply/bind 区别
- [x] 手动实现 call 方法
- [x] 手动实现 bind 方法
- [x] 箭头函数 this 特性
- [x] 编写代码练习

---

## 💡 心得感悟

今天学习 this 指向机制，有一个很深的感悟：JavaScript 的 this 设计其实是为了让函数可以复用，但正是这种灵活性带来了复杂性。

之前在写 Vue/React 项目时，经常遇到回调函数中 this 指向问题，比如在 class 组件中使用 `this.handleClick = this.handleClick.bind(this)`，或者在 React Hooks 中完全使用箭头函数避免这个问题。

今天手动实现 call 和 bind 后，终于理解了它们的原理：
- call 和 bind 本质都是借助 `obj.fn()` 的隐式绑定方式来改变 this
- bind 只是一个"延迟执行"的 call

另外还学到一个实用技巧：**类数组对象**（如 arguments）可以借助 Array.prototype 上的方法：

```javascript
// 将类数组转为真数组
const args = Array.prototype.slice.call(arguments);
const args2 = Array.from(arguments);
const args3 = [...arguments];
```

---

## 🔜 明日计划

- [ ] Day 3: ES6+ 新特性详解
- [ ] 复习今天学习的 this 绑定规则
- [ ] 完成 ES6+ 特性练习

---

## 📚 参考资料

- [MDN: this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- 《你不知道的 JavaScript》上卷 - 第四章
- [JavaScript .info: _bind 和上下文_