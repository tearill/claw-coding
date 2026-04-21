# 2026-04-21 周二 - React 组件、Props 与 State

## 📅 学习主题

**Week 7 Day 2**: React 组件、Props、State

## 🎯 学习目标

- 理解 React 组件的定义方式（函数组件 vs 类组件）
- 掌握 Props 外部数据传递的原理和使用方法
- 掌握 State 内部状态管理（useState Hook）
- 能够使用 React 实现简单的交互式应用

## 📚 学习过程

### 1. 复习昨日内容

昨日学习了 React 简介与 JSX：
- React 核心特点：组件化、声明式、单项数据流、虚拟 DOM
- JSX 语法规则：根元素、className、驼峰属性
- React.createElement 与 JSX 的关系

### 2. 今日学习内容

#### 2.1 组件定义

React 中组件有两种定义方式：
- **函数组件**：现代 React 开发的主流方式
- **类组件**：React 16.8 之前的主流，现在较少使用

```jsx
// 函数组件
function Greeting() {
  return <h1>Hello!</h1>;
}
```

#### 2.2 Props 外部数据

Props 是组件的输入参数，从父组件传递给子组件。

**核心特点**：
- Props 是只读的（单向数据流）
- 可以传递任何类型的数据
- 支持默认值的设置

```jsx
// 父组件
<UserCard name="张三" role="前端工程师" />

// 子组件
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

#### 2.3 State 内部状态

State 是组件内部的私有数据，会影响组件的渲染。

**useState Hook**：
- `useState` 返回一个数组：`[当前值, 修改函数]`
- 修改 state 会触发组件重新渲染
- 多个 state 需要多次调用 useState

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('');
```

#### 2.4 事件处理

React 中的事件处理使用驼峰命名：
- `onClick` 而不是 `onclick`
- `onChange` 用于输入框

```jsx
<button onClick={() => setCount(count + 1)}>
  点击增加
</button>
```

### 3. 实践练习

创建了一个交互式演示页面，包含：
1. **基础组件** - 最简单的组件示例
2. **Props 传递** - UserCard 组件展示 Props 用法
3. **useState 计数器** - 演示 State 的基本使用
4. **表单处理** - 演示受控组件
5. **Todo List 完整示例** - 综合应用：添加、标记完成、删除任务

## 💻 代码实践

**练习代码**：[day2-component-props-state](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day2-component-props-state/)

## 💡 心得感悟

今天学习了 React 的三大核心概念：组件、Props、State。

### 组件化的思想

React 的核心思想就是组件化。把 UI 拆分成独立、可复用的片段，每个组件维护自己的逻辑和状态。这种思想让我想起 Vue 的组件系统，但 React 更强调**函数式**和**组合**。

### Props vs State

理解 Props 和 State 的区别非常重要：
- **Props**：父组件传递给子组件的数据，**只读**
- **State**：组件内部的状态，**可写**

这让我想到 Vue 中的 `props` 和 `data`，概念非常相似。但 React 更严格地遵循单向数据流原则。

### Hook 的魔力

`useState` 是 React Hooks 的基础。之前学习 Vue 3 的 Composition API 时已经接触过类似的响应式概念，所以理解起来比较顺畅。但 React 的 Hook 有自己的规则：
- 只能在函数组件顶层调用
- 不能在条件语句、循环中调用

## ❓ 问题与反思

1. **类组件 vs 函数组件**：目前函数组件是主流，但类组件在某些场景下仍有使用，需要了解两者的区别
2. **useState 的异步更新**：React 18 中 setState 可能是异步的，这点需要深入理解
3. **状态提升**：当多个组件需要共享状态时，需要将状态提升到父组件

## 🔜 明日计划

- **Week 7 Day 3**: 事件处理、条件渲染
- 继续深入 React 核心概念
- 练习事件处理和条件渲染的实现

---

*学习进度：Week 7 进行中... 🧩