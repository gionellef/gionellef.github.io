import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('bootstrap')
require('jquery.easing')

require('bootstrap/dist/css/bootstrap.css')
require('devicon-2.2/devicon.css')
require('font-awesome/css/font-awesome.css')
require('./assets/custom.css')
Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
