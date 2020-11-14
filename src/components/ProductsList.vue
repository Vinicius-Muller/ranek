<template>
  
  <section class="products-container">

    <div v-for="product in products" :key="product.id">

      

      <h2 class="title">{{product.name}}</h2>

      <p class="price">{{product.price}}</p>

      <p>{{product.description}}</p>

    </div>

  </section>

</template>

<script>

import { api } from "@/services.js";

export default {
  name: "ProductsList",

  data() {
    return {
      products: []
    }
  },

  methods: {
    getProducts() {
      api.get("/product").then(response => {
        this.products = response.data
      })
    }
  },
  created(){
    this.getProducts();
  }
}
</script>

<style>

</style>