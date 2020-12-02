<template>
  <UserForm>
    <button class="btn" @click.prevent="updateUserForm">Atualizar cadastro</button>
  </UserForm>
</template>

<script>

import UserForm from "@/components/UserForm.vue"
import { api } from "@/services.js"

export default {
  name: "UserEdits",
  components: {
    UserForm
  },
  methods: {
    updateUserForm() {
      api.put(`/user/${this.$store.state.user.id}`, this.$store.state.user).then(()=> {
        this.$store.dispatch("getUsers");

        this.$router.push("/user");
      }).catch(error => {
        console.log(error)
      }) 

    }
  }
}
</script>

<style>

</style>