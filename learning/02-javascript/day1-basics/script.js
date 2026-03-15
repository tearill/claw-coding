// JavaScript 基础练习 - Day 1
// 主题：变量、数据类型、运算符

// ========== 1. 变量声明 ==========
// var: 函数作用域，可重复声明（不推荐）
var oldWay = "旧方式";

// let: 块级作用域，可重新赋值
let count = 0;
count = 1; // 可以重新赋值

// const: 块级作用域，不可重新赋值（常量）
const PI = 3.14159;
// PI = 3.14; // 错误！不能重新赋值

// ========== 2. 数据类型 ==========
// 原始类型 (Primitive Types)
const stringType = "Hello World";    // 字符串
const numberType = 42;               // 数字
const booleanType = true;            // 布尔值
const nullType = null;               // 空值
const undefinedType = undefined;     // 未定义
const symbolType = Symbol("id");     // 符号
const bigIntType = 9007199254740991n; // 大整数

// 引用类型 (Reference Types)
const arrayType = [1, 2, 3];          // 数组
const objectType = { name: "夜墨" };  // 对象
const functionType = function() {};  // 函数

// ========== 3. typeof 操作符 ==========
console.log(typeof stringType);   // "string"
console.log(typeof numberType);   // "number"
console.log(typeof booleanType);  // "boolean"
console.log(typeof nullType);     // "object" (历史 bug)
console.log(typeof undefinedType); // "undefined"
console.log(typeof arrayType);    // "object"
console.log(typeof objectType);   // "object"
console.log(typeof functionType); // "function"

// ========== 4. 运算符 ==========
// 算术运算符
const a = 10, b = 3;
console.log(a + b);   // 13 加法
console.log(a - b);   // 7  减法
console.log(a * b);   // 30 乘法
console.log(a / b);   // 3.333... 除法
console.log(a % b);   // 1  取余
console.log(a ** b);  // 1000 幂运算

// 自增/自减
let x = 5;
console.log(x++); // 5 (先返回值，再+1)
console.log(++x); // 7 (先+1，再返回值)
console.log(x--); // 7
console.log(--x); // 5

// 比较运算符
console.log(5 == "5");   // true  (松散相等，自动转换类型)
console.log(5 === "5");  // false (严格相等，不转换类型)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// 逻辑运算符
console.log(true && false); // false 逻辑与
console.log(true || false); // true  逻辑或
console.log(!true);         // false 逻辑非

// 三元运算符
const age = 18;
const status = age >= 18 ? "成年" : "未成年";
console.log(status); // "成年"

// ========== 5. 类型转换 ==========
// 转为字符串
String(123);       // "123"
(123).toString();  // "123"
123 + "";          // "123"

// 转为数字
Number("123");     // 123
parseInt("123");   // 123
parseFloat("3.14"); // 3.14
+"123";            // 123

// 转为布尔值
Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("hello");  // true
!!123;             // true

// ========== 6. 字符串模板 ==========
const name = "夜墨";
const year = 2026;
const message = `你好，我是${name}！今年是${year}年。`;
console.log(message);

// ========== 7. 解构赋值 ==========
// 数组解构
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // "red"

// 对象解构
const user = { name: "蔡刚", age: 18 };
const { name: userName, age: userAge } = user;
console.log(userName); // "蔡刚"

// ========== 8. 练习：简易计算器函数 ==========
function calculator(a, b, operator) {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "不能除以0";
        case "%": return a % b;
        case "**": return a ** b;
        default: return "无效运算符";
    }
}

console.log(calculator(10, 3, "+"));  // 13
console.log(calculator(10, 3, "-"));  // 7
console.log(calculator(10, 3, "*"));  // 30
console.log(calculator(10, 3, "/"));  // 3.333...
console.log(calculator(10, 3, "%"));  // 1
console.log(calculator(10, 3, "**")); // 1000

console.log("✅ JavaScript 基础练习完成！");
