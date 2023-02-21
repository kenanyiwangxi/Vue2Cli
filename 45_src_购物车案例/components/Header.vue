<template>
  <div class="header-container">{{title}}</div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
}
</script>

<style scoped>
.header-container {
  font-size: 16px;
  height: 45px;
  width: 100%;
  text-align: center;
  background-color: #127aff;
  color: #fff;
  line-height: 45px;
}
</style>