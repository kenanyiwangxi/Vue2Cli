<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      msg: '我是唐僧的徒弟',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  //简单声明接收
  props: ['name','sex','age']

  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的指定
  // props: {
  //   name: {
  //     type: String,  //name的类型要是字符串
  //     required: true  //name是必须要的
  //   },
  //   age: {
  //     type: Number,
  //     default: 99  //默认值
  //   },
  //   sex: {
  //     type: String,
  //     required: true
  //   }
  // }
}
</script>