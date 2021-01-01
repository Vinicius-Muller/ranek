<template>
  <form class="add-products">

    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="product.name">

    <label for="price">Preço (R$)</label>
    <input id="price" name="price" type="number" v-model="product.price">

    <label for="images">Fotos</label>
    <input id="images" name="images" type="file" ref="images">

    <label for="description">Descrição</label>
    <textarea id="description" name="description" v-model="product.description"></textarea>

    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="registerProducts()">

  </form>
</template>

<script>

import {api} from "@/services.js"

export default {
  name: "AddProducts",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        images: [],
        soldOut: "false"
      }
    }
  },
  methods: {

    handleNewProduct() {
      this.$store.dispatch("registerProducts", this.product)
    },

    formatProducts() {
      this.product.user_id = this.$store.state.user_id
    },

    addProduct() {
      this.formatProducts();
    api.post("/product", this.product).then(()=>{
      this.$store.dispatch("getProducts")
    })
    }
  }
}
</script>

<style scoped>

.add-products {
  display:grid;
  grid-template-columns: 100px, 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}

</style>