// 初始化模块Vue/App
import Vue from 'vue'
import App from './App.vue'

// 图表模块
import VeLine from 'v-charts/lib/line.common';
import VeMap from 'v-charts/lib/map.common';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markArea';

// 生存二维码
import VueQArt from 'vue-qart'
Vue.use(VueQArt)

// 将时间处理函数moment.js插件绑定到Vue上
import moment from 'moment'
Vue.prototype.$moment = moment

// Element-ui模块
import ElementUI from 'element-ui'
// 路由模块
import router from '@/router/router.js'

// 引入全局样式
import './styles/index.scss'
import './styles/icon.scss'
import './styles/element.scss'
import './styles/reset.scss'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'

[VeLine, VeMap].forEach(comp => {
    Vue.component(comp.name, comp);
});
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/form-data'
Vue.prototype.$http = axios
    // 将element-ui绑定到全局
Vue.use(ElementUI)
    // process.env.NODE_ENV = ''
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')