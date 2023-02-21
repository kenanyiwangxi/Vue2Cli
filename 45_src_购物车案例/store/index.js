import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const actions = {
    // 封装请求列表数据的方法
    async initCartList(context) {
        // 调用axios的get方法，请求列表数据
        const {data: res} = await axios.get('https://www.escook.cn/api/cart')
        if (res.status === 200) {
            context.commit('UPDATE_LIST', res.list)
        }
    },
}

const mutations = {
    // 更新state
    UPDATE_LIST(state, value) {
        state.list = value
    },
    // 商品选择或取消选择
    HANDLE_CHECK(state, value) {
        state.list.forEach(item => {
            if (item.id === value) item.goods_state = !item.goods_state
        })
    },
    // 商品数量改变
    CHANGE_COUNT(state, value) {
        const {id, handle} = value
        state.list.forEach(item => {
            if (item.id === id) {
                if (handle === 'increment') {
                    item.goods_count++
                } else {
                    item.goods_count > 1 ? item.goods_count-- : item.goods_count
                }
            }
        })
    },
    // 商品全选
    CHECK_ALL(state, value) {
        state.list.forEach(item => {
            item.goods_state = value
        })
    }
}

const state = {
    list: []
}

const getters = {
    // 选中商品价格
    total(state) {
        return state.list.reduce((count, pre) => {
            if (pre.goods_state) {
                return count += (pre.goods_price * pre.goods_count)
            } else {
                return count
            }
        }, 0)
    },
    // 选中商品个数
    number(state) {
        return state.list.reduce((count, pre) => {
            return count += (pre.goods_state ? 1 : 0)
        }, 0)
    },
    // 商品总数量
    sum(state) {
        return state.list.length
    },
    // 选中商品总数量
    goodsTotal(state) {
        return state.list.reduce((count, pre) => {
            if (pre.goods_state) {
                return count += pre.goods_count
            } else {
                return count
            }
        }, 0)
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})