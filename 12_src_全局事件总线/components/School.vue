<template>
  <div class="school">
    <h2>学校名称:{{ name}}</h2>
    <h2>学校地址:{{ address }}</h2>
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
  },
  mounted() {
    this.$bus.$on('hello',(data) => {
      console.log('School组件收到了数据',data)
    })
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>