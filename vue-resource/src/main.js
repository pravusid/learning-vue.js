import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://test-project-cf3bd.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {message: response.body}; };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
