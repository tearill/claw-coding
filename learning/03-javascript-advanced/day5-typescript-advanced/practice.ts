// TypeScript 进阶 - 泛型约束与模块化
// Week 3 Day 5 - 2026-03-28

// ==================== 1. 泛型约束 ====================

// 基础泛型函数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "夜墨", age: 3, hobby: "coding" };

// keyof 操作符：获取对象的所有键组成的联合类型
type PersonKeys = keyof person; // "name" | "age" | "hobby"

// K extends keyof T 确保 K 必须是 T 的键
console.log(getProperty(person, "name")); // "夜墨"
console.log(getProperty(person, "age")); // 3

// ==================== 2. 泛型类 ====================

class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  getAll(): T[] {
    return [...this.items];
  }
}

const stringStorage = new Storage<string>();
stringStorage.add("hello");
stringStorage.add("world");
console.log(stringStorage.getAll()); // ["hello", "world"]

const numberStorage = new Storage<number>();
numberStorage.add(100);
numberStorage.add(200);

// ==================== 3. 映射类型 ====================

// 将所有属性变为可选
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 将所有属性变为只读
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;

// 实际使用
const user: ReadonlyUser = {
  id: 1,
  name: "夜墨",
  email: "night@cat.dev"
};
// user.name = "修改"; // 错误：只读

// ==================== 4. 条件类型 ====================

// 基本形式：T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// 提取数组元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Elem = ArrayElement<string[]>; // string
type Elem2 = ArrayElement<number[]>; // number

// ==================== 5. 模块化 ====================

// ES Module (ESM) - 推荐
// export.ts
export interface Config {
  apiUrl: string;
  timeout: number;
}

export function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}

export default class ApiClient {
  // 默认导出
}

// import.ts
import { Config, fetchData } from './export.js';
import ApiClient from './export.js';

// ==================== 6. 命名空间 vs 模块 ====================

// 命名空间（旧的写法，现在不推荐）
namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
console.log(Utils.formatDate(new Date()));

// 现代开发推荐使用 ES Module

// ==================== 7. 泛型练习题 ====================

// 练习1：实现一个通用的 pick 函数
function myPick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    result[key] = obj[key];
  });
  return result;
}

const picked = myPick(person, ["name", "age"]);
console.log("Picked:", picked);

// 练习2：实现一个元组转联合类型
type TupleToUnion<T extends any[]> = T[number];

type Union = TupleToUnion<["a", "b", "c"]>; // "a" | "b" | "c"

// 练习3：实现 DeepPartial（深度可选）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedUser {
  profile: {
    name: string;
    address: {
      city: string;
    };
  };
}

type DeepPartialUser = DeepPartial<NestedUser>;
// 结果：profile 下的所有属性都变成可选

console.log("泛型约束与映射类型练习完成！");