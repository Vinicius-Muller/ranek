import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Product from "@/views/Product.vue"
import Login from "@/views/Login.vue"
import User from "@/views/user/User.vue"
import UserEdits from "@/views/user/UserEdits.vue"
import UserBuys from "@/views/user/UserBuys.vue"

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'edits',
          name: 'UserEdits',
          component: UserEdits
        },
        {
          path: 'buys',
          name: 'UserBuys',
          component: UserBuys
        }
      ]
    }
  ],

  scrollBehavior() {
    return window.scrollTo({top:0, behavior: "smooth" })
  }

})

export default router
