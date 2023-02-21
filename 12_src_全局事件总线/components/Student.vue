<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">向School组件传递数据</button>
  </div>
</template>

<script>

export default {
  name: 'Student',
  data() {
    return {
      name: '孙悟空',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello',this.name)
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