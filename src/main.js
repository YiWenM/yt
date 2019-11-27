import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import router from './router/index.js'
import store from './Store/index.js'

import './theme/element/index.css';
import './theme/element/dialog.css';
import 'font-awesome/css/font-awesome.css'



Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
