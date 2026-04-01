/**
 * 浏览器渲染与 Event Loop 综合练习
 * 学习目标：理解浏览器渲染过程与 JavaScript 事件循环机制
 */

// 练习1：理解 Event Loop 执行顺序
function eventLoopPractice() {
  console.log('=== Event Loop 练习 ===');
  
  console.log('1. 同步 - 第一行');
  
  setTimeout(() => {
    console.log('2. 宏任务 - setTimeout(0)');
  }, 0);
  
  Promise.resolve().then(() => {
    console.log('3. 微任务 - Promise.then');
  });
  
  queueMicrotask(() => {
    console.log('4. 微任务 - queueMicrotask');
  });
  
  console.log('5. 同步 - 最后一行');
  
  // 预期输出顺序：1 -> 5 -> 3 -> 4 -> 2
  // 原因：同步代码 → 微任务队列清空 → 宏任务队列执行
}

// 练习2：async/await 执行顺序
async function asyncAwaitPractice() {
  console.log('\n=== async/await 练习 ===');
  
  console.log('1. async 函数开始');
  
  await Promise.resolve().then(() => {
    console.log('2. 微任务 - await 后的 Promise');
  });
  
  console.log('3. await 之后的同步代码');
  
  setTimeout(() => {
    console.log('4. 宏任务 - setTimeout');
  }, 0);
  
  console.log('5. async 函数结束');
}

// 练习3：浏览器渲染时机
function renderingTiming() {
  console.log('\n=== 渲染时机练习 ===');
  
  // 同步代码
  console.log('1. 同步更新 DOM');
  
  // 微任务中更新 DOM
  Promise.resolve().then(() => {
    console.log('2. 微任务中更新 DOM');
  });
  
  // 宏任务中更新 DOM
  setTimeout(() => {
    console.log('3. 宏任务中更新 DOM');
  }, 0);
  
  // requestAnimationFrame
  requestAnimationFrame(() => {
    console.log('4. requestAnimationFrame - 渲染前执行');
  });
  
  console.log('5. 同步代码结束');
}

// 练习4：模拟重排与重绘
class LayoutPractice {
  constructor() {
    this.element = null;
  }
  
  // 模拟触发重排的操作
  triggerReflow() {
    // 读取布局属性会触发重排
    const width = this.element?.offsetWidth || 0;
    const height = this.element?.offsetHeight || 0;
    const scrollTop = this.element?.scrollTop || 0;
    
    console.log(`布局属性: width=${width}, height=${height}, scrollTop=${scrollTop}`);
    return { width, height, scrollTop };
  }
  
  // 模拟触发重绘的操作
  triggerRepaint() {
    if (!this.element) return;
    
    // 修改可见属性触发重绘
    this.element.style.backgroundColor = 'red';
    this.element.style.color = 'white';
    console.log('触发重绘 - 修改背景色和文字颜色');
  }
  
  // 使用 transform 优化性能
  transformOptimization() {
    if (!this.element) return;
    
    // transform 只触发合成，不重排不重绘
    this.element.style.transform = 'translateX(100px)';
    this.element.style.opacity = '0.5';
    console.log('使用 transform 优化 - 只触发合成');
  }
}

// 练习5：综合题 - 预测输出顺序
function comprehensiveExercise() {
  console.log('\n=== 综合练习：预测输出顺序 ===');
  
  console.log('1');
  
  setTimeout(() => console.log('2'), 0);
  
  Promise.resolve().then(() => {
    console.log('3');
    setTimeout(() => console.log('4'), 0);
  });
  
  Promise.resolve().then(() => console.log('5'));
  
  setTimeout(() => console.log('6'), 0);
  
  console.log('7');
  
  // 预期输出：1 -> 7 -> 3 -> 5 -> 2 -> 4 -> 6
  // 解析：
  // 1. 同步：1 -> 7
  // 2. 第一轮微任务：3 -> 5
  // 3. 第一轮宏任务：2 -> 6
  // 4. 第二轮微任务（来自 setTimeout 4）：4
}

// 运行所有练习
if (typeof window !== 'undefined' || typeof global !== 'undefined') {
  eventLoopPractice();
  
  // async 函数需要在微任务中观察
  asyncAwaitPractice().then(() => {
    renderingTiming();
    comprehensiveExercise();
    
    console.log('\n=== 所有练习完成 ===');
  });
}

module.exports = {
  eventLoopPractice,
  asyncAwaitPractice,
  renderingTiming,
  LayoutPractice,
  comprehensiveExercise
};
