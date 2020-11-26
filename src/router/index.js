import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inicio.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/edit/:id",
    name: "Editar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Editar.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/add/",
    name: "Agregar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Agregar.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/login",
    name: "Acceso",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Acceso.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;
    if (!usuario) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
