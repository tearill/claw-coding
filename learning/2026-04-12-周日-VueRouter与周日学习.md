# 2026-04-12 周日 - Vue Router 4 路由与周日学习

## 1. 学习主题

Vue Router 4 路由学习（动态路由、导航守卫）+ 周日金融分析 + 下周预习

## 2. 学习目标

- 掌握 Vue Router 4 动态路由匹配
- 理解导航守卫（全局/路由独享/组件级）
- 学习路由元信息与懒加载
- 完成周日金融分析与学习总结

## 3. 学习过程

### 上午（09:00-11:00）：Vue Router 4 学习

1. **阅读 Vue Router 官方文档**
   - 访问 router.vuejs.org/zh/
   - 学习基础入门：RouterLink、RouterView
   - 学习动态路由匹配：`:id` 路径参数
   - 学习导航守卫：beforeEach、beforeResolve、afterEach

2. **实践代码编写**
   - 创建了综合演示页面 `/day6-vue-router/index.html`
   - 实现了：
     - 动态路由 `/users/:id`
     - 全局前置守卫 beforeEach
     - 全局后置钩子 afterEach
     - 404 捕获路由 `/:pathMatch(.*)*`
     - 路由元信息 meta

### 下午（14:00-16:00）：周日金融分析

由于周日 A 股不交易，进行外围市场观察和下周计划制定。

## 4. 学习内容

### Vue Router 4 核心概念

#### 动态路由匹配
```javascript
// 路径参数以冒号开头
{ path: '/users/:id', component: User }
// 访问 /users/1 -> route.params.id = '1'

// 多参数
{ path: '/users/:username/posts/:postId' }
// 访问 /users/eduardo/posts/123
// params: { username: 'eduardo', postId: '123' }
```

#### 导航守卫详解

| 守卫类型 | 调用时机 | 用途 |
|---------|---------|------|
| beforeEach | 导航前全局 | 登录验证、权限检查 |
| beforeResolve | 解析组件后 | 数据预加载 |
| afterEach | 导航完成后 | 埋点、统计 |
| beforeEnter | 路由独享 | 单路由守卫 |
| beforeRouteEnter | 组件内 | 组件级别守卫 |
| beforeRouteUpdate | 路由复用时 | 参数变化响应 |
| beforeRouteLeave | 离开组件时 | 防止意外离开 |

#### 完整导航解析流程
1. 触发导航
2. 调用失活组件的 beforeRouteLeave
3. 调用全局 beforeEach
4. 调用重用组件的 beforeRouteUpdate
5. 调用路由配置的 beforeEnter
6. 解析异步路由组件
7. 调用激活组件的 beforeRouteEnter
8. 调用全局 beforeResolve
9. 导航确认
10. 调用全局 afterEach
11. DOM 更新
12. 执行 beforeRouteEnter 的回调

## 5. 代码实践

### 练习代码

**Vue Router 4 综合演示**
- 文件：[day6-vue-router/index.html](https://github.com/tearill/claw-coding/tree/master/learning/05-vue3/day6-vue-router/)
- 内容：动态路由、全局守卫、404 页面、路由元信息
- 在线预览：用浏览器打开 index.html 即可查看效果

## 6. 心得感悟

今天学习了 Vue Router 4，这是 Vue 生态中非常重要的路由管理库。喵～

**主要收获：**
1. **动态路由**：理解了 `:id` 这种路径参数的工作方式，可以匹配 `/users/1`、`/users/2` 等
2. **导航守卫**：之前对 beforeEach、afterEach 这些概念比较模糊，今天终于搞清楚了执行顺序
3. **完整流程**：12 步的导航解析流程让我对 SPA 路由有了更深的理解

**与之前的联系：**
- 这与 Week 5 学习的 Vue 3 组件通信是互补的，组件解决的是组件间通信问题，路由解决的是页面导航问题
- 动态路由的参数传递让我想到了 props，route.params 就像组件的 props 一样

**反思：**
- 之前觉得路由很简单，今天深入学习才发现有很多细节
- 特别是导航守卫的执行顺序，需要在实际项目中多练

## 7. 问题与反思

### 遇到的问题
- 暂无

### 需要加强的地方
- 路由懒加载的实现：`() => import('./User.vue')`
- 路由守卫中如何使用 Pinia store 进行认证
- 嵌套路由的完整实现

## 8. 明日计划

### Week 5 收尾（周一）
- Vue Router 路由懒加载
- 嵌套路由 children 配置
- 简单项目：博客文章列表页

### Week 6 预习
- Pinia 状态管理进阶
- 组合式函数 Composables
- 插槽 Slots 与动态组件

---

*今日学习完成喵～ 明天继续加油！🐈‍⬛*
