<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name: '孙悟空',
      address: '花果山'
    }
  }
}
</script>

<style>
.school {
  background-color: #eee;
}
</style>