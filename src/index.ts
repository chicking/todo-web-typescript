import 'babel-polyfill'
import App from './App.vue'

import '@/bootstrap'

import 'bulma'

import store from './store'

const app = new App({
  store
})
app.$mount('#app')
