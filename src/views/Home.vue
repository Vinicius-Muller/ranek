<template>

  <div class="home">
    <h1> 🎁 Compre ou Venda 🚚 </h1>

    <Searcher />

    <ProductsList />
  </div>

</template>

<script>

import ProductsList from "@/components/ProductsList.vue";

import Searcher from '../components/Searcher.vue';


export default {
  name: 'Home',
  components:{
    Searcher,
    ProductsList
  }
}
</script>

<style scoped>

h1 {
  color: #87f;
  font-size: 2rem;
  margin-top:40px;
  text-align: center;
}

</style>
