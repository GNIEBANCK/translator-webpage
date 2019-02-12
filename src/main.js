import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.headers.common['Content-Type'] = 'application/json';

Vue.http.options.emulateJSON = true;
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
