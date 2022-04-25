import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./modules/types/rootState";
import { allMovies } from "./modules/allMovies/index";
import { searchMovie } from "./modules/searchMovie/index";
import { sessionAtCinema } from "./modules/sessionAtCinema/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    allMovies,
    searchMovie,
    sessionAtCinema,
  },
};

export default new Vuex.Store<RootState>(store);
