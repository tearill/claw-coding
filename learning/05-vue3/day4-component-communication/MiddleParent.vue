<template>
  <div class="middle-parent">
    <h3>中间层级组件 (MiddleParent)</h3>
    <p>注入的主题：{{ theme }}</p>
    <p>注入的应用名：{{ appName }}</p>
    
    <Child 
      :message="childMessage" 
      @update="handleUpdate"
    />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import Child from './Child.vue'

// 注入祖先提供的数据
const theme = inject('theme')
const appName = inject('appName')

// 子组件需要传递的数据
const childMessage = ref('Message via MiddleParent')
const emit = defineEmits(['update'])

const handleUpdate = (data) => {
  console.log('MiddleParent 转发:', data)
  emit('update', data)
}
</script>

<style scoped>
.middle-parent {
  padding: 15px;
  background: #ecf0f1;
  border-radius: 6px;
  margin: 10px 0;
}

h3 {
  color: #8e44ad;
}
</style>
