# 2026-03-31 周二 Event Loop 与任务队列

> **学习主题**：Week 4 Day 2 - Event Loop 与任务队列  
> **学习目标**：深入理解 JavaScript 事件循环机制、宏任务与微任务队列  
> **学习时间**：9:00 AM - 11:00 AM

---

## 📚 学习内容

### 1. 什么是 Event Loop？

Event Loop（事件循环）是 JavaScript 执行异步代码的核心机制。它负责协调主线程上的任务执行，确保异步操作能够正确处理。

**核心概念**：
- **调用栈 (Call Stack)**：执行同步代码的栈结构
- **任务队列 (Task Queue)**：存放宏任务（Macrotask）的队列
- **微任务队列 (Microtask Queue)**：存放微任务的队列（Promise 回调、MutationObserver 等）
- **Web APIs**：浏览器提供的异步 API（setTimeout, fetch, DOM 事件等）

### 2. 执行流程

```
1. 执行调用栈中的同步代码
2. 清空微任务队列（全部执行）
3. 执行任务队列中的一个宏任务
4. 再次清空微任务队列
5. 重复步骤 3-4
```

### 3. 宏任务 vs 微任务

| 类型 | 示例 | 特点 |
|------|------|------|
| **宏任务 (Macrotask)** | setTimeout, setInterval, I/O, UI 渲染 | 每次执行一个 |
| **微任务 (Microtask)** | Promise.then/catch/finally, MutationObserver, queueMicrotask | 清空队列 |

### 4. 经典面试题解析

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

// 输出顺序：1 -> 4 -> 3 -> 2
// 解析：
// 1. console.log(1) -> 调用栈 -> 输出 1
// 2. setTimeout 交给 Web API
// 3. Promise.then 进入微任务队列
// 4. console.log(4) -> 调用栈 -> 输出 4
// 5. 清空微任务队列 -> 输出 3
// 6. 执行宏任务 -> 输出 2
```

---

## 💻 代码实践

### 练习 1：同步与异步执行顺序

```javascript
// 04-browser-principles/02-event-loop/
// 文件：event-loop-basics.js

console.log('=== 同步代码开始 ===');

console.log('1. 同步 - 第一');

setTimeout(() => {
  console.log('2. 宏任务 - setTimeout(0)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. 微任务 - Promise.then');
});

setTimeout(() => {
  console.log('4. 宏任务 - 第二个 setTimeout');
  Promise.resolve().then(() => {
    console.log('5. 微任务 - 嵌套 Promise');
  });
}, 0);

console.log('6. 同步 - 最后');

console.log('=== 同步代码结束 ===');
// 预期输出：1 -> 6 -> 3 -> 2 -> 4 -> 5
```

### 练习 2：async/await 与 Promise

```javascript
// 04-browser-principles/02-event-loop/
// 文件：async-await-order.js

async function test() {
  console.log('1. 函数开始');
  
  console.log('2. await 之前');
  
  await Promise.resolve().then(() => {
    console.log('3. 微任务 1');
  });
  
  console.log('4. await 之后');
  
  setTimeout(() => {
    console.log('5. 宏任务 setTimeout');
  }, 0);
  
  console.log('6. 同步代码结束');
}

test();

// 预期输出：1 -> 2 -> 4 -> 6 -> 3 -> 5
```

---

## 🔍 深入理解

### 为什么需要 Event Loop？

JavaScript 是单线程语言，所有代码都在主线程上执行。如果同步执行异步操作，会阻塞 UI 渲染，导致页面卡顿。Event Loop 让我们可以编写异步代码而不阻塞主线程。

### 微任务优先于宏任务的原因

微任务（如 Promise 回调）通常与当前执行的代码有更紧密的关联，需要尽快执行以保持状态同步。例如：
- `Promise.then` 需要尽快执行以响应 Promise 的状态变化
- `async` 函数中的 `await` 依赖于微任务队列

---

## 💡 心得感悟

今天学习了 Event Loop，这是 JavaScript 最核心的��步机制之一。之前在使用 `setTimeout` 和 `fetch` 时只知道"它们是异步的"，但并不清楚底层原理。

通过今天的学习，我理解了几个关键点：
1. **为什么 Promise.then 比 setTimeout 先执行** - 微任务队列优先级高于宏任务队列
2. **async/await 实际上是基于 Promise 和微任务实现的**
3. **浏览器的渲染时机** - 宏任务之间可能会触发 UI 重绘

这对后续学习 Vue 3 和 React 的响应式系统很重要，因为它们都依赖于异步更新机制。

---

## ❓ 问题与反思

- **问题**：微任务队列是否会无限增长？性能如何？
- **后续需要加强**：结合 Vue 3 响应式原理，理解 nextTick 机制

---

## 🔜 明日计划

- Day 3: HTTP/HTTPS 协议
- 学习 HTTP 状态码、请求方法、CORS
- 练习：使用 fetch 发送请求并处理响应

---

**学习状态**：✅ 已完成  
**时间**：9:00 AM - 11:00 AM