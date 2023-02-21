<template>
  <div>
    <Student name="李四" :age="20" sex="男"/>
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>

</style>