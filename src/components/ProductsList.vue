<template>
  
  <section class="products-container">


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