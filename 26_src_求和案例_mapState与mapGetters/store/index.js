// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from "vue";
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     // console.log('actions中的jia被调用了')
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     // console.log('actions中的jian被调用了')
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        // console.log('actions中的jiaOdd被调用了')
        // context.dispatch('demo1',value)
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    // demo1(context, value) {
    //     console.log('做了一些事情demo1')
    //     context.dispatch('demo2',value)
    // },
    // demo2(context, value) {
    //     console.log('做了一些事情demo2')
    // },
    jiaWait(context, value) {
        // console.log('actions中的jiaWait被调用了')
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
}

// 准备mutations —— 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了')
        state.sum += value
    },
    JIAN(state, value) {
        // console.log('mutations中的JIAN被调用了')
        state.sum -= value
    },
}

// 准备state —— 用于存储数据
const state = {
    sum: 0,  //当前的和
    school: '花果山',
    subject: '筋斗云'
}

// 准备getters —— 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})