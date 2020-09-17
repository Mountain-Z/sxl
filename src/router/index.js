import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/Home/Home')
const discover = () => import('../views/discover/discover')
const domins = () => import('../views/domins/domins')
const downloadApp = () => import('../views/downloadApp/downloadApp')
const help = () => import('../views/help/help')
const joinus = () => import('../views/joinus/joinus')
const logoDisign = () => import('../views/logoDisign/logoDisign')
const miniprogram = () => import('../views/miniprogram/miniprogram')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }, {
    path: '/discover',
    name: 'discover',
    component: discover
  }, {
    path: '/domins',
    name: 'domins',
    component: domins
  }, {
    path: '/downloadApp',
    name: 'downloadApp',
    component: downloadApp
  }, {
    path: '/help',
    name: 'help',
    component: help
  }, {
    path: '/joinus',
    name: 'joinus',
    component: joinus
  }, {
    path: '/logoDisign',
    name: 'logoDisign',
    component: logoDisign
  }, {
    path: '/miniprogram',
    name: 'miniprogram',
    component: miniprogram
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router