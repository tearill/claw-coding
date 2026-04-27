import React, { createContext, useContext, useState } from 'react';

// 创建 Theme Context
const ThemeContext = createContext();

// Theme Provider 组件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    colors: theme === 'light' 
      ? { background: '#ffffff', text: '#333333', primary: '#007bff' }
      : { background: '#1a1a1a', text: '#ffffff', primary: '#61dafb' }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用 Context 的自定义 Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 子组件：显示主题
function ThemeDisplay() {
  const { theme, colors } = useTheme();
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: colors.background,
      color: colors.text,
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h2>当前主题: {theme === 'light' ? '浅色' : '深色'}</h2>
      <p>这是通过 Context 传递的样式～</p>
    </div>
  );
}

// 子组件：切换按钮
function ThemeToggle() {
  const { theme, toggleTheme, colors } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        backgroundColor: colors.primary,
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      切换到 {theme === 'light' ? '深色' : '浅色'} 主题
    </button>
  );
}

// 主应用组件
export default function ContextApp() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>React Context API 示例</h1>
        <p>Context 提供了一种在组件树中传递数据的方式，无需层层传递 props</p>
        
        <ThemeDisplay />
        <ThemeToggle />
        
        <hr style={{ margin: '20px 0' }} />
        
        <NestedComponent />
      </div>
    </ThemeProvider>
  );
}

// 深层嵌套组件 - 不需要层层传递 props！
function NestedComponent() {
  const { theme, colors } = useTheme();
  
  return (
    <div style={{
      padding: '15px',
      border: `2px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: colors.background
    }}>
      <h3>深层嵌套组件</h3>
      <p>这个组件在 Provider 内部的任意层级，都能直接访问 Context</p>
      <p>当前主题: <strong>{theme}</strong></p>
    </div>
  );
}