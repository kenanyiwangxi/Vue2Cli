<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
  name: 'HomeNews',
  beforeDestroy() {
    console.log('HomeNews组件即将被销毁了')
  }
}
</script>

<style>

</style>