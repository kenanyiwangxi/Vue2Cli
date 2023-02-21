<template>
  <!--组件的结构-->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我展示学校名字</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等等)
export default {
  name:'School',
  data() {
    return {
      name: '孙悟空',
      address: '深圳'
    }
  },
  methods: {
    showName() {
      console.log('组件实例对象', this)
    }
  }
}
</script>

<style>
/*组件的样式*/
.demo {
  background-color: orange;
}
</style>