<template>
  <div>
    首页
    <HelloWorld :data="data" :msg="msg" @back="back"></HelloWorld>
    {{data.id}}
    {{emitData}}
    <el-button type="primary" @click="add">add</el-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive ,ref, Ref} from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
let msg = ref('hello')
const data = reactive({
  id: 1,
  name: '刘伟',
  gender:'男'
})
let emitData:Ref<any> = ref({})
const back = (data:any) => {
  emitData.value = data
  console.log(emitData)
}
const add = () => {
  data.id++
  msg.value = 'hello world'
}
onMounted(()=> {
})
</script>