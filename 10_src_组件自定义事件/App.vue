<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{studentName}}</h1>

    <!--通过父组件给子组件传递函数类型的props实现:子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法@或v-on)-->
<!--    <Student @getName="getStudentName" @demo="m1"/>-->

    <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法使用ref属性)-->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
// 引入Student组件
import Student from "./components/Student.vue";
// 引入School组件
import School from "./components/School.vue";

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  data() {
    return {
      msg: '你好啊',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名字:", name)
    },
    getStudentName(name,...params) {
      console.log("App收到了学生名字:", name,params)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了')
    },
    show() {
      alert(111)
    }
  },
  mounted() {
    this.$refs.student.$once('getName',this.getStudentName)
    // setTimeout(() => {
    //   this.$refs.student.$on('getName',this.getStudentName)
    // },3000)
    // 绑定自定义事件
    // this.$refs.student.$on('getName',(name,...params) => {
    //   console.log("App收到了学生名字:", name,params)
    //   console.log(this) // 直接写回调函数且不使用箭头函数则this指向 谁触发了该事件 this就指向谁
    //   this.studentName = name
    // })
    // 绑定自定义事件(一次性)
    // this.$refs.student.$once('getName',this.getStudentName)
  }
}
</script>

<style>
.app {
  background-color: gray;
}
</style>