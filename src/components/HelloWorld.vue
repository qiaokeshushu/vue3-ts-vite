<template>
  <div>
    <p>{{props.data.id}}</p>
    <p>{{props.data.name}}</p>
    <p>{{props.data.gender}}</p>
    <h3>{{props.msg}}</h3>
    <el-button @click="back">emit</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref } from 'vue'
const props = defineProps<{ data: { id: number, name: string, gender: string },msg:string }>()
const emit = defineEmits(['back'])
const back = () => {
  emit('back',props.data)
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
