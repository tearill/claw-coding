import React, { createContext, useContext, useState } from 'react';

// ==================== 用户上下文示例 ====================
// 创建用户 Context
const UserContext = createContext();

// User Provider
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username) => {
    setUser({ name: username, role: 'user' });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 使用 Context 的 Hook
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 组件：用户信息展示
function UserProfile() {
  const { user, isLoggedIn } = useUser();
  
  if (!isLoggedIn) {
    return <p>请先登录～</p>;
  }
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h3>👤 用户信息</h3>
      <p>用户名: {user.name}</p>
      <p>角色: {user.role}</p>
    </div>
  );
}

// 组件：登录表单
function LoginForm() {
  const { login, isLoggedIn } = useUser();
  const [username, setUsername] = React.useState('');
  
  if (isLoggedIn) return null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ margin: '10px 0' }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="请输入用户名"
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        登录
      </button>
    </form>
  );
}

// 组件：登录/登出按钮
function AuthButton() {
  const { isLoggedIn, logout } = useUser();
  
  return (
    <button 
      onClick={logout}
      disabled={!isLoggedIn}
      style={{ 
        padding: '8px 16px',
        backgroundColor: isLoggedIn ? '#dc3545' : '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoggedIn ? 'pointer' : 'not-allowed'
      }}
    >
      {isLoggedIn ? '登出' : '已登出'}
    </button>
  );
}

// ==================== 完整示例应用 ====================
export default function UserContextApp() {
  return (
    <UserProvider>
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <h2>用户认证 Context 示例</h2>
        
        <UserProfile />
        <LoginForm />
        <AuthButton />
        
        <hr style={{ margin: '20px 0' }} />
        
        <DeeplyNested />
      </div>
    </UserProvider>
  );
}

// 任意深层组件都能访问用户信息
function DeeplyNested() {
  const { user, isLoggedIn } = useUser();
  
  return (
    <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
      <h4>深层嵌套组件</h4>
      <p>登录状态: {isLoggedIn ? '✅ 已登录' : '❌ 未登录'}</p>
      {user && <p>欢迎, {user.name}!</p>}
    </div>
  );
}