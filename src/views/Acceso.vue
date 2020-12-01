<template>
  <div class="container">
    <h1>Login Users</h1>
    <form
      @submit.prevent="
        ingresoUsuario({
          email: $v.email.$model,
          password: $v.pass.$model,
        })
      "
    >
      <input
        type="email"
        placeholder="email"
        v-model="$v.email.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block" v-if="!$v.email.email"
        >Invalid email</small
      >
      <small class="text-danger d-block" v-if="!$v.email.required"
        >Required</small
      >
      <input
        type="password"
        placeholder="passsword"
        v-model="$v.pass.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block" v-if="!$v.pass.minLength"
        >Password must be more of 6 character length</small
      >
      <small class="text-danger d-block" v-if="!$v.pass.required"
        >Required</small
      >
      <button type="submit" class="btn btn-success" :disabled="$v.$invalid">
        <!-- :disabled="$v.email.$invalid || $v.pass.$invalid" -->
        Log in
      </button>
    </form>

    <!-- <small class="text-danger d-block" v-if="!$v.tarea.nombre.required"
      >Required</small> -->
    <small class="d-block text-danger" v-if="error"
      >email or password incorrect</small
    >
    <!-- <small class="d-block text-danger" v-if="error === 'auth/user-not-found'"
      >Incorrect User</small
    >
    <small class="d-block text-danger" v-if="error === 'auth/wrong-password'"
      >Incorrect Password</small
    > -->
    <!-- {{ $v.email }} -->
    <hr />
    <!-- {{ $v.pass }} -->
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
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
  validations: {
    email: { required, email },
    pass: { required, minLength: minLength(6) },
  },
};
</script>

<style>
</style>