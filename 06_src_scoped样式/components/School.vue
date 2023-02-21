<template>
  <div class="demo">
    <h2 class="title">学校名称:{{ name}}</h2>
    <h2 class="qwe">学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: 'sjs深圳技师',
      address: '深圳'
    }
  }
}
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
  .qwe {
    font-size: 50px;
  }
}
</style>