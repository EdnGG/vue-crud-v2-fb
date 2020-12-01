<template>
  <div id="app" class="container mb-2">
    <!-- <b-navbar toogleable="md" type="dark" variant="danger">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Inicio' }" exact>Home</b-nav-item>
          <b-nav-item :to="{ name: 'Acceso' }">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

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


