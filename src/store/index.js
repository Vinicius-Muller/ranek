import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      street: "",
      cep: "",
      number:"",
      state: "",
      city: ""
    },
    users: [],

    
    products: [
      {
        id: "notebook",
        name: "Notebook",
        price: 2999,
        img: "notebook.jpg"
      },
      {
        id: "smartphone",
        name: "Smartphone",
        price: 1299,
        img: "smartphone.jpg"
      },
      {
        id: "tablet",
        name: "Tablet",
        price: 899,
        img: "tablet.jpg"
      },
      {
        id: "smartwatch",
        name: "Smartwatch",
        price: 1199,
        img: "smartwatch.jpg"
      },
      {
        id: "speaker",
        name: "Speaker",
        price: 599,
        img: "speaker.jpg"
      }
    ],

    transation: [],
    newProducts:[]

  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload)
      state.users.push(payload)
    },
    UPDATE_PRODUCTS(state, payload) {
      state.products = payload
    },
    ADD_PRODUCTS(state, payload) {
      state.products.unshift(payload)
    },
    PUSH_TRANSATION(state, payload) {
      state.transation.push(payload)
    },
    REGISTER_PRODUCTS(state, payload) {
      state.newProducts.push(payload)
    }
  },
  actions: {
    getUsers(context, payload) {
      this.user = payload
        context.commit("UPDATE_USER", payload)
        context.commit("UPDATE_LOGIN", true)
    },
    createUsers(context, payload) {
    context.commit("UPDATE_USER", {id: payload.email})
    },
    logOutUser(context) {
      context.commit("UPDATE_USER", 
      {
        id: "",
        name: "",
        email: "",
        password: "",
        street: "",
        cep: "",
        number:"",
        state: "",
        city: ""
      }
      )
    context.commit("UPDATE_LOGIN", false)
    },
    getProducts(context) {
       return context.products
    },
    pushTransation(context, payload) {
      context.commit('PUSH_TRANSATION', payload)
    },
    registerProducts(context, payload) {
      context.commit('REGISTER_PRODUCTS', payload)
    }
  },
  modules: {
  }
})
