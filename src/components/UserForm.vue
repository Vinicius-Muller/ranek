<template>
  
  <form>
    <div class="user" v-if="showLoginData">
      <label for="name">Nome</label>
      <input id="name" name="name" type="text" v-model="name" autocomplete="user-name">

      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email" autocomplete="user-name">

      <label for="password">Senha</label>
      <input id="password" name="password" type="password" v-model="password" autocomplete="current-password">
    </div>
    
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="cep" @keydown="fillCep">

    <label for="number">Numero</label>
    <input id="number" name="number" type="number" v-model="number">

    <label for="street">Rua</label>
    <input id="street" name="street" type="text" v-model="street">

    <label for="state">Estado</label>
    <input id="state" name="state" type="text" v-model="state">

    <label for="city">Cidade</label>
    <input id="city" name="city" type="text" v-model="city">

    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </form>

</template>

<script>

import { mapFields } from "@/helpers.js";
import  { getCep } from "@/services.js"

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "cep", "number", "street", "state", "city"],
      base: "user",
      mutation: "UPDATE_USER"
    }),
    showLoginData() {
     return (!this.$store.state.login) || (this.$route.name === "UserEdits")
    }
  },
  methods: {
    fillCep() {
      const cep = this.cep.replace(/\D/g, "");
      if(cep.length === 8) {
        getCep(cep).then(response => {
          this.street = response.data.logradouro;
          this.state = response.data.uf;
          this.city = response.data.localidade;
        })
      }
    }
  }
}
</script>

<style scoped>

form,
.user  {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.user {
  grid-column: 1 / 3;
}

.slot-wrapper {
  grid-column: 2;
  margin-top: 10px;
}

</style>