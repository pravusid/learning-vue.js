import Vue from 'vue'
import App from './App.vue'

// custom directive를 만든다 (v-highlight)
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

/*
Hooks
bind (el, binding, vnode) : Once Directive is Attached
inserted (el, binding, vnode) : inserted in Parent node
update (el, binding, vnode, oldVnode) : Once Component is updated (without Children)
componentUpdated (el, binding, vnode, oldVnode) : Once component is updated (with Chindren)
unbind (el, binding, vnode) : Once directive is removed
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
