<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('About--beforeRouteEnter')
    if (to.meta.isAuth) {  //判断是否需要鉴权
      if (localStorage.getItem('school') !== 'sunwukong') {
        alert('没有权限，禁止放行')
        return
      }
    }
    // document.title = to.meta.title || '孙悟空'
    next()
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('About--beforeRouteLeave')
    next()
  }
}
</script>

<style>

</style>