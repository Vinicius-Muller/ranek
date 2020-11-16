<template>
  
  <div>

    <ul v-if="totalPages > 1">
      <li v-for="page in totalPages" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
    </ul>

  </div>
  
</template>

<script>
export default {
  name:"ProductsPageing",

  props: {

    totalProducts: {
      type: Number,
      default:1
    },

    productsPerPage: {
      type: Number,
      default:1
    }

  },

  methods: {

    query(page) {
      return {
        ...this.$route.query,
        _page:page 
       }
    }

  },

  computed: {

    totalPages() {
      const total = this.totalProducts / this.productsPerPage;
      return (total !== Infinity) ? Math.ceil(total) : 0;
    }

  }
}
</script>

<style scoped>

ul {
  grid-column: 1/-1;
}

li {
  display:inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background:#87f;
  color: white;
}

</style>