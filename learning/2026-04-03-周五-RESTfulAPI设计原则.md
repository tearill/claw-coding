# 2026-04-03 周五 - RESTful API 设计原则

## 学习主题
RESTful API 设计原则与最佳实践

## 学习目标
- 理解 REST 架构风格的六大原则
- 掌握 HTTP 方法的正确使用（GET/POST/PUT/PATCH/DELETE）
- 学会设计清晰的 RESTful URI
- 了解常用 HTTP 状态码

## 学习过程

今天是 Week 4 的第四天，学习 RESTful API 设计。通过阅读 restfulapi.net 的教程，我对 REST 有了更深入的理解。

### 1. 阅读 RESTful API 基础教程
- 了解了 REST 的六大原则：客户端-服务器分离、无状态、可缓存、分层系统、统一接口、按需代码
- 重点理解了"统一接口"的核心：资源通过 URI 标识，使用标准 HTTP 方法

### 2. 学习 HTTP 方法
- **GET**: 读取资源，安全且幂等
- **POST**: 创建新资源，非幂等
- **PUT**: 完整更新资源，幂等
- **PATCH**: 部分更新资源，非幂等
- **DELETE**: 删除资源，幂等

### 3. 资源命名规范
- 使用名词而非动词：`/users` 而非 `/getUsers`
- 使用复数形式：`/users` 而非 `/user`
- 使用层次结构：`/users/123/posts`
- 使用查询参数进行过滤和分页：`/users?page=1&size=20`

### 4. 编写实践代码
创建了 restful-api.js 文件，包含了 RESTful API 设计原则和示例代码。

## 学习内容

### RESTful 六大核心原则
1. **客户端-服务器分离**: 前后端独立演进
2. **无状态**: 每个请求包含所有必要信息
3. **可缓存**: 响应标记缓存策略
4. **分层系统**: 支持负载均衡和扩展
5. **统一接口**: 标准 HTTP 方法 + URI 标识资源
6. **按需代码**: 服务器可发送可执行代码（可选）

### HTTP 方法对照表

| 操作 | 方法 | URI 示例 | 状态码 |
|------|------|----------|--------|
| 获取列表 | GET | /users | 200 OK |
| 获取单个 | GET | /users/123 | 200 OK / 404 |
| 创建 | POST | /users | 201 Created |
| 完整更新 | PUT | /users/123 | 200 OK / 204 |
| 部分更新 | PATCH | /users/123 | 200 OK / 204 |
| 删除 | DELETE | /users/123 | 200 OK / 204 |

### 资源命名最佳实践
- ✅ `/users`, `/users/123`, `/users/123/posts`
- ❌ `/getUsers`, `/deleteUser/123`, `/users/123/update`

## 代码实践

创建了实践代码：[day4-restful-api](https://github.com/tearill/claw-coding/tree/master/learning/04-browser-principles/day4-restful-api/)

包含内容：
- RESTful API 六大原则详解
- HTTP 方法的正确使用示例
- 资源命名规范
- HTTP 状态码参考
- API 响应格式示例

## 心得感悟

今天学习 RESTful API 设计，让我对"统一接口"这个概念有了更深的理解。

之前做前端开发时，总是习惯用 `GET /api/getUser?id=123` 这样的命名，总觉得要清晰一些。但 RESTful 风格要求用名词代替动词，起初我觉得不直观。现在理解了，这样做的好处是：

1. **统一性**: 所有的 API 都遵循相同的规范，团队不需要记忆各种命名风格
2. **可发现性**: 通过查看 URI 就能知道操作的是什么资源
3. **标准化**: HTTP 方法已经定义了操作语义，不需要在 URI 中重复

无状态原则也让我印象深刻。之前做项目时，总喜欢把用户信息存在 session 里，现在明白了这样做的弊端——服务器无法水平扩展。无状态让服务更容易扩展和负载均衡。

## 问题与反思

### 遇到的问题
- PATCH 方法的请求体格式（JSON Patch）比较复杂，需要进一步学习
- HATEOAS（超媒体作为应用状态引擎）概念理解不够深入

### 后续需要加强
1. 学习 JSON Patch 格式
2. 了解 GraphQL 与 REST 的对比
3. 实践：用 Express 搭建一个完整的 RESTful API

## 明日计划
- Week 4 Day 5: Fetch API 与跨域 (CORS)
- 学习 fetch API 的基本用法
- 理解跨域问题的本质和 CORS 原理
- 实践：使用 fetch 发送网络请求