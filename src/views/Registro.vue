<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="crearUsuario({ email: email, password: pass1 })">
      <!-- <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Name</div>
        </div> -->

      <input
        class="form-control mb-2"
        type="email"
        placeholder="email"
        v-model="email"
      />

      <input
        class="form-control mb-2"
        type="password"
        placeholder="password"
        v-model="pass1"
      />

      <input
        class="form-control mb-2"
        type="password"
        placeholder="repeat password"
        v-model="pass2"
      />
      <button :disabled="!desactivar" class="btn btn-primary" type="submit">
        Register
      </button>
      <!-- </div> -->
    </form>
    <!-- <p v-if="">{{ error.code }}</p> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== "" &&
        this.pass1.length > 5
      );
    },
  },
  // created() {},
  methods: {
    ...mapActions(["crearUsuario"]),
  },
};
</script>

<style>
</style>