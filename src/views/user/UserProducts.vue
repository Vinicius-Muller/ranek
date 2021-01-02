<template>
  <section>
    <h2>Adicionar Produtos</h2>

    <AddProducts />

    <h2>Lista de Produtos</h2>
      <div class="new-box" v-for="(newProduct, index) in newProducts" :key="index">
        <img class="new-img" :src="`${newProduct.img}`" :alt="newProduct.name">
        <h3 class="new-name">{{newProduct.name}}</h3>
        <p class="new-price">Preço {{newProduct.price | numberTranslation}}</p>
        <p class="new-description">{{newProduct.description}}</p> 
        <button class="delete" @click="deleteProducts(index,newProduct.name )">Deletar</button>
      </div>
  </section>
</template>

<script>

import AddProducts from "@/components/AddProducts.vue";
import { mapState, mapActions } from "vuex"

export default {
  name: "UserProducts",
  components: {
    AddProducts
  },

  computed: {
    ...mapState(["login", "user", "products", "newProducts"])
  },

  methods: {
    ...mapActions(["getProducts", "deleteNewProducts"]),
    
    deleteProducts(index,name) {
     const confirm = window.confirm(`deseja deletar o ${name}`)

      if(confirm) {
        this.deleteNewProducts(index)
      }
    }
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
  color: #87f;
}

.new-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  min-height: 70vh;
  position: relative;
}
.new-box .new-name {
  font-size: 1.7rem;
  color: #87f;
  margin: 0;
  padding-bottom: 10px;
  padding-top: 10px;
}

.new-box .new-price {
  font-size: 1.3rem;
  padding-bottom: 10px;
}

.new-box .new-description {
  font-size:1.1rem;
}
.delete {
  position:absolute;
  top:0px;
  right:0px;
  background: url("../../assets/remove.svg")no-repeat center center;
  width:24px;
  height:24px;
  text-indent: -140px;
  overflow:hidden;
  cursor: pointer;
  border:none;
}

</style>