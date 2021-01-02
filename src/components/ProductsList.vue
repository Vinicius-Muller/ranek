<template>
  
  <section class="products-container">

    <transition mode="out-in">

      <div v-if="products && products.length > 0" class="products" key="products">

        <div class="product" v-for="(product, index) in products" :key="index">
        <router-link :to="{ name: 'Product', params: {id: product } }">  
          <img :src="require(`@/assets/${product.img}`)" :alt="product.name"> 
            <h2 class="title">{{product.name}}</h2>
            <p class="price">{{product.price | numberTranslation}}</p>
          </router-link>
        </div>
        <ProductsPageing />

      </div>

      <div v-else-if="products && products.length === []" key="no-results">
        
        <p class="no-results">Busca sem resultado. Procure por outro termo.</p>

      </div>

      <div v-else key="loading">

        <PageLoading />

      </div>

    </transition>

  </section>

</template>

<script>
import ProductsPageing from "@/components/ProductsPageing.vue";
import { mapState } from 'vuex';

export default {
  name: "ProductsList",

  components: {
    ProductsPageing
  },

  data() {
    return {
      productsPerPage:9,
      totalProducts:[]
    }
  },

  computed: {
      ...mapState(['products'])
  }

}
</script>

<style scoped>

.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}


.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}


.price {
  color:#e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
@media screen and (max-width:380px) {
  .products {
    display:flex;
    flex-direction:column;
  }

  .product {
    text-align: center;
  }
}

</style>