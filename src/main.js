import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Indexpage from '@/components/Indexpage'
import Login from '@/components/Login'
import Notfound from '@/components/Notfound'


Vue.config.productionTip = false

const routes = [{
    path: '/mainindex',
    component: Indexpage
  },
  {
    path: '/',
    component: Login
  },

  {
    path: '*',
    component: Notfound
  },
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