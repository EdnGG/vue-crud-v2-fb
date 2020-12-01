import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { db, auth } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: "", id: "" },
    usuario: null,
    error: null,
    carga: false,
    texto: "",
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminarTareas(state, payload) {
      // Va a filtrar el id eliminado del array original
      // devolviendo el array original sin el id filtrado
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
    cargarFirebase(state, payload) {
      state.carga = payload;
    },
  },
  actions: {
    buscador({ commit, state }, payload) {
      state.texto = payload.toLowerCase();
      console.log(payload);
    },
    detectarUsuario({ commit }, usuario) {
      commit("setUsuario", usuario);
    },
    cerrarSecion({ commit }) {
      auth.signOut().then(() => {
        router.push("/login");
      });

      // commit('deleteuser', userId)
    },
    ingresoUsuario({ commit }, usuario) {
      auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          const usuarioLogeado = {
            email: res.user.email,
            uid: res.user.uid,
          };
          commit("setUsuario", usuarioLogeado);
          router.push("/");
        })
        .catch((error) => {
          console.log(`Error: ${error.code}`);
          console.log(error.code);
          commit("setError", error.code);
        });
    },
    crearUsuario({ commit }, usuario) {
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid,
          };
          db.collection(res.user.email);
          // .add({
          //   nombre: "tarea de ejemplo",
          // })
          // .then(() => {
          commit("setUsuario", usuarioCreado);
          router.push("/");
          // })
          // .catch((error) => {
          //   console.log(error);
          // });
        })
        .catch((error) => {
          console.log(`Error: ${error.code}`);
          commit("setError", error.code);
        });
    },
    getTareas({ commit, state }) {
      commit("cargarFirebase", true);

      // esta variable es diferente a lo que  esta en state
      // Este seria un  array de objetos
      const tareas = [];
      db.collection(state.usuario.email)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            // console.log(doc.id);
            // console.log(doc.data());
            let tarea = doc.data();
            tarea.id = doc.id;
            tareas.push(tarea);
          });
          setTimeout(() => {
            commit("cargarFirebase", false);
          }, 2000);
        });
      commit("setTareas", tareas);
    },
    getTarea({ commit, state }, idTarea) {
      db.collection(state.usuario.email)
        .doc(idTarea)
        .get()
        .then((doc) => {
          // console.log(doc.id);
          // console.log(doc.data());
          let tarea = doc.data();
          tarea.id = doc.id;
          commit("setTarea", tarea);
        });
    },
    editarTarea({ commit, state }, tarea) {
      db.collection(state.usuario.email)
        .doc(tarea.id)
        .update({
          nombre: tarea.nombre,
        })
        .then(() => {
          console.log("tarea editada");
          router.push("/");
        });
    },
    agregarTarea({ commit, state }, nombreTarea) {
      commit("cargarFirebase", true);
      db.collection(state.usuario.email)
        .add({
          nombre: nombreTarea,
        })
        .then((doc) => {
          console.log(doc.id);
          router.push({ name: "Inicio" });
          commit("cargarFirebase", false);
        });
    },
    eliminarTarea({ commit, state, dispatch }, idTarea) {
      db.collection(state.usuario.email)
        .doc(idTarea)
        .delete()
        .then(() => {
          console.log("Task already deleted");
          // dispatch("getTareas"); Opcion 1
          commit("setEliminarTareas", idTarea);
        });
    },
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false;
      } else {
        return true;
      }
    },
    arrayFiltrado(state) {
      let arrayFiltrado = [];
      for (let tarea of state.tareas) {
        let nombre = tarea.nombre.toLowerCase();
        if (nombre.indexOf(state.texto) >= 0) {
          arrayFiltrado.push(tarea);
        }
      }
      return arrayFiltrado;
    },
  },
  modules: {},
});
