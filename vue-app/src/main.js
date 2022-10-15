import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import '@/assets/images/full.jpeg';
import router from './router/index';
// import path from '../public/api/articles.json';


Vue.config.productionTip = false;
Vue.use(VueRouter);

// Vue.use(path);

new Vue({
  render: h => h(App),
  el: '#app',
  router
});
