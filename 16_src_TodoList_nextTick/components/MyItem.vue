<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!--如下代码也能实现功能,但是不太推荐,因为有点违反原则,因为修改了props-->
      <!--<input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="handleBlue(todo,$event)"
          ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handelEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // this.$bus.$emit('checkTodo',id)
      PubSub.publish('checkTodo', id)
    },
    // 删除
    handleDelete(id) {
      // if(confirm('你确认删除吗')) this.$bus.$emit('deleteTodo',id)
      if (confirm('你确认删除吗')) PubSub.publish('deleteTodo', id)
    },
    // 编辑
    handelEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(() => {
        console.log(this)
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点
    handleBlue(todo, e) {
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      PubSub.publish('updateTodo', {
        id: todo.id,
        value: e.target.value
      })
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-left: 5px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>