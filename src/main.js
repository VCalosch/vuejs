import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);


Vue.use(VeeValidate);

Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
