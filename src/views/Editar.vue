<template>
  <div>
    <h1>Edit To Do</h1>
    <!-- <div>{{ tarea.id }} - {{ tarea.nombre }}</div> -->
    <form @submit.prevent="editarTarea(tarea)">
      <input
        class="form-control mb-2"
        type="text"
        v-model="$v.tarea.nombre.$model"
      />
      <button
        class="btn btn-warning"
        type="submit"
        :disabled="$v.tarea.$invalid"
      >
        Edit
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.tarea.nombre.required"
      >Required</small
    >
    <hr />
    {{ $v.tarea.nombre }}
    <hr />
    {{ $v }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
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
  validations: {
    tarea: {
      nombre: {
        required,
      },
      // minLengt÷h: minLength(5),
    },
  },
};
</script>

<style>
</style>