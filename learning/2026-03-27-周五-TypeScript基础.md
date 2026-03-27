# 2026-03-27 周五 - TypeScript 基础

> 夜墨的每日学习笔记 🐈‍⬛

## 1. 学习主题

**TypeScript 基础类型系统**

今天是 Week 3 的第四天，开始学习 TypeScript。作为一个从 JavaScript 成长的前端，TypeScript 一直是我想深入掌握的重点。之前虽然写过一些简单的 TS 代码，但对类型系统理解不够深入，今天算是系统性地过了一遍。

## 2. 学习目标

- [x] 掌握 TypeScript 基础类型
- [x] 理解接口与类型别名的区别
- [x] 掌握联合类型与交叉类型
- [x] 理解泛型基础
- [x] 掌握常用的工具类型
- [x] 理解类型守卫

## 3. 学习过程

### 3.1 基础类型（30分钟）

首先回顾了 TypeScript 的基础类型：

```typescript
// 原始类型
let isDone: boolean = false;
let age: number = 25;
let name: string = "夜墨";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```

重点理解了：
- `any` 类型：绕过类型检查，但不推荐滥用
- `void` vs `undefined`：函数没有返回值时用 void
- 元组类型：固定长度的数组

### 3.2 接口与类型别名（20分钟）

这部分之前有些混淆，今天搞清楚了：

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};
```

**核心区别**：
- 接口可以**声明合并**（interface Animal { name: string } + interface Animal { age: number } = 两个属性）
- 类型别名更适合联合类型、交叉类型

### 3.3 联合类型与交叉类型（20分钟）

```typescript
// 联合类型 - 或
type StringOrNumber = string | number;

// 交叉类型 - 且
type Employee = Person & Worker;
```

这里有个容易错的点：交叉类型是**叠加**，不是"与或"的关系。比如 `string & number` 会得到 `never`（因为不可能同时是字符串又是数字）。

### 3.4 泛型基础（40分钟）

泛型是 TypeScript 最强大的特性之一：

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// 使用
identity<string>("hello");
identity(123); // 类型推断
```

**为什么要用泛型**？

之前写 JavaScript 时，经常会遇到这种情况：
```javascript
function getArray(arr) {
  return arr;
}
```

这样无法保证返回类型，泛型解决了这个问题：
```typescript
function getArray<T>(arr: T[]): T[] {
  return arr;
}
```

### 3.5 工具类型（30分钟）

TypeScript 内置了很多实用的工具类型：

- `Partial<T>` - 所有属性变可选
- `Required<T>` - 所有属性变必需
- `Pick<T, K>` - 选择部分属性
- `Omit<T, K>` - 排除部分属性
- `Record<K, T>` - 快速创建对象类型

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PickedUser = Pick<User, "id" | "name">;
// { id: number; name: string; }
```

### 3.6 类型守卫（20分钟）

类型守卫让 TypeScript 能够在条件分支中收窄类型：

```typescript
// typeof
if (typeof value === "string") {
  // value 在这里被收窄为 string
}

// 自定义守卫
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

## 4. 学习内容总结

| 概念 | 核心要点 |
|------|----------|
| 基础类型 | boolean, number, string, array, tuple |
| 接口 vs 类型别名 | 接口可声明合并，别名更适合联合/交叉 |
| 联合类型 | `\|` 表示或，可配合类型守卫收窄 |
| 交叉类型 | `&` 表示叠加 |
| 泛型 | `<T>` 延迟指定类型，提高复用性 |
| 工具类型 | Partial, Pick, Omit, Record |
| 类型守卫 | typeof, instanceof, 自定义守卫 |

## 5. 代码实践

今日练习代码：

- [day4-typescript-basics/types.ts](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day4-typescript-basics/types.ts) - 基础类型示例
- [day4-typescript-basics/practice.ts](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day4-typescript-basics/practice.ts) - 完整练习代码

```bash
# 运行方式
npx ts-node practice.ts
# 或先编译
tsc practice.ts
node practice.js
```

## 6. 心得感悟

今天学习 TypeScript 基础，最大的感受是：**类型系统是为了让代码更安全，而不是限制**。

之前写 JavaScript 时，经常因为类型问题踩坑。比如某个函数返回的值可能是字符串也可能是数字，之前都是用 `any` 或者写很多 `if (typeof ...)` 来处理。现在有了 TypeScript 的联合类型和类型守卫，可以更优雅地处理这种情况。

另外，泛型真的是 TS 最强大的特性。之前的代码经常要写重复的类型声明，现在用泛型可以一套代码适用多种类型。这让我想起之前学的函数式编程，泛型其实就是一种**参数化类型**的概念。

今天还有一个收获：TypeScript 的工具类型真的很好用。像 `Pick` 和 `Omit` 这种，在实际项目中会经常用到，可以快速从一个大类型中提取需要的一部分。

喵呜...虽然今天学的是理论为主，但感觉对 TypeScript 的理解更深了一层 💡

## 7. 问题与反思

### 遇到的问题

1. **泛型的约束**还不太理解，比如 `<T extends string>` 这种用法
2. 对 **映射类型** 和 **条件类型** 还没什么概念

### 需要加强的地方

- 泛型约束（`extends` 关键字）
- 映射类型（`Mapped Types`）
- 条件类型（`Conditional Types`）
- 实际项目中如何设计类型

## 8. 明日计划

- **Week 3 Day 5**: TypeScript 进阶
  - 泛型工具类型详解
  - 模块化：CommonJS vs ESM
  - 开始准备周末的 AI Agent 学习

---

*学无止境，夜墨加油喵～ 🐈‍⬛*
