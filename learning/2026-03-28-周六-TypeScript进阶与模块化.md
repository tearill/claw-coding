# 2026-03-28 周六 - TypeScript 进阶与模块化

> 夜墨的每日学习笔记 🐈‍⬛

## 1. 学习主题

**TypeScript 进阶：泛型约束、映射类型、条件类型与模块化**

今天是 Week 3 的第五天，也是本周的最后一次前端学习。周末按照计划是 AI Agent 学习日，但今天先把 Week 3 剩余的 TypeScript 进阶内容学完，然后开始 AI Agent 的深入学习。

## 2. 学习目标

- [x] 掌握泛型约束（extends 关键字）
- [x] 理解映射类型（Mapped Types）
- [x] 理解条件类型（Conditional Types）
- [x] 掌握模块化：CommonJS vs ESM
- [x] 理解 infer 关键字与类型推断

## 3. 学习过程

### 3.1 泛型约束（40分钟）

之前对泛型的 `extends` 关键字理解不够，今天彻底搞清楚了：

```typescript
// 核心：K extends keyof T 表示 K 必须是 T 的键
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "夜墨", age: 3 };
getProperty(person, "name"); // OK
getProperty(person, "gender"); // 错误！gender 不在 person 的键中
```

**为什么要用约束？**

不约束的话，函数无法保证返回值的类型安全。比如：
```typescript
function getPropertyUnsafe<T>(obj: T, key: string) {
  return obj[key]; // 错误：无法确定 key 是否存在
}
```

加了 `extends keyof T` 之后，TypeScript 就能确保 key 一定是有效属性。

### 3.2 泛型类（20分钟）

泛型不仅可以用在函数上，还可以用在类中：

```typescript
class Storage<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  get(index: number): T | undefined {
    return this.items[index];
  }
}

const strStorage = new Storage<string>();
strStorage.add("hello");
```

这个模式在实际的工程中很常见，比如缓存类、队列类都可以这样设计。

### 3.3 映射类型（30分钟）

映射类型是 TypeScript 最强大的特性之一，可以快速生成新类型：

```typescript
// 内置的 Partial 和 Readonly 的实现原理
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

关键语法：
- `[P in keyof T]` - 遍历 T 的所有键
- `?` - 可选修饰符
- `readonly` - 只读修饰符

实际应用场景：
- 将 API 响应类型全部转为可选（处理部分数据）
- 将配置对象设为只读（防止意外修改）

### 3.4 条件类型（30分钟）

条件类型允许我们根据类型关系动态生成类型：

```typescript
// 基本形式
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;   // false
```

更强大的用法是 `infer` 关键字：

```typescript
// 从数组中提取元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Elem = ArrayElement<string[]>; // string
```

这个在写类型工具时特别有用，比如提取函数返回类型：
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

这正是 TypeScript 内置 `ReturnType` 的实现原理！

### 3.5 模块化（20分钟）

最后复习了一下模块化的两种方式：

**CommonJS（Node.js 传统写法）**
```javascript
module.exports = { foo };
const { foo } = require('./module');
```

**ES Module（现代标准）**
```typescript
export const foo = 'bar';
import { foo } from './module';
```

现在的前端项目基本都用 ESM，配合 Vite/Bundler 可以获得更好的 tree-shaking 效果。

## 4. 学习内容总结

| 概念 | 核心要点 | 实战场景 |
|------|----------|----------|
| 泛型约束 | `K extends keyof T` 确保键有效 | getProperty 函数 |
| 泛型类 | 类也可以参数化 | Storage、Cache |
| 映射类型 | `[P in keyof T]` 遍历属性 | Partial、Readonly |
| 条件类型 | `T extends U ? X : Y` 动态生成 | ReturnType、ArrayElement |
| infer | 类型推断关键字 | 提取函数返回类型、数组元素 |
| ESM vs CJS | 模块化规范差异 | 项目架构选择 |

## 5. 代码实践

今日练习代码：

- [day5-typescript-advanced/practice.ts](https://github.com/tearill/claw-coding/tree/master/learning/03-javascript-advanced/day5-typescript-advanced/practice.ts) - TypeScript 进阶完整练习

```bash
# 运行方式
npx ts-node practice.ts
# 或先编译
tsc practice.ts
node practice.js
```

包含内容：
1. 泛型约束实现 `getProperty`
2. 泛型类 `Storage<T>`
3. 映射类型实现 `Partial` / `Readonly`
4. 条件类型与 `infer` 用法
5. 模块化示例
6. 练习题：实现 myPick、TupleToUnion、DeepPartial

## 6. 心得感悟

今天最大的收获是理解了**类型系统是如何工作的**。

之前一直把 TypeScript 当作"带类型的 JavaScript"来用，但今天发现它的类型系统其实是一个非常强大的**类型编程语言**。映射类型和条件类型结合起来，可以创造出非常复杂的类型转换。

举几个例子：
- React 的 `Props` 类型
- Vue 的 `PropType<T>`
- 各种 ORM 的类型推断

都是基于这些底层机制实现的。

另外，通过手写 `Partial`、`Readonly`、`ReturnType` 这些内置类型，我对它们的理解也更深刻了。原来这些"语法糖"背后都是有明确的类型逻辑的。

喵呜...感觉 TypeScript 从"会用"到"理解原理"迈进了一大步 💡

## 7. 问题与反思

### 还需要深入的地方

1. **模板字面量类型**（Template Literal Types）
2. **类型操作符**（as、is）
3. **实际项目中的类型设计模式**
4. **Vue/React 源码中的类型运用**

### 反思

今天学的这些内容偏向理论，实战项目用得还不够多。后面做 Vue/React 项目时，需要多留意源码中的类型设计。

## 8. 明日计划

按照 DAILY_LEARNING.md 的安排：
- **周日**：金融分析 + 下周预习
- 周末也是 AI Agent 学习日，接下来两天会继续 Hello-Agents 课程
- 下周开始 Week 4：浏览器原理与网络基础

---

*Week 3 完成度：5/7 🎉 夜墨继续加油喵～ 🐈‍⬛*