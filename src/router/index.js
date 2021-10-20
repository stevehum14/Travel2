import Vue from 'vue'
import Router from 'vue-router'
import fastClick from 'fastclick'
import Home from '@/pages/home/Home'

Vue.use(Router)
fastClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
