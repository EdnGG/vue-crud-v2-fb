<template>
  <div>
    <h1>Inicio</h1>
    <router-link to="/add">
      <button>Add</button>
    </router-link>
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea.nombre }} - {{ tarea.id }}
        <router-link :to="{ name: 'Editar', params: { id: tarea.id } }">
          <!-- <router-link :to="`/edit/${tarea.id}`"> Opcion 2 -->
          <button>Editar</button>
        </router-link>
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
    ...mapActions(["getTareas"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>

<style>
</style>