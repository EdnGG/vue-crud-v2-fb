<template>
  <div id="app" class="container mt-2">
    <div class="text-center">
      <router-link to="/" v-if="existeUsuario" class="btn btn-dark mr-2">
        Start
      </router-link>
      <router-link
        to="/registro"
        v-if="!existeUsuario"
        class="btn btn-dark mr-2"
      >
        Register
      </router-link>
      <router-link v-if="!existeUsuario" to="/login" class="btn btn-dark mr-2">
        Login
      </router-link>
      <button
        @click="cerrarSecion"
        v-if="existeUsuario"
        class="btn btn-danger mr-2"
      >
        Sign Out
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["cerrarSecion"]),
  },
  computed: {
    ...mapGetters(["existeUsuario"]),
  },
};
</script>


