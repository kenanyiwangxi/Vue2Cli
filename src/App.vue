<template>
  <div>
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route placeholder>
      <van-tabbar-item to="/" icon="home-o">้ฆ้กต</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>

</style>