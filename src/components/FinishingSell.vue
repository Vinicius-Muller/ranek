<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="handleFinishing">Finalizar Compra</button>
    </UserForm>

  </section>
</template>

<script>

import UserForm from "@/components/UserForm.vue";
import { mapState } from "vuex";


export default {
  name: "FinishingSell",
  props: ["product"],
  components: {
    UserForm
  },
  computed: {
    ...mapState(["user", "transation"]),
    buy() {
      return {
        buyerId: this.user.email,
        sellerId: this.product.user_id,
        product: this.product,
        addres: {
          street: this.user.street,
          cep: this.user.cep,
          number: this.user.number,
          state: this.user.state,
          city: this.user.city
        }
      }
    }
  },
  methods: {
    handleSell() {
      this.$store.dispatch("pushTransation", this.buy)
      this.$router.push({name: "UserBuys"})
     },
    
    async createNewUser() {
       try {
     await this.$store.dispatch("createUsers", this.$store.state.user)
     await this.$store.dispatch("getUsers", this.$store.state.user.email)
      await this.handleSell()
      }
      catch(error) {
        console.log(error)
      }
    },
    handleFinishing() {
        if(this.$store.state.login) {
        this.handleSell()
        } else {
          this.createNewUser()
        }
  }
  }
}
</script>

<style scoped>

h2 {
  margin-top: 40px;
  margin-bottom:20px;
}

.btn {
  background: #e80;
}

</style>