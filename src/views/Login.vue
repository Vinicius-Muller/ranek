<template>

  <section class="login">

    <NewLogin />

  </section>
  
</template>

<script>

import NewLogin from "@/components/NewLogin.vue";

export default {
  name: "Login",
  components: {

    NewLogin

  },
  
  data() {
    return {

      login: {

        email: "",
        senha: ""

      }

    }
  },

  methods: {

    log() {
      this.$store.dispatch("getUsers", this.login.email)
      this.$router.push("/user/");
    }

  }

}
</script>

<style scoped>

.login {
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