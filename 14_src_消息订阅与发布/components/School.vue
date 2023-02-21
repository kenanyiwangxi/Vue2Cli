<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: 'School',
  data() {
    return {
      name: 'sjs深圳技师',
      address: '深圳'
    }
  },
  mounted() {
    // this.$bus.$on('hello',(data) => {
    //   console.log('School组件收到了数据',data)
    // })
    this.pubId = PubSub.subscribe('hello', (msgName, data) => {
      console.log('School组件接收到了',data)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    PubSub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>