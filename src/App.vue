<template>
  <div>
    <router-view v-slot="{Component}" >
      <component :is="Component" :key="$route.path"></component>
    </router-view>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
