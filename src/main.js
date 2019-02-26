import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router'
import VueResource from 'vue-resource'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueResource);



Vue.use(VeeValidate);

Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
