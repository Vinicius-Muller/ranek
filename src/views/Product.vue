<template>
  
  <section>

    <div v-if="product" class="product">

      <ul v-if="product.img" class="images">

          <img :src="require(`@/assets/${product.img}`)" :alt="product.name">

      </ul>

      <div class="info">
        <h1>{{product.name}}</h1>

        <p class="price">{{product.price | numberTranslation}}</p>

        <transition mode="out-in" v-if="product">
          <button v-if="!finishing" class="btn" @click="finishing = true">Comprar</button>
          <FinishingSell v-else :product="product"/>
        </transition>

        <button v-else class="btn" disabled>Sem estoque</button>
      </div>

    </div>

    <div v-else>

      <PageLoading />

    </div>
  </section>

</template>

<script>
import FinishingSell from "@/components/FinishingSell.vue";

export default {
  name: "Product",
  props: ["id"],
  components: {
    FinishingSell
  },

  data() {
    return {
      product: [],
      finishing: false
    }
  },
  methods: {
    getProducts() {
      this.product = this.$route.params.id
    }
  },
  created() {
    this.getProducts()
  }
}

</script>

<style scoped>

.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}


@media screen and (max-width:380px) {
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

</style>