<template>
  <div class="child">
    <h3>子组件</h3>
    <p>收到的 props.message: {{ message }}</p>
    <p>收到的 props.user: {{ user }}</p>
    
    <button @click="sendUpdate">发送 Update 事件</button>
    <button @click="sendDelete">发送 Delete 事件</button>
  </div>
</template>

<script setup>
// Props 声明 - 对象语法
const props = defineProps({
  message: {
    type: String,
    required: true,
    default: 'Default message'
  },
  user: {
    type: Object,
    default: () => ({ name: 'Anonymous' })
  }
})

// Emits 声明
const emit = defineEmits(['update', 'delete'])

// 触发事件
const sendUpdate = () => {
  emit('update', {
    message: 'Data from Child Component',
    timestamp: Date.now()
  })
}

const sendDelete = () => {
  emit('delete', 123)
}
</script>

<style scoped>
.child {
  padding: 15px;
  background: #f5f5f5;
  border-radius: 6px;
  margin-top: 10px;
}

h3 {
  color: #35495e;
}

button {
  margin: 5px;
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #3aa876;
}
</style>
