<template>

  <form>
    
    <input name="search" id="search" type="text" v-model="search" />

    <input type="submit" id="magnifying-glass" value="Search"  @click.prevent="searchProducts"/>

  </form>

</template>

<script>
export default {
  name: "Searcher",
  data() {
    return {
      search: ""
    }
  },

  methods: {
    searchProducts() {
      this.$router.push({query: { q: this.search } })
    }
  }
}
</script>

<style>

</style>