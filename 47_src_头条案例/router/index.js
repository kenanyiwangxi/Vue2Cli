import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";

Vue.use(VueRouter)

// 路由规则数组
// const routes = []

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {isRecord: true, top: 0}
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: to.meta.top || 0}
        }
    }
})

export default router
