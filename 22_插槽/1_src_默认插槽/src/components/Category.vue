<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--定义一个插槽(挖个坑，等着组件的使用者进行填充)-->
    <slot>我是默认值，没有传参的时候显示默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'CateGory',
  props: ['title']
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img,
video {
  width: 100%;
}
</style>