// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//markdown
import mavonEditor from 'mavon-editor' 
import 'mavon-editor/dist/css/index.css'

import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'; 
import 'element-ui/lib/theme-default/index.css'

import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, Axios)//http://www.jianshu.com/p/2045900d49df Axios用法
Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
