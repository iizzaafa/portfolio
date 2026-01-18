<template>
  <ul class="skill-list">
    <li v-for="skill in skills" :key="skill">• {{ skill }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  skills: Array
})
</script>

<style>
.skill-list {
  list-style: none;
  padding-left: 0;
}
.skill-list li {
  margin-bottom: 8px;
  padding-left: 12px;
  position: relative;
}
.skill-list li::before {
  content: '';
}
</style>
