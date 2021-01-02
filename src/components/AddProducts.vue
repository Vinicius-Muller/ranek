<template>
  <form class="add-products">

    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="name">

    <label for="price">Preço (R$)</label>
    <input id="price" name="price" type="number" v-model="price">

    <label for="images">URL da foto do produto</label>
    <input type="text" id="images" name="images" v-model="img">

    <label for="description">Descrição</label>
    <textarea id="description" name="description" v-model="description"></textarea>

    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="handleNewProduct({name,price,img,description})">

  </form>
</template>

<script>

export default {
  name: "AddProducts",
  data() {
    return {
        name: "",
        img:"",
        price: "",
        description: "",
        soldOut: "false"
    }
  },
  methods: {

    handleNewProduct(name,price,img,description) {
      this.$store.dispatch("registerProducts", name,price,img,description)
    },

    formatProducts() {
      this.product.user_id = this.$store.state.user_id
    },
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