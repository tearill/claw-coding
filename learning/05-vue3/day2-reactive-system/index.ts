// Vue 3 响应式系统 - ref vs reactive 对比练习
// 学习目标：理解 ref 和 reactive 的区别和使用场景

// 1. ref 用于基本类型
import { ref, reactive } from 'vue'

// ref: 适合原始类型（string, number, boolean）
const count = ref(0)
const message = ref('Hello Vue 3')

console.log('ref 访问需要 .value:', count.value)
count.value++

// reactive: 适合对象和数组
const state = reactive({
  count: 0,
  user: {
    name: 'Horace',
    age: 25
  },
  tags: ['Vue', 'React', 'TypeScript']
})

// 直接访问属性
console.log('reactive 直接访问:', state.count)
state.count++

// 2. 响应式解包
const obj = reactive({ count: 0 })
// 在模板中，ref 会自动解包，不需要 .value
// 但在 script 中需要 .value

// 3. ref 内部实际调用 reactive
// ref(n) 实际上就是 reactive({ value: n })

// 4. 注意事项
// ❌ 错误：reactive 不能重新赋值
// state = reactive({}) // 这样会丢失响应性

// ✅ 正确：修改属性
state.count = 10

// 5. 组合式函数的响应式
export function useCounter() {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  return { count, double, increment }
}

// 6. 实际案例：Todo List 状态
export function useTodos() {
  const todos = ref([
    { id: 1, text: '学习 Vue 3 响应式', done: true },
    { id: 2, text: '理解 Proxy 原理', done: false }
  ])
  
  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
      text,
      done: false
    })
  }
  
  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }
  
  function removeTodo(id) {
    const index = todos.value.findIndex(t => t.id === id)
    if (index > -1) todos.value.splice(index, 1)
  }
  
  return { todos, addTodo, toggleTodo, removeTodo }
}

console.log('--- 响应式系统示例完成 ---')