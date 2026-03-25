/**
 * this 指向的实际应用场景练习
 */

// ===== 场景 1：类数组转数组 =====

function argsToArray() {
  // 方法1：Array.prototype.slice.call
  const arr1 = Array.prototype.slice.call(arguments);
  
  // 方法2：Array.from
  const arr2 = Array.from(arguments);
  
  // 方法3：扩展运算符
  const arr3 = [...arguments];
  
  return { arr1, arr2, arr3 };
}

console.log('===== 类数组转数组 =====');
const result = argsToArray(1, 2, 3, 4, 5);
console.log('arr1:', result.arr1);
console.log('arr2:', result.arr2);
console.log('arr3:', result.arr3);


// ===== 场景 2：数组方法借用 =====

console.log('\n===== 数组方法借用 =====');

const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

// 借用 Array.prototype.map
const mapped = Array.prototype.map.call(arrayLike, (item) => item.toUpperCase());
console.log('借用 map:', mapped);

// 借用 Array.prototype.reduce
const sum = Array.prototype.reduce.call('12345', (acc, cur) => acc + Number(cur), 0);
console.log('字符串数字求和:', sum);


// ===== 场景 3：继承中的 this =====

console.log('\n===== 继承中的 this =====');

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  // 借用构造函数
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return `${this.name} barks`;
};

const dog = new Dog('Horace', 'Cat');
console.log('Dog name:', dog.name);
console.log('Dog breed:', dog.breed);
console.log('Dog speak:', dog.speak());


// ===== 场景 4：箭头函数的 this =====

console.log('\n===== 箭头函数 this =====');

const person = {
  name: 'Horace',
  
  // 普通函数，this 指向调用者
  greet: function() {
    console.log('普通函数 this:', this.name);
  },
  
  // 箭头函数，this 指向定义时的外层作用域
  greetArrow: () => {
    console.log('箭头函数 this:', this.name);
  },
  
  // 箭头函数在定时器中的优势
  delayedGreet: function() {
    setTimeout(() => {
      console.log('定时器中箭头函数 this:', this.name);
    }, 100);
  }
};

person.greet(); // Horace
person.greetArrow(); // undefined (指向全局)
person.delayedGreet(); // Horace


// ===== 场景 5：回调函数中的 this 处理 =====

console.log('\n===== 回调函数 this 处理 =====');

class Counter {
  constructor() {
    this.count = 0;
  }
  
  // 方法1：使用箭头函数
  incrementArrow = () => {
    this.count++;
    console.log('箭头函数 this:', this.count);
  };
  
  // 方法2：在构造函数中 bind
  incrementBind() {
    this.count++;
    console.log('bind this:', this.count);
  }
}

const counter = new Counter();

// 作为回调传递
const cb1 = counter.incrementArrow;
const cb2 = counter.incrementBind.bind(counter);

cb1(); // 1
cb2(); // 1
