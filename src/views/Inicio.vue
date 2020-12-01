<template>
  <div>
    <h1>To Do List</h1>
    <form @submit.prevent="buscador(texto)">
      <input
        v-on:keyup="buscador(texto)"
        type="text"
        placeholder="Search..."
        class="form-control my-2"
        v-model="texto"
      />
    </form>
    <!-- {{ carga }} -->
    <!-- <p>{{ usuario.email }}</p> -->
    <router-link to="/add">
      <button class="btn btn-primary btn-block mb-2">Add</button>
    </router-link>
    <div v-if="carga" class="text-center mt-5">
      <!-- <h3>Cargando contenido...</h3> -->
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <!-- <form>
      <input type="text" placeholder="Search..." />
    </form> -->

    <ul class="list-group mt-5" v-if="!carga">
      <li
        class="list-group-item"
        v-for="tarea of arrayFiltrado"
        :key="tarea.id"
      >
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
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Inicio",
  components: {
    PulseLoader,
  },
  data() {
    return {
      texto: "",
    };
  },
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea", "buscador"]),
  },
  computed: {
    // getters van en propiedades computadas
    ...mapState(["tareas", "usuario", "carga"]),
    ...mapGetters(["arrayFiltrado"]),
  },
};

/* 
vue-spinner
https://github.com/greyby/vue-spinner
vuelidate

*/
</script>


<style>
</style>