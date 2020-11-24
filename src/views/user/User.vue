<template>

  <section class="users">
    <nav class="sidenav">
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

<style  scoped>
.users {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .users {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display:block;
  background:#f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active, .sidenav a:hover, .sidenav button:hover {
  background: #87f;
  color: white;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
}
</style>