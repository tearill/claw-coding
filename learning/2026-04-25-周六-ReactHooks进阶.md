# 2026-04-25 周六 - React Hooks 进阶

## 学习主题

React Hooks 进阶 - useRef / useCallback / useMemo

## 学习目标

- 掌握 useRef 的用法：DOM 引用、变量引用、forwardRef
- 掌握 useCallback 的用法：记忆化回调函数
- 掌握 useMemo 的用法：记忆化计算值
- 理解性能优化的场景与方法

## 学习过程

今天是 Week 7 的第五天，继续学习 React Hooks。前面学习了 useState 和 useEffect，今天深入学习三个性能和引用相关的 Hook。

### 1. 学习资源

- React 官方文档：Hooks API Reference
- 相关文章：React 性能优化指南

### 2. 代码实践

创建了一个性能优化演示页面，包含 7 个示例：

1. **useRef 基础** - 演示 DOM 引用
2. **useRef 变量引用** - 演示跨渲染保持数据
3. **useRef 实现 Timer** - 演示 setInterval + 清理
4. **useCallback 基础** - 演示函数记忆化
5. **useMemo 基础** - 演示值记忆化
6. **性能对比演示** - 演示重渲染优化
7. **综合示例** - 展示全部 Hook 综合应用

## 学习内容

### useRef

```javascript
// DOM 引用
const inputRef = useRef(null);
<input ref={inputRef} />
<input ref={ref} />  // forwardRef

// 变量引用 - 跨渲染保持数据，不触发重渲染
const countRef = useRef(0);
countRef.current += 1;  // 不触发重新渲染

// useImperativeHandle (配合 forwardRef)
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus()
}));
```

**核心要点：**
- useRef 返回一个可变的 ref 对象
- .current 属性可以存储任意值
- 修改 .current 不触发组件重新渲染
- 常用于 DOM 引用和跨渲染保持数据

### useCallback

```javascript
// 记忆化回调函数
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// 场景：传递给子组件的回调函数需要用 useCallback 包裹
// 避免子组件不必要地重新渲染
```

**核心要点：**
- 返回记忆化的回调函数
- 依赖数组变化时更新函数引用
- 配合 React.memo 使用效果更好

### useMemo

```javascript
// 记忆化计算值
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// 典型场景：过滤/排序
const filteredItems = useMemo(
  () => items.filter(item => item.age > 18),
  [items]
);
```

**核心要点：**
- 返回记忆化的计算值
- 依赖数组变化时重新计算
- 避免不必要的重复计算

### 性能优化原则

1. **不要过早优化** - 先完成功能，再考虑优化
2. **Profiling 是关键** - 使用 React DevTools Profiler 定位瓶颈
3. **useCallback/useMemo 不是万能的** - 使用不当会增加开销
4. **子组件用 React.memo 包裹** - 避免不必要的重渲染

## 代码实践

创建了完整的性能优化演示页面：

**路径**: [day5-hooks-advanced](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day5-hooks-advanced/)

核心文件：
- `index.html` - 性能优化演示页面（可直接浏览器打开）

## 心得感悟

今天学习 React Hooks 进阶，理解了三个重要的性能相关 Hook：

**useRef 的理解：**
之前觉得奇怪为什么要用 ref 而不是直接用变量。后来发现 ref 的核心价值在于**修改不触发重新渲染**，这对于实现 Timer、动画、性能追踪等场景非常重要。

**useCallback/useMemo 的思考：**
这两个 Hook 本质上是**记忆化**技术，用于避免重复计算。但它们也有开销（存储、比较），所以：
- 函数如果稳定，不需要 useCallback
- 如果计算很轻量，不需要 useMemo
- 只有真正遇到性能问题时才使用

**与 Vue 3 的对比：**
- Vue 3 computed 自动缓存结果，类似 useMemo
- Vue 3 watchEffect 需要手动处理依赖，类似 useEffect
- Vue 的 ref 和 React 的 useRef 完全不同！Vue ref 是响应式的

## 问题与反思

1. **forwardRef 还没深入实践** - 需要在实际项目中应用
2. **自定义 Hook**：还没有学习如何封装可复用的 Hook
3. **useReducer**：没学习，复杂状态管理可能需要

## 明日计划

- Day 6: 自定义 Hook 学习
- 学习 React 组件通信
- 开始学习 React Router 基础

---

*学习日期：2026-04-25 周六*
*学习时长：约 2 小时*