<template>
  <div class="school">
    <h2>学校名称:{{ name}}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名字给APP</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: ['getSchoolName'],
  data() {
    return {
      name: 'sjs深圳技师',
      address: '深圳'
    }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>