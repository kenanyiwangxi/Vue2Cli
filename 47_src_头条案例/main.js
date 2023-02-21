import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vant from 'vant'
// 切记：为了能够覆盖默认的less变量，这里一定要把后缀名改为 .less
import 'vant/lib/index.less'
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
