import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { auth } from "./firebase";

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
