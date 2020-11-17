<template>
  
  <section class="products-container">

    <transition mode="out-in">

      <div v-if="products && products.length > 0" class="products" key="products">

        <div class="product" v-for="(product, index) in products" :key="index">

        <router-link :to="{ name: 'Product', params: {id: product.id } }">   

            <h2 class="title">{{product.name}}</h2>

            <p class="price">{{product.price | numberTranslation}}</p>

            <p>{{product.description}}</p>

          </router-link>

        </div>

        <ProductsPageing :totalProducts="totalProducts" :productsPerPage="productsPerPage" />

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

import { api } from "@/services.js";

import { serialize } from "@/helpers.js";

import ProductsPageing from "@/components/ProductsPageing.vue";

export default {
  name: "ProductsList",

  components: {
    ProductsPageing
  },

  data() {
    return {
      products: [],
      productsPerPage:9,
      totalProducts:[]
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
      this.products = [];
      api.get(this.url).then(response => {
        this.totalProducts = Number(response.headers["x-total-count"]);
        this.products = response.data;
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

</style>