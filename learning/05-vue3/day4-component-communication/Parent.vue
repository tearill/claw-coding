<template>
  <div class="parent">
    <h2>父组件</h2>
    <p>从子组件接收的消息：{{ childMessage }}</p>
    <Child 
      :message="parentMessage" 
      :user="userData"
      @update="handleChildUpdate"
      @delete="handleChildDelete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

// 父组件的数据
const parentMessage = ref('Hello from Parent Component')
const childMessage = ref('')
const userData = ref({
  name: 'Horace',
  age: 18,
  email: 'horace@example.com'
})

// 处理子组件的事件
const handleChildUpdate = (data) => {
  console.log('收到子组件的 update 事件:', data)
  childMessage.value = data.message
}

// 处理删除事件
const handleChildDelete = (id) => {
  console.log('收到删除请求, ID:', id)
}
</script>

<style scoped>
.parent {
  padding: 20px;
  border: 2px solid #42b883;
  border-radius: 8px;
}

h2 {
  color: #42b883;
}
</style>
