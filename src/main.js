import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'semantic-ui-css/semantic.css';
import router from './Router'
import VueSimpleAlert from "vue-simple-alert";

new Vue({
  render: h => h(App),
  router,
  VueSimpleAlert,
}).$mount('#app')
