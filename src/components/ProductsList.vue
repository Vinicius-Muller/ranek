<template>
  
  <section class="products-container">

    <div v-for="product in products" :key="product.id">

      <img :src="product.images[0].src" :alt="product.images[0].title">

      <h2 class="title">{{product.name}}</h2>

      <p class="price">{{product.price}}</p>

      <p>{{product.description}}</p>

    </div>

  </section>

</template>

<script>
export default {
  name: "ProductsList",

  data() {
    return {
      products: []
    }
  },

  methods: {
    getProducts() {
      fetch("http://localhost:3000/product").then(response => response.json()).then(response =>{
        this.products = response;
      })
    }
  }
}
</script>

<style>

</style>