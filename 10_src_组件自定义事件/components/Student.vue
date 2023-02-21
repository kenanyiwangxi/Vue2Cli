<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>当前求和为:{{ number }}</h2>
    <button @click="add">点击number++</button>
    <button @click="sendStudentName">把学生名字给APP</button>
    <button @click="unbind">解绑getName事件</button>
    <button @click="death">销毁当前Student组件的实例对象(vc)</button>
  </div>
</template>

<script>

export default {
  name: 'Student',
  data() {
    return {
      name: '孙悟空',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例身上的sunwukong事件
      this.$emit('getName', this.name, 666, 888, 999)
      // this.$emit('demo')
      // this.$emit('click')
    },
    unbind() {
      this.$off('getName')  // 解绑一个自定义事件
      // this.$off(['getName','demo'])  // 解绑多个自定义事件
      // this.$off()  //解绑所有自定义事件
    },
    death() {
      this.$destroy()  // 销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全部不奏效
    },
    add() {
      console.log('add回调被调用了')
      this.number++
    }
  }
}
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 10px;
}
</style>