// TypeScript 基础类型练习

// ==================== 1. 基础类型 ====================

// 原始类型
const isDone: boolean = false;
const age: number = 25;
const userName: string = "Horace";
const numbers: number[] = [1, 2, 3, 4, 5];
const tuple: [string, number] = ["夜墨", 3];

// any 类型
let notSure: any = 4;
notSure = "maybe a string";
notSure = true;
console.log("[any] notSure:", notSure);

// void 类型
function logMessage(message: string): void {
  console.log("[void] Message:", message);
}
logMessage("喵～");

// ==================== 2. 接口 ====================

interface Person {
  name: string;
  age: number;
  email?: string; // 可选属性
}

const person1: Person = {
  name: "蔡刚",
  age: 25
};

const person2: Person = {
  name: "夜墨",
  age: 3,
  email: "cat@night.dev"
};

console.log("[interface] Person1:", person1);
console.log("[interface] Person2:", person2);

// ==================== 3. 类型别名 ====================

type ID = string | number;
type Status = "pending" | "success" | "error";

let userId: ID = "abc123";
userId = 123;

let status: Status = "pending";
console.log("[type alias] userId:", userId, "status:", status);

// ==================== 4. 联合类型 ====================

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("[union] ID is string:", id.toUpperCase());
  } else {
    console.log("[union] ID is number:", id.toFixed(2));
  }
}
printId("hello");
printId(123.456);

// ==================== 5. 交叉类型 ====================

type PersonType = {
  name: string;
  age: number;
};

type Worker = {
  workerId: number;
  department: string;
};

type Employee = PersonType & Worker;

const employee: Employee = {
  name: "Horace",
  age: 25,
  workerId: 1001,
  department: "Tech"
};

console.log("[intersection] Employee:", employee);

// ==================== 6. 泛型函数 ====================

function identity<T>(arg: T): T {
  console.log("[generic] Input:", arg, "Type:", typeof arg);
  return arg;
}

identity<string>("夜墨");
identity<number>(42);
identity<boolean>(true);

// 泛型推断
const result = identity("Auto inferred");
console.log("[generic] Inferred:", result);

// ==================== 7. 泛型接口 ====================

interface Container<T> {
  value: T;
  getValue(): T;
}

const stringContainer: Container<string> = {
  value: "Hello TypeScript",
  getValue() {
    return this.value;
  }
};

const numberContainer: Container<number> = {
  value: 2026,
  getValue() {
    return this.value;
  }
};

console.log("[generic interface] stringContainer:", stringContainer.getValue());
console.log("[generic interface] numberContainer:", numberContainer.getValue());

// ==================== 8. 泛型类 ====================

class Box<T> {
  private content: T;
  
  constructor(initialContent: T) {
    this.content = initialContent;
  }
  
  getContent(): T {
    return this.content;
  }
  
  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("夜墨的盒子");
const numberBox = new Box<number>(42);

console.log("[generic class] stringBox:", stringBox.getContent());
console.log("[generic class] numberBox:", numberBox.getContent());

// ==================== 9. 泛型工具类型 ====================

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - 所有属性可选
type PartialUser = Partial<User>;
const partialUser: PartialUser = { name: "夜墨" };
console.log("[Partial] partialUser:", partialUser);

// Pick - 选择属性
type PickedUser = Pick<User, "id" | "name">;
const pickedUser: PickedUser = { id: 1, name: "Horace" };
console.log("[Pick] pickedUser:", pickedUser);

// Omit - 排除属性
type OmitUser = Omit<User, "email">;
const omitUser: OmitUser = { id: 1, name: "夜墨", age: 3 };
console.log("[Omit] omitUser:", omitUser);

// Record - 快速创建对象类型
type UserMap = Record<string, User>;
const users: UserMap = {
  "user1": { id: 1, name: "A", email: "a@test.com", age: 20 },
  "user2": { id: 2, name: "B", email: "b@test.com", age: 25 }
};
console.log("[Record] users:", users);

// ==================== 10. 类型守卫 ====================

// typeof 守卫
function describe(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `String: ${value.toUpperCase()}`;
  } else if (typeof value === "number") {
    return `Number: ${value.toFixed(2)}`;
  } else {
    return `Boolean: ${value}`;
  }
}

console.log("[typeof guard]", describe("hello"));
console.log("[typeof guard]", describe(3.14159));
console.log("[typeof guard]", describe(true));

// 自定义类型守卫
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log("[custom guard] It's a string:", value.toLowerCase());
  } else {
    console.log("[custom guard] Not a string:", value);
  }
}

processValue("NightOwl");
processValue(123);

// ==================== 11. 函数类型 ====================

// 函数类型注解
let add: (a: number, b: number) => number;
add = function(x: number, y: number): number {
  return x + y;
};

console.log("[function type] add(2, 3):", add(2, 3));

// 可选参数和默认参数
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log("[optional/default] greet(\"夜墨\"):", greet("夜墨"));
console.log("[optional/default] greet(\"夜墨\", \"喵\"):", greet("夜墨", "喵"));

// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log("[rest params] sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));

console.log("✅ TypeScript 基础练习完成！");
