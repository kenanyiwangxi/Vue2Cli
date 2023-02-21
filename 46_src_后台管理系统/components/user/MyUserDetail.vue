<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="back">后退</button>
    <h3 class="text-center">用户详情</h3>
    <h5>id：{{user.id}}</h5>
    <h5>姓名：{{user.name}}</h5>
    <h5>年龄：{{user.age}}</h5>
    <h5>头衔：{{user.position}}</h5>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['user'],
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped></style>
