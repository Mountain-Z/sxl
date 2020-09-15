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
    name: 'Home',
    component: Home
  }, {
    path: '/',
    name: 'discover',
    component: discover
  }, {
    path: '/',
    name: 'domins',
    component: domins
  }, {
    path: '/',
    name: 'downloadApp',
    component: downloadApp
  }, {
    path: '/',
    name: 'help',
    component: help
  }, {
    path: '/',
    name: 'joinus',
    component: joinus
  }, {
    path: '/',
    name: 'logoDisign',
    component: logoDisign
  }, {
    path: '/',
    name: 'miniprogram',
    component: miniprogram
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router