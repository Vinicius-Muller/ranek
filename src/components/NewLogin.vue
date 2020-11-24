<template>

  <section>

    <h2>Crie Sua Conta</h2>

    <transition>

    <button v-if="!create" @click="create = true" class="btn">Criar Conta</button>

    <UserForm v-else>

      <button class="btn btn-form" @click.prevent="createUsers">Criar Usuario</button>

    </UserForm>

    </transition>
  </section>

</template>

<script>

import UserForm from "@/components/UserForm.vue";

export default {
  name: "NewLogin",
  components: {
    UserForm
  },

  data() {
    return {
      create: false
    }
  },

  methods: {
    async createUsers() {
      try {
     await this.$store.dispatch("createUsers", this.$store.state.user)
     await this.$store.dispatch("getUsers", this.$store.state.user.email)
     this.$router.push({name: "user"})
      }
      catch(error) {
        console.log(error)
      }
    }
  }

}
</script>

<style scoped>

h2 {
  text-align:center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form {
  max-width: 100%;
}

</style>