<template>
  <div>
    <h1>Add Todo</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <!-- <div class="input-group mb-2 mr-sm-2"> -->
      <!-- <div class="input-group-prepend"> -->
      <!-- <div class="input-group-text">Name</div> -->
      <!-- </div> -->
      <input
        type="text"
        class="form-control mb-2"
        v-model="nombre"
        placeholder="New Task"
      />
      <!-- </div> -->
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["agregarTarea"]),
  },
};
</script>

<style>
</style>