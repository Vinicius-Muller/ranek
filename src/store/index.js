import Vue from "vue"
import Vuex from "vuex"
import { api } from "@/services.js"

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
        nome: "Notebook",
        preco: 2999,
        img: "notebook.jpg"
      },
      {
        id: "smartphone",
        nome: "Smartphone",
        preco: 1299,
        img: "smartphone.jpg"
      },
      {
        id: "tablet",
        nome: "Tablet",
        preco: 899,
        img: "tablet.jpg"
      },
      {
        id: "smartwatch",
        nome: "Smartwatch",
        preco: 1199,
        img: "smartwatch.jpg"
      },
      {
        id: "speaker",
        nome: "Speaker",
        preco: 599,
        img: "speaker.jpg"
      }
    ],

    transation: [
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Smartphone",
          name: "Smartphone",
          user_id: "viniciusmul98@gmail.com",
          price: "1999",
          sell: "false",
          description: "Esse é um novo smartphone",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 1
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Tablet",
          name: "Tablet",
          user_id: "viniciusmul98@gmail.com",
          price: "2999",
          sell: "false",
          description: "Esse é um novo tablet",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 2
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Tablet",
          name: "Tablet",
          user_id: "viniciusmul98@gmail.com",
          price: "2999",
          sell: "false",
          description: "Esse é um novo tablet",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 3
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Notebook",
          name: "Notebook",
          user_id: "viniciusmul98@gmail.com",
          price: "4999",
          sell: "false",
          description: "Esse é um novo notebook",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 4
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Smartphone",
          name: "Smartphone",
          user_id: "viniciusmul98@gmail.com",
          price: "1999",
          sell: "false",
          description: "Esse é um novo smartphone",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 5
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Tablet",
          name: "Tablet",
          user_id: "viniciusmul98@gmail.com",
          price: "2999",
          sell: "false",
          description: "Esse é um novo tablet",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 6
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Smartphone",
          name: "Smartphone",
          user_id: "viniciusmul98@gmail.com",
          price: "1999",
          sell: "false",
          description: "Esse é um novo smartphone",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 7
      },
      {
        buyerId: "viniciusmul98@gmail.com",
        sellerId: "viniciusmul98@gmail.com",
        product: {
          id: "Tablet",
          name: "Tablet",
          user_id: "viniciusmul98@gmail.com",
          price: "2999",
          sell: "false",
          description: "Esse é um novo tablet",
          images: []
        },
        addres: {
          street: "Street Unknown place",
          cep: "12345678",
          number: "26",
          state: "RS",
          city: "Campo Bom"
        },
        id: 8
      }
    ]

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
      api.get(`/product?user_id=${context.state.user.id}`).then(response => {
        context.commit("UPDATE_PRODUCTS", response.data)
      })
    }
  },
  modules: {
  }
})
