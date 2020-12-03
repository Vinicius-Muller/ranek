<template>
<section>
  <div v-if="sells">
    <h2>Vendas</h2>
    <div class="product-wrapper" v-for="(sell, index) in sells" :key="index">
      <ItemProducts v-if="sell.product" :product="sell.product">
        <p class="seller"><span>Comprador:</span>{{sell.buyerId}}</p>
      </ItemProducts>
      <div class="deliver">
        <h3>Entrega:</h3>
        <ul v-if="sell.addres">
          <li v-for="(value, key) in sell.addres" :key="key">
            {{key}}: {{value}}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import ItemProducts from "@/components/ItemProducts.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
name: "UserSells",
components: {
  ItemProducts
},
data() {
  return {
    sells:[]
  }
},
computed: {
  ...mapState(["user", "login"])
},
methods: {
  getSells() {
    api.get(`/trasation?SellerId=${this.user.id}`).then(response=> {
      this.sells = response.data
    })
  }
},
watch: {
  login() {
    this.getSells()
  }
},
created() {
  if(this.login) {
  this.getSells()
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

.deliver {
  display:grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

h2 {
  margin-bottom:20px;
}

h3 {
  margin: 0px;
  align-self: end;
}

</style>