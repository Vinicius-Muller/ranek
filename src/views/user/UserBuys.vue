<template>
<section>
  <div v-if="buys">
    <h2>Compras</h2>
    <div class="product-wrapper" v-for="(buy, index) in buys" :key="index">
      <ItemProducts v-if="buy.product" :product="buy.product">
        <p class="seller"><span>Vendedor:</span>{{buy.sellerId}}</p>
      </ItemProducts>
    </div>
  </div>
</section>
</template>

<script>

import ItemProducts from "@/components/ItemProducts.vue";
import { api } from "@/services.js";
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
  ...mapState(["user", "login"])
},
methods: {
  getBuys() {
    api.get(`/trasation?BuyerId=${this.user.id}`).then(response => {
      this.buys = response.data
    })
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