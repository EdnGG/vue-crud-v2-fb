<template>
  <div>
    <b-navbar toogleable="md" type="dark" variant="danger">
      <!-- <b-container> -->
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Inicio' }" exact>Home</b-nav-item>
          <b-nav-item :to="{ name: 'Acceso' }">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- </b-container> -->
    </b-navbar>
  </div>
</template>
s
<script>
export default {};
</script>

<style>
</style>