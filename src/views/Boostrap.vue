<template>
  <b-navbar toogleable="" type="dark" variant="danger">
    <b-container>
      <b-navbar-toogle target="nav_collapse"></b-navbar-toogle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>