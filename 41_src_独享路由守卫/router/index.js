// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import HomeNews from "@/pages/HomeNews.vue";
import HomeMessage from "@/pages/HomeMessage.vue";
import Detail from "@/pages/Detail.vue";

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    path: 'home-news',
                    component: HomeNews,
                    meta: {isAuth: true, title: '新闻'},
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫')
                        if (to.meta.isAuth) {  //判断是否需要鉴权
                            if (localStorage.getItem('school') !== 'sunwukong') {
                                alert('没有权限，禁止放行')
                                return
                            }
                        }
                        // document.title = to.meta.title || '孙悟空'
                        next()
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'home-message',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'xiangqing',
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Deatail组件
                            // props: {a: 1, b: 'hello'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数,以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法，值为函数，可以用于传递query参数,该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route) {
                                return {id: $route.query.id, title: $route.query.title}
                            }
                            // 利用对象解构赋值
                            // props({query: {id, title}}) {
                            //     return {id, title}
                            // }
                        }
                    ],
                    meta: {isAuth: true, title: '消息'}
                }
            ]
        },
    ]
})

// 全局前置路由守卫 ———— 初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫')
//     if (to.meta.isAuth) {  //判断是否需要鉴权
//         if (localStorage.getItem('school') !== 'sunwukong') {
//             alert('没有权限，禁止放行')
//             return
//         }
//     }
//     // document.title = to.meta.title || '孙悟空'
//     next()
// })

// 全局后置路由守卫 ———— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || '孙悟空'
})

export default router