import Vue from "vue";
import VueRouter from "vue-router";
import MyLogin from "@/components/MyLogin.vue";
import MyHome from "@/components/MyHome.vue";
import MyUsers from "@/components/menus/MyUsers.vue";
import MyGoods from "@/components/menus/MyGoods.vue";
import MyOrders from "@/components/menus/MyOrders.vue";
import MyRights from "@/components/menus/MyRights.vue";
import MySettings from "@/components/menus/MySettings.vue";
import MyUserDetail from "@/components/user/MyUserDetail.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: MyLogin
        },
        {
            path: '/',
            name: 'Home',
            component: MyHome,
            meta: {isCheck: true},
            // 路由重定向
            // redirect: '/users',
            children: [
                {
                    path: 'users',
                    name: 'Users',
                    component: MyUsers,
                    meta: {isCheck: true},
                },
                {
                    path: 'goods',
                    name: 'Goods',
                    component: MyGoods,
                    meta: {isCheck: true},
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: MyOrders,
                    meta: {isCheck: true},
                },
                {
                    path: 'rights',
                    name: 'Rights',
                    component: MyRights,
                    meta: {isCheck: true},
                },
                {
                    path: 'settings',
                    name: 'Settings',
                    component: MySettings,
                    meta: {isCheck: true},
                },
                // 用户详情页
                {
                    path: 'detail/:user',
                    name: 'Detail',
                    component: MyUserDetail,
                    props: true,
                    meta: {isCheck: true},
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.isCheck) {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router