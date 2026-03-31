/**
 * async/await 执行顺序练习
 * 理解 async 函数中的 await 如何与 Promise 队列交互
 * 
 * 运行方式：node async-await-order.js
 */

async function test() {
  console.log('1. 函数开始');
  
  console.log('2. await 之前');
  
  // await 会暂停函数执行，等待 Promise resolve
  await Promise.resolve().then(() => {
    console.log('3. 微任务 - Promise.then');
  });
  
  console.log('4. await 之后 - 恢复执行');
  
  setTimeout(() => {
    console.log('5. 宏任务 setTimeout - 在 await 之后的宏任务');
  }, 0);
  
  console.log('6. 同步代码结束');
}

// 执行测试
test();

// 预期输出顺序：
// 1. 函数开始
// 2. await 之前
// 3. 微任务 - Promise.then (微任务优先)
// 4. await 之后 - 恢复执行
// 6. 同步代码结束
// 5. 宏任务 setTimeout

console.log('===== 主流程 =====');

// ===== 更复杂的例子 =====
async function complexOrder() {
  console.log('\n--- 复杂顺序测试 ---');
  
  // 同步
  console.log('A. 同步 A');
  
  // 宏任务
  setTimeout(() => console.log('B. 宏任务 setTimeout'), 0);
  
  // 微任务
  Promise.resolve().then(() => console.log('C. 微任务 Promise 1'));
  
  // await
  await Promise.resolve().then(() => console.log('D. 微任务 await'));
  
  // await 之后的同步
  console.log('E. 同步 E - await 之后');
  
  // 另一个宏任务
  setTimeout(() => {
    console.log('F. 宏任务 setTimeout 2');
    Promise.resolve().then(() => console.log('G. 微任务 嵌套'));
  }, 0);
  
  console.log('H. 同步 H - 函数结束');
}

complexOrder();

// 预期输出顺序：
// A. 同步 A
// H. 同步 H - 函数结束
// C. 微任务 Promise 1
// D. 微任务 await
// E. 同步 E - await 之后
// B. 宏任务 setTimeout
// F. 宏任务 setTimeout 2
// G. 微任务 嵌套