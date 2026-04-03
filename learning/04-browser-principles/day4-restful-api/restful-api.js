/**
 * RESTful API 设计练习
 * 主题：RESTful API 设计原则与实践
 * 
 * 本文件展示了 RESTful API 的核心概念和设计原则
 */

// ==================== 1. RESTful API 六大原则 ====================

/**
 * REST (REpresentational State Transfer) 六大原则：
 * 
 * 1. 客户端-服务器分离 (Client-Server)
 *    - 客户端负责 UI，服务器负责数据存储
 *    - 前后端独立演进
 * 
 * 2. 无状态 (Stateless)
 *    - 每个请求包含所有必要信息
 *    - 服务器不保存客户端状态
 * 
 * 3. 可缓存 (Cacheable)
 *    - 响应可以标记为可缓存或不可缓存
 *    - 提升性能
 * 
 * 4. 分层系统 (Layered System)
 *    - 客户端不知道连接的是终端服务器还是中间服务器
 *    - 便于扩展和负载均衡
 * 
 * 5. 统一接口 (Uniform Interface)
 *    - 资源通过 URI 标识
 *    - 使用标准 HTTP 方法
 *    - 响应包含元数据和链接
 * 
 * 6. 按需代码 (Code on Demand) - 可选
 *    - 服务器可以发送可执行代码给客户端
 */

// ==================== 2. HTTP 方法的正确使用 ====================

/**
 * CRUD 操作对应的 HTTP 方法：
 * 
 * CREATE (创建):
 *   - POST /users          → 创建新用户
 *   - 返回 201 Created
 * 
 * READ (读取):
 *   - GET /users          → 获取用户列表
 *   - GET /users/123      → 获取单个用户
 *   - 返回 200 OK
 * 
 * UPDATE (更新):
 *   - PUT /users/123      → 完整更新用户（替换）
 *   - PATCH /users/123    → 部分更新用户
 *   - 返回 200 OK 或 204 No Content
 * 
 * DELETE (删除):
 *   - DELETE /users/123   → 删除用户
 *   - 返回 200 OK 或 204 No Content
 */

// ==================== 3. 资源命名规范 ====================

/**
 * RESTful URI 设计规范：
 * 
 * ✅ 正确示例：
 *   - /users              - 用户集合
 *   - /users/123         - 单个用户
 *   - /users/123/posts   - 用户的文章
 *   - /posts/456/comments - 文章的评论
 *   - /users?page=1&size=20 - 分页
 *   - /users?status=active - 过滤
 * 
 * ❌ 错误示例：
 *   - /getUsers           - 动词不要在 URI 中
 *   - /users/123/update  - 使用 HTTP 方法
 *   - /deleteUser/123    - 使用 HTTP 方法
 *   - /getUserById/123   - 动词不要在 URI 中
 */

// ==================== 4. HTTP 状态码 ====================

/**
 * 常用 HTTP 状态码：
 * 
 * 2xx - 成功
 *   - 200 OK              - 请求成功
 *   - 201 Created        - 资源创建成功
 *   - 204 No Content      - 请求成功但无返回内容
 * 
 * 4xx - 客户端错误
 *   - 400 Bad Request     - 请求格式错误
 *   - 401 Unauthorized    - 未认证
 *   - 403 Forbidden       - 无权限
 *   - 404 Not Found       - 资源不存在
 *   - 422 Unprocessable Entity - 请求格式正确但语义错误
 * 
 * 5xx - 服务器错误
 *   - 500 Internal Server Error - 服务器内部错误
 *   - 503 Service Unavailable - 服务不可用
 */

// ==================== 5. RESTful API 响应示例 ====================

// 用户列表响应
const usersListResponse = {
  data: [
    { id: 1, name: "张三", email: "zhangsan@example.com" },
    { id: 2, name: "李四", email: "lisi@example.com" }
  ],
  meta: {
    total: 100,
    page: 1,
    size: 20,
    totalPages: 5
  },
  links: {
    self: "/api/users?page=1",
    next: "/api/users?page=2",
    prev: null
  }
};

// 单一用户响应（带 HATEOAS 超媒体链接）
const singleUserResponse = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
  createdAt: "2026-04-03T00:00:00Z",
  links: {
    self: "/api/users/1",
    posts: "/api/users/1/posts",
    comments: "/api/users/1/comments"
  }
};

// 错误响应
const errorResponse = {
  error: {
    code: "VALIDATION_ERROR",
    message: "邮箱格式不正确",
    details: [
      { field: "email", message: "请输入有效的邮箱地址" }
    ]
  }
};

// ==================== 6. 模拟 RESTful API 服务器 ====================

/**
 * 这是一个简单的 RESTful API 设计示例
 * 实际实现需要配合 Express/Node.js
 */

const api = {
  // 获取所有用户
  getUsers: () => {
    return {
      method: 'GET',
      url: '/api/users',
      description: '获取用户列表，支持分页和过滤'
    };
  },

  // 获取单个用户
  getUser: (id) => {
    return {
      method: 'GET',
      url: `/api/users/${id}`,
      description: '获取指定用户信息'
    };
  },

  // 创建用户
  createUser: () => {
    return {
      method: 'POST',
      url: '/api/users',
      description: '创建新用户，请求体包含用户信息',
      requestBody: {
        name: "用户名",
        email: "user@example.com",
        password: "password"
      }
    };
  },

  // 更新用户（完整更新）
  updateUser: (id) => {
    return {
      method: 'PUT',
      url: `/api/users/${id}`,
      description: '完整更新用户信息'
    };
  },

  // 部分更新用户
  patchUser: (id) => {
    return {
      method: 'PATCH',
      url: `/api/users/${id}`,
      description: '部分更新用户信息'
    };
  },

  // 删除用户
  deleteUser: (id) => {
    return {
      method: 'DELETE',
      url: `/api/users/${id}`,
      description: '删除指定用户'
    };
  }
};

console.log('RESTful API 设计示例');
console.log('====================');
console.log('获取用户列表:', api.getUsers());
console.log('获取单个用户:', api.getUser(123));
console.log('创建用户:', api.createUser());

module.exports = { usersListResponse, singleUserResponse, errorResponse, api };