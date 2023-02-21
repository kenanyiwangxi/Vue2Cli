<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input type="text"
             :value="todo.title"
             v-show="todo.isEdit"
             @blur="handleBlur({id:todo.id,e:$event})"
             ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo.id)">编辑</button>
  </li>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: 'MyItem',
  props: ['todo'],
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations({
      handleCheck: 'HANDLE_CHECK',
      handleDelete: 'HANDLE_DELETE',
      handleBlur: 'HANDLE_BLUR'
    }),
    handleEdit(id) {
      this.$store.commit('HANDLE_EDIT', id)
      this.$nextTick(() => {
        this.$refs.inputTitle.focus()
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
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>