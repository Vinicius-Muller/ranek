<template>
  <section>
    <h2>Adicionar Produtos</h2>

    <AddProducts />

    <h2>Lista de Produtos</h2>
    
    <transition-group v-if="products" name="list" tag="ul">
      <li v-for="(product, index) in products" :key="index">

        <ItemProducts :product="product">
          <p>{{product.description}}</p>
        </ItemProducts>

      </li>
    </transition-group>

  </section>
</template>

<script>

import AddProducts from "@/components/AddProducts.vue"
import ItemProducts from "@/components/ItemProducts.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "UserProducts",
  components: {
    AddProducts,
    ItemProducts
  },

  computed: {
    ...mapState(["login", "user", "products"])
  },

  methods: {
    ...mapActions(["getProducts"])
  },

  watch: {
    login() {
      this.getProducts()
    }
  },

  created() {
    if(this.login) {
    this.getProducts()
    }
  }
}
</script>

<style scoped>

h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

</style>