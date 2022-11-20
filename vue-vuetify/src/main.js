import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import router from './router/index';


Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  data: ({
    authentificator: false
  }),
  render: h => h(App)
}).$mount('#app')
