import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import X6 from '@/views/X6.vue';
import '@/styles/main.scss';
// import App from './App.vue';
// import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  // router,
  render: (h) => h(X6),
}).$mount('#app');
