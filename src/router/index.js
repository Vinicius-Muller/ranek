import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Product from "@/views/Product.vue"
import Loguin from "@/views/Loguin.vue"

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
      props: true
    },
    {
      path: '/loguin',
      name: 'Loguin',
      component: Loguin,
      props: true
    }
  ],

  scrollBehavior() {
    return window.scrollTo({top:0, behavior: "smooth" })
  }

})

export default router
