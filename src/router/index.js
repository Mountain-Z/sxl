import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/Home/Home')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router