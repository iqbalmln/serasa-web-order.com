import Vue from 'vue'
import App from './App.vue'

// Import CSS Global
import './index.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
