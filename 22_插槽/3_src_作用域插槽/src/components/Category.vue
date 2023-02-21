<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games" x="你好">我是默认的内容</slot>
  </div>
</template>

<script>
export default {
  name: 'CateGory',
  props: ['title']
  ,
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  }
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

a {
  display: inline-block;
}
</style>