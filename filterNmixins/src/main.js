import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

// global mixin
// new Vue() -> App.vue -> List.vue
Vue.mixin({
  created() {
    console.log('global mixins!!');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
