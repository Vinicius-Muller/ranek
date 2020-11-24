<template>

  <section class="users">
    <nav class="sidebar">
      <ul>
        <li><router-link :to="{name: 'UserProducts'}">Produtos</router-link></li>
        <li><router-link :to="{name: 'UserBuys'}">Compras</router-link></li>
        <li><router-link :to="{name: 'UerSells'}">Vendas</router-link></li>
        <li><router-link :to="{name: 'UserEdits'}">Editar Usuario</router-link></li>
        <li><button @click.prevent="logOut">deslogar</button></li>
      </ul>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>

</template>

<script>
export default {
  name: "User",
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser")
      this.$router.push("/login")
    }
  }
}
</script>

<style>

</style>