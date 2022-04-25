import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AllMovies from "@/views/allMovies.vue";
import SearchMovie from "@/views/searchMovie.vue";
import SessionsAtCinema from "@/views/sessionsAtCinema.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: AllMovies,
  },
  {
    path: "/search-movie",
    name: "searchMovie",
    component: SearchMovie,
  },
  {
    path: "/sessions-at-the-cinema",
    name: "sessionsAtCinema",
    component: SessionsAtCinema,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
