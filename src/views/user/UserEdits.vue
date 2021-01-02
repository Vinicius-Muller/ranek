<template>
  <UserForm>
    <button class="btn" @click.prevent="updateUserForm">Atualizar cadastro</button>
  </UserForm>
</template>

<script>

import UserForm from "@/components/UserForm.vue"

export default {
  name: "UserEdits",
  components: {
    UserForm
  },
  methods: {
    updateUserForm() {
        this.$store.dispatch("getUsers");

        this.$router.push("/user/buys"); 

    }
  }
}
</script>

<style>

</style>