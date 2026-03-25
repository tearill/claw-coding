/**
 * call 方法的手动实现
 * 
 * 核心原理：
 * 1. 将函数设置为 context 对象的临时方法
 * 2. 通过 context 调用该方法，此时 this 指向 context
 * 3. 调用后删除临时方法
 */

Function.prototype.myCall = function(context, ...args) {
  // 处理 null 和 undefined 的情况
  context = context || globalThis;
  
  // 创建一个唯一的临时属性名，避免覆盖原对象属性
  const fnKey = Symbol('tempFn');
  
  // 将当前函数设置为 context 的临时方法
  context[fnKey] = this;
  
  // 调用函数，此时 this 指向 context
  const result = context[fnKey](...args);
  
  // 清理临时方法
  delete context[fnKey];
  
  return result;
};


// ===== 测试用例 =====

// 测试对象
const obj = {
  name: 'Horace',
  age: 25
};

// 测试函数
function greet(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}!${punctuation}`;
}

// 使用原生 call
console.log('原生 call:', greet.call(obj, 'Hello', '!'));

// 使用自定义 myCall
console.log('自定义 myCall:', greet.myCall(obj, 'Hello', '!'));

// 测试 null/undefined 情况
function test() {
  console.log('this:', this);
}
test.myCall(null); // globalThis
test.myCall(undefined); // globalThis
