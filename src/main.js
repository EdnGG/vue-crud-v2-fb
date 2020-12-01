import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.config.productionTip = false;

auth.onAuthStateChanged((user) => {
  if (user) {
    const userDetected = {
      email: user.email,
      uid: user.uid,
    };
    store.dispatch("detectarUsuario", userDetected);
    console.log(userDetected);
  } else {
    store.dispatch("detectarUsuario", user);
    console.log(user);
  }
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
