// 引入vue核心
import Vue from "vue";
// 引入vuex
import Vuex from "vuex"
import {nanoid} from "nanoid";
//使用vuex插件
Vue.use(Vuex)

// 定义actions —— 用于响应组件中的动作
const actions = {
    addTodo(context, value) {
        if (!value) return alert('请输入正确的信息')
        context.commit('ADD_TODO', value)
    }
}

//定义mutations —— 用于操作数据(state)
const mutations = {
    // 添加
    ADD_TODO(state, value) {
        const todoObj = {id: nanoid(), title: value, done: false}
        state.todos.unshift(todoObj)
    },
    // todo选择或取消
    HANDLE_CHECK(state, value) {
        state.todos.forEach(todo => {
            if (todo.id === value) todo.done = !todo.done
        })
        console.log(value)
    },
    // 删除todo
    HANDLE_DELETE(state, value) {
        state.todos = state.todos.filter(todo => {
            if (todo.id !== value) return todo
        })
    },
    // 全选
    HANDLE_ALL(state, value) {
        state.todos.forEach(todo => {
            todo.done = value
        })
    },
    // 删除已完成
    HANDLE_CLEAR(state) {
        state.todos = state.todos.filter(todo => {
            if (!todo.done) return todo
        })
    },
    // 是否编辑
    HANDLE_EDIT(state, value) {
        state.todos.forEach(todo => {
            if (todo.id === value) {
               if(todo.hasOwnProperty('idEdit')) {
                   todo.isEdit = true
               } else {
                   Vue.set(todo,'isEdit',true)
               }
            }
        })
    },
    // 失去焦点
    HANDLE_BLUR(state, {id,e}) {
        state.todos.forEach(todo => {
            if (todo.id === id) {
               todo.isEdit = false
                todo.title = e.target.value
            }
        })
    }
}

//定义state ——— 用于存储数据
const state = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

//定义getters —— 对数据进行加工
const getters = {
    isdone(state) {
        return state.todos.reduce((count, pre) => {
            return count += (pre.done ? 1 : 0)
        }, 0)
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})