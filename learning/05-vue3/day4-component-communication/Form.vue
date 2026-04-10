<template>
  <div class="form-component">
    <h3>表单组件（Props + Emits 综合练习）</h3>
    
    <div class="form-group">
      <label>用户名：</label>
      <input 
        v-model="formData.username" 
        type="text" 
        placeholder="请输入用户名"
      />
    </div>
    
    <div class="form-group">
      <label>邮箱：</label>
      <input 
        v-model="formData.email" 
        type="email" 
        placeholder="请输入邮箱"
      />
    </div>
    
    <div class="form-group">
      <label>年龄：</label>
      <input 
        v-model.number="formData.age" 
        type="number" 
        placeholder="请输入年龄"
      />
    </div>
    
    <div class="form-group">
      <label>简介：</label>
      <textarea 
        v-model="formData.bio" 
        placeholder="请输入简介"
      ></textarea>
    </div>
    
    <div class="error" v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    
    <div class="actions">
      <button @click="handleSubmit">提交</button>
      <button @click="handleReset" class="reset">重置</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Props with validation
const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({})
  },
  submitText: {
    type: String,
    default: '提交'
  }
})

// Emits
const emit = defineEmits(['submit', 'reset'])

// Form data
const formData = reactive({
  username: props.initialData.username || '',
  email: props.initialData.email || '',
  age: props.initialData.age || '',
  bio: props.initialData.bio || ''
})

// Errors
const errors = ref([])

// Validation
const validate = () => {
  errors.value = []
  
  if (!formData.username || formData.username.length < 3) {
    errors.value.push('用户名至少需要3个字符')
  }
  
  if (!formData.email || !formData.email.includes('@')) {
    errors.value.push('请输入有效的邮箱地址')
  }
  
  if (!formData.age || formData.age < 1 || formData.age > 150) {
    errors.value.push('请输入有效的年龄')
  }
  
  return errors.value.length === 0
}

// Submit handler
const handleSubmit = () => {
  if (validate()) {
    emit('submit', { ...formData })
  }
}

// Reset handler
const handleReset = () => {
  formData.username = ''
  formData.email = ''
  formData.age = ''
  formData.bio = ''
  emit('reset')
}
</script>

<style scoped>
.form-component {
  padding: 20px;
  max-width: 500px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 80px;
}

.error {
  color: #e74c3c;
  margin: 10px 0;
}

.error ul {
  margin: 0;
  padding-left: 20px;
}

.actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #3aa876;
}

button.reset {
  background: #95a5a6;
}
</style>
