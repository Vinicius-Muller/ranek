<template>
<section>
  <div v-if="buys">
    <h2>Compras</h2>
    <div class="product-wrapper" v-for="(buy, index) in buys" :key="index">
      <ItemProducts v-if="buy.product" :product="buy.product"/>
    </div>
  </div>
  <h2 v-else>Você ainda não comprou nada.</h2>
</section>
</template>

<script>

import ItemProducts from "@/components/ItemProducts.vue";
import { mapState } from "vuex";

export default {
name: "UserBuys",
components: {
  ItemProducts
},
data() {
  return {
    buys:[]
  }
},
computed: {
  ...mapState(["user", "login", "transation"])
},
methods: {
  getBuys() {
    this.buys = this.transation
  }
},
watch: {
  login() {
    this.getBuys()
  }
},
created() {
  if(this.login) {
  this.getBuys()
  }
}
}
</script>

<style scoped>

.product-wrapper {
  margin-bottom:40px;
}

.seller span {
  color: #e80;
}

h2 {
  margin-bottom:20px;
}

</style>