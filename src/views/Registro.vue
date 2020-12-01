<template>
  <div class="container">
    <h1>Register</h1>
    <form
      @submit.prevent="
        crearUsuario({
          email: $v.email.$model,
          password: $v.pass1.$model,
        })
      "
    >
      <input
        class="form-control my-2"
        type="email"
        placeholder="email"
        v-model="$v.email.$model"
      />
      <small class="text-danger d-block" v-if="!$v.email.email"
        >Invalid email</small
      >
      <small class="text-danger d-block" v-if="!$v.email.required"
        >Required</small
      >

      <input
        class="form-control my-2"
        type="password"
        placeholder="password"
        v-model="$v.pass1.$model"
      />
      <small class="text-danger d-block" v-if="!$v.pass1.minLength"
        >Password must be more of 6 character length</small
      >
      <small class="text-danger d-block" v-if="!$v.pass1.required"
        >Required</small
      >

      <input
        class="form-control my-2"
        type="password"
        placeholder="repeat password"
        v-model="pass2"
      />
      <small class="text-danger d-block" v-if="!$v.pass2.sameAs"
        >Password does not match</small
      >
      <button :disabled="!desactivar" class="btn btn-primary" type="submit">
        Register
      </button>
    </form>
    <small
      class="text-danger d-block"
      v-if="error === 'auth/email-already-in-use'"
      >User already registered</small
    >
    <!-- <p v-if="">{{ error.code }}</p> -->
    <!-- {{ $v.pass1.$model }} -->
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
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
  validations: {
    email: { email, required },
    pass1: { required, minLength: minLength(6) },
    pass2: { sameAs: sameAs("pass1") },
  },
};
</script>

<style>
</style>