<template>
  <div>
    <h1>To Do List</h1>
    <!-- <p>{{ usuario.email }}</p> -->
    <router-link to="/add">
      <button class="btn btn-primary btn-block mb-2">Add</button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(tarea, index) in tareas" :key="index">
        {{ tarea.nombre }} - {{ tarea.id }}
        <!-- <div class="float-right"> -->
        <router-link
          :to="{ name: 'Editar', params: { id: tarea.id } }"
          class="float-right"
        >
          <!-- <router-link :to="`/edit/${tarea.id}`"> Opcion 2 -->
          <button class="btn btn-warning ml-2">Edit</button>
        </router-link>
        <!-- <router-link to="/"> -->
        <button
          class="btn btn-danger float-right"
          @click="eliminarTarea(tarea.id)"
        >
          Delete
        </button>
        <!-- </router-link> -->
        <!-- </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  computed: {
    ...mapState(["tareas", "usuario"]),
  },
};
</script>

<style>
</style>