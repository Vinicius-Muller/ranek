<template>
  <div class="wrapper" v-if="product">
    <router-link :to="{name: 'Product', params: {id: product.id}}">Ver Produto</router-link>

    <p>{{product.price}}</p>

    <div class="info">
      <p class="price">{{product.price | numberTranslation}}</p>

      <h2 class="title">{{product.title}}</h2>

      <slot></slot>
    </div>
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
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;
}

a {
  border-radius: 4px;
  overflow:hidden;
  height: 100px;
}

</style>