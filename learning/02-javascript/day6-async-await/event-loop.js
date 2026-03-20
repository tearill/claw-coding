/**
 * Event Loop 事件循环理解
 * 理解 JavaScript 执行机制
 */

console.log('========== Event Loop 测试 ==========\n');

// 测试 1: 基础顺序
console.log('--- 测试 1: 基础顺序 ---');
console.log('1. 同步代码 1');
console.log('2. 同步代码 2');
console.log('3. 同步代码 3');

// 测试 2: setTimeout
console.log('\n--- 测试 2: setTimeout ---');
console.log('1. 开始');
setTimeout(() => {
  console.log('2. setTimeout 回调');
}, 0);
console.log('3. 同步代码结束');
// 输出: 1 -> 3 -> 2

// 测试 3: Promise.then (微任务)
console.log('\n--- 测试 3: Promise.then (微任务) ---');
console.log('1. 开始');
Promise.resolve().then(() => {
  console.log('2. Promise then 回调');
});
console.log('3. 同步代码结束');
// 输出: 1 -> 3 -> 2

// 测试 4: 微任务 vs 宏任务
console.log('\n--- 测试 4: 微任务 vs 宏任务 ---');
console.log('1. 开始');
setTimeout(() => {
  console.log('2. setTimeout (宏任务)');
}, 0);
Promise.resolve().then(() => {
  console.log('3. Promise then (微任务)');
});
console.log('4. 同步代码结束');
// 输出: 1 -> 4 -> 3 -> 2

// 测试 5: 多个微任务
console.log('\n--- 测试 5: 多个微任务 ---');
console.log('1. 开始');
Promise.resolve()
  .then(() => console.log('2. Promise 1'));
Promise.resolve()
  .then(() => console.log('3. Promise 2'));
Promise.resolve()
  .then(() => {
    console.log('4. Promise 3');
    return Promise.resolve();
  })
  .then(() => console.log('5. Promise 4'));
console.log('6. 同步代码结束');
// 输出: 1 -> 6 -> 2 -> 3 -> 4 -> 5

// 测试 6: async/await
console.log('\n--- 测试 6: async/await ---');
console.log('1. 开始');

async function asyncFunction() {
  console.log('2. async 函数开始');
  await Promise.resolve();
  console.log('3. await 之后');
}

asyncFunction();
console.log('4. 同步代码结束');
// 输出: 1 -> 2 -> 4 -> 3

// 测试 7: async/await 与 setTimeout
console.log('\n--- 测试 7: async/await 与 setTimeout ---');
console.log('1. 开始');

async function mixedFunction() {
  console.log('2. async 开始');
  
  setTimeout(() => {
    console.log('3. setTimeout 回调');
  }, 0);
  
  await Promise.resolve();
  console.log('4. await 之后');
}

mixedFunction();
console.log('5. 同步代码结束');
// 输出: 1 -> 2 -> 5 -> 4 -> 3

// 测试 8: process.nextTick (Node.js 特有)
console.log('\n--- 测试 8: process.nextTick ---');
// 注释掉，因为在浏览器中会报错
// console.log('1. 开始');
// process.nextTick(() => console.log('2. nextTick'));
// Promise.resolve().then(() => console.log('3. Promise'));
// console.log('4. 同步代码');
// 输出: 1 -> 4 -> 2 -> 3 (nextTick > Promise)

// 测试 9: 综合练习
console.log('\n--- 测试 9: 综合练习 ---');
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

new Promise((resolve) => {
  console.log('4');
  resolve();
}).then(() => console.log('5'));

console.log('6');

setTimeout(() => {
  console.log('7');
}, 0);

Promise.resolve().then(() => {
  console.log('8');
  setTimeout(() => console.log('9'), 0);
});

console.log('10');

// 完整输出: 1 -> 4 -> 6 -> 10 -> 5 -> 2 -> 3 -> 7 -> 8 -> 9

// 测试 10: 经典面试题
console.log('\n--- 测试 10: 经典面试题 ---');
console.log('1');

new Promise((resolve) => {
  console.log('2');
  resolve();
})
  .then(() => console.log('3'))
  .then(() => console.log('4'));

console.log('5');

setTimeout(() => {
  console.log('6');
  new Promise((resolve) => {
    console.log('7');
    resolve();
  }).then(() => console.log('8'));
}, 0);

setTimeout(() => {
  console.log('9');
}, 0);

console.log('10');

// 输出: 1 -> 2 -> 5 -> 10 -> 3 -> 4 -> 6 -> 7 -> 9 -> 8

console.log('\n========== Event Loop 测试完成 ==========');
console.log('\n💡 记住执行顺序:');
console.log('   1. 同步代码');
console.log('   2. 微任务 (Promise, async/await)');
console.log('   3. 宏任务 (setTimeout, setInterval, I/O)');
