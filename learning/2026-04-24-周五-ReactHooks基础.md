# 2026-04-24 周五 - React Hooks 基础

## 学习主题

React Hooks 核心 - useState 与 useEffect

## 学习目标

- 掌握 useState 的用法：状态创建、函数式更新、多个状态
- 掌握 useEffect 的用法：依赖数组、清理函数、常见场景
- 理解 Hooks 的规则：只在顶层调用、只在 React 函数中使用

## 学习过程

今天是 Week 7 的第四天，学习 React Hooks 基础。进入 React 学习后，明显感觉到现代 React 开发完全围绕 Hooks展开，和之前学习的 Vue 3 Composition API 有很多相通之处，但语法和思维方式略有不同。

### 1. 学习资源

- React 官方文档：Hooks API Reference
- 课程：React 入门与 JSX（之前的学习资料）

### 2. 代码实践

创建了一个综合的交互式演示页面，包含 8 个示例：

1. **基础计数器** - 演示 useState 最基本用法
2. **函数式更新** - 演示 setState(prev => prev + 1) 模式
3. **受控表单** - 演示双向绑定
4. **Todo List** - 综合练习：增删改状态
5. **数字时钟** - 演示 useEffect + setInterval
6. **鼠标位置追踪** - 演示 useEffect + 事件监听
7. **依赖数组演示** - 演示 [], [dep], 无依赖的区别
8. **模拟数据获取** - 演示 useEffect 加载数据

## 学习内容

### useState

```javascript
// 基本语法
const [state, setState] = useState(initialValue);

// 函数式更新 - 推荐
setCount(prev => prev + 1);

// 多个状态
const [name, setName] = useState('');
const [age, setAge] = useState(0);
```

**核心要点：**
- useState 返回状态值和更新函数
- 初始值只在首次渲染生效
- 状态更新触发组件重新渲染
- 函数式更新避免闭包陷阱

### useEffect

```javascript
// 1. 每次渲染都执行（慎用）
useEffect(() => {
  console.log('每次渲染');
});

// 2. 只执行一次（挂载时）- 常用
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);
  return () => clearInterval(timer); // 清理函数
}, []);

// 3. 依赖变化时执行
useEffect(() => {
  console.log('count 变化:', count);
}, [count]);
```

**核心要点：**
- 第一个参数：副作用函数
- 第二个参数：依赖数组
- 返回函数：清理函数（组件卸载或下次执行前调用）
- 依赖数组为空 []：只在挂载时执行一次

### Hooks 规则

1. **只在顶层调用** - 不要在循环、条件、嵌套函数中调用 Hook
2. **只在 React 函数中调用** - 自定义 Hook 可以调用其他 Hook
3. **依赖数组要完整** - 包含所有使用的响应式值

## 代码实践

创建了完整的交互式演示页面，包含 8 个真实可运行的示例：

**路径**: [day4-hooks-usestate-useeffect](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day4-hooks-usestate-useeffect/)

核心文件：
- `index.html` - 交互式演示页面（可直接浏览器打开）

## 心得感悟

今天学习 React Hooks，让我对 Vue 3 和 React 的状态管理有了更深的理解。两者有很多相似之处：

**相同点：**
- 都提倡组合式逻辑（Vue 的 Composable = React 的 Custom Hook）
- 都有依赖追踪机制
- 都强调不可变数据更新

**不同点：**
- React 需要手动处理依赖数组，Vue 3 自动追踪
- React useEffect 类似 Vue 的 watchEffect，但语法更底层
- React 的函数式更新模式（prev =>）在 Vue 中通过 computed/watch 处理

今天最深的感悟是：**清理函数非常重要**！无论是 setInterval、事件监听还是订阅，如果不清理会导致内存泄漏，这在实际项目中是常见的性能问题。

## 问题与反思

1. **依赖数组遗漏** - 容易忘记添加依赖，导致闭包中读到旧值
2. **无限循环** - 在 useEffect 中直接调用 setState 而没有条件控制
3. **性能优化** - useMemo、useCallback 还没深入学习

## 明日计划

- Day 5: useRef、useCallback、useMemo 深入学习
- 学习 React Router 6 基础
- 继续完善 React 学习笔记

---

*学习日期：2026-04-24 周五*
*学习时长：约 2 小时*