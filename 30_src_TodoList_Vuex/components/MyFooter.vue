<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ isdone }}</span> / 全部{{ length }}
    </span>
    <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'MyFooter',
  computed: {
    length() {
      return this.todos.length
    },
    isAll: {
      get() {
        return this.isdone === this.length && this.length > 0
      },
      set(value) {
        this.$store.commit('HANDLE_ALL', value)
      }
    },
    ...mapState(['todos']),
    ...mapGetters(['isdone'])
  },
  methods: {
    ...mapMutations({handleClear: 'HANDLE_CLEAR'})
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>