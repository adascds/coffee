import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入Axios模块
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;

import qs from 'qs'
Vue.prototype.qs = qs;

//Moment
import moment from 'moment';
Vue.prototype.moment = moment;


Vue.config.productionTip = false
//导入Mint UI 
import MintUI from 'mint-ui';
//导入样式表文件 
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);
//icon
import './assets/icon/iconfont.css';


import Swiper from 'swiper'; 
import 'swiper/css/swiper.min.css';


// 商品列表模块
import listp from "./components/listp";
Vue.component("my-listp",listp);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


