<template>
  <div>
    登录页
    <div>{{env}}</div>
    <el-button type="primary" @click="login">I am ElButton</el-button>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref, h } from 'vue';
  import { ElButton, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
const env: Ref<{}> = ref({})
const router = useRouter()
const login = () => {
  ElMessage({
    message: h('p', { style:'font-size:30px'}, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
  setTimeout(() => {
    console.log(router)
    router.push({
      name: "home",
      query: {
        name: 'liuwei',
        id:3
      }
    })
  })
};
  onMounted(() => {
    env.value = import.meta.env
  })
</script>