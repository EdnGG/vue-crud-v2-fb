<template>
  <div>
    <h1>Editar</h1>
    <div>{{ tarea.id }} - {{ tarea.nombre }}</div>
    <form @submit.prevent="editarTarea(tarea)">
      <input type="text" v-model="tarea.nombre" />
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id);
  },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
};
</script>

<style>
</style>