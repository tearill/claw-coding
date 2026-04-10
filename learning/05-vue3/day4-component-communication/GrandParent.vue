<template>
  <div class="grandparent">
    <h2>祖先组件 (GrandParent)</h2>
    <p>当前主题：{{ theme }}</p>
    <button @click="changeTheme">切换主题</button>
    
    <Parent />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Parent from './Parent.vue'

// 提供共享状态
const theme = ref('light')

// 提供给所有后代组件
provide('theme', theme)
provide('appName', 'Vue 3 Learning App')

// 修改主题
const changeTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.grandparent {
  padding: 20px;
  border: 2px solid #e74c3c;
  border-radius: 8px;
}

h2 {
  color: #e74c3c;
}

button {
  padding: 8px 16px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
