<template>

  <section class="loguin">

    <h1>Loguin</h1>

    <form>

      <label for="email">Email</label>

      <input type="email" name="email" id="email" v-model="loguin.email">

      <label for="password">Email</label>

      <input type="password" name="password" id="password" v-model="loguin.password">

      <button class="btn" @click.prevent="log">Logar</button>

    </form>

    <p class="password-loss">
      
      <a href="/" target="_blank">Perdeu a senha? Click aqui.</a>

    </p>

    <NewLoguin />

  </section>
  
</template>

<script>

import NewLoguin from "@/components/NewLoguin.vue";

export default {
  name: "Loguin",
  components: {

    NewLoguin

  },
  
  data() {
    return {

      loguin: {

        email: "",
        senha: ""

      }

    }
  },

  methods: {

    log() {

    }

  }

}
</script>

<style scoped>

.loguin {
  max-width: 500px;
  margin:0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.password-loss {
  text-align: center;
  margin: 20px auto 0 auto;
}

.password-loss a:hover {
  color: #87f;
  text-decoration: underline;
}

</style>