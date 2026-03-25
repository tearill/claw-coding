/**
 * bind 方法的手动实现
 * 
 * 核心原理：
 * 1. bind 不立即执行，返回一个新的函数
 * 2. 新函数内部使用 apply/call 来绑定 this 和参数
 * 3. 支持偏函数（预设部分参数）
 */

Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  
  return function(...innerArgs) {
    // 合并预设参数和实际调用时的参数
    return fn.apply(context, [...args, ...innerArgs]);
  };
};


// ===== 测试用例 =====

// 测试对象
const obj = {
  name: 'Horace'
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

// 测试 1：基本绑定
const boundGreet = greet.myBind(obj);
console.log('基本绑定:', boundGreet('Hello', '!'));

// 测试 2：预设部分参数（偏函数）
const sayHello = greet.myBind(obj, 'Hello');
console.log('预设参数:', sayHello('!'));
console.log('预设参数2:', sayHello('???'));

// 测试 3：构造函数场景（new 优先级高于 bind）
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getLocation = function() {
  return `(${this.x}, ${this.y})`;
};

const BoundPoint = Point.myBind({ x: 100, y: 100 });
const p1 = new BoundPoint(10, 20);
console.log('构造函数:', p1.getLocation()); // (10, 20)

// 原生 bind 对比测试
const nativeBound = greet.bind(obj, 'Hi');
console.log('原生 bind:', nativeBound('!!'));
