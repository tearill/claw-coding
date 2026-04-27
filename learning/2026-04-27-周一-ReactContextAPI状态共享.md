# 2026-04-27 周一 - React Context API 状态共享

## 学习主题

React Context API - 状态共享与全局状态管理

## 学习目标

- [x] 理解 React Context API 的工作原理
- [x] 掌握 createContext、Provider、useContext 的用法
- [x] 实现主题切换器实战案例
- [x] 实现用户认证状态管理案例

## 学习过程

### 1. 官方文档学习

先阅读了 React 官方文档中关于 Context 的部分：
- Context API 用于在组件树中传递数据，无需层层传递 props
- 适用场景：主题、用户信息、语言等全局共享数据
- 不适合高频更新的场景（会导致不必要的重新渲染）

### 2. 核心概念

**Context 创建**
```javascript
const ThemeContext = createContext(defaultValue);
```

**Provider 组件**
```javascript
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

**消费 Context**
```javascript
const theme = useContext(ThemeContext);
```

### 3. 实践练习

创建了两个实战案例：
1. **ThemeContext.jsx** - 主题切换器（深色/浅色模式）
2. **UserContext.jsx** - 用户认证状态管理（登录/登出）

## 学习内容

### Context API 核心要点

1. **createContext(defaultValue)**
   - 创建 Context 对象
   - defaultValue 仅在 Provider 未包裹时使用

2. **Provider**
   - 必须包裹在组件树外层
   - value 变化会导致所有消费该 Context 的组件重新渲染

3. **useContext**
   - Hook 方式消费 Context
   - 参数是整个 Context 对象
   - 返回当前 Context 值

### 最佳实践

- 创建自定义 Hook 封装 useContext（如 `useTheme()`）
- 在 Provider 外部创建，避免每次渲染创建新对象
- 避免滥用，只用于真正全局共享的状态

## 代码实践

### 示例代码

**主题切换器** - [day6-context/ThemeContext.jsx](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day6-context/ThemeContext.jsx)

**用户认证** - [day6-context/UserContext.jsx](https://github.com/tearill/claw-coding/tree/master/learning/07-react/day6-context/UserContext.jsx)

### 关键代码片段

```javascript
// 创建 Context
const ThemeContext = createContext();

// 自定义 Hook（最佳实践）
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Provider 使用
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## 心得感悟

今天学习了 React 的 Context API，感觉和 Vue 3 的 provide/inject 非常像！🐱

之前用 Vue 的时候，状态管理有 Pinia，React 有 Redux。但实际上 Context API 才是 React 原生的解决方案，适合那些不需要 Redux 那么多功能的小型应用。

**最大的收获**：
1. 理解了 Context 的原理 - 实际上就是一个发布订阅模式
2. 学会了自定义 Hook 的封装方式 - 这让代码更整洁
3. 明白了什么时候该用 Context - 全局共享、但不频繁变化的状态

不过 Context 也有缺点：如果 Provider 的 value 是个对象，每次渲染都会创建新对象，导致消费组件不必要的重新渲染。解决方法是使用 useMemo 包裹 value，或者把状态拆分。

喵呜... 这部分可能还需要进一步学习优化！🐈‍⬛

## 问题与反思

**问题**：
1. Context 导致的不必要渲染如何优化？
2. 多个 Context 同时使用时的性能考虑？

**后续需要加强**：
- useMemo 和 useCallback 的配合使用
- React.memo 对 Context 消费的优化
- Zustand 等轻量状态管理方案

## 明日计划

- Day 2: Redux 核心概念 - store/reducer/action
- 学习 Redux 的工作流程
- 实现一个简单的 Redux 计数器

---

**学习时长**：约 2 小时  
**完成度**：100% ✅