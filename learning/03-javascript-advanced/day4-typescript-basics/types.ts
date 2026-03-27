# TypeScript 基础类型

> TypeScript 是 JavaScript 的超集，它添加了类型系统和对 ES6+ 特性的支持。

## 1. 基础类型

```typescript
// 原始类型
let isDone: boolean = false;
let age: number = 25;
let name: string = "Horace";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// any - 任意类型
let notSure: any = 4;
notSure = "maybe a string";
notSure = true;

// void - 没有返回值
function warnUser(): void {
  console.log("Warning!");
}

// null 和 undefined
let u: undefined = undefined;
let n: null = null;
```

## 2. 接口 vs 类型别名

```typescript
// 接口
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// 类型别名
type PersonType = {
  name: string;
  age: number;
  greet(): void;
};

// 接口可以合并，类型别名不行
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}
// Animal 现有 name 和 age 两个属性
```

## 3. 联合类型与交叉类型

```typescript
// 联合类型 - 或
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 123;

// 交叉类型 - 且
type Person = { name: string };
type Worker = { workerId: number };
type Employee = Person & Worker;
// Employee = { name: string, workerId: number }
```

## 4. 泛型基础

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface Container<T> {
  value: T;
  getValue(): T;
}

// 泛型类
class Box<T> {
  private content: T;
  
  constructor(content: T) {
    this.content = content;
  }
  
  getContent(): T {
    return this.content;
  }
}
```

## 5. 泛型工具类型

```typescript
// Partial - 所有属性可选
interface User {
  id: number;
  name: string;
}
type PartialUser = Partial<User>;
// { id?: number; name?: string; }

// Required - 所有属性必需
type RequiredUser = Required<PartialUser>;

// Pick - 选择属性
type PickedUser = Pick<User, "id" | "name">;

// Omit - 排除属性
type OmitUser = Omit<User, "id">;

// Record - 快速创建对象类型
type UserMap = Record<string, User>;
```

## 6. 类型守卫

```typescript
// typeof 守卫
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  return padding + value;
}

// instanceof 守卫
class Dog {
  bark() { console.log("Woof!"); }
}
class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 自定义类型守卫
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```
