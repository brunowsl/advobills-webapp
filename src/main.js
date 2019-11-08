import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Main from '@/components/Main'

Vue.config.productionTip = false

const routes = [
  {path : '/main', component: Main},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
