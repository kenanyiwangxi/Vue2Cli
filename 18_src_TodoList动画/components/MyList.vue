<template>
  <ul class="todo-main">
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInLeft"
        leave-active-class="animate__fadeOutRight"
        appear>
      <MyItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
      />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "@/components/MyItem.vue";
import 'animate.css'
export default {
  name: 'MyList',
  components: {MyItem},
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>