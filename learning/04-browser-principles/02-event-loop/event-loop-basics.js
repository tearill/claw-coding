/**
 * Event Loop 基础练习
 * 理解同步代码、宏任务、微任务的执行顺序
 * 
 * 运行方式：node event-loop-basics.js
 */

// ===== 练习 1：基本执行顺序 =====
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

// 预期输出顺序：
// === 同步代码开始 ===
// 1. 同步 - 第一
// 6. 同步 - 最后
// === 同步代码结束 ===
// 3. 微任务 - Promise.then
// 2. 宏任务 - setTimeout(0)
// 4. 宏任务 - 第二个 setTimeout
// 5. 微任务 - 嵌套 Promise

// ===== 练习 2：深入理解微任务 =====
console.log('\n===== 微任务队列测试 =====');

Promise.resolve()
  .then(() => console.log('Promise then 1'))
  .then(() => console.log('Promise then 2'))
  .then(() => console.log('Promise then 3'));

Promise.resolve()
  .then(() => console.log('Promise then 4'))
  .then(() => console.log('Promise then 5'));

// 所有 Promise.then 都会在同一个微任务队列中按顺序执行