// ES6+ 新特性 - 实践代码
// 学习主题：Day 3: ES6+ 新特性

// 1. let/const 解构赋值
{
  // let 块级作用域
  let blockScoped = 'I am block scoped';
  // const 常量
  const PI = 3.14159;
  const arr = [1, 2, 3];
  
  // 解构赋值 - 数组
  const [first, second, third] = arr;
  console.log('数组解构:', first, second, third);
  
  // 解构赋值 - 对象
  const person = { name: 'Horace', age: 25, city: 'Beijing' };
  const { name, age } = person;
  console.log('对象解构:', name, age);
  
  // 默认值
  const [a = 10, b = 20] = [1];
  console.log('默认值:', a, b);
  
  // 剩余参数
  const [head, ...tail] = [1, 2, 3, 4];
  console.log('剩余参数:', head, tail);
}

// 2. 模板字符串
const name = 'Horace';
const age = 25;
const greeting = `Hello, my name is ${name}, I'm ${age} years old.`;
console.log('模板字符串:', greeting);

// 多行字符串
const multiLine = `
  This is
  a multi-line
  string
`;
console.log('多行字符串:', multiLine);

// 3. 箭头函数
const add = (a, b) => a + b;
const multiply = (a, b) => {
  return a * b;
};
console.log('箭头函数 add:', add(2, 3));
console.log('箭头函数 multiply:', multiply(2, 3));

// 箭头函数与 this
function Timer() {
  this.time = 0;
  setInterval(() => {
    this.time++;
    console.log('箭头函数 this:', this.time);
  }, 1000);
}
// new Timer(); // 取消注释测试

// 4. 展开运算符
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('数组展开:', combined);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log('对象展开:', obj2);

// 5. Promise 基础
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Promise resolved!');
  } else {
    reject('Promise rejected!');
  }
});

myPromise
  .then(result => console.log('Promise 结果:', result))
  .catch(error => console.error('Promise 错误:', error));

// 6. async/await
async function fetchData() {
  try {
    // 模拟异步操作
    const result = await new Promise(resolve => 
      setTimeout(() => resolve('Data fetched!'), 100)
    );
    console.log('async/await 结果:', result);
    return result;
  } catch (error) {
    console.error('async/await 错误:', error);
  }
}
fetchData();

// 7. 类 (class)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks: Woof!`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();

// 8. 模块化 (import/export)
// 注意：需要在 ESM 环境下运行
// export { add, multiply };
// import { add } from './module.js';

// 9. Symbol
const sym = Symbol('description');
const sym2 = Symbol('description');
console.log('Symbol:', sym === sym2); // false

const obj = {
  [sym]: 'value'
};
console.log('Symbol 作为属性:', obj[sym]);

// 10. 迭代器 (Iterator)
function createIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      }
      return { done: true };
    }
  };
}

const iterator = createIterator([1, 2, 3]);
console.log('迭代器:', iterator.next().value);
console.log('迭代器:', iterator.next().value);

// 11. 生成器 (Generator)
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log('生成器:', gen.next().value);
console.log('生成器:', gen.next().value);
console.log('生成器:', gen.next().value);
console.log('生成器 done:', gen.next().done);

// 12. 可选链 (?.)
const user = {
  profile: {
    name: 'Horace'
  }
};
console.log('可选链:', user?.profile?.name);
console.log('可选链 undefined:', user?.address?.city);

// 13. 空值合并 (??)
const value = null ?? 'default';
console.log('空值合并:', value);

const value2 = 0 ?? 'default';
console.log('空值合并 0:', value2); // 0，因为 null/undefined 才触发

console.log('=== ES6+ 新特性代码执行完成 ===');
