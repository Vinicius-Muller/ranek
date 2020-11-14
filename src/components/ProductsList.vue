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

import { serialize } from "@/helpers.js";

export default {
  name: "ProductsList",

  data() {
    return {
      products: [],
      productsPerPage:9
    }
  },

  computed: {
    url(){

      const query = serialize(this.$route.query);

      return `/product?_limit=${this.productsPerPage}${query}`;
    }
  },

  methods: {
    getProducts() {

      api.get(this.url).then(response => {
        this.products = response.data
      })

    }
  },

  watch: {
    url() {
      this.getProducts();
    }
  },

  created(){
    this.getProducts();
  }
}
</script>

<style>

</style>