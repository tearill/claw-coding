# 2026-04-23 周四 - React Hooks (useState / useEffect)

## 学习主题
React Hooks 核心 - useState 与 useEffect

## 学习目标
- 掌握 useState 的基本用法
- 理解 useEffect 的生命周期概念
- 能够使用 Hooks 实现常见功能：计数器、表单、列表、时钟、数据获取

## 学习过程

### 1. 复习昨日内容
昨天已经学习了 React 的事件处理和条件渲染，在 day3-event-conditional 中实践了：
- 事件绑定与处理
- 条件渲染 if / 三元运算符 / 逻辑运算符
- 列表渲染与 key

### 2. 今日学习：Hooks 入门
按照 React 官方文档和教程，学习了两个最重要的 Hook：

#### useState
- 状态管理的基本Hook
- 返回 `[state, setState]` 数组
- 支持函数式更新 `setCount(prev => prev + 1)`

#### useEffect
- 处理副作用（side effects）
- 依赖数组控制执行时机：
  - `[]` - 只在挂载时执行一次
  - `[dep]` - 依赖变化时执行
  - 省略 - 每次渲染都执行
- 必须返回清理函数避免内存泄漏

### 3. 代码实践
在 `07-react/day4-hooks-usestate-useeffect/` 目录下创建了综合示例，包含：
1. 基础计数器
2. 表单处理（受控组件）
3. 待办事项列表（CRUD 操作）
4. 实时时钟（setInterval + 清理）
5. 窗口尺寸监听（事件监听）
6. 数据获取（async/await）
7. 依赖数组演示
8. Tab 切换

## 学习内容

### useState 核心
```javascript
const [state, setState] = useState(initialValue);

// 更新方式
setState(newValue);
setState(prev => prev + 1); // 函数式更新
```

### useEffect 核心
```javascript
useEffect(() => {
    // 副作用逻辑
    return () => {
        // 清理函数（可选）
    };
}, [dependencies]); // 依赖数组
```

### 常见用例
| 场景 | 依赖数组 |
|------|----------|
| 组件挂载执行一次 | `[]` |
| 依赖变化时执行 | `[dep1, dep2]` |
| 每次渲染都执行 | 省略 |

## 代码实践
- **文件夹**：[day4-hooks-usestate-useeffect](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day4-hooks-usestate-useeffect/)
- **文件**：[index.html](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day4-hooks-usestate-useeffect/index.html) - 包含 8 个综合示例

## 心得感悟

今天终于正式进入了 React Hooks 的学习！🎉

之前学习 Vue 3 的时候就已经接触过 Composition API，感觉 React 的 Hooks 思想很类似，都是为了复用状态逻辑。两者都是"状态驱动 UI"的思想，只是语法形式不同。

最大的收获是理解了 **useEffect 的清理函数** 这个概念：
- 定时器需要 `clearInterval`
- 事件监听需要 `removeEventListener`
- 如果不清理，会造成内存泄漏！

这让我想起之前学 Vue 时类似的概念，React 用函数式的方式来实现，确实很优雅。

**一个小发现**：之前看 React 代码时经常看到 `useState` 的解构写法 `[count, setCount]`，今天自己动手写了一遍，理解更深刻了。API 文档说的"返回数组"原来是这么用的！

## 问题与反思

### 需要加强
1. useCallback 和 useMemo 的使用场景还不太清楚
2. 自定义 Hook 的创建还不熟练
3. 需要多看一些实际项目中的 Hook 使用案例

### 反思
今天的学习进度正常，但感觉代码示例有点多而杂。下次应该更聚焦于某个具体场景深挖，而不是泛泛做很多 Demo。明天计划学习 useRef 和自定义 Hook。

## 明日计划
- Day 5: useRef、useCallback、useMemo
- 理解它们的区别和使用场景
- 尝试创建自定义 Hook