import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vue-test-idpravus.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'token';
// axios.defaults.headers.get['Accepts'] = 'application/json';
// axios.interceptors.request.use(config => {
//   console.log('req interceptors', config);
//   return config;
// });
// axios.interceptors.response.use(res => {
//   console.log('res interceptors', res);
//   return res;
// });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
