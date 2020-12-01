<template>
  <div>
    <h1>Add Todo</h1>
    <form @submit.prevent="agregarTarea($v.nombre.$model)">
      <!-- <div class="input-group mb-2 mr-sm-2"> -->
      <!-- <div class="input-group-prepend"> -->
      <!-- <div class="input-group-text">Name</div> -->
      <!-- </div> -->
      <input
        type="text"
        class="form-control mb-2"
        v-model="$v.nombre.$model"
        placeholder="New Task"
      />

      <!-- </div> -->
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="$v.$invalid || carga"
      >
        Add
      </button>
    </form>
    <small class="text-danger d-block" v-if="!$v.nombre.required">
      Field Required
    </small>
    <small class="text-danger d-block" v-if="!$v.nombre.minLength">
      Min 5 Characters!
    </small>
    <hr />
    {{ $v.nombre }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

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
  computed: {
    ...mapState(["carga"]),
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(5),
    },
  },
};
</script>

<style>
</style>