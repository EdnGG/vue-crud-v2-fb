<template>
  <div class="container">
    <h1>Login Users</h1>
    <form @submit.prevent="ingresoUsuario({ email: email, password: pass })">
      <input
        type="email"
        placeholder="email"
        v-model="email"
        class="form-control mb-2"
      />
      <input
        type="password"
        placeholder="passsword"
        v-model="pass"
        class="form-control mb-2"
      />
      <button type="submit" class="btn btn-success">Log in</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Acceso",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style>
</style>