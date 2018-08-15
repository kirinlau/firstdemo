import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import test from '../components/test'
import form from '../components/form'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
  ]

export default routes
