<template>
  <div class="wrapper" v-if="product">
    <router-link :to="{name: 'Product', params: {id: product.id}}">
      Ver Produto
      <div class="info">
      <p class="price">{{product.price | numberTranslation}}</p>

      <h2 class="title">{{product.name}}</h2>
    </div>
      </router-link>
    <img :src="require(`@/assets/${product.img}`)" :alt="product.name">
  </div>
</template>

<script>
export default {
  name: "ItemProducts",
  props: ["product"]
}
</script>

<style scoped>

.wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.info {
  align-self: end;
}

.info .price {
  font-size: 1.2rem;
}

.info .title {
  color: #e80;
}

a {
  border-radius: 4px;
  overflow:hidden;
  height: 40vh;
  width: 40vw;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
}

.wrapper img {
  width: 30vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>