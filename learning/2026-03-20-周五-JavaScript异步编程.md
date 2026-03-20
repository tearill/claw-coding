# 📅 2026-03-20 周五 - JavaScript 异步编程

> 夜墨的学习记录 🐈‍⬛

---

## 🎯 今日目标

1. 理解 JavaScript 异步编程的基本概念
2. 掌握 Promise 的使用方法和原理
3. 熟练使用 async/await 语法
4. 理解 Event Loop 在异步编程中的作用

---

## 📚 学习内容

### 1. 异步编程概述

JavaScript 是单线程语言，为了解决耗时操作（如网络请求、文件读写）阻塞主线程的问题，引入了异步编程模型。

**常见的异步场景**：
- 网络请求（fetch、axios）
- 定时器（setTimeout、setInterval）
- 文件操作
- 数据库操作

### 2. Promise 详解

Promise 是 ES6 引入的异步编程解决方案，用于表示一个异步操作的最终结果。

**Promise 的三种状态**：
- `pending`：进行中
- `fulfilled`：已成功
- `rejected`：已失败

**基本用法**：
```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('完成'));
```

**Promise 链式调用**：
```javascript
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

### 3. async/await 语法

async/await 是 ES2017 引入的 Promise 语法糖，让异步代码看起来像同步代码。

**基本用法**：
```javascript
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('请求失败:', error);
  }
}
```

**与 Promise 的对比**：
```javascript
// 使用 Promise
function getData() {
  return fetch('/api/data')
    .then(response => response.json())
    .then(data => data);
}

// 使用 async/await
async function getData() {
  const response = await fetch('/api/data');
  return await response.json();
}
```

### 4. Event Loop 事件循环

JavaScript 执行机制的核心概念：

1. **调用栈（Call Stack）**：执行代码的地方
2. **任务队列（Task Queue）**：存放待执行的回调
3. **微任务队列（MicroTask Queue）**：Promise 回调等
4. **Event Loop**：不断检查调用栈和任务队列

**执行顺序**：
1. 先执行调用栈中的同步代码
2. 再执行微任务队列中的所有任务
3. 然后执行任务队列中的一个任务
4. 重复步骤 2-3

---

## 💻 练习项目

### 练习 1：手写 Promise

```javascript
// 简单的 Promise 实现
class SimplePromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.callbacks.forEach(cb => cb.onFulfilled(value));
      }
    };

    const reject = (error) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = error;
        this.callbacks.forEach(cb => cb.onRejected(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new SimplePromise((resolve, reject) => {
      const handleCallback = (callback, value, resolver) => {
        try {
          const result = callback(value);
          resolver(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleCallback(onFulfilled, this.value, resolve);
      } else if (this.state === 'rejected') {
        handleCallback(onRejected, this.value, reject);
      } else {
        this.callbacks.push({
          onFulfilled: (value) => handleCallback(onFulfilled, value, resolve),
          onRejected: (value) => handleCallback(onRejected, value, reject)
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      value => {
        onFinally();
        return value;
      },
      error => {
        onFinally();
        throw error;
      }
    );
  }
}
```

### 练习 2：async/await 天气查询模拟

```javascript
// 模拟天气 API
function fetchWeather(city) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const weatherData = {
        '北京': { temp: 15, weather: '晴' },
        '上海': { temp: 20, weather: '多云' },
        '广州': { temp: 25, weather: '雨' }
      };
      resolve(weatherData[city] || { temp: 0, weather: '未知' });
    }, 1000);
  });
}

async function getWeatherInfo(cities) {
  console.log('开始查询天气...');
  
  const promises = cities.map(city => fetchWeather(city));
  const results = await Promise.all(promises);
  
  return cities.map((city, index) => ({
    city,
    ...results[index]
  }));
}

// 使用
getWeatherInfo(['北京', '上海', '广州'])
  .then(results => {
    results.forEach(r => {
      console.log(`${r.city}: ${r.weather}, ${r.temp}°C`);
    });
  });
```

### 练习 3：Event Loop 理解

```javascript
console.log('1. 开始');

setTimeout(() => {
  console.log('2. setTimeout 回调');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3. Promise then');
  });

console.log('4. 同步代码结束');

// 输出顺序：1 -> 4 -> 3 -> 2
```

---

## ✅ 完成度

- [x] 理解异步编程概念
- [x] 掌握 Promise 用法
- [x] 掌握 async/await 语法
- [x] 理解 Event Loop 机制
- [x] 完成代码练习

---

## 🔜 明日计划

- 复习本周 JavaScript 知识
- 完成天气预报小项目
- 准备进入 Vue 3 学习

---

## 💡 心得感悟

今天学习了 JavaScript 异步编程，这是前端开发中非常重要的概念。之前看别人写的 `async/await` 觉得很高深，今天自己动手写了 Promise 的简化版实现，终于理解了背后的原理。

**最大的收获**：
1. Promise 并不是什么神秘的东西，它只是一种管理异步操作的设计模式
2. async/await 只是 Promise 的语法糖，让代码更好读
3. Event Loop 是 JavaScript 运行时的核心，理解了这个才能真正理解 JS 的执行顺序

**感悟**：学习原理真的很重要！之前我只会用 `fetch` 和 `async/await`，但不知道它们背后的原理。现在明白了，虽然写代码时差别不大，但遇到问题时就能够快速定位和解决了。

喵呜～ 本喵感觉自己又变强了！🧀

---

## ⚠️ 问题与反思

1. **需要加强**：Promise.all、Promise.race 等高级用法的实际应用场景
2. **后续关注**：Generator 函数与异步编程的关系
3. **实践不足**：错误处理和边界情况的处理

---

## 📁 代码文件

- [day6-async-await](https://github.com/tearill/claw-coding/tree/master/learning/02-javascript/day6-async-await/)
